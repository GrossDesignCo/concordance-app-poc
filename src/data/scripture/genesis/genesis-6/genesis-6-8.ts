import { Verse } from '@/types';

export const genesis_6_8: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 6,
    verse: 8,
  },
  words: [
    {
      hebrew: 'וְנֹחַ',
      transliteration: 'veNoach',
      englishLiteral: 'And-Rest (Noah)',
      englishNatural: 'And Rest (Noah)',
      root: 'noach',
      prefixes: ['ve'],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'מָצָא',
      transliteration: 'matsa',
      englishLiteral: 'found',
      englishNatural: 'found',
      root: 'matsa',
      order: {
        hebrew: 2,
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
      hebrew: 'חֵן',
      transliteration: 'chen',
      englishLiteral: 'grace',
      englishNatural: 'grace',
      root: 'chen',
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'בְּעֵינֵי',
      transliteration: 'beEiney',
      englishLiteral: 'in-eyes-of',
      englishNatural: 'in the eyes of',
      root: 'ayin',
      prefixes: ['be'],
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        gender: 'feminine',
        number: 'dual',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'He-Who-Is (YHWH)',
      root: 'yhwh',
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
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
    hebrew: 'וְנֹחַ מָצָא חֵן בְּעֵינֵי יְהוָה',
    transliteration: 'veNoach matsa chen beEiney YHWH',
    englishLiteral: 'And-Rest (Noah) found grace in-eyes-of He_Who_Is (YHWH).',
    englishNatural:
      'And Rest (Noah) found grace in the eyes of He-Who-Is (YHWH).',
    kjv: 'But Noah found grace in the eyes of the LORD.',
    lastReviewed: { name: 'Matt Gross', date: '2025-11-27' },
  },
};
