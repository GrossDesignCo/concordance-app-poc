import { Verse } from '@/types';

export const genesis_1_19: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 1,
    number: 19,
  },
  words: [
    {
      hebrew: 'וַֽיְהִי־',
      transliteration: 'vaVayhi-',
      englishLiteral: 'And-was-',
      englishNatural: 'was',
      root: 'hayah',
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
      hebrew: 'עֶ֥רֶב',
      transliteration: 'erev',
      englishLiteral: 'evening',
      englishNatural: 'And evening',
      root: 'erev',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'וַֽיְהִי־',
      transliteration: 'vaVayhi-',
      englishLiteral: 'And-was-',
      englishNatural: 'was',
      root: 'hayah',
      prefixes: ['va'],
      order: {
        hebrew: 3,
        english: 4,
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
      hebrew: 'בֹ֖קֶר',
      transliteration: 'boqer',
      englishLiteral: 'morning',
      englishNatural: 'And morning',
      root: 'boqer',
      order: {
        hebrew: 4,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ','
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'י֥וֹם',
      transliteration: 'yom',
      englishLiteral: 'Day',
      englishNatural: 'day',
      root: 'yom',
      order: {
        hebrew: 5,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: '.',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'רְבִיעִֽי׃',
      transliteration: 'reviyi',
      englishLiteral: 'fourth',
      englishNatural: 'A fourth',
      root: 'revii',
      order: {
        hebrew: 6,
        english: 5,
      },
      morphology: {
        type: 'adjective',
      },
      grammarSuffix: {
        englishLiteral: '.',
      },
      lineBreaksBefore: {
        english: 1,
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
  ],
  expectedTranslations: {
    hebrew: 'וַֽיְהִי־עֶ֥רֶב וַֽיְהִי־בֹ֖קֶר י֥וֹם רְבִיעִֽי׃',
    transliteration: 'vaVayhi-erev vaVayhi-boqer yom reviyi',
    englishLiteral: 'And-was- evening, And-was- morning, Day fourth.',
    englishNatural: 'And evening was, And morning was, A fourth day.',
    kjv: 'And the evening and the morning were the fourth day.',
    lastReviewed: { name: 'Matt Gross', date: '2025-05-28' },
  },
}; 