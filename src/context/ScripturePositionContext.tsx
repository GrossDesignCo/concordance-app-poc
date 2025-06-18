import React, {
  createContext,
  useContext,
  useRef,
  useCallback,
  useEffect,
} from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { sortVerseIds } from '@/utils/scriptureOrder';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

interface ScripturePositionContextType {
  observe: (element: Element) => void;
  unobserve: (element: Element) => void;
  visibleVerseIds: string[];
  middleVerseId: string;
}

const ScripturePositionContext =
  createContext<ScripturePositionContextType | null>(null);

export const ScripturePositionProvider: React.FC<{
  children: React.ReactNode;
  options?: IntersectionObserverOptions;
}> = ({ children, options = {} }) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const [visibleVerseIds, setVisibleVerseIds, hydrated] = useLocalStorage<
    string[]
  >('visible-verses', []);
  const middleVerseId =
    visibleVerseIds[Math.floor((visibleVerseIds.length - 1) / 2)];

  // Callback for intersection observer, manages list of visible verses
  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const verseId = entry.target.getAttribute('data-verse-id');

        if (verseId) {
          if (entry.isIntersecting) {
            // Store the verse ID when it becomes visible
            setVisibleVerseIds((prev) => {
              const newSet = new Set(prev);
              newSet.add(verseId);
              return sortVerseIds(Array.from(newSet));
            });
          } else {
            // Remove the verse ID when it's no longer visible
            setVisibleVerseIds((prev) => {
              const newSet = new Set(prev);
              newSet.delete(verseId);
              return sortVerseIds(Array.from(newSet));
            });
          }
        }
      });
    },
    [setVisibleVerseIds]
  );

  // Only instanciate intersection observer once
  useEffect(() => {
    observer.current = new IntersectionObserver(handleIntersection, options);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [handleIntersection, options]);

  const observe = useCallback((element: Element) => {
    if (observer.current) {
      observer.current.observe(element);
    }
  }, []);

  const unobserve = useCallback((element: Element) => {
    if (observer.current) {
      observer.current.unobserve(element);
    }
  }, []);

  // Don't render children until hydrated to avoid hydration mismatch
  if (!hydrated) return null;

  return (
    <ScripturePositionContext.Provider
      value={{ observe, unobserve, visibleVerseIds, middleVerseId }}
    >
      {children}
    </ScripturePositionContext.Provider>
  );
};

export const useScripturePosition = () => {
  const context = useContext(ScripturePositionContext);
  if (!context) {
    throw new Error(
      'useScripturePosition must be used within an ScripturePositionProvider'
    );
  }
  return context;
};
