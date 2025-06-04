'use client';

import { useEffect } from 'react';
import { useSelection } from '@/context/SelectionContext';
import styles from './ScriptureReader.module.css';
import { Book } from '@/components/scripture/Book';
import { useSettings } from '@/context/SettingsContext';
import { scripture } from '@/data/scripture';
import cx from 'classnames';
import { useScripturePosition } from '@/context/ScripturePositionContext';

export const ScriptureReader = () => {
  const { font } = useSettings();
  const { filterVerses, filteredStructure } = useSelection();
  const { visibleVerseIds } = useScripturePosition();

  // Filter books based on filteredStructure
  const filteredBooks = scripture.books.filter((book) => {
    if (!filterVerses || !filteredStructure) return true;
    return filteredStructure.books.includes(book.meta.name.toLowerCase());
  });

  // Just once, on first render, scroll to the most recently viewed verse
  useEffect(() => {
    const bookmarkedVerse = document.querySelector(
      `[data-verse-id="${visibleVerseIds[0]}"]`
    );

    bookmarkedVerse?.scrollIntoView({
      block: 'center',
    });
    // Just log verses once on first render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cx(styles.scripture, font ? styles[font] : '')}>
      <div className={styles.bookContainer}>
        {filteredBooks.map((book) => {
          // Filter chapters based on filteredStructure
          const filteredChapters = book.chapters.filter((chapter) => {
            if (!filterVerses || !filteredStructure) return true;
            const bookName = book.meta.name.toLowerCase();
            return filteredStructure.chapters[bookName]?.includes(
              chapter.meta.chapter
            );
          });

          // Only render the book if it has chapters to show
          if (filteredChapters.length === 0) return null;

          // Create a filtered version of the book
          const filteredBook = {
            ...book,
            chapters: filteredChapters,
          };

          return <Book bookData={filteredBook} key={book.meta.name} />;
        })}
      </div>
    </div>
  );
};
