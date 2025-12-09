import { Verse } from '@/types';

export const genesis_11_1: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 11,
    verse: 1,
  },
  words: [
    {
      hebrew: 'וַיְהִי',
      transliteration: 'vayHi',
      englishLiteral: 'And-was',
      englishNatural: 'was',
      root: 'hayah',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'כָל־',
      transliteration: 'khol-',
      englishLiteral: 'all-',
      englishNatural: 'And all',
      root: 'kol',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'הָאָרֶץ',
      transliteration: 'haAretz',
      englishLiteral: 'the-land',
      englishNatural: 'the land',
      root: 'eretz',
      prefixes: ['ha'],
      order: {
        hebrew: 3,
        english: 2,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'שָׂפָה',
      transliteration: 'safah',
      englishLiteral: 'lip',
      englishNatural: 'lip',
      root: 'safah',
      order: {
        hebrew: 4,
        english: 5,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'אֶחָת',
      transliteration: 'echat',
      englishLiteral: 'one',
      englishNatural: 'one',
      root: 'echad',
      order: {
        hebrew: 5,
        english: 4,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'numeral',
      },
    },
    {
      hebrew: 'וּדְבָרִים',
      transliteration: 'uDevarim',
      englishLiteral: 'and-words',
      englishNatural: 'words',
      root: 'davar',
      prefixes: ['u'],
      suffixes: ['im'],
      order: {
        hebrew: 6,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: '.',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'אֲחָדִים',
      transliteration: 'achadim',
      englishLiteral: 'ones',
      englishNatural: 'and of one',
      root: 'echad',
      suffixes: ['im'],
      order: {
        hebrew: 7,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'numeral',
      },
      grammarSuffix: {
        englishLiteral: '.',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
  ],
  expectedTranslations: {
    hebrew: 'וַיְהִי כָל־הָאָרֶץ שָׂפָה אֶחָת וּדְבָרִים אֲחָדִים',
    transliteration: 'vayHi khol-haAretz safah echat uDevarim achadim',
    englishLiteral: 'And-was all- the-land, lip one and-words ones.',
    englishNatural: 'And all the land was, one lip and of one words.',
    kjv: 'And the whole earth was of one language, and of one speech.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-09' },
},
};
