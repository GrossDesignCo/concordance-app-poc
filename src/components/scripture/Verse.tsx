'use client';
import { Fragment } from 'react';
import { Verse, TranslationWord } from '@/types';
import Word from './Word';
import { useSettings } from '@/context/SettingsContext';
import styles from './Verse.module.css';

interface VerseProps {
  verse: Verse;
  onSelect?: (word: TranslationWord | null) => void;
  selectedWord: TranslationWord | null;
}

export default function Verse({ verse, onSelect, selectedWord }: VerseProps) {
  const { wordOrder } = useSettings();

  // Sort words based on selected order
  const sortedWords = [...verse.words].sort((a, b) => {
    const aPos =
      wordOrder === 'hebrew'
        ? a.order.hebrew
        : a.order.english ?? a.order.hebrew;
    const bPos =
      wordOrder === 'hebrew'
        ? b.order.hebrew
        : b.order.english ?? b.order.hebrew;
    return aPos - bPos;
  });

  const handleWordSelect = (word: TranslationWord) => {
    onSelect?.(word === selectedWord ? null : word);
  };

  return (
    <div className={styles.TranslatedText}>
      <span className={styles.TranslatedTextWords}>
        {sortedWords.map((word, index) => (
          <Fragment key={`${word.order.hebrew}-${index}`}>
            {index === 0 && (
              <sup className={styles.VerseNumber}>{verse.meta.verse}</sup>
            )}

            <Word
              word={word}
              onSelect={handleWordSelect}
              isSelected={word === selectedWord}
            />

            {index < sortedWords.length - 1 && ' '}
          </Fragment>
        ))}
      </span>
    </div>
  );
}
