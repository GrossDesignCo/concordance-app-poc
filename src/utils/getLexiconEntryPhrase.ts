import { LanguageKey, TranslationWord } from '@/types';
import { formatWord } from './formatWord';
import { sortWords } from './sortWords';

export const getLexiconEntryPhrase = (words: TranslationWord[]) => {
  // Create a dashed string of transliterations, matching what we use to key lexicon entries on the backend
  // eg. "waste and void" -> `tohu-vaVohu`
  const sortedWords = sortWords(words, 'transliteration');

  const fullPhrase =['original', 'transliteration', 'englishLiteral'].map((format) => {
    const phrase = sortedWords.map((word) => {
      const { wordText } = formatWord(word, format as LanguageKey);

      return wordText
    }).join(' ');

    return phrase;
  }).join(' / ');

  return fullPhrase;
};
