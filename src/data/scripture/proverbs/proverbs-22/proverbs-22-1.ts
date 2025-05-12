import { Verse } from '@/types';

export const proverbs_22_1: Verse = {
  meta: {
    chapter: 22,
    number: 1,
  },
  words: [
    {
      hebrew: 'טוֹב',
      transliteration: 'tov',
      englishLiteral: 'Good',
      englishNatural: 'A good',
      root: 'tov',
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        type: 'adjective',
      },
    },
    {
      hebrew: 'שֵׁם',
      transliteration: 'shem',
      englishLiteral: 'name',
      englishNatural: 'name',
      root: 'shem',
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'absolute',
        type: 'noun',
      },
    },
    {
      hebrew: 'מִשֶּׁמֶן',
      transliteration: 'miShemen',
      englishLiteral: 'than-oil',
      englishNatural: 'oil',
      root: 'shemen',
      prefixes: ['mi'],
      order: {
        hebrew: 3,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'absolute',
        type: 'noun',
      },
      lineBreaksAfter: {
        english: 1,
      },
      grammarSuffix: {
        englishNatural: ';',
      },
    },
    {
      hebrew: 'טוֹב',
      transliteration: 'tov',
      englishLiteral: 'good',
      englishNatural: 'than good',
      root: 'tov',
      order: {
        hebrew: 4,
        english: 3,
      },
      morphology: {
        type: 'adjective',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'וְיוֹם',
      transliteration: 'veYom',
      englishLiteral: 'and-day',
      englishNatural: 'and the day',
      root: 'yom',
      prefixes: ['ve'],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'absolute',
        type: 'noun',
      },
    },
    {
      hebrew: 'מָוֶת',
      transliteration: 'mavet',
      englishLiteral: 'of-death',
      englishNatural: 'of death',
      root: 'mavet',
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'absolute',
        type: 'noun',
      },
    },
    {
      hebrew: 'מִיּוֹם',
      transliteration: 'miYom',
      englishLiteral: 'than-day',
      englishNatural: 'than the day',
      root: 'yom',
      prefixes: ['mi'],
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'absolute',
        type: 'noun',
      },
    },
    {
      hebrew: 'הִוָּלְדוֹ',
      transliteration: 'hiValdo',
      englishLiteral: 'of-his-birth',
      englishNatural: 'of birth',
      root: 'yalad',
      prefixes: ['hi'],
      suffixes: ['o'],
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'hophal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'טוֹב שֵׁם מִשֶּׁמֶן טוֹב וְיוֹם מָוֶת מִיּוֹם הִוָּלְדוֹ',
    transliteration: 'tov shem miShemen tov veYom mavet miYom hiValdo',
    englishLiteral: 'Good name than-oil good and-day of-death than-day of-his-birth.',
    englishNatural: 'A good name than good oil; and the day of death than the day of birth.',
    kjv: 'A good name is rather to be chosen than great riches, and loving favour rather than silver and gold.',
    lastReviewed: { name: 'Matt Gross', date: '2025-05-12' },
  },
}; 