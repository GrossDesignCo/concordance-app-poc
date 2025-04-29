import { Verse } from '@/types';

/**
 * Concatenates a string/text-version of a verse from words data.
 * - This should generate a string-only rendering of a verse that matches the UI's rendering scheme,
 *   placing each word in the proper order and showing the correct grammar
 * - Mainly used for testing.
 *
 * @param verse The verse containing words to concatenate
 * @param type The type of text to extract: 'hebrew', 'transliteration', 'englishLiteral', or 'englishNatural'
 * @param orderKey The order property to use: 'hebrew' or 'english'
 * @param includeSuffixes Whether to include grammar suffixes in the output
 * @returns The concatenated string of words
 */
export function buildVerseText(
  verse: Verse,
  type:
    | 'hebrew'
    | 'greek'
    | 'transliteration'
    | 'englishLiteral'
    | 'englishNatural',
  orderKey: 'hebrew' | 'english' | 'greek'
): string {
  // Sort words by their specified order
  const orderedWords = [...verse.words].sort(
    (a, b) => (a.order?.[orderKey] || 0) - (b.order?.[orderKey] || 0)
  );

  let result = '';

  const languagesWithGrammar = [
    'greek',
    'transliteration',
    'englishLiteral',
    'englishNatural',
  ];

  orderedWords.forEach((word, index) => {
    // Skip words that don't have the requested property
    if (!word[type]) return;

    // Add any grammar prefix if present and includeSuffixes is true
    if (languagesWithGrammar.includes(type) && word.grammarPrefix) {
      // @ts-expect-error - using a subset of grammar keys, which TS doesn't recognize
      result += word.grammarPrefix?.[type] || '';
    }

    // Add the word content
    result += word[type];

    // Add any grammar suffix if present and includeSuffixes is true
    if (languagesWithGrammar.includes(type) && word.grammarSuffix) {
      // @ts-expect-error - using a subset of grammar keys, which TS doesn't recognize
      result += word.grammarSuffix?.[type] || '';
    }

    // Add space unless:
    // 1. It's the last word
    // 2. For Hebrew text, the current word ends with a maqaf (־)
    // 3. For transliteration text, the current word ends with a hyphen (-)
    if (index < orderedWords.length - 1) {
      const wordText = word[type];
      if (
        (type === 'hebrew' && wordText?.endsWith('־')) ||
        (type === 'transliteration' && wordText?.endsWith('-'))
      ) {
        // Don't add space after dash/maqaf
      } else {
        result += ' ';
      }
    }
  });

  return result;
}
