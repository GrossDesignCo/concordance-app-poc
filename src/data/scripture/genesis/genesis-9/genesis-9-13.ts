import { Verse } from '@/types';

export const genesis_9_13: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 9,
    verse: 13,
  },
  words: [
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        type: 'particle',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'קַשְׁתִּי',
      transliteration: 'qashti',
      englishLiteral: 'my-bow',
      englishNatural: 'My bow',
      root: 'qeshet',
      suffixes: ['i_possessive'],
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'נָתַתִּי',
      transliteration: 'natati',
      englishLiteral: 'I-have-given',
      englishNatural: 'I have given',
      root: 'natan',
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        gender: 'common',
        number: 'singular',
        person: '1st',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'בֶּעָנָן',
      transliteration: 'beAnan',
      englishLiteral: 'in-the-cloud',
      englishNatural: 'in the cloud',
      root: 'anan',
      prefixes: ['ba'],
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וְהָיְתָה',
      transliteration: 'veHayetah',
      englishLiteral: 'and-she-will-be',
      englishNatural: 'and it will be',
      root: 'hayah',
      prefixes: ['ve'],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'לְאוֹת',
      transliteration: 'leOt',
      englishLiteral: 'for-sign-of',
      englishNatural: 'for the sign of',
      root: 'ot',
      prefixes: ['le'],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'common',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'בְּרִית',
      transliteration: 'berit',
      englishLiteral: 'covenant',
      englishNatural: 'covenant',
      root: 'berit',
      order: {
        hebrew: 7,
        english: 7,
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
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'בֵּינִי',
      transliteration: 'beyni',
      englishLiteral: 'between-me',
      englishNatural: 'between me',
      root: 'beyn',
      suffixes: ['i_possessive'],
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'וּבֵין',
      transliteration: 'uveyn',
      englishLiteral: 'and-between',
      englishNatural: 'and between',
      root: 'beyn',
      prefixes: ['u'],
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הָאָרֶץ',
      transliteration: 'haAretz',
      englishLiteral: 'the-land',
      englishNatural: 'the land',
      root: 'eretz',
      prefixes: ['ha'],
      order: {
        hebrew: 10,
        english: 10,
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
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew:
      'אֶת־קַשְׁתִּי נָתַתִּי בֶּעָנָן וְהָיְתָה לְאוֹת בְּרִית בֵּינִי וּבֵין הָאָרֶץ',
    transliteration:
      'et-qashti natati beAnan veHayetah leOt berit beyni uveyn haAretz',
    englishLiteral:
      '↳ my-bow I-have-given in-the-cloud, and-she-will-be for-sign-of covenant, between-me and-between the-land.',
    englishNatural:
      'My bow I have given in the cloud, and it will be for the sign of covenant, between me and between the land.',
    kjv: 'I do set my bow in the cloud, and it shall be for a token of a covenant between me and the earth.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-05' },
},
};
