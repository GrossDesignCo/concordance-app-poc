'use client';
import Verse from '@/components/scripture/Verse';
import type { Chapter as ChapterData } from '@/types';
import styles from './Chapter.module.css';
import { getChapterId, getBookNameKey } from '@/data/utils/idUtils';
import { Fragment } from 'react';

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

      {chapterData?.verses?.map((v, i) => {
        const nonConsecutiveVerse =
          v.meta.verse !== chapterData?.verses[i - 1]?.meta.verse + 1 &&
          v.meta.verse !== 1;

        return (
          <Fragment key={v.meta.verse}>
            {nonConsecutiveVerse && (
              <div className={styles.nonConsecutiveVerse}>...</div>
            )}
            <Verse verse={v} />
          </Fragment>
        );
      })}
    </div>
  );
};
