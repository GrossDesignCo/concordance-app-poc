'use client';
import { Fragment } from 'react';
import Verse from '@/components/scripture/Verse';
import { useWordSelection } from '@/context/WordSelectionContext';
import type { Chapter as ChapterData } from '@/types';

interface ChapterProps {
  chapterData: ChapterData;
}

export const Chapter = ({ chapterData }: ChapterProps) => {
  const { selectedWord, setSelectedWord } = useWordSelection();

  return (
    <>
      <h2>{chapterData.number}</h2>

      {chapterData?.verses?.map((v) => {
        return (
          <Verse
            verse={v}
            key={v.meta.verse}
            selectedWord={selectedWord}
            onSelect={(word) => setSelectedWord(word)}
          />
        );
      })}
    </>
  );
};
