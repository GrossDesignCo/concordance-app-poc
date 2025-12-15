import { Verse } from '@/types';

export const daniel_1_21: Verse = {
  meta: {
    book: 'Daniel',
    chapter: 1,
    verse: 21,
  },
  words: [
    {
      hebrew: 'וַיְהִי',
      transliteration: 'vaYehi',
      englishLiteral: 'and-he-was',
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
      hebrew: 'דָּנִיֵּאל',
      transliteration: 'Daniel',
      englishLiteral: 'God_Is_My_Judge (Daniel)',
      englishNatural: 'And God-Is-My-Judge (Daniel)',
      root: 'daniel',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
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
      hebrew: 'עַד',
      transliteration: 'ad',
      englishLiteral: 'until',
      englishNatural: 'until',
      root: 'ad',
      order: 3,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'שְׁנַת',
      transliteration: 'shnat',
      englishLiteral: 'year-of',
      englishNatural: 'the year of',
      root: 'shanah',
      suffixes: ['construct_t'],
      order: 4,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'אַחַת',
      transliteration: 'achat',
      englishLiteral: 'one',
      englishNatural: 'one',
      root: 'echad',
      order: 5,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'numeral',
      },
    },
    {
      hebrew: 'לְכוֹרֶשׁ',
      transliteration: 'leKoresh',
      englishLiteral: 'to-Cyrus',
      englishNatural: 'to Cyrus',
      root: 'koresh',
      prefixes: ['le'],
      order: 6,
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'הַמֶּלֶךְ',
      transliteration: 'haMelekh',
      englishLiteral: 'the-king',
      englishNatural: 'the king',
      root: 'melekh',
      prefixes: ['ha'],
      order: 7,
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
    hebrew: 'וַיְהִי דָּנִיֵּאל עַד שְׁנַת אַחַת לְכוֹרֶשׁ הַמֶּלֶךְ',
    transliteration: 'vaYehi Daniel ad shnat achat leKoresh haMelekh',
    englishLiteral:
      'and-he-was God_Is_My_Judge (Daniel), until year-of one to-Cyrus the-king.',
    englishNatural:
      'And God-Is-My-Judge (Daniel) was, until the year of one to Cyrus the king.',
    kjv: 'And Daniel continued even unto the first year of king Cyrus.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-15' },
},
};
