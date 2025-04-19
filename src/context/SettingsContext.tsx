import { createContext, useContext, useState, ReactNode } from "react";

interface SettingsContextProps {
  showHebrew: boolean;
  setShowHebrew: (value: boolean) => void;
  showTransliteration: boolean;
  setShowTransliteration: (value: boolean) => void;
  showEnglishLiteral: boolean;
  setShowEnglishLiteral: (value: boolean) => void;
  showEnglishNatural: boolean;
  setShowEnglishNatural: (value: boolean) => void;
  theme: string;
  setTheme: (value: string) => void;
}

const SettingsContext = createContext<SettingsContextProps | undefined>(
  undefined
);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [showHebrew, setShowHebrew] = useState(false);
  const [showTransliteration, setShowTransliteration] = useState(false);
  const [showEnglishLiteral, setShowEnglishLiteral] = useState(true);
  const [showEnglishNatural, setShowEnglishNatural] = useState(false);
  const [theme, setTheme] = useState("system");

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
        theme,
        setTheme,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error("useSettings must be used within a TranslationProvider");
  }
  return context;
};
