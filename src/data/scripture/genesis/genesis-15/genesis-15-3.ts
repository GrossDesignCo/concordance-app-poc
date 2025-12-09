import { Verse } from '@/types';

export const genesis_15_3: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 15,
    verse: 3,
  },
  words: [
    {
      hebrew: 'וַיֹּאמֶר',
      transliteration: 'vaYomer',
      englishLiteral: 'And-he-said',
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
      hebrew: 'אַבְרָם',
      transliteration: 'Abram',
      englishLiteral: 'Exalted_Father (Abram)',
      englishNatural: 'And Exalted-Father (Abram)',
      root: 'abram',
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
      lineBreaksAfter: {
        hebrew: 1,
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'הֵן',
      transliteration: 'hen',
      englishLiteral: 'Behold',
      englishNatural: 'Behold',
      root: 'hen',
      order: 3,
      morphology: {
        type: 'particle',
      },
      grammarPrefix: {
        englishLiteral: '"',
        englishNatural: '"',
      },
    },
    {
      hebrew: 'לִי',
      transliteration: 'li',
      englishLiteral: 'to-me',
      englishNatural: 'to me',
      root: 'lamed',
      suffixes: ['i'],
      order: 4,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'לֹא',
      transliteration: 'lo',
      englishLiteral: 'not',
      englishNatural: 'not',
      root: 'lo',
      order: {
        hebrew: 5,
        english: 6,
      },
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'נָתַתָּה',
      transliteration: 'natata',
      englishLiteral: 'you-have-given',
      englishNatural: 'you have given',
      root: 'natan',
      suffixes: ['ta'],
      order: {
        hebrew: 6,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '2nd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'זָרַע',
      transliteration: 'zara',
      englishLiteral: 'seed',
      englishNatural: 'seed',
      root: 'zara',
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וְהִנֵּה',
      transliteration: 'veHineh',
      englishLiteral: 'and-behold',
      englishNatural: 'and behold',
      root: 'hineh',
      prefixes: ['ve'],
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'בֶן־',
      transliteration: 'ben-',
      englishLiteral: 'son-of-',
      englishNatural: 'the son of',
      root: 'ben',
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'בֵּיתִי',
      transliteration: 'beyti',
      englishLiteral: 'house-of-me',
      englishNatural: 'my house',
      root: 'bayit',
      suffixes: ['i'],
      order: {
        hebrew: 10,
        english: 10,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'יוֹרֵשׁ',
      transliteration: 'yoresh',
      englishLiteral: 'inheriting',
      englishNatural: 'inherits',
      root: 'yarash',
      order: {
        hebrew: 11,
        english: 11,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        tense: 'participle',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'אֹתִי',
      transliteration: 'oti',
      englishLiteral: '↳ me',
      englishNatural: 'me',
      root: 'et',
      suffixes: ['i'],
      order: {
        hebrew: 12,
        english: 12,
      },
      morphology: {
        type: 'particle',
      },
      grammarSuffix: {
        englishLiteral: '."',
        englishNatural: '."',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew:
      'וַיֹּאמֶר אַבְרָם הֵן לִי לֹא נָתַתָּה זָרַע וְהִנֵּה בֶן־בֵּיתִי יוֹרֵשׁ אֹתִי',
    transliteration:
      'vaYomer Abram hen li lo natata zara veHineh ben-beyti yoresh oti',
    englishLiteral:
      'And-he-said Exalted_Father (Abram), "Behold to-me not you-have-given seed, and-behold son-of- house-of-me inheriting ↳ me."',
    englishNatural:
      'And Exalted-Father (Abram) said, "Behold to me you have given not seed; and behold the son of my house inherits me."',
    kjv: 'And Abram said, Behold, to me thou hast given no seed: and, lo, one born in my house is mine heir.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-09' },
},
};
