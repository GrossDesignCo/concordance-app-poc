import { TranslationWord } from "@/types";
import { useTranslation } from "@/context/TranslationContext";
import cx from "classnames";
import styles from "./TranslationWordView.module.css";

interface TranslationWordViewProps {
  word: TranslationWord;
  onSelect: (word: TranslationWord) => void;
  isSelected: boolean;
}

export default function TranslationWordView({
  word,
  onSelect,
  isSelected,
}: TranslationWordViewProps) {
  const { showHebrew, showTransliteration } = useTranslation();

  return (
    <span onClick={() => onSelect(word)}>
      <span
        className={cx(styles.TranslationWordView, {
          [styles.selected]: isSelected,
        })}
      >
        {showHebrew && <span>{word.hebrew}</span>}
        {showTransliteration && <span>({word.transliteration})</span>}
        <span>{word.englishLiteral}</span>
      </span>
    </span>
  );
}
