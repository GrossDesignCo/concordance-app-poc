"use client";
import LexiconEntry from "@/components/lexicon/Entry";
import { TranslationProvider } from "@/context/SettingsContext";
import styles from "./page.module.css";
import { Header } from "@/components/Header";

import { ViewPanel, ViewPanels } from "@/components/ViewPanels";
import { WordSelectionProvider } from "@/context/WordSelectionContext";
import { genesis } from "@/data/scripture/genesis";
import { Book } from "@/components/scripture/Book";

const Home = () => {
  return (
    <TranslationProvider>
      <WordSelectionProvider>
        <main>
          <Header />

          <ViewPanels>
            <ViewPanel className={styles.scripture}>
              <Book bookData={genesis} />
            </ViewPanel>

            <ViewPanel className={styles.lexicon}>
              <LexiconEntry />
            </ViewPanel>
          </ViewPanels>
        </main>
      </WordSelectionProvider>
    </TranslationProvider>
  );
};

export default Home;
