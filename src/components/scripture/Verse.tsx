'use client';
import type { Verse as VerseType, LanguageKey } from '@/types';
import { useSettings } from '@/context/SettingsContext';
import { String } from '../text/String';
import styles from './Verse.module.css';
import { useLexicon } from '@/context/LexiconContext';
import { useEffect } from 'react';

interface VerseProps {
  verse: VerseType;
}

export default function Verse({ verse }: VerseProps) {
  const {
    showEnglishLiteral,
    showEnglishNatural,
    showOriginal,
    showTransliteration,
  } = useSettings();

  const languages: Record<LanguageKey, boolean> = {
    original: showOriginal,
    transliteration: showTransliteration,
    englishLiteral: showEnglishLiteral,
    englishNatural: showEnglishNatural,
  };

  // (If there are multiple translations being shown)
  const isShowingMultiple =
    Object.values(languages).filter((val) => val === true).length > 1;

  // Track which words have lexicon entries (used/rendered in Word component)
  const { queryWordsForEntries } = useLexicon();

  useEffect(() => {
    queryWordsForEntries(verse.words.map((word) => word.transliteration));
  }, [
    verse.words,
    verse.meta.chapter,
    verse.meta.number,
    queryWordsForEntries,
  ]);

  return (
    <>
      {verse.meta.number ? (
        <sup className={styles.VerseNumber}>{verse.meta.number}</sup>
      ) : null}

      {Object.entries(languages).map(([language, show]) => {
        if (!show) return null;

        const renderedString = (
          <String
            words={verse.words}
            language={language as LanguageKey}
            key={language}
            showGrammar
          />
        );

        return isShowingMultiple ? (
          <div className={styles.VerseAsBlock}>{renderedString}</div>
        ) : (
          renderedString
        );
      })}
    </>
  );
}
