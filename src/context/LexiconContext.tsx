import { ResolvedLanguageKey } from '@/types';
import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from 'react';

type LexiconState = {
  [key: string]: boolean;
};

interface LexiconContextType {
  lexiconState: LexiconState;
  isLoading: boolean;
  error: Error | null;
  checkWordsForEntryPresence: (
    words: string[],
    language: ResolvedLanguageKey
  ) => Promise<void>;
  hasEntry: (word: string) => boolean;
}

const LexiconContext = createContext<LexiconContextType | null>(null);

export function LexiconProvider({ children }: { children: ReactNode }) {
  const [lexiconState, setLexiconState] = useState<LexiconState>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const checkWordsForEntryPresence = useCallback(
    async (words: string[], language: ResolvedLanguageKey) => {
      if (words.length === 0) return;

      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          '/api/lexicon/check-words-for-entry-presence',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ words, language }),
          }
        );

        if (!response.ok) {
          throw new Error('Failed to check lexicon entries');
        }

        const { results } = await response.json();

        // Use functional update to avoid dependency on lexiconState
        setLexiconState((prevState) => {
          const newState = { ...prevState };
          words.forEach((word, index) => {
            newState[word] = results[index];
          });

          return newState;
        });
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error('Unknown error occurred')
        );
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const hasEntry = useCallback(
    (word: string) => {
      return lexiconState[word] ?? false;
    },
    [lexiconState]
  );

  return (
    <LexiconContext.Provider
      value={{
        lexiconState,
        isLoading,
        error,
        checkWordsForEntryPresence,
        hasEntry,
      }}
    >
      {children}
    </LexiconContext.Provider>
  );
}

export function useLexicon() {
  const context = useContext(LexiconContext);
  if (!context) {
    throw new Error('useLexicon must be used within a LexiconProvider');
  }
  return context;
}
