import { LanguageKey, TranslationWord } from '@/types';
import { sortWords } from '@/utils/sortWords';
import { Fragment } from 'react';
import Word from './Word';
import { resolveWordOrderKey } from '@/utils/resolveWordOrderKey';
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
}

export const String = ({
  words,
  language,
  delimiter = ' ',
  showGrammar,
}: StringProps) => {
  const resolvedLanguage = resolveLanguage(words?.[0], language);
  // Get sorted words based on language order
  const sortedWords = sortWords(words, language);

  return (
    <span
      className={cx(styles.String, styles[language])}
      dir={resolvedLanguage === 'hebrew' ? 'rtl' : undefined}
    >
      {sortedWords.map((word, i) => {
        return (
          <Fragment key={`${word.transliteration}-${i}`}>
            <Word word={word} language={language} showGrammar={showGrammar} />
            {i < words.length && delimiter}
          </Fragment>
        );
      })}
    </span>
  );
};
