/**
 * Dictionary of Hebrew prefix elements
 */

const PREFIXES = {
  be: {
    hebrew: 'בְּ',
    transliteration: 'be',
    englishLiteral: 'in',
    englishNatural: 'in',
  },
  ve: {
    hebrew: 'וְ',
    transliteration: 've',
    englishLiteral: 'and',
    englishNatural: 'and',
  },
  va: {
    hebrew: 'וַ',
    transliteration: 'va',
    englishLiteral: 'and',
    englishNatural: 'and',
  },
  u: {
    hebrew: 'וּ',
    transliteration: 'u',
    englishLiteral: 'but',
    englishNatural: 'but',
  },
  ha: {
    hebrew: 'הַ',
    transliteration: 'ha',
    englishLiteral: 'the',
    englishNatural: 'the',
  },
  al: {
    hebrew: 'עַל',
    transliteration: 'al',
    englishLiteral: 'on',
    englishNatural: 'over',
  },
  me: {
    hebrew: 'מְ',
    transliteration: 'me',
    englishLiteral: 'was',
    englishNatural: 'was',
  },
  ye: {
    hebrew: 'יְ',
    transliteration: 'ye',
    englishLiteral: '',
    englishNatural: 'let there',
  },
  ne: {
    hebrew: 'נ',
    transliteration: 'ne',
    englishLiteral: 'are',
    englishNatural: 'are',
  },
  ni: {
    hebrew: 'נ',
    transliteration: 'ni',
    englishLiteral: 'himself',
    englishNatural: 'himself',
  },
  mi: {
    hebrew: 'מ',
    transliteration: 'mi',
    englishLiteral: 'from',
    englishNatural: 'from',
  },
  tav: {
    hebrew: 'ת',
    transliteration: 'tav',
    englishLiteral: 'you-shall',
    englishNatural: 'you shall',
  },
  pen: {
    hebrew: 'פֶּן',
    transliteration: 'pen',
    englishLiteral: 'lest',
    englishNatural: 'lest',
  },
  // Numbers 21:6-9 prefixes
  ba: {
    hebrew: 'בַּ',
    transliteration: 'ba',
    englishLiteral: 'in-the',
    englishNatural: 'against',
  },
  yit: {
    hebrew: 'יִתְ',
    transliteration: 'yit',
    englishLiteral: 'he-will-himself',
    englishNatural: '',
  },
  yi: {
    hebrew: 'יִ',
    transliteration: 'yi',
    englishLiteral: 'let',
    englishNatural: 'let',
  },
  hi: {
    hebrew: 'הִ',
    transliteration: 'hi',
    englishLiteral: 'cause-to',
    englishNatural: '',
  },
  le: {
    hebrew: 'ל',
    transliteration: 'le',
    englishLiteral: 'to',
    englishNatural: 'to',
  },
  hit: {
    hebrew: 'הִתְ',
    transliteration: 'hit',
    englishLiteral: 'self',
    englishNatural: '',
  },
  bi: {
    hebrew: 'ב',
    transliteration: 'bi',
    englishLiteral: 'with',
    englishNatural: 'with',
  },
  ti: {
    hebrew: 'ת',
    transliteration: 'ti',
    englishLiteral: 'you-shall',
    englishNatural: 'you shall',
  },
  la: {
    hebrew: 'לַ',
    transliteration: 'la',
    englishLiteral: 'to',
    englishNatural: 'to',
  },
  ta: {
    hebrew: 'תַּ',
    transliteration: 'ta',
    englishLiteral: 'let',
    englishNatural: 'let',
  },
  ma: {
    hebrew: 'מַ',
    transliteration: 'ma',
    englishLiteral: 'one-who',
    englishNatural: 'one who',
  },
  li: {
    hebrew: 'לִ',
    transliteration: 'li',
    englishLiteral: 'to',
    englishNatural: 'to',
  },
  // Isaiah prefixes
  // Add other common prefixes
  ka: {
    hebrew: 'כָּ',
    transliteration: 'ka',
    englishLiteral: 'like',
    englishNatural: 'like',
  },
  na: {
    hebrew: 'נַ',
    transliteration: 'na',
    englishLiteral: 'let-us',
    englishNatural: 'let us',
  },
  ki: {
    hebrew: 'כִּי',
    transliteration: 'ki',
    englishLiteral: 'that',
    englishNatural: 'that',
  },
  ke: {
    hebrew: 'כְּ',
    transliteration: 'ke',
    englishLiteral: 'as',
    englishNatural: 'as',
  },
} as const;

type PrefixKey = keyof typeof PREFIXES;

interface PrefixElement {
  hebrew: string;
  transliteration: string;
  englishLiteral: string;
  englishNatural: string;
  function?: string;
}

// Type-safe export for Hebrew Dictionary
export const prefixes: Record<PrefixKey, PrefixElement> = PREFIXES;
