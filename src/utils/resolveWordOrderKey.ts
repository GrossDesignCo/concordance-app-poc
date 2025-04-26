import { LanguageKey, TranslationWord, WordOrderKey } from '@/types';

export const resolveWordOrderKey = (
  word: TranslationWord,
  language: LanguageKey
) => {
  // By default assume hebrew word order since that's the most common
  let key: WordOrderKey = 'hebrew';

  // Greek
  if (word?.greek && language === 'original') {
    key = 'greek';
  }

  // Natural English is the only translation for now that uses the english word order
  if (language === 'englishNatural') {
    key = 'english';
  }

  return key;
};
