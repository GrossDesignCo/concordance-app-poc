import { Verse } from '@/types';

export const jonah_4_1: Verse = {
  meta: {
    book: 'Jonah',
    chapter: 4,
    verse: 1,
  },
  words: [
    {
      hebrew: 'וַיֵּרַע',
      transliteration: 'vaYera',
      englishLiteral: 'And-was-bad',
      englishNatural: 'And it was bad',
      root: 'yara',
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
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'אֶל־',
      transliteration: 'el-',
      englishLiteral: 'to-',
      englishNatural: 'to',
      root: 'el',
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'יוֹנָה',
      transliteration: 'Yonah',
      englishLiteral: 'Dove (Jonah)',
      englishNatural: 'Dove (Jonah)',
      root: 'yonah',
      order: {
        hebrew: 3,
        english: 3,
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
      hebrew: 'רָעָה',
      transliteration: 'raah',
      englishLiteral: 'bad',
      englishNatural: 'bad',
      root: 'ra',
      order: {
        hebrew: 4,
        english: 5,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'adjective',
      },
      grammarSuffix: {
        englishNatural: ';',
      },
    },
    {
      hebrew: 'גְדוֹלָה',
      transliteration: 'gedolah',
      englishLiteral: 'great',
      englishNatural: 'a great',
      root: 'gadol',
      order: {
        hebrew: 5,
        english: 4,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'adjective',
      },
      grammarSuffix: {
        englishLiteral: ';',
      },
    },
    {
      hebrew: 'וַיִּחַר',
      transliteration: 'vaYichar',
      englishLiteral: 'and-fumed_angrily',
      englishNatural: 'and it fumed angrily',
      root: 'charah',
      prefixes: ['va'],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'לוֹ',
      transliteration: 'lo',
      englishLiteral: 'to-him',
      englishNatural: 'to him',
      root: 'lo',
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        type: 'preposition',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'וַיֵּרַע אֶל־יוֹנָה רָעָה גְדוֹלָה וַיִּחַר לוֹ',
    transliteration: 'vaYera el-Yonah raah gedolah vaYichar lo',
    englishLiteral:
      'And-was-bad to- Dove (Jonah), bad great; and-fumed_angrily to-him.',
    englishNatural:
      'And it was bad to Dove (Jonah), a great bad; and it fumed angrily to him.',
    kjv: 'But it displeased Jonah exceedingly, and he was very angry.',
    lastReviewed: { name: 'Matt Gross', date: '2025-10-19' },
  },
};
