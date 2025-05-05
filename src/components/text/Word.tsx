// import { useTheme } from 'next-themes';
import { LanguageKey, TranslationWord } from '@/types';
import { useSelection } from '@/context/SelectionContext';
import cx from 'classnames';
import styles from './Word.module.css';
import { LineBreaks } from './LineBreaks';
import { resolveWordOrderKey } from '@/utils/resolveWordOrderKey';
import { formatWord } from '@/utils/formatWord';
import { useLexicon } from '@/context/LexiconContext';
import { useEffect, useState } from 'react';

export interface WordProps {
  word: TranslationWord;
  language: LanguageKey;
  showGrammar?: boolean;
  asRawText?: boolean;
  onClick?: (e: MouseEvent, word: TranslationWord) => void;
}

export default function Word({
  word,
  language = 'englishLiteral',
  showGrammar,
  onClick,
}: WordProps) {
  // Whenever the lexicon is updated, refresh the check for whether the lexicon includes this word
  const { lexiconState, hasEntry } = useLexicon();
  const [showEntryLink, setShowEntryLink] = useState(false);

  useEffect(() => {
    setShowEntryLink(hasEntry(word.transliteration));
  }, [lexiconState, hasEntry, word.transliteration, word, language]);

  // Visual states
  const { selectedWords } = useSelection();
  const isSelected = selectedWords.includes(word);
  const selectedRoots = selectedWords.map((w) => w.root);
  const hasSelectedRoot = word.root && selectedRoots.includes(word.root);

  // const { resolvedTheme } = useTheme();
  // const reverseTheme = resolvedTheme === 'light' ? 'dark' : 'light';

  // Get the actual text + grammar of the word to render based on props + data
  const { wordText, formattedWordText } = formatWord(
    word,
    language,
    showGrammar
  );

  if (!wordText) {
    return null;
  }

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
        // @ts-expect-error - MouseEvents are dumb
        onClick={(e) => onClick?.(e, word)}
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
            // [`theme-${reverseTheme}`]: isSelected,
          })}
        >
          {formattedWordText}
        </span>
      </span>

      {lineBreaksAfter}
    </>
  );
}
