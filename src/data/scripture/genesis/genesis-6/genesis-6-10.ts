import { Verse } from '@/types';

export const genesis_6_10: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 6,
    verse: 10,
  },
  words: [
    {
      hebrew: 'וַיּוֹלֶד',
      transliteration: 'vayYoled',
      englishLiteral: 'And-he-birthed',
      englishNatural: 'birthed',
      root: 'yalad',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'hiphil',
        type: 'verb',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'נֹחַ',
      transliteration: 'noach',
      englishLiteral: 'Rest (Noah)',
      englishNatural: 'And Rest (Noah)',
      root: 'noach',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'שְׁלֹשָׁה',
      transliteration: 'shloshah',
      englishLiteral: 'three',
      englishNatural: 'three',
      root: 'shalosh',
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        type: 'numeral',
      },
    },
    {
      hebrew: 'בָנִים',
      transliteration: 'vanim',
      englishLiteral: 'sons',
      englishNatural: 'sons',
      root: 'ben',
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ':',
        englishNatural: ':',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'שֵׁם',
      transliteration: 'shem',
      englishLiteral: 'Name (Shem)',
      englishNatural: 'Name (Shem)',
      root: 'shem',
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וְאֶת־',
      transliteration: 'veEt-',
      englishLiteral: 'and-↳',
      englishNatural: 'and',
      root: 'et',
      prefixes: ['ve'],
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'חָם',
      transliteration: 'cham',
      englishLiteral: 'Hot (Ham)',
      englishNatural: 'Hot (Ham)',
      root: 'cham',
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וְאֶת־',
      transliteration: 'veEt-',
      englishLiteral: 'and-↳',
      englishNatural: 'and',
      root: 'et',
      prefixes: ['ve'],
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'יָפֶת',
      transliteration: 'yafet',
      englishLiteral: 'Spacious (Japheth)',
      englishNatural: 'Spacious (Japheth)',
      root: 'yafet',
      order: {
        hebrew: 10,
        english: 10,
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
    hebrew: 'וַיּוֹלֶד נֹחַ שְׁלֹשָׁה בָנִים אֶת־שֵׁם וְאֶת־חָם וְאֶת־יָפֶת',
    transliteration:
      'vayYoled noach shloshah vanim et-shem veEt-cham veEt-yafet',
    englishLiteral:
      'And-he-birthed Rest (Noah) three sons: ↳ Name (Shem), and-↳ Hot (Ham), and-↳ Spacious (Japheth).',
    englishNatural:
      'And Rest (Noah) birthed three sons: Name (Shem), and Hot (Ham), and Spacious (Japheth).',
    kjv: 'And Noah begat three sons, Shem, Ham, and Japheth.',
    lastReviewed: { name: 'Matt Gross', date: '2025-11-24' },
  },
};
