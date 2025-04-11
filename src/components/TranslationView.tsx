'use client';
import { Fragment, useState } from 'react';
import { Verse, TranslationWord } from '@/types';
import TranslationWordView from './TranslationWordView';
import WordDetailsPanel from './WordDetailsPanel';
import styles from './TranslationView.module.css';

interface TranslationViewProps {
  verse: Verse;
  useHebrewOrder?: boolean;
  showHebrew?: boolean;
  showTransliteration?: boolean;
}

export default function TranslationView({
  verse,
  useHebrewOrder = false,
}: TranslationViewProps) {
  const [selectedWord, setSelectedWord] = useState<TranslationWord | null>(
    null
  );

  // Sort words based on selected order
  const sortedWords = [...verse.words].sort((a, b) => {
    const aPos = useHebrewOrder
      ? a.order.hebrew
      : a.order.english ?? a.order.hebrew;
    const bPos = useHebrewOrder
      ? b.order.hebrew
      : b.order.english ?? b.order.hebrew;
    return aPos - bPos;
  });

  const handleWordSelect = (word: TranslationWord) => {
    setSelectedWord(word === selectedWord ? null : word);
  };

  return (
    <div className={styles.TranslationView}>
      <div className={styles.TranslatedText}>
        <div>
          {verse.meta.chapter}:{verse.meta.verse}
        </div>

        <div>
          {sortedWords.map((word, index) => (
            <Fragment key={`${word.order.hebrew}-${index}`}>
              <TranslationWordView
                word={word}
                onSelect={handleWordSelect}
                isSelected={word === selectedWord}
              />
              {index < sortedWords.length - 1 && ' '}
            </Fragment>
          ))}
        </div>
      </div>

      <WordDetailsPanel
        className={styles.Details}
        word={selectedWord}
        onClose={() => setSelectedWord(null)}
      />
    </div>
  );
}
