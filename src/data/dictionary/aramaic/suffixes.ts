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
  // Daniel 2:32 additions
  ohi: {
    aramaic: 'וֹהִי',
    transliteration: 'ohi',
    englishLiteral: 'its',
    englishNatural: 'its',
    description: '3rd person masculine singular possessive suffix (Aramaic, on plural or dual nouns)',
    function: 'pronominal suffix',
  },
  teh: {
    aramaic: 'תֵהּ',
    transliteration: 'teh',
    englishLiteral: 'its',
    englishNatural: 'its',
    description: '3rd person feminine plural suffix (Aramaic)',
    function: 'pronominal suffix',
  },
  // Daniel 2:33 additions
  hon: {
    aramaic: 'הוֹן',
    transliteration: 'hon',
    englishLiteral: 'them',
    englishNatural: 'them',
    description: '3rd person masculine plural suffix (Aramaic)',
    function: 'pronominal suffix',
  },
  // Daniel 2:39 additions
  aah: {
    aramaic: 'אָה',
    transliteration: 'aah',
    englishLiteral: 'the',
    englishNatural: 'the',
    description: 'emphatic state suffix (Aramaic, alternate form)',
    function: 'emphatic state',
  },
  // Daniel 2:40 additions
  yah: {
    aramaic: 'יָה',
    transliteration: 'yah',
    englishLiteral: 'the',
    englishNatural: 'the',
    description: 'emphatic state suffix (Aramaic, alternate form)',
    function: 'emphatic state',
  },
  // Daniel 2:41 additions
  ata: {
    aramaic: 'תָא',
    transliteration: 'ata',
    englishLiteral: 'the',
    englishNatural: 'the',
    description: 'emphatic state plural suffix (Aramaic)',
    function: 'emphatic state',
  },
  h: {
    aramaic: 'הּ',
    transliteration: 'h',
    englishLiteral: 'it',
    englishNatural: 'it',
    description: '3rd person feminine singular suffix (Aramaic)',
    function: 'pronominal suffix',
  },
  // Daniel 2:43 additions
  in: {
    aramaic: 'ִין',
    transliteration: 'in',
    englishLiteral: '',
    englishNatural: '',
    description: 'masculine plural active participle ending (Aramaic)',
    function: 'participle plural',
  },
  on: {
    aramaic: 'וֹן',
    transliteration: 'on',
    englishLiteral: 'them',
    englishNatural: 'them',
    description: '3rd person masculine plural pronominal suffix (Aramaic)',
    function: 'pronominal suffix',
  },
  // Daniel 2:44 additions
  ehon: {
    aramaic: 'ֵיהוֹן',
    transliteration: 'ehon',
    englishLiteral: 'their',
    englishNatural: 'their',
    description: '3rd person masculine plural possessive suffix (Aramaic)',
    function: 'pronominal suffix',
  },
  aya: {
    aramaic: 'ַיָּא',
    transliteration: 'aya',
    englishLiteral: 'the',
    englishNatural: 'the',
    description: 'emphatic state plural suffix (Aramaic, alternate form)',
    function: 'emphatic state',
  },
  // Daniel 2:30 additions (missing clause)
  ei: {
    aramaic: 'ֵי',
    transliteration: 'ei',
    englishLiteral: 'of',
    englishNatural: 'of',
    description: 'plural construct ending (Aramaic)',
    function: 'construct state plural',
  },
  // Daniel 2:45 additions
  ayin: {
    aramaic: 'ַיִן',
    transliteration: 'ayin',
    englishLiteral: '',
    englishNatural: '',
    description: 'dual noun ending (Aramaic)',
    function: 'dual state',
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
