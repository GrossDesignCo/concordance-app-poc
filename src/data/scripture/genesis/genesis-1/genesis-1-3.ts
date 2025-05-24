import { Verse } from '@/types';

export const genesis_1_3: Verse = {
  meta: {
    chapter: 1,
    number: 3,
  },
  words: [
    {
      hebrew: 'וַיֹּ֥אמֶר',
      transliteration: 'vaYomer',
      englishLiteral: 'And-said',
      englishNatural: 'said',
      root: 'amar',
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
      hebrew: 'אֱלֹהִ֖ים',
      transliteration: 'Elohim',
      englishLiteral: 'Gods',
      englishNatural: 'And God',
      root: 'eloah',
      suffixes: ['im'],
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
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
      hebrew: 'יְהִ֣י',
      transliteration: 'yehi',
      englishLiteral: 'Let-be',
      englishNatural: 'be',
      root: 'hayah',
      order: {
        hebrew: 3,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'jussive',
        stem: 'qal',
        type: 'verb',
      },
      grammarPrefix: {
        englishLiteral: '"',
      },
      grammarSuffix: {
        englishNatural: '."',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'א֑וֹר',
      transliteration: 'or',
      englishLiteral: 'light',
      englishNatural: 'Let light',
      root: 'or',
      order: {
        hebrew: 4,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'absolute',
        type: 'noun',
      },
      grammarPrefix: {
        englishNatural: '"',
      },
      grammarSuffix: {
        englishLiteral: '."',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'וַֽיְהִי',
      transliteration: 'vaYehi',
      englishLiteral: 'And-was',
      englishNatural: 'was',
      root: 'hayah',
      prefixes: ['va'],
      order: {
        hebrew: 5,
        english: 6,
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
        englishNatural: '.',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'אֽוֹר',
      transliteration: 'or',
      englishLiteral: 'light',
      englishNatural: 'And light',
      root: 'or',
      order: {
        hebrew: 6,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'absolute',
        type: 'noun',
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
    hebrew: 'וַיֹּ֥אמֶר אֱלֹהִ֖ים יְהִ֣י א֑וֹר וַֽיְהִי אֽוֹר',
    transliteration: 'vaYomer Elohim yehi or vaYehi or',
    englishLiteral: 'And-said Gods, "Let-be light." And-was light.',
    englishNatural: 'And God said, "Let light be." And light was.',
    kjv: 'And God said, Let there be light: and there was light.',
    lastReviewed: { name: 'Matt Gross', date: '2025-05-24' },
  },
};
