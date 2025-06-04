import { FontKey, LanguageKey } from '@/types';
import { createContext, useContext, ReactNode, useEffect, useRef } from 'react';
import { useSettingsFromLocalStorage } from '@/hooks/useLocalStorage';

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
  const [settings, setSettings, hydrated] = useSettingsFromLocalStorage();
  const { languages, theme, font } = settings;

  const preChangeVerse = useRef<string | null>(null);
  const getPreChangeVerse = () => {
    const verseArray = JSON.parse(
      localStorage.getItem('visible-verses') || '{}'
    );
    const middle = Math.floor(verseArray.length / 2);
    return verseArray[middle];
  };

  useEffect(() => {
    const markedVerseElement = document.querySelector(
      `[data-verse-id="${preChangeVerse.current}"]`
    );
    if (markedVerseElement) {
      markedVerseElement.scrollIntoView({ block: 'center' });
    }
  }, [languages, preChangeVerse]);

  // Don't render children until hydrated to avoid hydration mismatch
  if (!hydrated) return null;

  // Toggle an individual language
  const toggleLanguage = (lang: LanguageKey) => {
    const markedVerse = getPreChangeVerse();
    preChangeVerse.current = markedVerse;

    if (languages.includes(lang)) {
      setSettings({
        ...settings,
        languages: languages.filter((l) => l !== lang),
      });
    } else {
      setSettings({
        ...settings,
        languages: [...languages, lang],
      });
    }
  };

  const handleSetLanguages = (languages: LanguageKey[]) => {
    const markedVerse = getPreChangeVerse();
    preChangeVerse.current = markedVerse;

    const languageOrder: LanguageKey[] = [
      'original',
      'transliteration',
      'englishLiteral',
      'englishNatural',
    ];
    const sortedLanguages = languages.sort(
      (a, b) => languageOrder.indexOf(a) - languageOrder.indexOf(b)
    );
    // If someone tries to unset all languages just revert to the default so that one is always selected
    setSettings({
      ...settings,
      languages:
        sortedLanguages.length === 0 ? ['englishNatural'] : sortedLanguages,
    });
  };

  const handleSetTheme = (theme: string) => {
    setSettings({
      ...settings,
      theme,
    });
  };

  const handleSetFont = (font: FontKey) => {
    setSettings({
      ...settings,
      font,
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        languages,
        setLanguages: handleSetLanguages,
        toggleLanguage,
        theme,
        setTheme: handleSetTheme,
        font,
        setFont: handleSetFont,
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
