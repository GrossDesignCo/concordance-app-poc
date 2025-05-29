'use client';
import type { Verse as VerseType, LanguageKey } from '@/types';
import { useSettings } from '@/context/SettingsContext';
import { String } from '../text/String';
import styles from './Verse.module.css';
import { useLexicon } from '@/context/LexiconContext';
import { useEffect, useRef, useState } from 'react';
import { resolveLanguage } from '@/utils/resolveLanguage';
import { useSelection } from '@/context/SelectionContext';
import { useScripturePosition } from '@/context/ScripturePositionContext';

interface VerseProps {
  verse: VerseType;
}

export default function Verse({ verse }: VerseProps) {
  const { languages } = useSettings();

  // (If there are multiple translations being shown)
  const isShowingMultiple = languages.length > 1;

  // Track which words have lexicon entries (used/rendered in Word component)
  const { checkWordsForEntryPresence } = useLexicon();

  useEffect(() => {
    const resolvedOGLanguage = resolveLanguage(verse.words?.[0], 'original');
    checkWordsForEntryPresence(
      verse.words.map((word) => word.transliteration),
      resolvedOGLanguage
    );
  }, [
    verse.words,
    verse.meta.chapter,
    verse.meta.number,
    checkWordsForEntryPresence,
  ]);

  // Track whether this verse should be filtered out
  // Used in logic that only shows verses with matching words/roots
  const { selectedWords, filterVerses } = useSelection();
  const [isFilteredOut, setIsFilteredOut] = useState<boolean>(false);

  useEffect(() => {
    if (filterVerses) {
      const roots = verse.words.map((word) => word.root);
      const shouldRender = selectedWords.find((word) =>
        roots.includes(word.root)
      );
      setIsFilteredOut(!Boolean(shouldRender));
    } else {
      setIsFilteredOut(false);
    }
  }, [filterVerses, selectedWords, verse.words]);

  // Observe this verses' position in the viewport
  // Analogous to a scroll being opened, with several verses visible to the reader
  const { observe, unobserve } = useScripturePosition();
  const verseNumberElementRef = useRef<HTMLElement>(null);
  const verseId = `${verse.meta.book.toUpperCase()} ${verse.meta.chapter}:${
    verse.meta.number
  }`;

  useEffect(() => {
    const verseElement = verseNumberElementRef.current;

    if (verseElement) {
      observe(verseElement);

      return () => unobserve(verseElement);
    }
  }, [observe, unobserve, verseNumberElementRef, languages]);

  if (Boolean(selectedWords.length) && isFilteredOut) return;

  // Render Content
  const verseContent = (
    <span data-verse-id={verseId} ref={verseNumberElementRef}>
      {verse.meta.number ? (
        <sup className={styles.VerseNumber}>{verse.meta.number}</sup>
      ) : null}

      {languages.map((language) => {
        // Resolve `original` to actual language used for styling
        const resolvedLanguage = resolveLanguage(
          verse.words?.[0],
          language as LanguageKey
        );
        const dir = resolvedLanguage === 'hebrew' ? 'rtl' : undefined;
        const renderedString = (
          <String
            words={verse.words}
            language={language as LanguageKey}
            key={resolvedLanguage}
            showGrammar
          />
        );

        // If showing multiple renderings of the verse, block them to make it more clear
        return isShowingMultiple ? (
          <div className={styles.VerseAsBlock} dir={dir} key={language}>
            {renderedString}
          </div>
        ) : (
          renderedString
        );
      })}
    </span>
  );

  // Wrap the whole thing in an extra container for visual effects if showing multiple
  return isShowingMultiple ? (
    <div className={styles.VersesAsBlocks}>{verseContent}</div>
  ) : (
    verseContent
  );
}
