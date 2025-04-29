'use client';
import type { Verse as VerseType, LanguageKey, TranslationWord } from '@/types';
import { useSettings } from '@/context/SettingsContext';
import { String } from '../text/String';
import styles from './Verse.module.css';
import { useLexicon } from '@/context/LexiconContext';
import { useEffect } from 'react';
import { useSelection } from '@/context/SelectionContext';
import { resolveLanguage } from '@/utils/resolveLanguage';

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
  const { selectSingleWord, toggleWordSelection } = useSelection();

  // Determine what to show
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

  // Handle selecting/de-selecting words within this verse
  const handleClick = (e: MouseEvent, word: TranslationWord) => {
    console.log('click word', { metaKey: e.metaKey });
    selectSingleWord(word);
  };

  return (
    <>
      {verse.meta.number ? (
        <sup className={styles.VerseNumber}>{verse.meta.number}</sup>
      ) : null}

      {Object.entries(languages).map(([language, show]) => {
        if (!show) return null;

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
            onClick={handleClick}
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
    </>
  );
}
