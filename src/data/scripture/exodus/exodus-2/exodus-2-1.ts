import { Verse } from '@/types';

export const exodus_2_1: Verse = {
  meta: {
    book: 'Exodus',
    chapter: 2,
    verse: 1,
  },
  words: [
    {
      hebrew: 'וַיֵּלֶךְ',
      transliteration: 'vaYelekh',
      englishLiteral: 'And-went',
      englishNatural: 'went',
      root: 'halakh',
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
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'אִישׁ',
      transliteration: 'ish',
      englishLiteral: 'man',
      englishNatural: 'And a man',
      root: 'ish',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'מִבֵּית',
      transliteration: 'miBeyt',
      englishLiteral: 'from-house-of',
      englishNatural: 'from the house of',
      root: 'bayit',
      prefixes: ['mi'],
      order: 3,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'לֵוִי',
      transliteration: 'Levi',
      englishLiteral: 'Joined (Levi)',
      englishNatural: 'Joined (Levi)',
      root: 'levi',
      order: 4,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וַיִּקַּח',
      transliteration: 'vaYiqqach',
      englishLiteral: 'and-took',
      englishNatural: 'and took',
      root: 'laqach',
      prefixes: ['va'],
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: 6,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'בַּת־',
      transliteration: 'bat-',
      englishLiteral: 'daughter-of',
      englishNatural: 'a daughter of',
      root: 'bat',
      order: 7,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'לֵוִי',
      transliteration: 'Levi',
      englishLiteral: 'Joined (Levi)',
      englishNatural: 'Joined (Levi)',
      root: 'levi',
      order: 8,
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
    hebrew: 'וַיֵּלֶךְ אִישׁ מִבֵּית לֵוִי וַיִּקַּח אֶת־בַּת־לֵוִי',
    transliteration: 'vaYelekh ish miBeyt Levi vaYiqqach et-bat-Levi',
    englishLiteral:
      'And-went man from-house-of Joined (Levi), and-took ↳ daughter-of Joined (Levi).',
    englishNatural:
      'And a man went from the house of Joined (Levi), and took a daughter of Joined (Levi).',
    kjv: 'And there went a man of the house of Levi, and took to wife a daughter of Levi.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-22' },
},
};
