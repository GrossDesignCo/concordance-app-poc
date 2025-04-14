'use client';
import React from 'react';
import { Verse, TranslationWord } from '../types';

interface TranslationWordViewProps {
  word: TranslationWord;
  showHebrew?: boolean;
  showTransliteration?: boolean;
}

const TranslationWordView: React.FC<TranslationWordViewProps> = ({
  word,
  showHebrew = false,
  showTransliteration = false,
}) => {
  return (
    <span>
      <span>
        {showHebrew && (
          <span>
            {word.hebrew}
          </span>
        )}
        {showTransliteration && (
          <span>
            ({word.transliteration})
          </span>
        )}
        <span>{word.englishLiteral}</span>
      </span>
    </span>
  );
};

interface TranslationViewProps {
  verse: Verse;
  useHebrewOrder?: boolean;
  showHebrew?: boolean;
  showTransliteration?: boolean;
}

const TranslationView: React.FC<TranslationViewProps> = ({
  verse,
  useHebrewOrder = false,
  showHebrew = false,
  showTransliteration = false,
}) => {
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

  return (
    <div>
      <div>
        {verse.meta.chapter}:{verse.meta.verse}
      </div>
      <div>
        {sortedWords.map((word, index) => (
          <React.Fragment key={`${word.order.hebrew}-${index}`}>
            <TranslationWordView
              word={word}
              showHebrew={showHebrew}
              showTransliteration={showTransliteration}
            />
            {index < sortedWords.length - 1 && ' '}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TranslationView;
