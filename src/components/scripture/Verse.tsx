'use client';
import { Fragment } from 'react';
import type { Verse as VerseType, TranslationWord } from '@/types';
import Word from './Word';
import { useSettings } from '@/context/SettingsContext';
import styles from './Verse.module.css';
import cx from 'classnames';
import { sortWords } from '@/utils/sortWords';

interface VerseProps {
  verse: VerseType;
}

interface VariantLineProps {
  words: TranslationWord[];
  variant: 'original' | 'transliteration' | 'englishLiteral' | 'englishNatural';
  verseNumber: number;
}

// Sub-component for rendering a variant line
const VariantLine = ({ words, variant, verseNumber }: VariantLineProps) => {
  return (
    <div className={cx(styles.VariantLine, styles[variant])}>
      {words.map((word, index) => (
        <Fragment key={`${word.order?.hebrew}-${index}`}>
          {index === 0 && (
            <sup className={styles.VerseNumber}>{verseNumber}</sup>
          )}

          <Word word={word} variant={variant} />
          {index < words.length - 1 && ' '}
        </Fragment>
      ))}
    </div>
  );
};

export default function Verse({ verse }: VerseProps) {
  const {
    showEnglishLiteral,
    showEnglishNatural,
    showOriginal,
    showTransliteration,
  } = useSettings();

  // Sort words based on Hebrew order
  const sortedWords = sortWords(verse.words, 'hebrew');

  // Sort words for English natural order
  const englishNaturalWords = sortWords(verse.words, 'english');

  return (
    <div className={styles.TranslatedText}>
      <div className={styles.VariantLines}>
        {showOriginal && (
          <VariantLine
            words={sortedWords}
            variant="original"
            verseNumber={verse.meta.verse}
          />
        )}
        {showTransliteration && (
          <VariantLine
            words={sortedWords}
            variant="transliteration"
            verseNumber={verse.meta.verse}
          />
        )}
        {showEnglishLiteral && (
          <VariantLine
            words={sortedWords}
            variant="englishLiteral"
            verseNumber={verse.meta.verse}
          />
        )}
        {showEnglishNatural && (
          <VariantLine
            words={englishNaturalWords}
            variant="englishNatural"
            verseNumber={verse.meta.verse}
          />
        )}
      </div>
    </div>
  );
}
