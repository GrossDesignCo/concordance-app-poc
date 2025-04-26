import { LanguageKey, TranslationWord } from '@/types';
import { resolveLanguage } from './resolveLanguage';

export const formatWord = (
  word: TranslationWord,
  language: LanguageKey,
  showGrammar?: boolean
) => {
  const key = resolveLanguage(word, language);
  // @ts-expect-error - key won't resolve if it's wrong and that's fine
  const gPref = word?.grammarPrefix?.[key] ?? '';
  // @ts-expect-error - key won't resolve if it's wrong and that's fine
  const gSuff = word?.grammarSuffix?.[key] ?? '';
  const wordText = word?.[key];
  const formattedWordText = showGrammar
    ? `${gPref}${wordText}${gSuff}`
    : wordText;

  return { wordText, formattedWordText };
};
