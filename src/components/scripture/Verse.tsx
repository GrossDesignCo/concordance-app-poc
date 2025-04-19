"use client";
import { Fragment } from "react";
import type { Verse as VerseType, TranslationWord } from "@/types";
import Word from "./Word";
import { useSettings } from "@/context/SettingsContext";
import styles from "./Verse.module.css";
import cx from "classnames";

interface VerseProps {
  verse: VerseType;
  onSelect?: (word: TranslationWord | null) => void;
  selectedWord: TranslationWord | null;
}

// Sub-component for rendering a variant line
const VariantLine = ({
  words,
  variant,
  verseNumber,
  onSelect,
  selectedWord,
}: {
  words: TranslationWord[];
  variant: "hebrew" | "transliteration" | "englishLiteral" | "englishNatural";
  verseNumber: number;
  onSelect?: (word: TranslationWord) => void;
  selectedWord: TranslationWord | null;
}) => {
  return (
    <div className={cx(styles.VariantLine, styles[variant])}>
      {words.map((word, index) => (
        <Fragment key={`${word.order?.hebrew}-${index}`}>
          {index === 0 && (
            <sup className={styles.VerseNumber}>{verseNumber}</sup>
          )}

          <Word
            word={word}
            onSelect={onSelect}
            isSelected={word === selectedWord}
            variant={variant}
          />
          {index < words.length - 1 && " "}
        </Fragment>
      ))}
    </div>
  );
};

export default function Verse({ verse, onSelect, selectedWord }: VerseProps) {
  const {
    showEnglishLiteral,
    showEnglishNatural,
    showHebrew,
    showTransliteration,
  } = useSettings();

  // Sort words based on Hebrew order
  const sortedWords = [...verse.words].sort((a, b) => {
    const aPos = a.order?.hebrew ?? 0;
    const bPos = b.order?.hebrew ?? 0;
    return aPos - bPos;
  });

  const handleWordSelect = (word: TranslationWord) => {
    onSelect?.(word === selectedWord ? null : word);
  };

  // Sort words for English natural order
  const englishNaturalWords = [...verse.words].sort((a, b) => {
    const aPos = a.order?.english ?? a.order?.hebrew ?? 0;
    const bPos = b.order?.english ?? b.order?.hebrew ?? 0;
    return aPos - bPos;
  });

  return (
    <div className={styles.TranslatedText}>
      <div className={styles.VariantLines}>
        {showHebrew && (
          <VariantLine
            words={sortedWords}
            variant="hebrew"
            verseNumber={verse.meta.verse}
            onSelect={handleWordSelect}
            selectedWord={selectedWord}
          />
        )}
        {showTransliteration && (
          <VariantLine
            words={sortedWords}
            variant="transliteration"
            verseNumber={verse.meta.verse}
            onSelect={handleWordSelect}
            selectedWord={selectedWord}
          />
        )}
        {showEnglishLiteral && (
          <VariantLine
            words={sortedWords}
            variant="englishLiteral"
            verseNumber={verse.meta.verse}
            onSelect={handleWordSelect}
            selectedWord={selectedWord}
          />
        )}
        {showEnglishNatural && (
          <VariantLine
            words={englishNaturalWords}
            variant="englishNatural"
            verseNumber={verse.meta.verse}
            onSelect={handleWordSelect}
            selectedWord={selectedWord}
          />
        )}
      </div>
    </div>
  );
}
