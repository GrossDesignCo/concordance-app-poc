import { createContext, useContext, useState, ReactNode } from "react";

type WordOrder = "english" | "hebrew";

interface TranslationContextProps {
  showHebrew: boolean;
  setShowHebrew: (value: boolean) => void;
  showTransliteration: boolean;
  setShowTransliteration: (value: boolean) => void;
  wordOrder: WordOrder;
  setWordOrder: (value: WordOrder) => void;
}

const TranslationContext = createContext<TranslationContextProps | undefined>(
  undefined
);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [showHebrew, setShowHebrew] = useState(false);
  const [showTransliteration, setShowTransliteration] = useState(false);
  const [wordOrder, setWordOrder] = useState<WordOrder>("english");

  return (
    <TranslationContext.Provider
      value={{
        showHebrew,
        setShowHebrew,
        showTransliteration,
        setShowTransliteration,
        wordOrder,
        setWordOrder,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};
