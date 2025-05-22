'use client';
import { Chapter } from './Chapter';
import type { Book as BookData } from '@/types';
import styles from './Book.module.css';
import { useSelection } from '@/context/SelectionContext';

interface BookProps {
  bookData: BookData;
}

export const Book = ({ bookData }: BookProps) => {
  const { filterVerses, filteredStructure } = useSelection();

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
          // Filter verses based on filteredStructure
          const filteredVerses = chapter.verses.filter((verse) => {
            if (!filterVerses || !filteredStructure) return true;
            const bookName = bookData.meta.name.toLowerCase();
            return filteredStructure.verses[bookName]?.[
              chapter.number
            ]?.includes(verse.meta.number);
          });

          // Only render the chapter if it has verses to show
          if (filteredVerses.length === 0) return null;

          // Create a filtered version of the chapter
          const filteredChapter = {
            ...chapter,
            verses: filteredVerses,
          };

          return (
            <Chapter chapterData={filteredChapter} key={chapter?.number} />
          );
        })}
      </div>
    </div>
  );
};
