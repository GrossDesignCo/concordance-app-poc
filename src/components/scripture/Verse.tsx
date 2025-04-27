'use client';
import type { Verse as VerseType, LanguageKey, TranslationWord } from '@/types';
import { useSettings } from '@/context/SettingsContext';
import { String } from '../text/String';
import styles from './Verse.module.css';
import { useLexicon } from '@/context/LexiconContext';
import { useEffect } from 'react';
import { useSelection } from '@/context/SelectionContext';

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
  const { toggleWordSelection } = useSelection();

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

  const handleClick = (word: TranslationWord, index: number) => {
    console.log({ word, index });

    toggleWordSelection(word);
  };

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
            onClick={handleClick}
          />
        );

        return isShowingMultiple ? (
          <div className={styles.VerseAsBlock} key={language}>
            {renderedString}
          </div>
        ) : (
          renderedString
        );
      })}
    </>
  );
}
