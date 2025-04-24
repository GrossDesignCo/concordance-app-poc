import { useTheme } from 'next-themes';
import { TranslationWord } from '@/types';
import { formatMorphology } from '@/utils/morphology';
import { useWordSelection } from '@/context/WordSelectionContext';
import { useRootSelection } from '@/context/RootSelectionContext';

import cx from 'classnames';
import styles from './Word.module.css';

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

export default function Word({ word, variant }: WordProps) {
  const { selectedWord, setSelectedWord } = useWordSelection();
  const { selectedRoot, setSelectedRoot } = useRootSelection();
  const { resolvedTheme } = useTheme();

  const lineBreaksAfter = word.lineBreaksAfter
    ? new Array(word.lineBreaksAfter).map((l, i) => <br key={i} />)
    : null;

  const lineBreaksBefore = word.lineBreaksBefore
    ? new Array(word.lineBreaksBefore).map((l, i) => <br key={i} />)
    : null;

  const morphology = formatMorphology(word.morphology);

  const renderContent = (
    word: TranslationWord,
    showMorphology: boolean = true
  ) => {
    switch (variant) {
      case 'original':
        return word.hebrew ? word.hebrew : word.greek ? word.greek : '';
      case 'transliteration':
        return word.transliteration;
      case 'englishLiteral':
        return (
          <>
            {word.grammarPrefix?.englishLiteral}
            {word.englishLiteral}
            {isSelected && showMorphology && morphology && (
              <sub>{morphology}</sub>
            )}
            {word.grammarSuffix?.englishLiteral}
          </>
        );
      case 'englishNatural':
        return (
          <>
            {word.grammarPrefix?.englishNatural}
            {word.englishNatural}
            {word.grammarSuffix?.englishNatural}
            {isSelected && showMorphology && morphology && (
              <sub>{morphology}</sub>
            )}
          </>
        );
    }
  };

  const reverseTheme = resolvedTheme === 'light' ? 'dark' : 'light';

  // Add this word to the selection array
  const handleSelect = () => {
    const isDeselecting = word === selectedWord;
    setSelectedWord(isDeselecting ? null : word);

    if (word.root) {
      setSelectedRoot(isDeselecting ? null : word.root);
    }
  };

  const isSelected = selectedWord === word;
  const hasSelectedRoot =
    word.root && selectedRoot && word.root === selectedRoot;

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
          {renderContent(word)}
        </span>

        {/* Couple Alternate Word Breakdowns: */}

        {/* 1. Show the construction: `in • head • ing` */}
        {/* {isSelected && (
          <span className={styles.Root}>
            {word.prefixes &&
              word.prefixes.map((prefix) => renderContent(prefix, false))}
            {word.prefixes && word.root && ` • `}
            {word.root && renderContent(word.root, false)}
            {word.root && word.suffixes && ` • `}
            {word.suffixes &&
              word.suffixes.map((suffix) => renderContent(suffix, false))}
          </span>
        )} */}

        {/* 2. Show the full chain `בְּרֵאשִׁ֖ית • beReshit • in-heading • In heading` */}
      </span>

      {lineBreaksAfter}
    </>
  );
}
