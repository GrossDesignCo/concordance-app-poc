import { Verse } from '@/types';

export const jonah_3_5: Verse = {
  meta: {
    book: 'Jonah',
    chapter: 3,
    verse: 5,
  },
  words: [
    {
      hebrew: 'וַיַּאֲמִינוּ',
      transliteration: 'vaYaaminu',
      englishLiteral: 'And-believed',
      englishNatural: 'believed',
      root: 'aman',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'imperfect',
        stem: 'hiphil',
        type: 'verb',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'אַנְשֵׁי',
      transliteration: 'anshei',
      englishLiteral: 'men-of',
      englishNatural: 'And the men of',
      root: 'ish',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'נִינְוֵה',
      transliteration: 'Nineveh',
      englishLiteral: 'Dwelling_of_Fish (Nineveh)',
      englishNatural: 'Dwelling-of-Fish (Nineveh)',
      root: 'nineveh',
      order: {
        hebrew: 3,
        english: 2,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'בֵּאלֹהִים',
      transliteration: 'bElohim',
      englishLiteral: 'in-Gods',
      englishNatural: 'in God',
      root: 'eloah',
      prefixes: ['be'],
      suffixes: ['im'],
      order: {
        hebrew: 4,
        english: 4,
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
      hebrew: 'וַיִּקְרְאוּ־',
      transliteration: 'vaYiqreu-',
      englishLiteral: 'and-called_out-',
      englishNatural: 'and called-out',
      root: 'qara',
      prefixes: ['va'],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'צוֹם',
      transliteration: 'tzom',
      englishLiteral: 'fast',
      englishNatural: 'a fast',
      root: 'tzom',
      order: {
        hebrew: 6,
        english: 6,
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
      hebrew: 'וַיִּלְבְּשׁוּ',
      transliteration: 'vaYilbeshu',
      englishLiteral: 'and-clothed',
      englishNatural: 'and clothed',
      root: 'labash',
      prefixes: ['va'],
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'שַׂקִּים',
      transliteration: 'saqim',
      englishLiteral: 'sackcloth',
      englishNatural: 'sackcloth',
      root: 'saq',
      suffixes: ['im'],
      order: {
        hebrew: 8,
        english: 8,
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
      hebrew: 'מִגְּדוֹלָם',
      transliteration: 'miggedolam',
      englishLiteral: 'from-great-their',
      englishNatural: 'from their great',
      root: 'gadol',
      prefixes: ['mi'],
      suffixes: ['am'],
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'adjective',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'וְעַד־',
      transliteration: 'veAd-',
      englishLiteral: 'and-unto-',
      englishNatural: 'and unto',
      root: 'ad',
      prefixes: ['ve'],
      order: {
        hebrew: 10,
        english: 10,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'קְטַנָּם',
      transliteration: 'qetanam',
      englishLiteral: 'small-their',
      englishNatural: 'their small',
      root: 'qatan',
      suffixes: ['am'],
      order: {
        hebrew: 11,
        english: 11,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'adjective',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew:
      'וַיַּאֲמִינוּ אַנְשֵׁי נִינְוֵה בֵּאלֹהִים וַיִּקְרְאוּ־צוֹם וַיִּלְבְּשׁוּ שַׂקִּים מִגְּדוֹלָם וְעַד־קְטַנָּם',
    transliteration:
      'vaYaaminu anshei Nineveh bElohim vaYiqreu-tzom vaYilbeshu saqim miggedolam veAd-qetanam',
    englishLiteral:
      'And-believed men-of Dwelling_of_Fish (Nineveh) in-Gods, and-called_out- fast, and-clothed sackcloth, from-great-their and-unto- small-their.',
    englishNatural:
      'And the men of Dwelling-of-Fish (Nineveh) believed in God, and called-out a fast, and clothed sackcloth, from their great and unto their small.',
    kjv: 'So the people of Nineveh believed God, and proclaimed a fast, and put on sackcloth, from the greatest of them even to the least of them.',
    lastReviewed: { name: 'Matt Gross', date: '2025-09-29' },
  },
};
