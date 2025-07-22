import { type Verse } from '@/types';

export const genesis_5_18: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 5,
    verse: 18,
  },
  words: [
    {
      hebrew: 'וַיְחִי',
      transliteration: 'vaYechi',
      englishLiteral: 'and-lived',
      englishNatural: 'lived',
      root: 'chayah',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
        stem: 'qal',
        tense: 'imperfect',
      },

      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'יָרֶד',
      transliteration: 'Yared',
      englishLiteral: 'Descending (Jared)',
      englishNatural: 'And Descending (Jared)',
      root: 'yared',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'שְׁתַּיִם',
      transliteration: 'shtayim',
      englishLiteral: 'two',
      englishNatural: 'two',
      root: 'shtayim',
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        type: 'numeral',
        gender: 'feminine',
        number: 'dual',
      },
    },
    {
      hebrew: 'וְשִׁשִּׁים',
      transliteration: 'veShishim',
      englishLiteral: 'and-sixty',
      englishNatural: 'and sixty',
      root: 'shishim',
      prefixes: ['ve'],
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        type: 'numeral',
        gender: 'masculine',
        number: 'plural',
      },
    },
    {
      hebrew: 'שָׁנָה',
      transliteration: 'shanah',
      englishLiteral: 'year',
      englishNatural: 'years',
      root: 'shanah',
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'singular',
      },
    },
    {
      hebrew: 'וּמְאַת',
      transliteration: 'uMeat',
      englishLiteral: 'and-hundred-of',
      englishNatural: 'and a hundred',
      root: 'meah',
      prefixes: ['u', 'me'],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        type: 'numeral',
        gender: 'feminine',
        number: 'singular',
        state: 'construct',
      },
    },
    {
      hebrew: 'שָׁנָה',
      transliteration: 'shanah',
      englishLiteral: 'year',
      englishNatural: 'years',
      root: 'shanah',
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וַיּוֹלֶד',
      transliteration: 'vaYoled',
      englishLiteral: 'and-he-birthed',
      englishNatural: 'and birthed',
      root: 'yalad',
      prefixes: ['va'],
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
        stem: 'hiphil',
        tense: 'imperfect',
      },
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'חֲנוֹךְ',
      transliteration: 'Chanokh',
      englishLiteral: 'Dedicated (Enoch)',
      englishNatural: 'Dedicated (Enoch)',
      root: 'Chanokh',
      order: {
        hebrew: 10,
        english: 10,
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
  ],
  expectedTranslations: {
    hebrew:
      'וַיְחִי יָרֶד שְׁתַּיִם וְשִׁשִּׁים שָׁנָה וּמְאַת שָׁנָה וַיּוֹלֶד אֶת־חֲנוֹךְ',
    transliteration:
      'vaYechi Yared shtayim veShishim shanah uMeat shanah vaYoled et-Chanokh',
    englishLiteral:
      'and-lived Descending (Jared) two and-sixty year and-hundred-of year, and-he-birthed ↳ Dedicated (Enoch).',
    englishNatural:
      'And Descending (Jared) lived two and sixty years and a hundred years, and birthed Dedicated (Enoch).',
    kjv: 'And Jared lived an hundred sixty and two years, and begat Enoch:',
    lastReviewed: { name: 'Matt Gross', date: '2025-07-22' },
},
};
