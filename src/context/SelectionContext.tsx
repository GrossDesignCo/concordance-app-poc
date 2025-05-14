import { TranslationWord } from '@/types';
import { createContext, useContext, useState, ReactNode } from 'react';

interface SelectionContextProps {
  selectedWords: TranslationWord[];
  selectSingleWord: (word: TranslationWord) => void;
  toggleWordSelection: (word: TranslationWord) => void;
  selectAdditionalWord: (word: TranslationWord) => void;
  selectRange: (startWord: TranslationWord, endWord: TranslationWord) => void;
  clearSelection: () => void;
  filterVerses: boolean;
  setFilterVerses: (shouldFilter: boolean) => void;
}

const SelectionContext = createContext<SelectionContextProps | undefined>(
  undefined
);

export const SelectionProvider = ({ children }: { children: ReactNode }) => {
  const [selectedWords, setSelectedWords] = useState<TranslationWord[]>([]);
  const [filterVerses, setFilterVerses] = useState<boolean>(false);

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
