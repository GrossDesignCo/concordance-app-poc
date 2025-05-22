import { TranslationWord } from '@/types';
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

interface FilteredStructure {
  books: string[];
  chapters: {
    [book: string]: number[];
  };
  verses: {
    [book: string]: {
      [chapter: number]: number[];
    };
  };
}

interface SelectionContextProps {
  selectedWords: TranslationWord[];
  selectSingleWord: (word: TranslationWord) => void;
  toggleWordSelection: (word: TranslationWord) => void;
  selectAdditionalWord: (word: TranslationWord) => void;
  selectRange: (startWord: TranslationWord, endWord: TranslationWord) => void;
  clearSelection: () => void;
  filterVerses: boolean;
  setFilterVerses: (shouldFilter: boolean) => void;
  filteredStructure: FilteredStructure | null;
  isLoadingStructure: boolean;
}

const SelectionContext = createContext<SelectionContextProps | undefined>(
  undefined
);

export const SelectionProvider = ({ children }: { children: ReactNode }) => {
  const [selectedWords, setSelectedWords] = useState<TranslationWord[]>([]);
  const [filterVerses, setFilterVerses] = useState<boolean>(false);
  const [filteredStructure, setFilteredStructure] =
    useState<FilteredStructure | null>(null);
  const [isLoadingStructure, setIsLoadingStructure] = useState(false);

  // Fetch filtered structure when words are selected
  useEffect(() => {
    const fetchFilteredStructure = async () => {
      if (selectedWords.length === 0) {
        setFilteredStructure(null);
        return;
      }

      setIsLoadingStructure(true);
      try {
        // Get unique roots from selected words
        const roots = [
          ...new Set(selectedWords.map((word) => word.root).filter(Boolean)),
        ];

        // Fetch the filtered structure from the server
        const response = await fetch(
          `/api/dictionary/filtered-scripture?roots=${roots.join(',')}`
        );
        const data = await response.json();
        setFilteredStructure(data);
      } catch (error) {
        console.error('Error fetching filtered structure:', error);
        setFilteredStructure(null);
      } finally {
        setIsLoadingStructure(false);
      }
    };

    if (selectedWords.length > 0 && filterVerses) {
      fetchFilteredStructure();
    }
  }, [selectedWords, filterVerses]);

  const selectSingleWord = (word: TranslationWord) => {
    setSelectedWords(selectedWords.includes(word) ? [] : [word]);
  };

  const toggleWordSelection = (word: TranslationWord) => {
    setSelectedWords((prev) => {
      if (prev.includes(word)) {
        return prev.filter((w) => w !== word);
      }

      return [...prev, word];
    });
  };

  const selectAdditionalWord = (word: TranslationWord) => {
    // If selected, de-select
    if (selectedWords.includes(word) && selectedWords.length < 6) {
      setSelectedWords((prev) => [...prev.filter((w) => w !== word)]);
    } else {
      // If not already selected, select this word
      setSelectedWords((prev) => [...prev, word]);
    }
  };

  const selectRange = (
    startWord: TranslationWord,
    endWord: TranslationWord
  ) => {
    // This will be populated by the Verse component
    // We'll just set the start and end words for now
    setSelectedWords([startWord, endWord]);
  };

  const clearSelection = () => {
    setSelectedWords([]);
  };

  // Clear the filtering/concordance mode if there's nothing to filter on
  useEffect(() => {
    if (selectedWords.length === 0) setFilterVerses(false);
  }, [selectedWords]);

  return (
    <SelectionContext.Provider
      value={{
        selectedWords,
        selectSingleWord,
        toggleWordSelection,
        selectAdditionalWord,
        selectRange,
        clearSelection,
        filterVerses,
        setFilterVerses,
        filteredStructure,
        isLoadingStructure,
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
};

export const useSelection = () => {
  const context = useContext(SelectionContext);

  if (!context) {
    throw new Error('useSelection must be used within a SelectionProvider');
  }

  return context;
};
