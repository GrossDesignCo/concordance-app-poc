import { Verse } from '@/types';

export const genesis_2_13: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 2,
    verse: 13,
  },
  words: [
    {
      hebrew: 'וְשֵׁם־',
      transliteration: 'veShem-',
      englishLiteral: 'and-name-',
      englishNatural: 'And the name of',
      root: 'shem',
      prefixes: ['ve'],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'הַנָּהָר',
      transliteration: 'haNahar',
      englishLiteral: 'the-river',
      englishNatural: 'river',
      root: 'nahar',
      prefixes: ['ha'],
      order: {
        hebrew: 2,
        english: 3,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'הַשֵּׁנִי',
      transliteration: 'haSheni',
      englishLiteral: 'the-second',
      englishNatural: 'the second',
      root: 'sheni',
      prefixes: ['ha'],
      order: {
        hebrew: 3,
        english: 2,
      },
      morphology: {
        type: 'numeral',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'גִּיחוֹן',
      transliteration: 'Gichon',
      englishLiteral: 'Gusher (Gichon)',
      englishNatural: 'Gusher (Gichon)',
      root: 'gichon',
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'הוּא',
      transliteration: 'hu',
      englishLiteral: 'he',
      englishNatural: 'it',
      root: 'hu',
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        type: 'pronoun',
      },
    },
    {
      hebrew: 'הַסּוֹבֵב',
      transliteration: 'haSovev',
      englishLiteral: 'the-going_around',
      englishNatural: 'goes-around',
      root: 'savav',
      prefixes: ['ha'],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        type: 'verb',
        stem: 'piel',
        tense: 'participle',
      },
    },
    {
      hebrew: 'אֵת',
      transliteration: 'et',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: {
        hebrew: 7,
        english: 7,
      },
    },
    {
      hebrew: 'כָּל־',
      transliteration: 'kol-',
      englishLiteral: 'all-',
      englishNatural: 'all',
      root: 'kol',
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        type: 'adjective',
      },
    },
    {
      hebrew: 'אֶרֶץ',
      transliteration: 'eretz',
      englishLiteral: 'land',
      englishNatural: 'the land of',
      root: 'eretz',
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'singular',
      },
    },
    {
      hebrew: 'כּוּשׁ׃',
      transliteration: 'Kush',
      englishLiteral: 'Black (Kush)',
      englishNatural: 'Black (Kush)',
      root: 'kush',
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
    },
  ],
  expectedTranslations: {
    hebrew:
      'וְשֵׁם־הַנָּהָר הַשֵּׁנִי גִּיחוֹן הוּא הַסּוֹבֵב אֵת כָּל־אֶרֶץ כּוּשׁ׃',
    transliteration:
      'veShem-haNahar haSheni Gichon hu haSovev et kol-eretz Kush',
    englishLiteral:
      'and-name- the-river the-second, Gusher (Gichon); he the-going_around ↳ all- land Black (Kush).',
    englishNatural:
      'And the name of the second river, Gusher (Gichon); it goes-around all the land of Black (Kush).',
    kjv: 'And the name of the second river is Gihon: the same is it that compasseth the whole land of Ethiopia.',
    lastReviewed: { name: 'Matt Gross', date: '2025-11-21' },
  },
};
