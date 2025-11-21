import { TranslationWord } from '@/types';
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useRef,
  useMemo,
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
  selectedRootsRelatedWords: string[]; // Array of root keys that are related to selected roots
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
  const [selectedRootsRelatedWords, setSelectedRootsRelatedWords] = useState<
    string[]
  >([]);

  // Cache for root data to avoid refetching
  const rootDataCache = useRef<Map<string, { related?: readonly string[] }>>(
    new Map()
  );

  // Memoize the unique roots to avoid unnecessary effect triggers
  const selectedRoots = useMemo(() => {
    return [
      ...new Set(selectedWords.map((word) => word.root).filter(Boolean)),
    ] as string[];
  }, [selectedWords]);

  // Create a stable key for the selected roots to use as dependency
  const selectedRootsKey = selectedRoots.sort().join(',');

  // Fetch related roots data when selected roots change
  useEffect(() => {
    const fetchRelatedRoots = async () => {
      if (selectedRoots.length === 0) {
        setSelectedRootsRelatedWords([]);
        return;
      }

      try {
        const relatedWordsSet = new Set<string>();

        // Process each root
        for (const root of selectedRoots) {
          // Check cache first
          if (rootDataCache.current.has(root)) {
            const cachedData = rootDataCache.current.get(root);
            if (cachedData?.related) {
              cachedData.related.forEach((relatedRoot) => {
                relatedWordsSet.add(relatedRoot);
              });
            }
            continue;
          }

          // If not in cache, fetch it
          try {
            // Determine language - check if it's in the word data
            const selectedWord = selectedWords.find((w) => w.root === root);
            const language = selectedWord?.hebrew ? 'hebrew' : 'greek';

            const response = await fetch(`/roots/${language}/${root}.json`);
            if (response.ok) {
              const rootData = await response.json();

              // Cache the result
              rootDataCache.current.set(root, rootData);

              // Add all related words to the set
              if (rootData.related && Array.isArray(rootData.related)) {
                rootData.related.forEach((relatedRoot: string) => {
                  relatedWordsSet.add(relatedRoot);
                });
              }
            }
          } catch (error) {
            console.error(`Error fetching root data for ${root}:`, error);
          }
        }

        setSelectedRootsRelatedWords(Array.from(relatedWordsSet));
      } catch (error) {
        console.error('Error fetching related roots:', error);
        setSelectedRootsRelatedWords([]);
      }
    };

    fetchRelatedRoots();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRootsKey]);

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
        selectedRootsRelatedWords,
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
