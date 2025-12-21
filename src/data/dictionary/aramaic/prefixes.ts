/**
 * Dictionary of Aramaic prefix elements
 * 
 * Aramaic prefixes are similar to Hebrew but with some differences:
 * - Emphatic state instead of definite article
 * - Different verb forms
 */

const PREFIXES = {
  // Daniel 2:29 additions
  mi: {
    aramaic: 'מ',
    transliteration: 'mi',
    englishLiteral: 'from',
    englishNatural: 'from',
    description: 'from, preposition prefix (Aramaic)',
    function: 'preposition',
  },
  ve: {
    aramaic: 'ו',
    transliteration: 've',
    englishLiteral: 'and',
    englishNatural: 'and',
    description: 'and, conjunction (Aramaic)',
    function: 'conjunction',
  },
  le: {
    aramaic: 'ל',
    transliteration: 'le',
    englishLiteral: 'to',
    englishNatural: 'to',
    description: 'to, for, preposition prefix (Aramaic)',
    function: 'preposition',
  },
  ho: {
    aramaic: 'ה',
    transliteration: 'ho',
    englishLiteral: 'he',
    englishNatural: '',
    description: 'haphel stem prefix - causative (Aramaic equivalent of Hebrew hiphil)',
    function: 'verb stem marker',
  },
  // Daniel 2:30 additions
  va: {
    aramaic: 'וַ',
    transliteration: 'va',
    englishLiteral: 'and',
    englishNatural: 'and',
    description: 'conjunction - and (Aramaic)',
    function: 'conjunction',
  },
  be: {
    aramaic: 'בְּ',
    transliteration: 'be',
    englishLiteral: 'in',
    englishNatural: 'in',
    description: 'preposition - in, with (Aramaic)',
    function: 'preposition',
  },
  ye: {
    aramaic: 'יְ',
    transliteration: 'ye',
    englishLiteral: 'he-will',
    englishNatural: 'will',
    description: '3rd person masculine imperfect prefix (Aramaic)',
    function: 'verb prefix',
  },
  // Daniel 2:32 additions
  u: {
    aramaic: 'וּ',
    transliteration: 'u',
    englishLiteral: 'and',
    englishNatural: 'and',
    description: 'conjunction - and (Aramaic, variant before consonant clusters)',
    function: 'conjunction',
  },
  // Daniel 2:35 additions
  ka: {
    aramaic: 'כְּ',
    transliteration: 'ka',
    englishLiteral: 'like',
    englishNatural: 'like',
    description: 'preposition - like, as (Aramaic)',
    function: 'preposition',
  },
  ke: {
    aramaic: 'כְּ',
    transliteration: 'ke',
    englishLiteral: 'like',
    englishNatural: 'like',
    description: 'preposition - like, as (Aramaic, alternate form)',
    function: 'preposition',
  },
  // Daniel 2:37 additions
  vi: {
    aramaic: 'וִ',
    transliteration: 'vi',
    englishLiteral: 'and',
    englishNatural: 'and',
    description: 'conjunction - and (Aramaic, variant before yod)',
    function: 'conjunction',
  },
  // Daniel 2:38 additions
  bi: {
    aramaic: 'בִּ',
    transliteration: 'bi',
    englishLiteral: 'in',
    englishNatural: 'in',
    description: 'preposition - in, with (Aramaic, variant before consonants)',
    function: 'preposition',
  },
  ha: {
    aramaic: 'הַ',
    transliteration: 'ha',
    englishLiteral: 'he-caused',
    englishNatural: 'he caused',
    description: 'haphel stem prefix - causative (Aramaic)',
    function: 'verb stem marker',
  },
  // Daniel 2:41 additions
  ba: {
    aramaic: 'בַּ',
    transliteration: 'ba',
    englishLiteral: 'in',
    englishNatural: 'in',
    description: 'preposition - in, with (Aramaic, variant)',
    function: 'preposition',
  },
} as const;

type PrefixKey = keyof typeof PREFIXES;

interface PrefixElement {
  aramaic: string;
  transliteration: string;
  englishLiteral: string;
  englishNatural: string;
  description?: string;
  function?: string;
}

// Type-safe export for Aramaic Dictionary
export const prefixes: Record<PrefixKey, PrefixElement> = PREFIXES;

