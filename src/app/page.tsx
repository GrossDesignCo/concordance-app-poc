"use client";
import LexiconEntry from "@/components/lexicon/Entry";
import { TranslationProvider } from "@/context/SettingsContext";
import styles from "./page.module.css";
import { Header } from "@/components/Header";

import { ViewPanel, ViewPanels } from "@/components/ViewPanels";
import { WordSelectionProvider } from "@/context/WordSelectionContext";
import { RootSelectionProvider } from "@/context/RootSelectionContext";
import { Book } from "@/components/scripture/Book";
import { scripture } from "@/data/scripture";

const Home = () => {
  return (
    <TranslationProvider>
      <WordSelectionProvider>
        <RootSelectionProvider>
          <main>
            <Header />

            <ViewPanels>
              <ViewPanel className={styles.scripture}>
                <div className={styles.bookContainer}>
                  {scripture.books.map((book) => {
                    return <Book bookData={book} key={book.name} />;
                  })}
                </div>
              </ViewPanel>

              <ViewPanel className={styles.lexicon}>
                <LexiconEntry />
              </ViewPanel>
            </ViewPanels>
          </main>
        </RootSelectionProvider>
      </WordSelectionProvider>
    </TranslationProvider>
  );
};

export default Home;
