import { Verse } from '@/types';

export const jonah_3_1: Verse = {
  meta: {
    book: 'Jonah',
    chapter: 3,
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
      lineBreaksBefore: {
        hebrew: 1,
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
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'He-Who-Is (YHWH)',
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
      hebrew: 'שֵׁנִית',
      transliteration: 'shenit',
      englishLiteral: 'second_time',
      englishNatural: 'the second time',
      root: 'sheni',
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'adverb',
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
      englishNatural: 'to say',
      root: 'amar',
      prefixes: ['le'],
      order: {
        hebrew: 7,
        english: 7,
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
    hebrew: 'וַיְהִי דְבַר־יְהוָה אֶל־יוֹנָה שֵׁנִית לֵאמֹר',
    transliteration: 'vaYehi devar-YHWH el-Yonah shenit lemor',
    englishLiteral:
      'And-was word-of He_Who_Is (YHWH) to- Dove (Jonah) second_time, to-say;',
    englishNatural:
      'And the word of He-Who-Is (YHWH) was to Dove (Jonah) the second time, to say;',
    kjv: 'And the word of the LORD came unto Jonah the second time, saying,',
    lastReviewed: { name: 'Matt Gross', date: '2025-11-27' },
  },
};
