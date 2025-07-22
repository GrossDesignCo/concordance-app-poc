import { type Verse } from '@/types';

export const genesis_5_21: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 5,
    verse: 21,
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
      hebrew: 'חֲנוֹךְ',
      transliteration: 'Chanokh',
      englishLiteral: 'Dedicated (Enoch)',
      englishNatural: 'And Dedicated (Enoch)',
      root: 'Chanokh',
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
      hebrew: 'חֲמִשָּׁה',
      transliteration: 'chamishah',
      englishLiteral: 'five',
      englishNatural: 'five',
      root: 'chamishah',
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        type: 'numeral',
        gender: 'masculine',
        number: 'plural',
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
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וַיּוֹלֶד',
      transliteration: 'vaYoled',
      englishLiteral: 'and-birthed',
      englishNatural: 'and birthed',
      root: 'yalad',
      prefixes: ['va'],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
        stem: 'hiphil',
        tense: 'imperfect',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: {
        hebrew: 7,
        english: 7,
      },
    },
    {
      hebrew: 'מְתוּשָׁלַח',
      transliteration: 'Metushalach',
      englishLiteral: 'Man-of-the-Dart (Methuselah)',
      englishNatural: 'Man-of-the-Dart (Methuselah)',
      root: 'Metushalach',
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      grammarPrefix: {
        englishLiteral: '"',
        englishNatural: '"',
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
      'וַיְחִי חֲנוֹךְ חֲמִשָּׁה וְשִׁשִּׁים שָׁנָה וַיּוֹלֶד אֶת־מְתוּשָׁלַח',
    transliteration:
      'vaYechi Chanokh chamishah veShishim shanah vaYoled et-Metushalach',
    englishLiteral:
      'and-lived Dedicated (Enoch) five and-sixty year, and-birthed ↳ "Man-of-the-Dart (Methuselah)."',
    englishNatural:
      'And Dedicated (Enoch) lived five and sixty years, and birthed "Man-of-the-Dart (Methuselah)."',
    kjv: 'And Enoch lived sixty and five years, and begat Methuselah.',
    lastReviewed: { name: 'Matt Gross', date: '2025-07-22' },
  },
};
