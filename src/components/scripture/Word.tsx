import { useTheme } from 'next-themes';
import { TranslationWord } from '@/types';
import { formatMorphology } from '@/utils/morphology';
import { useSelection } from '@/context/SelectionContext';

import cx from 'classnames';
import styles from './Word.module.css';
// import { useSettings } from '@/context/SettingsContext';

interface WordProps {
  word: TranslationWord;
  onSelect?: (word: TranslationWord) => void;
  isSelected?: boolean;
  variant?:
    | 'original'
    | 'transliteration'
    | 'englishLiteral'
    | 'englishNatural';
}

const LineBreaks = ({ numberOfBreaks }: { numberOfBreaks?: number }) => {
  switch (numberOfBreaks) {
    case undefined:
      return null;
    case 1:
      return <br />;
    case 2:
      // Special rendering so we can adjust the spacing for single and double breaks
      return <span className={styles.doubleBreak} />;
  }
};

export const WordText = ({ word, variant }: WordProps) => {
  switch (variant) {
    case 'original':
      return word.hebrew ? word.hebrew : word.greek ? word.greek : '';
    case 'transliteration':
      return word.transliteration;
    case 'englishLiteral':
      return `${word.grammarPrefix?.englishLiteral ?? ''}${
        word.englishLiteral
      }${word.grammarSuffix?.englishLiteral ?? ''}`;
    case 'englishNatural':
      return `${word.grammarPrefix?.englishNatural ?? ''}${
        word.englishNatural
      }${word.grammarSuffix?.englishNatural ?? ''}`;
  }
};

export default function Word({ word, variant }: WordProps) {
  // const { showOriginal, showTransliteration } = useSettings();
  const { selectedWord, setSelectedWord } = useSelection();
  const isSelected = selectedWord === word;
  const { resolvedTheme } = useTheme();

  const lineBreaksAfter = <LineBreaks numberOfBreaks={word.lineBreaksAfter} />;
  const lineBreaksBefore = (
    <LineBreaks numberOfBreaks={word.lineBreaksBefore} />
  );

  // const morphology = formatMorphology(word.morphology);

  const reverseTheme = resolvedTheme === 'light' ? 'dark' : 'light';

  // Add this word to the selection array
  const handleSelect = () => {
    setSelectedWord(isSelected ? null : word);
  };

  const hasSelectedRoot =
    word.root && selectedWord?.root && word.root === selectedWord.root;

  return (
    <>
      {lineBreaksBefore}

      <span
        onClick={handleSelect}
        className={cx(styles.TranslationWord, {
          [styles.selected]: isSelected,
          [styles.selectedRoot]: hasSelectedRoot && !isSelected,
        })}
      >
        <span
          className={cx(styles.Word, {
            [`theme-${reverseTheme}`]: isSelected,
          })}
        >
          <WordText word={word} variant={variant} />
        </span>

        {/* Couple Alternate Word Breakdowns: */}

        {/* 1. Show the construction: `in • head • ing` */}
        {/* {isSelected && (
          <span className={styles.Root}>
            <span>{!showOriginal && showTransliteration && word.hebrew}</span>
            <span>{!showTransliteration && word.transliteration}</span>
            <span className={styles.Construction}>
              {word.prefixes &&
                word.prefixes.map((prefix) => renderContent(prefix, false))}
              {word.prefixes && word.root && ` • `}
              {word.root && renderContent(word.root, false)}
              {word.root && word.suffixes && ` • `}
              {word.suffixes &&
                word.suffixes.map((suffix) => renderContent(suffix, false))}
            </span>
          </span>
        )} */}

        {/* 2. Show the full chain `בְּרֵאשִׁ֖ית • beReshit • in-heading • In heading` */}
      </span>

      {lineBreaksAfter}
    </>
  );
}
