'use client';
import Verse from '@/components/scripture/Verse';
import type { Chapter as ChapterData } from '@/types';
import styles from './Chapter.module.css';
import { getChapterId, getBookNameKey } from '@/data/utils/idUtils';

interface ChapterProps {
  chapterData: ChapterData;
}

export const Chapter = ({ chapterData }: ChapterProps) => {
  return (
    <div className={styles.chapter}>
      <h2
        className={styles.chapterNumber}
        id={getChapterId({
          book: getBookNameKey(chapterData.meta.book),
          chapter: chapterData.meta.chapter,
        })}
      >
        {chapterData.meta.chapter}
      </h2>

      {chapterData?.verses?.map((v) => {
        return <Verse verse={v} key={v.meta.verse} />;
      })}
    </div>
  );
};
