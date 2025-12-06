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
      order: 1,
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
        english: 3,
      },
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'עָשָׂה',
      transliteration: 'asah',
      englishLiteral: 'he-had-made',
      englishNatural: 'he had made',
      root: 'asah',
      order: {
        hebrew: 3,
        english: 2,
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
      order: 4,
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
      order: 5,
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
      order: 6,
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
      order: 7,
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
      englishNatural: 'the world',
      root: 'tevel',
      order: 8,
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
    hebrew: 'עַד־לֹא עָשָׂה אֶרֶץ וְחוּצוֹת וְרֹאשׁ עָפְרוֹת תֵּבֵל',
    transliteration: 'ad lo asah eretz veChutzot veRosh afrot tevel',
    englishLiteral:
      'Until not he-had-made land and-outsides, and-head-of dusts-of world.',
    englishNatural:
      'Until he had made not land and outsides, and the head of dusts of the world.',
    kjv: 'While as yet he had not made the earth, nor the fields, nor the highest part of the dust of the world',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
  },
};
