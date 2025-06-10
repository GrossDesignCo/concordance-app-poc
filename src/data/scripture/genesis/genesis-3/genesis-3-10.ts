import { Verse } from '@/types';

export const genesis_3_10: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 3,
    verse: 10,
  },
  words: [
    {
      hebrew: 'וַיֹּאמֶר',
      transliteration: 'vaYomer',
      englishLiteral: 'And-he-said',
      englishNatural: 'And he said',
      root: 'amar',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb'
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
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
        hebrew: 2,
        english: 2,
      },
      grammarPrefix: {
        englishLiteral: '"',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'קֹלְךָ',
      transliteration: 'qolkha',
      englishLiteral: 'Your-voice',
      englishNatural: 'Your voice',
      root: 'qol',
      suffixes: ['kha'],
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun'
      },
      grammarPrefix: {
        englishNatural: '"',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'שָׁמַעְתִּי',
      transliteration: 'shamati',
      englishLiteral: 'I-heard',
      englishNatural: 'I heard',
      root: 'shama',
      suffixes: ['ti'],
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        gender: 'common',
        number: 'singular',
        person: '1st',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb'
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'בַּגָּן',
      transliteration: 'baGan',
      englishLiteral: 'in-Garden',
      englishNatural: 'in Garden',
      root: 'gan',
      prefixes: ['ba'],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun'
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וָאִירָא',
      transliteration: 'vaIra',
      englishLiteral: 'and-I-feared',
      englishNatural: 'and I feared',
      root: 'yare',
      prefixes: ['va'],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'common',
        number: 'singular',
        person: '1st',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb'
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'כִּי־',
      transliteration: 'ki-',
      englishLiteral: 'that-',
      englishNatural: 'that',
      root: 'ki',
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        type: 'conjunction'
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'עֵירֹם',
      transliteration: 'arom',
      englishLiteral: 'naked',
      englishNatural: 'naked',
      root: 'arom',
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'adjective'
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'אָנֹכִי',
      transliteration: 'anokhi',
      englishLiteral: 'I',
      englishNatural: 'I am',
      root: 'anokhi',
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        type: 'pronoun'
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וָאֵחָבֵא',
      transliteration: 'vaEchave',
      englishLiteral: 'and-I-hid',
      englishNatural: 'and I hid',
      root: 'chaba',
      prefixes: ['va'],
      order: {
        hebrew: 10,
        english: 10,
      },
      morphology: {
        gender: 'common',
        number: 'singular',
        person: '1st',
        tense: 'imperfect',
        stem: 'niphal',
        type: 'verb'
      },
      grammarSuffix: {
        englishLiteral: '."',
        englishNatural: '."',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'וַיֹּאמֶר אֶת־קֹלְךָ שָׁמַעְתִּי בַּגָּן וָאִירָא כִּי־עֵירֹם אָנֹכִי וָאֵחָבֵא',
    transliteration: 'vaYomer et-qolkha shamati baGan vaIra ki-arom anokhi vaEchave',
    englishLiteral: 'And-he-said, "↳ Your-voice, I-heard, in-Garden, and-I-feared; that- naked, I, and-I-hid."',
    englishNatural: 'And he said, "Your voice, I heard, in Garden, and I feared; that naked, I am, and I hid."',
    kjv: 'And he said, I heard thy voice in the garden, and I was afraid, because I was naked; and I hid myself.',
    lastReviewed: { name: 'Matt Gross', date: '2025-06-10' },
  },
}; 