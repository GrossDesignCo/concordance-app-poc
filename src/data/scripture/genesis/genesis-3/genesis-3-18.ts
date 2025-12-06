import { Verse } from '@/types';

export const genesis_3_18: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 3,
    verse: 18,
  },
  words: [
    {
      hebrew: 'וְקוֹץ',
      transliteration: 'veQots',
      englishLiteral: 'And-thorn',
      englishNatural: 'And thorn',
      root: 'qots',
      prefixes: ['ve'],
      order: 1,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun'
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'וְדַרְדַּר',
      transliteration: 'veDardar',
      englishLiteral: 'and-thistle',
      englishNatural: 'and thistle',
      root: 'dardar',
      prefixes: ['ve'],
      order: 2,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun'
      },
    },
    {
      hebrew: 'תַּצְמִיחַ',
      transliteration: 'tatzmich',
      englishLiteral: 'it-will-grow',
      englishNatural: 'it will grow',
      root: 'tzamach',
      prefixes: ['ta'],
      order: 3,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'hiphil',
        type: 'verb'
      },
    },
    {
      hebrew: 'לָךְ',
      transliteration: 'lakh',
      englishLiteral: 'to-you',
      englishNatural: 'to you',
      root: 'la',
      suffixes: ['ekh'],
      order: 4,
      morphology: {
        type: 'preposition'
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'וְאָכַלְתָּ',
      transliteration: 'veAkhlta',
      englishLiteral: 'and-you-will-eat',
      englishNatural: 'and you will eat',
      root: 'akhal',
      prefixes: ['ve'],
      suffixes: ['ta'],
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '2nd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb'
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: 6,
      morphology: {
        type: 'particle'
      },
    },
    {
      hebrew: 'עֵשֶׂב',
      transliteration: 'esev',
      englishLiteral: 'herb',
      englishNatural: 'the herb',
      root: 'esev',
      order: 7,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun'
      },
    },
    {
      hebrew: 'הַשָּׂדֶה׃',
      transliteration: 'haSadeh',
      englishLiteral: 'the-field',
      englishNatural: 'of the field',
      root: 'sadeh',
      prefixes: ['ha'],
      order: 8,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun'
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'וְקוֹץ וְדַרְדַּר תַּצְמִיחַ לָךְ וְאָכַלְתָּ אֶת־עֵשֶׂב הַשָּׂדֶה׃',
    transliteration: 'veQots veDardar tatzmich lakh veAkhlta et-esev haSadeh',
    englishLiteral: 'And-thorn and-thistle it-will-grow to-you; and-you-will-eat ↳ herb the-field;',
    englishNatural: 'And thorn and thistle it will grow to you; and you will eat the herb of the field;',
    kjv: 'Thorns also and thistles shall it bring forth to thee; and thou shalt eat the herb of the field;',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
  },
}; 