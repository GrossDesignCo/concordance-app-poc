import { TranslationWord } from '@/types';
import { createContext, useContext, useState, ReactNode } from 'react';

interface SelectionContextProps {
  selectedWord: TranslationWord | null;
  setSelectedWord: (word: TranslationWord | null) => void;
}

const SelectionContext = createContext<SelectionContextProps | undefined>(
  undefined
);

export const SelectionProvider = ({ children }: { children: ReactNode }) => {
  const [selectedWord, setSelectedWord] = useState<TranslationWord | null>(
    null
  );

  return (
    <SelectionContext.Provider
      value={{
        selectedWord,
        setSelectedWord,
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
