import { createContext, useContext, useState, ReactNode } from 'react';

interface SettingsContextProps {
  showOriginal: boolean;
  setShowOriginal: (value: boolean) => void;
  showTransliteration: boolean;
  setShowTransliteration: (value: boolean) => void;
  showEnglishLiteral: boolean;
  setShowEnglishLiteral: (value: boolean) => void;
  showEnglishNatural: boolean;
  setShowEnglishNatural: (value: boolean) => void;
  theme: string;
  setTheme: (value: string) => void;
  font: 'sans' | 'serif';
  setFont: (value: 'sans' | 'serif') => void;
}

const SettingsContext = createContext<SettingsContextProps | undefined>(
  undefined
);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [showOriginal, setShowOriginal] = useState(false);
  const [showTransliteration, setShowTransliteration] = useState(false);
  const [showEnglishLiteral, setShowEnglishLiteral] = useState(false);
  const [showEnglishNatural, setShowEnglishNatural] = useState(true);
  const [theme, setTheme] = useState('system');
  const [font, setFont] = useState<'sans' | 'serif'>('sans');

  return (
    <SettingsContext.Provider
      value={{
        showOriginal,
        setShowOriginal,
        showTransliteration,
        setShowTransliteration,
        showEnglishLiteral,
        setShowEnglishLiteral,
        showEnglishNatural,
        setShowEnglishNatural,
        theme,
        setTheme,
        font,
        setFont,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};
