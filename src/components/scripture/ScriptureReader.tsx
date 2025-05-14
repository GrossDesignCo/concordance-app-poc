'use client';
import styles from './ScriptureReader.module.css';
import { Book } from '@/components/scripture/Book';
import { useSettings } from '@/context/SettingsContext';
import { scripture } from '@/data/scripture';
import cx from 'classnames';

export const ScriptureReader = () => {
  const { font } = useSettings();

  return (
    <div className={cx(styles.scripture, font ? styles[font] : '')}>
      <div className={styles.bookContainer}>
        {scripture.books.map((book) => {
          return <Book bookData={book} key={book.meta.name} />;
        })}
      </div>
    </div>
  );
};
