import { Verse } from '@/types';

export const genesis_2_1: Verse = {
  meta: {
    chapter: 2,
    number: 1,
  },
  words: [
    {
      hebrew: 'וַיְכֻלּוּ',
      transliteration: 'vaYechullu',
      englishLiteral: 'And-were-finished',
      englishNatural: 'And finished were',
      root: 'kalah',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 1,
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
      hebrew: 'הַשָּׁמַיִם',
      transliteration: 'haShamayim',
      englishLiteral: 'the-skies',
      englishNatural: 'the skies',
      root: 'shamayim',
      prefixes: ['ha'],
      order: {
        hebrew: 2,
        english: 2,
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
      hebrew: 'וְהָאָרֶץ',
      transliteration: 'veHaAretz',
      englishLiteral: 'and-the-land',
      englishNatural: 'and the land',
      root: 'eretz',
      prefixes: ['ve', 'ha'],
      order: {
        hebrew: 3,
        english: 3,
      },
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
      hebrew: 'וְכָל־',
      transliteration: 'veKol-',
      englishLiteral: 'and-all-',
      englishNatural: 'and all',
      root: 'kol',
      prefixes: ['ve'],
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        type: 'adjective',
      },
    },
    {
      hebrew: 'צְבָאָם׃',
      transliteration: 'tsevaam',
      englishLiteral: 'their-host',
      englishNatural: 'their host',
      root: 'tsava',
      suffixes: ['am'],
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
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'וַיְכֻלּוּ הַשָּׁמַיִם וְהָאָרֶץ וְכָל־צְבָאָם׃',
    transliteration: 'vaYechullu haShamayim veHaAretz veKol-tsevaam',
    englishLiteral:
      'And-were-finished the-skies, and-the-land, and-all- their-host.',
    englishNatural:
      'And finished were the skies, and the land, and all their host.',
    kjv: 'Thus the heavens and the earth were finished, and all the host of them.',
    lastReviewed: { name: 'Matt Gross', date: '2025-05-28' },
  },
};
