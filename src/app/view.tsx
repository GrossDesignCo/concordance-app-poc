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
    <span className="relative inline-block">
      <span className="cursor-help hover:bg-blue-50 rounded px-1 py-0.5 transition-colors">
        {showHebrew && (
          <span className="text-gray-600 text-sm font-hebrew mr-1">
            {word.hebrew}
          </span>
        )}
        {showTransliteration && (
          <span className="text-gray-500 text-sm mr-1">
            ({word.transliteration})
          </span>
        )}
        <span className="text-black">{word.englishLiteral}</span>
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
    <div className="p-6 bg-gray-900 text-white rounded-lg">
      <div className="text-gray-400 mb-3 text-sm">
        {verse.meta.chapter}:{verse.meta.verse}
      </div>
      <div className="text-xl leading-relaxed tracking-wide">
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
