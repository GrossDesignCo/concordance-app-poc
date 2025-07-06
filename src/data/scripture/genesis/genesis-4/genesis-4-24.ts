import { type Verse } from '@/types';

export const genesis_4_24: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 4,
    verse: 24,
  },
  words: [
    {
      hebrew: 'כִּי',
      transliteration: 'ki',
      englishLiteral: 'that',
      englishNatural: 'that',
      root: 'ki',
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        type: 'particle',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'שִׁבְעָתַיִם',
      transliteration: 'shivatayim',
      englishLiteral: 'sevenfold',
      englishNatural: 'sevenfold',
      root: 'sheva',
      order: {
        hebrew: 2,
        english: 4,
      },
      morphology: {
        type: 'numeral',
        gender: 'masculine',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'יֻקַּם־',
      transliteration: 'yuqam-',
      englishLiteral: 'shall-be-avenged',
      englishNatural: 'shall be avenged',
      root: 'naqam',
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
        stem: 'hophal',
        tense: 'imperfect',
      },
    },
    {
      hebrew: 'קָיִן',
      transliteration: 'Qayin',
      englishLiteral: 'Acquired (Cain)',
      englishNatural: 'Acquired (Cain)',
      root: 'Qayin',
      order: {
        hebrew: 4,
        english: 2,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'וְלֶמֶךְ',
      transliteration: 'veLemekh',
      englishLiteral: 'and-Powerful (Lamech)',
      englishNatural: 'and Powerful (Lamech)',
      root: 'Lemekh',
      prefixes: ['ve'],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
    },
    {
      hebrew: 'שִׁבְעִים',
      transliteration: 'shivim',
      englishLiteral: 'seventy',
      englishNatural: 'seventy',
      root: 'sheva',
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        type: 'numeral',
        gender: 'masculine',
      },
    },
    {
      hebrew: 'וְשִׁבְעָה',
      transliteration: 'veShivah',
      englishLiteral: 'and-seven',
      englishNatural: 'and seven',
      root: 'sheva',
      prefixes: ['ve'],
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        type: 'numeral',
        gender: 'masculine',
      },
      grammarSuffix: {
        englishLiteral: '."',
        englishNatural: '."',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'כִּי שִׁבְעָתַיִם יֻקַּם־קָיִן וְלֶמֶךְ שִׁבְעִים וְשִׁבְעָה',
    transliteration: 'ki shivatayim yuqam-Qayin veLemekh shivim veShivah',
    englishLiteral:
      'that sevenfold shall-be-avenged Acquired (Cain), and-Powerful (Lamech) seventy and-seven."',
    englishNatural:
      'that Acquired (Cain) shall be avenged sevenfold, and Powerful (Lamech) seventy and seven."',
    kjv: 'If Cain shall be avenged sevenfold, truly Lamech seventy and sevenfold.',
    lastReviewed: { name: 'Matt Gross', date: '2025-07-06' },
},
};
