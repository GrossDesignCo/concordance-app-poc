"use client";
import styles from "./ScriptureReader.module.css";
import { Book } from "@/components/scripture/Book";
import { LexiconProvider } from "@/context/LexiconContext";
import { scripture } from "@/data/scripture";

export const ScriptureReader = () => {
  return (
    <LexiconProvider>
      <div className={styles.scripture}>
        <div className={styles.bookContainer}>
          {scripture.books.map((book) => {
            return <Book bookData={book} key={book.meta.name} />;
          })}
        </div>
      </div>
    </LexiconProvider>
  );
};
