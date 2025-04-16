import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

type WordOrder = 'english' | 'hebrew';

interface SettingsContextProps {
  showHebrew: boolean;
  setShowHebrew: (value: boolean) => void;
  showTransliteration: boolean;
  setShowTransliteration: (value: boolean) => void;
  showEnglishLiteral: boolean;
  setShowEnglishLiteral: (value: boolean) => void;
  showEnglishNatural: boolean;
  setShowEnglishNatural: (value: boolean) => void;
  wordOrder: WordOrder;
  setWordOrder: (value: WordOrder) => void;
}

const SettingsContext = createContext<SettingsContextProps | undefined>(
  undefined
);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [showHebrew, setShowHebrew] = useState(false);
  const [showTransliteration, setShowTransliteration] = useState(false);
  const [showEnglishLiteral, setShowEnglishLiteral] = useState(true);
  const [showEnglishNatural, setShowEnglishNatural] = useState(false);
  const [wordOrder, setWordOrder] = useState<WordOrder>('hebrew');

  useEffect(() => {
    if (showHebrew && showEnglishLiteral) {
      setWordOrder('hebrew');
    }
  }, [showHebrew, showEnglishLiteral]);

  return (
    <SettingsContext.Provider
      value={{
        showHebrew,
        setShowHebrew,
        showTransliteration,
        setShowTransliteration,
        showEnglishLiteral,
        setShowEnglishLiteral,
        showEnglishNatural,
        setShowEnglishNatural,
        wordOrder,
        setWordOrder,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a TranslationProvider');
  }
  return context;
};
