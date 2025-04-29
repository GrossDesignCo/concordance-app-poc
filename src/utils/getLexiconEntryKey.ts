import { TranslationWord } from '@/types';
import { formatWord } from './formatWord';
import { sortWords } from './sortWords';

export const getLexiconEntryKey = (words: TranslationWord[]) => {
  // Create a dashed string of transliterations, matching what we use to key lexicon entries on the backend
  // eg. "waste and void" -> `tohu-vaVohu`
  const sortedWords = sortWords(words, 'transliteration');

  const key = sortedWords
    .map((word) => {
      const { wordText } = formatWord(word, 'transliteration');

      return wordText;
    })
    .join('-');

  return key;
};
