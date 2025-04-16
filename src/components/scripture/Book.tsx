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
      <h1>{bookData?.name}</h1>

      {bookData?.chapters?.map((chapter) => {
        return <Chapter chapterData={chapter} key={chapter?.number} />;
      })}
    </div>
  );
};
