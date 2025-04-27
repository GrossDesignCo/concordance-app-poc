import { useTheme } from 'next-themes';
import { LanguageKey, TranslationWord } from '@/types';
import { useSelection } from '@/context/SelectionContext';
import cx from 'classnames';
import styles from './Word.module.css';
import { LineBreaks } from './LineBreaks';
import { resolveWordOrderKey } from '@/utils/resolveWordOrderKey';
import { formatWord } from '@/utils/formatWord';
import { useLexicon } from '@/context/LexiconContext';

export interface WordProps {
  word: TranslationWord;
  language: LanguageKey;
  showGrammar?: boolean;
  asRawText?: boolean;
}

export default function Word({
  word,
  language = 'englishLiteral',
  showGrammar,
}: WordProps) {
  const {
    selectedWords,
    toggleWordSelection,
    addWordToSelection,
    selectRange,
  } = useSelection();

  const isSelected = selectedWords.includes(word);
  const selectedRoots = selectedWords.map((w) => w.root);
  const hasSelectedRoot = word.root && selectedRoots.includes(word.root);

  const { resolvedTheme } = useTheme();

  const reverseTheme = resolvedTheme === 'light' ? 'dark' : 'light';

  const { hasEntry } = useLexicon();
  const showEntryLink = hasEntry(word.transliteration);

  // Handle desktop interactions
  const handleClick = (e: React.MouseEvent) => {
    if (e.shiftKey) {
      // Range selection
      if (selectedWords.length > 0) {
        selectRange(selectedWords[0], word);
      } else {
        toggleWordSelection(word);
      }
    } else if (e.metaKey) {
      // Add to selection
      addWordToSelection(word);
    } else {
      // Toggle single word
      toggleWordSelection(word);
    }
  };

  // Get the actual text of the word to render based on props + data
  const { wordText, formattedWordText } = formatWord(
    word,
    language,
    showGrammar
  );

  // Accessibility attributes
  const ariaLabel = `${wordText}${isSelected ? ', selected' : ''}`;
  const ariaPressed = isSelected ? 'true' : 'false';

  // Determine what kind of line breaks to show
  const wordOrderKey = resolveWordOrderKey(word, language);
  const lineBreaksAfter = showGrammar ? (
    <LineBreaks numberOfBreaks={word?.lineBreaksAfter?.[wordOrderKey]} />
  ) : null;
  const lineBreaksBefore = showGrammar ? (
    <LineBreaks numberOfBreaks={word?.lineBreaksBefore?.[wordOrderKey]} />
  ) : null;

  return (
    <>
      {lineBreaksBefore}

      <span
        onClick={handleClick}
        role="button"
        aria-label={ariaLabel}
        aria-pressed={ariaPressed}
        tabIndex={0}
        className={cx(styles.TranslationWord, [`word=${wordText}`], {
          [styles.selected]: isSelected,
          [styles.selectedRoot]: hasSelectedRoot && !isSelected,
          [styles.hasEntry]: showEntryLink,
        })}
      >
        <span
          className={cx(styles.Word, {
            [`theme-${reverseTheme}`]: isSelected,
          })}
        >
          {formattedWordText}
        </span>
      </span>

      {lineBreaksAfter}
    </>
  );
}
