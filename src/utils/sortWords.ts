import { LanguageKey, TranslationWord, WordOrderKey } from '@/types';
import { resolveWordOrderKey } from './resolveWordOrderKey';

// Order could be a number if consisntent or broken up by language if languages differ
const resolveOrder = (word: TranslationWord, key: WordOrderKey) => {
  return typeof word.order === 'number' ? word.order : word.order?.[key] ?? 0;
};

// Sort words based on a given order
export const sortWords = (words: TranslationWord[], language: LanguageKey) => {
  const key = resolveWordOrderKey(words?.[0], language);
  // Words' order is marked with a zero if they should not appear in the given order
  const filteredWords = [...words].filter(
    (word) => resolveOrder(word, key) !== 0
  );

  // Sort
  const sortedWords = filteredWords.sort((a, b) => {
    const aPos = resolveOrder(a, key);
    const bPos = resolveOrder(b, key);

    return aPos - bPos;
  });

  return sortedWords;
};
