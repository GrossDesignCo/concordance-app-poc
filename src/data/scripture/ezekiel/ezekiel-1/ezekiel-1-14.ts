import { Verse } from '@/types';

export const ezekiel_1_14: Verse = {
  meta: {
    book: 'Ezekiel',
    chapter: 1,
    verse: 14,
  },
  words: [
    {
      hebrew: 'וְהַחַיּוֹת',
      transliteration: 'veHaChayot',
      englishLiteral: 'And-the-living-beings',
      englishNatural: 'And the living-beings',
      root: 'chayah',
      prefixes: ['ve', 'ha'],
      order: 1,
      morphology: {
        gender: 'feminine',
        number: 'plural',
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'רָצוֹא',
      transliteration: 'ratzo',
      englishLiteral: 'sprinting',
      englishNatural: 'sprinting',
      root: 'ratzo',
      order: 2,
      morphology: {
        tense: 'infinitive_absolute',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'וָשׁוֹב',
      transliteration: 'vaShuv',
      englishLiteral: 'and-returning',
      englishNatural: 'and returning',
      root: 'shuv',
      prefixes: ['ve'],
      order: 3,
      morphology: {
        tense: 'infinitive_absolute',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'כְּמַרְאֵה',
      transliteration: 'keMarah',
      englishLiteral: 'like-appearance-of',
      englishNatural: 'like the appearance of',
      root: 'mareh',
      prefixes: ['ke'],
      order: 4,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'הַבָּזָק',
      transliteration: 'haBazaq',
      englishLiteral: 'the-flashing',
      englishNatural: 'The Flashing',
      root: 'bazaq',
      prefixes: ['ha'],
      order: 5,
      morphology: {
        gender: 'masculine',
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
    hebrew: 'וְהַחַיּוֹת רָצוֹא וָשׁוֹב כְּמַרְאֵה הַבָּזָק',
    transliteration: 'veHaChayot ratzo vaShuv keMarah haBazaq',
    englishLiteral:
      'And-the-living-beings sprinting and-returning like-appearance-of the-flashing.',
    englishNatural:
      'And the living-beings sprinting and returning like the appearance of The Flashing.',
    kjv: 'And the living creatures ran and returned as the appearance of a flash of lightning.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
  },
};
