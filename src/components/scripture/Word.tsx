import { TranslationWord } from '@/types';
import { useSettings } from '@/context/SettingsContext';
import { formatMorphology } from '@/utils/morphology';
import cx from 'classnames';
import styles from './Word.module.css';

interface WordProps {
  word: TranslationWord;
  onSelect: (word: TranslationWord) => void;
  isSelected: boolean;
}

export default function Word({ word, onSelect, isSelected }: WordProps) {
  const {
    showHebrew,
    showTransliteration,
    showEnglishLiteral,
    showEnglishNatural,
  } = useSettings();

  const lineBreaksAfter = word.lineBreaksAfter
    ? new Array(word.lineBreaksAfter).fill(<br />)
    : null;

  const lineBreaksBefore = word.lineBreaksBefore
    ? new Array(word.lineBreaksBefore).fill(<br />)
    : null;

  const morphology = formatMorphology(word.morphology);

  return (
    <>
      {lineBreaksBefore}

      <span onClick={() => onSelect(word)} className={styles.TranslationWord}>
        <span
          className={cx(styles.Word, {
            [styles.selected]: isSelected,
          })}
        >
          {/* Hebrew */}
          {showHebrew && <span>{word.hebrew}</span>}
          {showTransliteration && <span>({word.transliteration})</span>}

          {/* English */}
          {showEnglishLiteral && (
            <span>
              {word.grammarPrefix?.englishLiteral}
              {word.englishLiteral}
              {isSelected && morphology && <sub>{morphology}</sub>}
              {word.grammarSuffix?.englishLiteral}
            </span>
          )}
          {showEnglishNatural && (
            <span>
              {word.grammarPrefix?.englishNatural}
              {word.englishNatural}
              {word.grammarSuffix?.englishNatural}
              {isSelected && morphology && <sub>{morphology}</sub>}
            </span>
          )}
        </span>
      </span>

      {lineBreaksAfter}
    </>
  );
}
