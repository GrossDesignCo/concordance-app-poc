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

