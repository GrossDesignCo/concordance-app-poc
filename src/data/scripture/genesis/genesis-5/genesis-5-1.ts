import { type Verse } from '@/types';

export const genesis_5_1: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 5,
    verse: 1,
  },
  words: [
    {
      hebrew: 'זֶה',
      transliteration: 'zeh',
      englishLiteral: 'This',
      englishNatural: 'This',
      root: 'zeh',
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        type: 'pronoun',
        gender: 'masculine',
        number: 'singular',
      },
      lineBreaksBefore: {
        hebrew: 1,
        english: 1,
      },
    },
    {
      hebrew: 'סֵפֶר',
      transliteration: 'sefer',
      englishLiteral: 'book',
      englishNatural: 'book',
      root: 'sefer',
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'תּוֹלְדֹת',
      transliteration: 'toledot',
      englishLiteral: 'birthings',
      englishNatural: 'Birthings of',
      root: 'toledot',
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'plural',
        state: 'construct',
      },
    },
    {
      hebrew: 'אָדָם',
      transliteration: 'Adam',
      englishLiteral: 'Human (Adam)',
      englishNatural: 'Human (Adam)',
      root: 'adam',
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'בְּיוֹם',
      transliteration: 'beYom',
      englishLiteral: 'In-day',
      englishNatural: 'In the day',
      root: 'yom',
      prefixes: ['be'],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'בְּרֹא',
      transliteration: 'bero',
      englishLiteral: 'create',
      englishNatural: 'created',
      root: 'bara',
      prefixes: ['be'],
      order: {
        hebrew: 6,
        english: 7,
      },
      morphology: {
        type: 'verb',
        stem: 'qal',
        tense: 'infinitive_construct',
      },
    },
    {
      hebrew: 'אֱלֹהִים',
      transliteration: 'Elohim',
      englishLiteral: 'Gods',
      englishNatural: 'God',
      root: 'eloah',
      suffixes: ['im'],
      order: {
        hebrew: 7,
        english: 6,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
      },
    },
    {
      hebrew: 'אָדָם',
      transliteration: 'adam',
      englishLiteral: 'Human (Adam)',
      englishNatural: 'Human (Adam)',
      root: 'adam',
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'בִּדְמוּת',
      transliteration: 'biDemut',
      englishLiteral: 'in-likeness-of',
      englishNatural: 'in likeness of',
      root: 'demut',
      prefixes: ['bi'],
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'singular',
        state: 'construct',
      },
    },
    {
      hebrew: 'אֱלֹהִים',
      transliteration: 'Elohim',
      englishLiteral: 'Gods',
      englishNatural: 'God',
      root: 'eloah',
      suffixes: ['im'],
      order: {
        hebrew: 10,
        english: 10,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
      },
    },
    {
      hebrew: 'עָשָׂה',
      transliteration: 'asah',
      englishLiteral: 'he-made',
      englishNatural: 'he made',
      root: 'asah',
      order: {
        hebrew: 11,
        english: 11,
      },
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
        stem: 'qal',
        tense: 'perfect',
      },
    },
    {
      hebrew: 'אֹתוֹ',
      transliteration: 'oto',
      englishLiteral: 'him',
      englishNatural: 'him',
      root: 'et',
      suffixes: ['o'],
      order: {
        hebrew: 12,
        english: 12,
      },
      morphology: {
        type: 'pronoun',
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
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
      'זֶה סֵפֶר תּוֹלְדֹת אָדָם בְּיוֹם בְּרֹא אֱלֹהִים אָדָם בִּדְמוּת אֱלֹהִים עָשָׂה אֹתוֹ',
    transliteration:
      'zeh sefer toledot Adam beYom bero Elohim adam biDemut Elohim asah oto',
    englishLiteral:
      'This book, birthings Human (Adam). In-day create Gods Human (Adam), in-likeness-of Gods he-made him.',
    englishNatural:
      'This book, Birthings of Human (Adam). In the day God created Human (Adam), in likeness of God he made him.',
    kjv: 'This is the book of the generations of Adam. In the day that God created man, in the likeness of God made he him.',
    lastReviewed: { name: 'Matt Gross', date: '2025-07-22' },
  },
};
