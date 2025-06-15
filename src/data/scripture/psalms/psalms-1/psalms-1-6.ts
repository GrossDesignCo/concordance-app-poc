import { Verse } from '@/types';

export const psalms_1_6: Verse = {
  meta: {
    book: 'Psalms',
    chapter: 1,
    verse: 6,
  },
  words: [
    {
      hebrew: 'כִּי',
      transliteration: 'ki',
      englishLiteral: 'That',
      englishNatural: 'That',
      root: 'ki',
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        type: 'conjunction',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'יוֹדֵעַ',
      transliteration: 'yodea',
      englishLiteral: 'knowing',
      englishNatural: 'knows',
      root: 'yada',
      order: {
        hebrew: 2,
        english: 3,
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
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He-Who-Is',
      englishNatural: 'He-Who-Is',
      root: 'yhwh',
      order: {
        hebrew: 3,
        english: 2,
      },
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'דֶּרֶךְ',
      transliteration: 'derekh',
      englishLiteral: 'way-of',
      englishNatural: 'the way of',
      root: 'derekh',
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'צַדִּיקִים',
      transliteration: 'tzadiqim',
      englishLiteral: 'righteous-ones',
      englishNatural: 'the righteous',
      root: 'tzadiq',
      suffixes: ['im'],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וְדֶרֶךְ',
      transliteration: 'veDerekh',
      englishLiteral: 'and-way-of',
      englishNatural: 'and the way of',
      root: 'derekh',
      prefixes: ['ve'],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'רְשָׁעִים',
      transliteration: 'reshaim',
      englishLiteral: 'wicked-ones',
      englishNatural: 'the wicked',
      root: 'rasha',
      suffixes: ['im'],
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'תֹּאבֵד',
      transliteration: 'toved',
      englishLiteral: 'it-will-perish',
      englishNatural: 'will perish',
      root: 'abad',
      prefixes: ['to'],
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
    },
  ],
  expectedTranslations: {
    hebrew: 'כִּי יוֹדֵעַ יְהוָה דֶּרֶךְ צַדִּיקִים וְדֶרֶךְ רְשָׁעִים תֹּאבֵד',
    transliteration: 'ki yodea YHWH derekh tzadiqim veDerekh reshaim toved',
    englishLiteral:
      'That knowing He-Who-Is way-of righteous-ones, and-way-of wicked-ones it-will-perish.',
    englishNatural:
      'That He-Who-Is knows the way of the righteous, and the way of the wicked will perish.',
    kjv: 'For the LORD knoweth the way of the righteous: but the way of the ungodly shall perish.',
    lastReviewed: { name: 'Matt Gross', date: '2025-06-15' },
},
}; 