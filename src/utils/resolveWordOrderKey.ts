import { LanguageKey, TranslationWord, WordOrderKey } from '@/types';

export const resolveWordOrderKey = (
  word: TranslationWord,
  language: LanguageKey
) => {
  // By default assume hebrew word order since that's the most common
  let key: WordOrderKey = 'hebrew';

  // Aramaic (for original text, transliteration, and English literal of Aramaic texts)
  if (
    word?.aramaic &&
    (language === 'original' ||
      language === 'transliteration' ||
      language === 'englishLiteral')
  ) {
    key = 'aramaic';
  }

  // Greek (for original text, transliteration, and English literal of Greek texts)
  if (
    word?.greek &&
    (language === 'original' ||
      language === 'transliteration' ||
      language === 'englishLiteral')
  ) {
    key = 'greek';
  }

  // Natural English uses the english word order
  if (language === 'englishNatural') {
    key = 'english';
  }

  return key;
};
