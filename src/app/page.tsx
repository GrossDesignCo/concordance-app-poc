"use client";
import { Fragment, useState } from "react";
import { TranslationWord } from "@/types";
import TranslationView from "@/components/TranslationView";
import WordDetailsPanel from "@/components/WordDetailsPanel";
import { TranslationProvider } from "@/context/TranslationContext";
import { genesis } from "@/data/translation/genesis";
// import styles from "./page.module.css";
import { Header } from "@/components/Header";

import { ViewPanel, ViewPanels } from "@/components/ViewPanels";

const Home = () => {
  const [selectedWord, setSelectedWord] = useState<TranslationWord | null>(
    null
  );
  return (
    <TranslationProvider>
      <main>
        <Header />

        <ViewPanels>
          <ViewPanel className="ds-bg-secondary">
            <h1>Genesis</h1>
            {genesis?.chapters?.map((chapter) => {
              return (
                <Fragment key={chapter.number}>
                  <h2>{chapter.number}</h2>
                  {chapter?.verses?.map((v) => {
                    return (
                      <TranslationView
                        verse={v}
                        key={v.meta.verse}
                        selectedWord={selectedWord}
                        onSelect={(word) => setSelectedWord(word)}
                      />
                    );
                  })}
                </Fragment>
              );
            })}
          </ViewPanel>

          {selectedWord && (
            <ViewPanel>
              <WordDetailsPanel
                word={selectedWord}
                onClose={() => setSelectedWord(null)}
              />
            </ViewPanel>
          )}
        </ViewPanels>
      </main>
    </TranslationProvider>
  );
};

export default Home;
