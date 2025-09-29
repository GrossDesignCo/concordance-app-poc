import { Verse } from '@/types';

export const jonah_1_2: Verse = {
  meta: {
    book: 'Jonah',
    chapter: 1,
    verse: 2,
  },
  words: [
    {
      hebrew: 'קוּם',
      transliteration: 'qum',
      englishLiteral: 'Stand_up',
      englishNatural: 'Stand-up',
      root: 'qum',
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '2nd',
        tense: 'imperative',
        stem: 'qal',
        type: 'verb',
      },
      grammarPrefix: {
        englishLiteral: '"',
        englishNatural: '"',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'לֵךְ',
      transliteration: 'lekh',
      englishLiteral: 'go',
      englishNatural: 'go',
      root: 'halakh',
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '2nd',
        tense: 'imperative',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'אֶל־',
      transliteration: 'el-',
      englishLiteral: 'to-',
      englishNatural: 'to',
      root: 'el',
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'נִינְוֵה',
      transliteration: 'Nineveh',
      englishLiteral: 'Dwelling_of_Fish (Nineveh)',
      englishNatural: 'Dwelling-of-Fish (Nineveh)',
      root: 'nineveh',
      order: {
        hebrew: 4,
        english: 4,
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
    },
    {
      hebrew: 'הָעִיר',
      transliteration: 'haIr',
      englishLiteral: 'the-city',
      englishNatural: 'the city',
      root: 'ir',
      prefixes: ['ha'],
      order: {
        hebrew: 5,
        english: 5,
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
    },
    {
      hebrew: 'הַגְּדוֹלָה',
      transliteration: 'haGedolah',
      englishLiteral: 'the-great',
      englishNatural: 'the great',
      root: 'gadol',
      prefixes: ['ha'],
      suffixes: ['ah'],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'adjective',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'וּקְרָא',
      transliteration: 'uQera',
      englishLiteral: 'and-call_out',
      englishNatural: 'and call-out',
      root: 'qara',
      prefixes: ['u'],
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '2nd',
        tense: 'imperative',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'עָלֶיהָ',
      transliteration: 'aleha',
      englishLiteral: 'over-her',
      englishNatural: 'over her',
      root: 'al',
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        type: 'preposition',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'כִּי־',
      transliteration: 'ki-',
      englishLiteral: 'that-',
      englishNatural: 'that',
      root: 'ki',
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        type: 'conjunction',
      },
    },
    {
      hebrew: 'עָלְתָה',
      transliteration: 'aletah',
      englishLiteral: 'went_up',
      englishNatural: 'has come up',
      root: 'alah',
      suffixes: ['ah'],
      order: {
        hebrew: 10,
        english: 11,
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
      hebrew: 'רָעָתָם',
      transliteration: 'raatam',
      englishLiteral: 'bad-their',
      englishNatural: 'their bad',
      root: 'raah',
      suffixes: ['am'],
      order: {
        hebrew: 11,
        english: 10,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'לְפָנָי',
      transliteration: 'lefanai',
      englishLiteral: 'before-me',
      englishNatural: 'before me',
      root: 'panah',
      order: {
        hebrew: 12,
        english: 12,
      },
      morphology: {
        type: 'preposition',
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
      'קוּם לֵךְ אֶל־נִינְוֵה הָעִיר הַגְּדוֹלָה וּקְרָא עָלֶיהָ כִּי־עָלְתָה רָעָתָם לְפָנָי',
    transliteration:
      'qum lekh el-Nineveh haIr haGedolah uQera aleha ki-aletah raatam lefanai',
    englishLiteral:
      '"Stand_up, go to- Dwelling_of_Fish (Nineveh), the-city, the-great; and-call_out over-her, that- went_up bad-their before-me."',
    englishNatural:
      '"Stand-up, go to Dwelling-of-Fish (Nineveh), the city, the great; and call-out over her, that their bad has come up before me."',
    kjv: 'Arise, go to Nineveh, that great city, and cry against it; for their wickedness is come up before me.',
    lastReviewed: { name: 'Matt Gross', date: '2025-09-29' },
  },
};
