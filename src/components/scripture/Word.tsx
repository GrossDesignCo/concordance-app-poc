import { TranslationWord } from '@/types';
import { formatMorphology } from '@/utils/morphology';
import cx from 'classnames';
import styles from './Word.module.css';

interface WordProps {
  word: TranslationWord;
  onSelect?: (word: TranslationWord) => void;
  isSelected?: boolean;
  variant: 'hebrew' | 'transliteration' | 'englishLiteral' | 'englishNatural';
}

export default function Word({
  word,
  onSelect,
  isSelected,
  variant,
}: WordProps) {
  // const lineBreaksAfter = word.lineBreaksAfter
  //   ? new Array(word.lineBreaksAfter).fill(<br />)
  //   : null;

  // const lineBreaksBefore = word.lineBreaksBefore
  //   ? new Array(word.lineBreaksBefore).fill(<br />)
  //   : null;

  const morphology = formatMorphology(word.morphology);

  const renderContent = () => {
    switch (variant) {
      case 'hebrew':
        return word.hebrew;
      case 'transliteration':
        return word.transliteration;
      case 'englishLiteral':
        return (
          <>
            {word.grammarPrefix?.englishLiteral}
            {word.englishLiteral}
            {isSelected && morphology && <sub>{morphology}</sub>}
            {word.grammarSuffix?.englishLiteral}
          </>
        );
      case 'englishNatural':
        return (
          <>
            {word.grammarPrefix?.englishNatural}
            {word.englishNatural}
            {word.grammarSuffix?.englishNatural}
            {isSelected && morphology && <sub>{morphology}</sub>}
          </>
        );
    }
  };

  return (
    <>
      {/* {lineBreaksBefore} */}
      <span onClick={() => onSelect?.(word)} className={styles.TranslationWord}>
        <span
          className={cx(styles.Word, {
            [styles.selected]: isSelected,
          })}
        >
          {renderContent()}
        </span>
      </span>
      {/* {lineBreaksAfter} */}
    </>
  );
}
