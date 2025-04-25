import { TranslationWord } from '@/types';

// Sort words based on Hebrew order
export const sortWords = (
  words: TranslationWord[],
  key: 'hebrew' | 'greek' | 'english'
) => {
  const sortedWords = [...words].sort((a, b) => {
    const aPos = a.order?.[key] ?? 0;
    const bPos = b.order?.[key] ?? 0;

    return aPos - bPos;
  });

  return sortedWords;
};
