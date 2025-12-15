/**
 * Dictionary of Aramaic suffixes
 *
 * Aramaic suffixes differ from Hebrew:
 * - Emphatic state endings (-א/-a)
 * - Different pronominal suffixes
 * - Different plural forms
 */

const SUFFIXES = {
  // Daniel 2:29 additions
  a: {
    aramaic: 'א',
    transliteration: 'a',
    englishLiteral: 'the',
    englishNatural: 'the',
    description: 'emphatic/determined state ending (Aramaic definite marker)',
    function: 'emphatic state',
  },
  akh: {
    aramaic: 'ך',
    transliteration: 'akh',
    englishLiteral: 'your',
    englishNatural: 'your',
    description: '2nd person masculine singular suffix (Aramaic)',
    function: 'pronominal suffix',
  },
  ayya: {
    aramaic: 'יא',
    transliteration: 'ayya',
    englishLiteral: 'the',
    englishNatural: 'the',
    description: 'emphatic state plural ending (Aramaic)',
    function: 'emphatic state plural',
  },
  // Daniel 2:30 additions
  ah: {
    aramaic: 'ה',
    transliteration: 'ah',
    englishLiteral: 'the',
    englishNatural: 'the',
    description: 'emphatic state singular ending (Aramaic alternate form)',
    function: 'emphatic state',
  },
  // Daniel 2:31 additions
  ta: {
    aramaic: 'תָ',
    transliteration: 'ta',
    englishLiteral: 'you',
    englishNatural: 'you',
    description: '2nd person masculine singular suffix (Aramaic)',
    function: 'pronominal suffix',
  },
  eh: {
    aramaic: 'הּ',
    transliteration: 'eh',
    englishLiteral: 'its',
    englishNatural: 'its',
    description: '3rd person masculine singular suffix (Aramaic)',
    function: 'pronominal suffix',
  },
} as const;

type SuffixKey = keyof typeof SUFFIXES;

interface SuffixElement {
  aramaic: string;
  transliteration: string;
  englishLiteral: string;
  englishNatural: string;
  description?: string;
  function?: string;
}

// Type-safe export for Aramaic Dictionary
export const suffixes: Record<SuffixKey, SuffixElement> = SUFFIXES;
