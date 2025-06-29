import { Verse } from '@/types';

export const proverbs_8_26: Verse = {
  meta: {
    book: 'Proverbs',
    chapter: 8,
    verse: 26,
  },
  words: [
    {
      hebrew: 'עַד־',
      transliteration: 'ad',
      englishLiteral: 'Until',
      englishNatural: 'Until',
      root: 'ad',
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        type: 'adverb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'לֹא',
      transliteration: 'lo',
      englishLiteral: 'not',
      englishNatural: 'not',
      root: 'lo',
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'עָשָׂה',
      transliteration: 'asah',
      englishLiteral: 'had-made',
      englishNatural: 'had made',
      root: 'asah',
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'אֶרֶץ',
      transliteration: 'eretz',
      englishLiteral: 'land',
      englishNatural: 'land',
      root: 'eretz',
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'וְחוּצוֹת',
      transliteration: 'veChutzot',
      englishLiteral: 'and-outsides',
      englishNatural: 'and outsides',
      root: 'chutz',
      prefixes: ['ve'],
      suffixes: ['ot'],
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
      hebrew: 'וְרֹאשׁ',
      transliteration: 'veRosh',
      englishLiteral: 'and-head-of',
      englishNatural: 'and the head of',
      root: 'rosh',
      prefixes: ['ve'],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'עָפְרוֹת',
      transliteration: 'afrot',
      englishLiteral: 'dusts-of',
      englishNatural: 'dusts of',
      root: 'afar',
      suffixes: ['ot'],
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'תֵּבֵל',
      transliteration: 'tevel',
      englishLiteral: 'world',
      englishNatural: 'world',
      root: 'tevel',
      order: {
        hebrew: 8,
        english: 8,
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
    },
  ],
  expectedTranslations: {
    hebrew: 'עַד־לֹא עָשָׂה אֶרֶץ וְחוּצוֹת וְרֹאשׁ עָפְרוֹת תֵּבֵל',
    transliteration: 'ad lo asah eretz veChutzot veRosh afrot tevel',
    englishLiteral:
      'Until not had-made land and-outsides, and-head-of dusts-of world.',
    englishNatural:
      'Until not had made land and outsides, and the head of dusts of world.',
    kjv: 'While as yet he had not made the earth, nor the fields, nor the highest part of the dust of the world',
    lastReviewed: { name: 'Matt Gross', date: '2025-06-29' },
  },
};
