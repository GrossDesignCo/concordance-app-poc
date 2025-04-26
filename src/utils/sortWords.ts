import { LanguageKey, TranslationWord } from '@/types';
import { resolveWordOrderKey } from './resolveWordOrderKey';

// Sort words based on a given order
export const sortWords = (words: TranslationWord[], language: LanguageKey) => {
  const key = resolveWordOrderKey(words?.[0], language);
  // Words' order is marked with a zero if they should not appear in the given order
  const filteredWords = [...words].filter((word) => word.order?.[key] !== 0);

  // Sort
  const sortedWords = filteredWords.sort((a, b) => {
    const aPos = a.order?.[key] ?? 0;
    const bPos = b.order?.[key] ?? 0;

    return aPos - bPos;
  });

  return sortedWords;
};
