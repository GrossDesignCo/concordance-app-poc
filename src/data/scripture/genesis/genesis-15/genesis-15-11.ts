import { Verse } from '@/types';

export const genesis_15_11: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 15,
    verse: 11,
  },
  words: [
    {
      hebrew: 'וַיֵּרֶד',
      transliteration: 'vayered',
      englishLiteral: 'And-he-descended',
      englishNatural: 'descended',
      root: 'yarad',
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
      hebrew: 'הָעַיִט',
      transliteration: 'haAyit',
      englishLiteral: 'the-bird_of_prey',
      englishNatural: 'And the birds-of-prey',
      root: 'ayit',
      prefixes: ['ha'],
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
      hebrew: 'עַל־',
      transliteration: 'al-',
      englishLiteral: 'over-',
      englishNatural: 'over',
      root: 'al',
      order: 3,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הַפְּגָרִים',
      transliteration: 'haPegarim',
      englishLiteral: 'the-carcasses',
      englishNatural: 'the carcasses',
      root: 'peger',
      prefixes: ['ha'],
      suffixes: ['im'],
      order: 4,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וַיַּשֵּׁב',
      transliteration: 'vayashev',
      englishLiteral: 'and-he-caused-to-return',
      englishNatural: 'caused-to-return',
      root: 'shuv',
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
        stem: 'hiphil',
        type: 'verb',
      },
    },
    {
      hebrew: 'אֹתָם',
      transliteration: 'otam',
      englishLiteral: '↳ them',
      englishNatural: 'them',
      root: 'et',
      suffixes: ['am'],
      order: {
        hebrew: 6,
        english: 7,
      },
      morphology: {
        type: 'particle',
      },
      grammarSuffix: {
        englishNatural: '.',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'אַבְרָם',
      transliteration: 'Abram',
      englishLiteral: 'Exalted_Father (Abram)',
      englishNatural: 'and Exalted-Father (Abram)',
      root: 'abram',
      order: {
        hebrew: 7,
        english: 5,
      },
      morphology: {
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
    hebrew: 'וַיֵּרֶד הָעַיִט עַל־הַפְּגָרִים וַיַּשֵּׁב אֹתָם אַבְרָם',
    transliteration: 'vayered haAyit al-haPegarim vayashev otam Abram',
    englishLiteral:
      'And-he-descended the-bird_of_prey over- the-carcasses, and-he-caused-to-return ↳ them Exalted_Father (Abram).',
    englishNatural:
      'And the birds-of-prey descended over the carcasses, and Exalted-Father (Abram) caused-to-return them.',
    kjv: 'And when the fowls came down upon the carcases, Abram drove them away.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-09' },
},
};
