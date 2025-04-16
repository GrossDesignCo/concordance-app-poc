import { TranslationWord } from '@/types';
import { createContext, useContext, useState, ReactNode } from 'react';

interface WordSelectionContextProps {
  selectedWord: TranslationWord | null;
  setSelectedWord: (word: TranslationWord | null) => void;
}

const WordSelectionContext = createContext<
  WordSelectionContextProps | undefined
>(undefined);

export const WordSelectionProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [selectedWord, setSelectedWord] = useState<TranslationWord | null>(
    null
  );

  return (
    <WordSelectionContext.Provider
      value={{
        selectedWord,
        setSelectedWord,
      }}
    >
      {children}
    </WordSelectionContext.Provider>
  );
};

export const useWordSelection = () => {
  const context = useContext(WordSelectionContext);

  if (!context) {
    throw new Error(
      'useWordSelection must be used within a WordSelectionProvider'
    );
  }

  return context;
};
