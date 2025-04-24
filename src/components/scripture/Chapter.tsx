'use client';
import Verse from '@/components/scripture/Verse';
import type { Chapter as ChapterData } from '@/types';

interface ChapterProps {
  chapterData: ChapterData;
}

export const Chapter = ({ chapterData }: ChapterProps) => {
  return (
    <>
      <h2>{chapterData.number}</h2>

      {chapterData?.verses?.map((v) => {
        return <Verse verse={v} key={v.meta.verse} />;
      })}
    </>
  );
};
