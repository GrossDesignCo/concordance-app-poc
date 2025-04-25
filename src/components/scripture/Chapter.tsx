'use client';
import Verse from '@/components/scripture/Verse';
import type { Chapter as ChapterData } from '@/types';
import styles from './Chapter.module.css';

interface ChapterProps {
  chapterData: ChapterData;
}

export const Chapter = ({ chapterData }: ChapterProps) => {
  return (
    <div className={styles.chapter}>
      <h2 className={styles.chapterNumber}>{chapterData.number}</h2>

      {chapterData?.verses?.map((v) => {
        return <Verse verse={v} key={v.meta.verse} />;
      })}
    </div>
  );
};
