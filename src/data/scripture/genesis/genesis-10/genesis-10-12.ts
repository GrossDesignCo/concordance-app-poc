import { Verse } from '@/types';

export const genesis_10_12: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 10,
    verse: 12,
  },
  words: [
    {
      hebrew: 'וְאֶת־',
      transliteration: 'veEt-',
      englishLiteral: 'and-↳',
      englishNatural: 'and',
      root: 'et',
      prefixes: ['ve'],
      order: 1,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'רֶסֶן',
      transliteration: 'Resen',
      englishLiteral: 'Bridle (Resen)',
      englishNatural: 'Bridle (Resen)',
      root: 'resen',
      order: 2,
      morphology: {
        gender: 'feminine',
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
      transliteration: 'beyn',
      englishLiteral: 'between',
      englishNatural: 'between',
      root: 'beyn',
      order: 3,
      morphology: {
        type: 'preposition',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'נִינְוֵה',
      transliteration: 'Nineveh',
      englishLiteral: 'Dwelling_of_Fish (Nineveh)',
      englishNatural: 'Dwelling-of-Fish (Nineveh)',
      root: 'nineveh',
      order: 4,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'וּבֵין',
      transliteration: 'uveyn',
      englishLiteral: 'and-between',
      englishNatural: 'and between',
      root: 'beyn',
      prefixes: ['u'],
      order: 5,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'כָּלַח',
      transliteration: 'Kalach',
      englishLiteral: 'Vigor (Calah)',
      englishNatural: 'Vigor (Calah)',
      root: 'kalach',
      order: 6,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'הִוא',
      transliteration: 'hi',
      englishLiteral: 'she',
      englishNatural: 'this',
      root: 'hu',
      order: 7,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        type: 'pronoun',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'הָעִיר',
      transliteration: 'haIr',
      englishLiteral: 'the-city',
      englishNatural: 'The City',
      root: 'ir',
      prefixes: ['ha'],
      order: 8,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'הַגְּדֹלָה',
      transliteration: 'haGedolah',
      englishLiteral: 'the-great',
      englishNatural: 'The Great',
      root: 'gadol',
      prefixes: ['ha'],
      order: 9,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'adjective',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
  ],
  expectedTranslations: {
    hebrew: 'וְאֶת־רֶסֶן בֵּין נִינְוֵה וּבֵין כָּלַח הִוא הָעִיר הַגְּדֹלָה',
    transliteration: 'veEt-Resen beyn Nineveh uveyn Kalach hi haIr haGedolah',
    englishLiteral:
      'and-↳ Bridle (Resen), between Dwelling_of_Fish (Nineveh) and-between Vigor (Calah); she the-city the-great.',
    englishNatural:
      'and Bridle (Resen), between Dwelling-of-Fish (Nineveh) and between Vigor (Calah); this, The City, The Great.',
    kjv: 'And Resen between Nineveh and Calah: the same is a great city.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
},
};
