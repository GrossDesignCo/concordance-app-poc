'use client';
import { Chapter } from './Chapter';
import type { Book as BookData } from '@/types';
import styles from './Book.module.css';

interface BookProps {
  bookData: BookData;
}

export const Book = ({ bookData }: BookProps) => {
  return (
    <div className={styles.Book}>
      <div className={styles.bookMeta}>
        <h1 className={styles.BookName}>{bookData?.meta?.name}</h1>

        <div className={styles.translationChain}>
          {bookData?.meta?.translationChain}
        </div>
      </div>

      <div className={styles.chapters}>
        {bookData?.chapters?.map((chapter) => {
          return <Chapter chapterData={chapter} key={chapter?.number} />;
        })}
      </div>
    </div>
  );
};
