import { type Verse } from '@/types';

export const genesis_5_12: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 5,
    verse: 12,
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
      hebrew: 'קֵינָן',
      transliteration: 'Qeynan',
      englishLiteral: 'Nest (Cainan)',
      englishNatural: 'And Nest (Cainan)',
      root: 'qeynan',
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
      hebrew: 'שִׁבְעִים',
      transliteration: 'shivim',
      englishLiteral: 'seventy',
      englishNatural: 'seventy',
      root: 'shivim',
      order: {
        hebrew: 3,
        english: 3,
      },
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
      order: {
        hebrew: 4,
        english: 4,
      },
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
      order: {
        hebrew: 5,
        english: 5,
      },
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
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'מַהֲלַלְאֵל',
      transliteration: 'Mahalalel',
      englishLiteral: 'Praise_of_God (Mahalaleel)',
      englishNatural: 'Praise-of-God (Mahalaleel)',
      root: 'mahalalel',
      order: {
        hebrew: 7,
        english: 7,
      },
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
    hebrew: 'וַיְחִי קֵינָן שִׁבְעִים שָׁנָה וַיּוֹלֶד אֶת־מַהֲלַלְאֵל',
    transliteration: 'vaYechi Qeynan shivim shanah vaYoled et-Mahalalel',
    englishLiteral:
      'and-lived Nest (Cainan) seventy year, and-he-birthed ↳ Praise_of_God (Mahalaleel).',
    englishNatural:
      'And Nest (Cainan) lived seventy years, and birthed Praise-of-God (Mahalaleel).',
    kjv: 'And Cainan lived seventy years, and begat Mahalaleel:',
    lastReviewed: { name: 'Matt Gross', date: '2025-07-22' },
},
};
