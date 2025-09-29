import { Verse } from '@/types';

export const jonah_1_1: Verse = {
  meta: {
    book: 'Jonah',
    chapter: 1,
    verse: 1,
  },
  words: [
    {
      hebrew: 'וַיְהִי',
      transliteration: 'vaYehi',
      englishLiteral: 'And-was',
      englishNatural: 'was',
      root: 'hayah',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'דְבַר־',
      transliteration: 'devar-',
      englishLiteral: 'word-of',
      englishNatural: 'And the word of',
      root: 'davar',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is',
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
      hebrew: 'אֶל־',
      transliteration: 'el-',
      englishLiteral: 'to-',
      englishNatural: 'to',
      root: 'el',
      order: {
        hebrew: 4,
        english: 4,
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
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'בֶן־',
      transliteration: 'ben-',
      englishLiteral: 'son-of',
      englishNatural: 'son of',
      root: 'ben',
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'אֲמִתַּי',
      transliteration: 'Amittai',
      englishLiteral: 'My_Truth',
      englishNatural: 'My-Truth',
      root: 'amittai',
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'לֵאמֹר',
      transliteration: 'lemor',
      englishLiteral: 'to-say',
      englishNatural: 'saying',
      root: 'amar',
      prefixes: ['le'],
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        type: 'verb',
        tense: 'infinitive_construct',
        stem: 'qal',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'וַיְהִי דְבַר־יְהוָה אֶל־יוֹנָה בֶן־אֲמִתַּי לֵאמֹר',
    transliteration: 'vaYehi devar-YHWH el-Yonah ben-Amittai lemor',
    englishLiteral:
      'And-was word-of He_Who_Is to- Dove (Jonah) son-of My_Truth, to-say;',
    englishNatural:
      'And the word of He-Who-Is was to Dove (Jonah) son of My-Truth, saying;',
    kjv: 'Now the word of the LORD came unto Jonah the son of Amittai, saying,',
    lastReviewed: { name: 'Matt Gross', date: '2025-09-29' },
  },
};
