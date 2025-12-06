import { type Verse } from '@/types';

export const genesis_5_24: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 5,
    verse: 24,
  },
  words: [
    {
      hebrew: 'וַיִּתְהַלֵּךְ',
      transliteration: 'vaYithalekh',
      englishLiteral: 'and-walked',
      englishNatural: 'walked',
      root: 'halakh',
      prefixes: ['va', 'yit'],
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
        stem: 'hithpael',
        tense: 'imperfect',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'חֲנוֹךְ',
      transliteration: 'Chanokh',
      englishLiteral: 'Dedicated (Enoch)',
      englishNatural: 'And Dedicated (Enoch)',
      root: 'Chanokh',
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
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: 'with',
      root: 'et',
      order: 3,
    },
    {
      hebrew: 'הָאֱלֹהִים',
      transliteration: 'haElohim',
      englishLiteral: 'the-Gods',
      englishNatural: 'the God',
      root: 'eloah',
      prefixes: ['ha'],
      suffixes: ['im'],
      order: 4,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וְאֵינֶנּוּ',
      transliteration: 'veEinennu',
      englishLiteral: 'and-not-him',
      englishNatural: 'and he was not',
      root: 'ayin',
      prefixes: ['ve'],
      suffixes: ['enu'],
      order: 5,
      morphology: {
        type: 'adverb',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'כִּי',
      transliteration: 'ki',
      englishLiteral: 'that',
      englishNatural: 'that',
      root: 'ki',
      order: 6,
      morphology: {
        type: 'conjunction',
      },
    },
    {
      hebrew: 'לָקַח',
      transliteration: 'lakach',
      englishLiteral: 'took',
      englishNatural: 'took',
      root: 'lakach',
      order: {
        hebrew: 7,
        english: 8,
      },
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
        stem: 'qal',
        tense: 'perfect',
      },
    },
    {
      hebrew: 'אֹתוֹ',
      transliteration: 'oto',
      englishLiteral: 'him',
      englishNatural: 'him',
      root: 'et',
      suffixes: ['o'],
      order: {
        hebrew: 8,
        english: 9,
      },
      morphology: {
        type: 'pronoun',
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
      },
      grammarSuffix: {
        englishNatural: '.',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'אֱלֹהִים',
      transliteration: 'Elohim',
      englishLiteral: 'Gods',
      englishNatural: 'God',
      root: 'eloah',
      suffixes: ['im'],
      order: {
        hebrew: 9,
        english: 7,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
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
    hebrew:
      'וַיִּתְהַלֵּךְ חֲנוֹךְ אֶת־הָאֱלֹהִים וְאֵינֶנּוּ כִּי לָקַח אֹתוֹ אֱלֹהִים',
    transliteration:
      'vaYithalekh Chanokh et-haElohim veEinennu ki lakach oto Elohim',
    englishLiteral:
      'and-walked Dedicated (Enoch) ↳ the-Gods, and-not-him, that took him Gods.',
    englishNatural:
      'And Dedicated (Enoch) walked with the God, and he was not, that God took him.',
    kjv: 'And Enoch walked with God: and he was not; for God took him.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
  },
};
