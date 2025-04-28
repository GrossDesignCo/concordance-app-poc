import { LanguageKey, TranslationWord } from '@/types';
import { sortWords } from '@/utils/sortWords';
import { Fragment } from 'react';
import Word from './Word';
import cx from 'classnames';
import styles from './String.module.css';
import { resolveLanguage } from '@/utils/resolveLanguage';

interface StringProps {
  words: TranslationWord[];
  language: LanguageKey;
  // Arbitrary char to place between word renderings
  // usually a space or dash depending on the circumstances
  delimiter?: string;
  showGrammar?: boolean;
  asRawText?: boolean;
  onClick?: (word: TranslationWord, index: number) => void;
}

export const String = ({
  words,
  language,
  delimiter = ' ',
  onClick,
  ...rest
}: StringProps) => {
  // Resolve `original` to actual language used for styling
  const resolvedLanguage = resolveLanguage(words?.[0], language as LanguageKey);

  // Get sorted words based on language order
  const sortedWords = sortWords(words, language);
  const dir = resolvedLanguage === 'hebrew' ? 'rtl' : undefined;

  return (
    <span className={cx(styles.String, styles[language])} dir={dir}>
      {sortedWords.map((word, i) => {
        return (
          <Fragment key={`${word.transliteration}-${i}`}>
            <Word
              word={word}
              language={language}
              onClick={(word) => onClick?.(word, i)}
              {...rest}
            />
            {i < words.length && delimiter}
          </Fragment>
        );
      })}
    </span>
  );
};
