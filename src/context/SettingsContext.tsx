import { FontKey, LanguageKey } from '@/types';
import { createContext, useContext, useState, ReactNode } from 'react';

interface SettingsContextProps {
  languages: LanguageKey[];
  setLanguages: (lang: LanguageKey[]) => void;
  toggleLanguage: (lang: LanguageKey) => void;
  theme: string;
  setTheme: (value: string) => void;
  font: FontKey;
  setFont: (value: FontKey) => void;
}

const SettingsContext = createContext<SettingsContextProps | undefined>(
  undefined
);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [languages, setLanguages] = useState<LanguageKey[]>(['englishNatural']);
  const [theme, setTheme] = useState('system');
  const [font, setFont] = useState<FontKey>('sans');

  // Toggle an individual language
  const toggleLanguage = (lang: LanguageKey) => {
    if (languages.includes(lang)) {
      setLanguages((langs) => langs.filter((l) => l !== lang));
    } else {
      setLanguages((langs) => [...langs, lang]);
    }
  };

  const handleSetLanguages = (languages: LanguageKey[]) => {
    const languageOrder = [
      'original',
      'transliteration',
      'englishLiteral',
      'englishNatural',
    ];
    const sortedLanguages = languages.sort(
      (a, b) => languageOrder.indexOf(a) - languageOrder.indexOf(b)
    );
    // If someone tries to unset all languages just revert to the default so that one is always selected
    setLanguages(
      sortedLanguages.length === 0 ? ['englishNatural'] : sortedLanguages
    );
  };

  return (
    <SettingsContext.Provider
      value={{
        languages,
        setLanguages: handleSetLanguages,
        toggleLanguage,
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
