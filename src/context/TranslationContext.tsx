import { createContext, useContext, useState, ReactNode } from 'react';

interface TranslationContextProps {
  showHebrew: boolean;
  setShowHebrew: (value: boolean) => void;
  showTransliteration: boolean;
  setShowTransliteration: (value: boolean) => void;
}

const TranslationContext = createContext<TranslationContextProps | undefined>(
  undefined
);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [showHebrew, setShowHebrew] = useState(false);
  const [showTransliteration, setShowTransliteration] = useState(false);

  return (
    <TranslationContext.Provider
      value={{
        showHebrew,
        setShowHebrew,
        showTransliteration,
        setShowTransliteration,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
