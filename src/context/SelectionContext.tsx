import { TranslationWord } from '@/types';
import { createContext, useContext, useState, ReactNode } from 'react';

interface SelectionContextProps {
  selectedWords: TranslationWord[];
  selectSingleWord: (word: TranslationWord) => void;
  toggleWordSelection: (word: TranslationWord) => void;
  addWordToSelection: (word: TranslationWord) => void;
  selectRange: (startWord: TranslationWord, endWord: TranslationWord) => void;
  clearSelection: () => void;
}

const SelectionContext = createContext<SelectionContextProps | undefined>(
  undefined
);

export const SelectionProvider = ({ children }: { children: ReactNode }) => {
  const [selectedWords, setSelectedWords] = useState<TranslationWord[]>([]);

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

  const addWordToSelection = (word: TranslationWord) => {
    if (!selectedWords.includes(word)) {
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
        addWordToSelection,
        selectRange,
        clearSelection,
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
