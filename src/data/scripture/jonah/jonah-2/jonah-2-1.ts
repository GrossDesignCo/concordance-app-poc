import { Verse } from '@/types';

export const jonah_2_1: Verse = {
  meta: {
    book: 'Jonah',
    chapter: 2,
    verse: 1,
  },
  words: [
    {
      hebrew: 'וַיִּתְפַּלֵּל',
      transliteration: 'vaYitpallel',
      englishLiteral: 'And-prayed',
      englishNatural: 'prayed',
      root: 'palal',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'hithpael',
        type: 'verb',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'יוֹנָה',
      transliteration: 'Yonah',
      englishLiteral: 'Dove (Jonah)',
      englishNatural: 'And Dove (Jonah)',
      root: 'yonah',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'אֶל־',
      transliteration: 'el-',
      englishLiteral: 'to-',
      englishNatural: 'to',
      root: 'el',
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is',
      englishNatural: 'He-Who-Is',
      root: 'yhwh',
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'אֱלֹהָיו',
      transliteration: 'Elohav',
      englishLiteral: 'his-Gods',
      englishNatural: 'his God',
      root: 'eloah',
      suffixes: ['av'],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'מִמְּעֵי',
      transliteration: 'mimei',
      englishLiteral: 'from-bowels-of',
      englishNatural: 'from the bowels of',
      root: 'meah_bowels',
      prefixes: ['mi'],
      suffixes: ['ey'],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'הַדָּגָה',
      transliteration: 'haDagah',
      englishLiteral: 'the-fish',
      englishNatural: 'the fish',
      root: 'dagah',
      prefixes: ['ha'],
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'וַיִּתְפַּלֵּל יוֹנָה אֶל־יְהוָה אֱלֹהָיו מִמְּעֵי הַדָּגָה',
    transliteration: 'vaYitpallel Yonah el-YHWH Elohav mimei haDagah',
    englishLiteral:
      'And-prayed Dove (Jonah) to- He_Who_Is his-Gods, from-bowels-of the-fish.',
    englishNatural:
      'And Dove (Jonah) prayed to He-Who-Is his God, from the bowels of the fish.',
    kjv: "Then Jonah prayed unto the LORD his God out of the fish's belly.",
    lastReviewed: { name: 'Matt Gross', date: '2025-09-29' },
  },
};
