import { Verse } from '@/types';

export const proverbs_8_2: Verse = {
  meta: {
    book: 'Proverbs',
    chapter: 8,
    verse: 2,
  },
  words: [
    {
      hebrew: 'בְּרֹאשׁ',
      transliteration: 'beRosh',
      englishLiteral: 'In-head-of',
      englishNatural: 'In head of',
      root: 'rosh',
      prefixes: ['be'],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'מְרוֹמִים',
      transliteration: 'meromim',
      englishLiteral: 'heights',
      englishNatural: 'heights',
      root: 'marom',
      suffixes: ['im'],
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'עֲלֵי־',
      transliteration: 'alei-',
      englishLiteral: 'overlooking',
      englishNatural: 'overlooking',
      root: 'alei',
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'דָרֶךְ',
      transliteration: 'derekh',
      englishLiteral: 'way',
      englishNatural: 'a way',
      root: 'derekh',
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'בֵּין',
      transliteration: 'bein',
      englishLiteral: 'between',
      englishNatural: 'between',
      root: 'bein',
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        type: 'preposition',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'נְתִיבוֹת',
      transliteration: 'netivot',
      englishLiteral: 'paths',
      englishNatural: 'paths',
      root: 'netivah',
      suffixes: ['ot'],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'feminine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'נִצָּבָה',
      transliteration: 'nitzavah',
      englishLiteral: 'she-has-stationed_herself',
      englishNatural: 'she has stationed-herself',
      root: 'netzav',
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'niphal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
  ],
  expectedTranslations: {
    hebrew: 'בְּרֹאשׁ מְרוֹמִים עֲלֵי־דָרֶךְ בֵּין נְתִיבוֹת נִצָּבָה',
    transliteration: 'beRosh meromim alei-derekh bein netivot nitzavah',
    englishLiteral: 'In-head-of heights overlooking way, between paths she-has-stationed_herself;',
    englishNatural: 'In head of heights overlooking a way, between paths she has stationed-herself;',
    kjv: 'She standeth in the top of high places, by the way in the places where the paths meet',
    lastReviewed: { name: 'Matt Gross', date: '2025-06-29' },
  },
}; 