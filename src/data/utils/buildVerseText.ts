import { LanguageKey, Verse } from '@/types';
import { resolveLanguage } from '@/utils/resolveLanguage';
import { resolveWordOrderKey } from '@/utils/resolveWordOrderKey';
import { sortWords } from '@/utils/sortWords';
import { resolveLineBreaks } from '@/utils/resolveLineBreaks';

/**
 * Concatenates a string/text-version of a verse from words data.
 * - This should generate a string-only rendering of a verse that matches the UI's rendering scheme,
 *   placing each word in the proper order and showing the correct grammar
 * - Mainly used for testing.
 *
 * @param verse The verse containing words to concatenate
 * @param language The language to extract: 'hebrew', 'transliteration', 'englishLiteral', or 'englishNatural'
 * @param includeGrammar Whether to include grammar in the output
 * @param includeLineBreaks Whether to include line breaks in the output
 * @returns The concatenated string of words
 */
export function buildVerseText(
  verse: Verse,
  language: LanguageKey,
  includeGrammar: boolean = true,
  includeLineBreaks: boolean = true
): string {
  // Sort words by their specified order
  const orderedWords = sortWords(verse.words, language);
  const resolvedLanguage = resolveLanguage(verse.words[0], language);
  const wordOrderKey = resolveWordOrderKey(verse.words[0], language);

  let result = '';

  orderedWords.forEach((word, index) => {
    // Skip words that don't have the requested property
    if (!word[resolvedLanguage]) return;

    // Add line breaks
    if (includeLineBreaks && word.lineBreaksBefore) {
      result += `\n`.repeat(
        resolveLineBreaks(word.lineBreaksBefore, wordOrderKey)
      );
    }

    // Add any grammar prefix if present and includeSuffixes is true
    if (includeGrammar && word?.grammarPrefix) {
      result += word.grammarPrefix?.[resolvedLanguage] || '';
    }

    // Add the word content
    result += word[resolvedLanguage];

    // Add any grammar suffix if present and includeSuffixes is true
    if (includeGrammar && word?.grammarSuffix) {
      result += word.grammarSuffix?.[resolvedLanguage] || '';
    }

    // Add line breaks
    if (includeLineBreaks && word.lineBreaksAfter) {
      result += `\n`.repeat(
        resolveLineBreaks(word.lineBreaksAfter, wordOrderKey)
      );
    }

    // Add space unless:
    // 1. It's the last word
    // 2. For Hebrew text, the current word ends with a maqaf (־)
    // 3. For transliteration text, the current word ends with a hyphen (-)
    const wordText = word[resolvedLanguage];

    if (
      (resolvedLanguage === 'hebrew' && wordText?.endsWith('־')) ||
      (resolvedLanguage === 'aramaic' && wordText?.endsWith('־')) ||
      (resolvedLanguage === 'transliteration' && wordText?.endsWith('-')) ||
      (includeLineBreaks &&
        resolveLineBreaks(word?.lineBreaksAfter, wordOrderKey)) ||
      (!includeLineBreaks && index === orderedWords.length - 1)
    ) {
      // Don't add space after dash/maqaf or line break
    } else {
      result += ' ';
    }
  });

  return result;
}
