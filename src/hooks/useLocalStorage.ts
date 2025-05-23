import { useState, useEffect } from 'react';
import { FontKey, LanguageKey } from '@/types';

type Settings = {
  languages: LanguageKey[];
  theme: string;
  font: FontKey;
};

const STORAGE_KEY = 'concordance-settings';

const defaultSettings: Settings = {
  languages: ['englishNatural'],
  theme: 'system',
  font: 'sans',
};

/**
 * Use this hook to sync state data to local storage.
 * 1. Only run on client
 * 2. Use default settings if no data is found
 * 3. Use default settings if data is invalid
 * 4. Update local storage when state changes
 * 5. Return hydrated state to prevent hydration errors
 * @returns settings, setSettings, hydrated
 */
export const useLocalStorage = () => {
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Only run on client
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setSettings(JSON.parse(stored));
      } catch {
        // ignore parse error, keep default
      }
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    }
  }, [settings, hydrated]);

  return {
    settings,
    setSettings,
    hydrated,
  };
}; 