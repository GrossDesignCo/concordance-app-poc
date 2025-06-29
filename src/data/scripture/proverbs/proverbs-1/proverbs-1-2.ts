import { Verse } from '@/types';

export const proverbs_1_2: Verse = {
  meta: {
    book: 'Proverbs',
    chapter: 1,
    verse: 2,
  },
  words: [
    {
      hebrew: 'לָדַעַת',
      transliteration: 'ladaat',
      englishLiteral: 'To-know',
      englishNatural: 'To know',
      root: 'yada',
      prefixes: ['la'],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        tense: 'infinitive_construct',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'חָכְמָה',
      transliteration: 'chokmah',
      englishLiteral: 'Wisdom',
      englishNatural: 'Wisdom',
      root: 'chokmah',
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'וּמוּסָר',
      transliteration: 'umusar',
      englishLiteral: 'and-Discipline',
      englishNatural: 'and Discipline',
      root: 'musar',
      prefixes: ['u'],
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'לְהָבִין',
      transliteration: 'lehavin',
      englishLiteral: 'To-understand',
      englishNatural: 'To understand',
      root: 'bin',
      prefixes: ['le'],
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        tense: 'infinitive_construct',
        stem: 'hiphil',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'אִמְרֵי',
      transliteration: 'imre',
      englishLiteral: 'words-of',
      englishNatural: 'words of',
      root: 'emer',
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
        state: 'construct',
      },
    },
    {
      hebrew: 'בִינָה',
      transliteration: 'binah',
      englishLiteral: 'understanding',
      englishNatural: 'understanding',
      root: 'binah',
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'לָדַעַת חָכְמָה וּמוּסָר לְהָבִין אִמְרֵי בִינָה',
    transliteration: 'ladaat chokmah umusar lehavin imre binah',
    englishLiteral: 'To-know Wisdom and-Discipline; To-understand words-of understanding.',
    englishNatural: 'To know Wisdom and Discipline; To understand words of understanding.',
    kjv: 'To know wisdom and instruction; to perceive the words of understanding',
    lastReviewed: { name: 'Matt Gross', date: '2025-06-29' },
  },
}; 