"use client";
import { Fragment } from "react";
import { Verse, TranslationWord } from "@/types";
import TranslationWordView from "./TranslationWordView";
import { useTranslation } from "@/context/TranslationContext";
import styles from "./TranslationView.module.css";

interface TranslationViewProps {
  verse: Verse;
  onSelect?: (word: TranslationWord | null) => void;
  selectedWord: TranslationWord | null;
}

export default function TranslationView({
  verse,
  onSelect,
  selectedWord,
}: TranslationViewProps) {
  const { wordOrder } = useTranslation();

  // Sort words based on selected order
  const sortedWords = [...verse.words].sort((a, b) => {
    const aPos =
      wordOrder === "hebrew"
        ? a.order.hebrew
        : a.order.english ?? a.order.hebrew;
    const bPos =
      wordOrder === "hebrew"
        ? b.order.hebrew
        : b.order.english ?? b.order.hebrew;
    return aPos - bPos;
  });

  const handleWordSelect = (word: TranslationWord) => {
    onSelect?.(word === selectedWord ? null : word);
  };

  return (
    <div className={styles.TranslationView}>
      <div className={styles.TranslatedText}>
        <div>
          {verse.meta.chapter}:{verse.meta.verse}
        </div>

        <div className={styles.TranslatedTextWords}>
          {sortedWords.map((word, index) => (
            <Fragment key={`${word.order.hebrew}-${index}`}>
              <TranslationWordView
                word={word}
                onSelect={handleWordSelect}
                isSelected={word === selectedWord}
              />
              {index < sortedWords.length - 1 && " "}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
