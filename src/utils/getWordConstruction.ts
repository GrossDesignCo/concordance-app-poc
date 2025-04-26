import { TranslationWord } from '@/types';

// Eg. veVaKha / and-against-you -> ve va kha
export const getWordConstruction = (word: TranslationWord) => {
  const { root, prefixes, suffixes } = word;

  const pre = prefixes ? `${prefixes?.join(` • `)} • ` : '';
  const suff = suffixes ? ` • ${suffixes?.join(` • `)}` : '';

  const wordConstruction = `${pre}${root}${suff}`;

  return wordConstruction;
};
