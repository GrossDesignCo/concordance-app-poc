import { type Verse } from '@/types';

export const genesis_5_15: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 5,
    verse: 15,
  },
  words: [
    {
      hebrew: 'וַיְחִי',
      transliteration: 'vaYechi',
      englishLiteral: 'and-lived',
      englishNatural: 'lived',
      root: 'chayah',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
        stem: 'qal',
        tense: 'imperfect',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'מַהֲלַלְאֵל',
      transliteration: 'Mahalalel',
      englishLiteral: 'Praise_of_God (Mahalaleel)',
      englishNatural: 'And Praise-of-God (Mahalaleel)',
      root: 'mahalalel',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'חֲמֵשׁ',
      transliteration: 'chamesh',
      englishLiteral: 'five',
      englishNatural: 'five',
      root: 'chamesh',
      order: 3,
      morphology: {
        type: 'numeral',
        gender: 'feminine',
        number: 'singular',
      },
    },
    {
      hebrew: 'וְשִׁשִּׁים',
      transliteration: 'veShishim',
      englishLiteral: 'and-sixty',
      englishNatural: 'and sixty',
      root: 'shishim',
      prefixes: ['ve'],
      order: 4,
      morphology: {
        type: 'numeral',
        gender: 'masculine',
        number: 'plural',
      },
    },
    {
      hebrew: 'שָׁנָה',
      transliteration: 'shanah',
      englishLiteral: 'year',
      englishNatural: 'years',
      root: 'shanah',
      order: 5,
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וַיּוֹלֶד',
      transliteration: 'vaYoled',
      englishLiteral: 'and-he-birthed',
      englishNatural: 'and birthed',
      root: 'yalad',
      prefixes: ['va'],
      order: 6,
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
        stem: 'hiphil',
        tense: 'imperfect',
      },
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: 7,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'יָרֶד',
      transliteration: 'Yared',
      englishLiteral: 'Descending (Jared)',
      englishNatural: 'Descending (Jared)',
      root: 'yared',
      order: 8,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'וַיְחִי מַהֲלַלְאֵל חֲמֵשׁ וְשִׁשִּׁים שָׁנָה וַיּוֹלֶד אֶת־יָרֶד',
    transliteration:
      'vaYechi Mahalalel chamesh veShishim shanah vaYoled et-Yared',
    englishLiteral:
      'and-lived Praise_of_God (Mahalaleel) five and-sixty year, and-he-birthed ↳ Descending (Jared).',
    englishNatural:
      'And Praise-of-God (Mahalaleel) lived five and sixty years, and birthed Descending (Jared).',
    kjv: 'And Mahalaleel lived sixty and five years, and begat Jared:',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
},
};
