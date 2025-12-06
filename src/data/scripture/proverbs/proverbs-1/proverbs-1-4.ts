import { Verse } from '@/types';

export const proverbs_1_4: Verse = {
  meta: {
    book: 'Proverbs',
    chapter: 1,
    verse: 4,
  },
  words: [
    {
      hebrew: 'לָתֵת',
      transliteration: 'latet',
      englishLiteral: 'To-give',
      englishNatural: 'To give',
      root: 'natan',
      prefixes: ['la'],
      order: 1,
      morphology: {
        tense: 'infinitive_construct',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'לַפְּתָאיִם',
      transliteration: 'lapetaim',
      englishLiteral: 'to-simple_men',
      englishNatural: 'to simple men',
      root: 'petaim',
      prefixes: ['la'],
      order: 2,
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
      hebrew: 'עָרְמָה',
      transliteration: 'armah',
      englishLiteral: 'shrewdness',
      englishNatural: 'shrewdness',
      root: 'armah',
      order: 3,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'לְנַעַר',
      transliteration: 'lenaar',
      englishLiteral: 'to-young_man',
      englishNatural: 'to a young man',
      root: 'naar',
      prefixes: ['le'],
      order: 4,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'דַּעַת',
      transliteration: 'daat',
      englishLiteral: 'knowledge',
      englishNatural: 'knowledge',
      root: 'daat',
      order: 5,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'וּמְזִמָּה',
      transliteration: 'umezimmah',
      englishLiteral: 'and-purpose',
      englishNatural: 'and purpose',
      root: 'mezimmah',
      prefixes: ['u'],
      order: 6,
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
    hebrew: 'לָתֵת לַפְּתָאיִם עָרְמָה לְנַעַר דַּעַת וּמְזִמָּה',
    transliteration: 'latet lapetaim armah lenaar daat umezimmah',
    englishLiteral: 'To-give to-simple_men, shrewdness; to-young_man, knowledge and-purpose.',
    englishNatural: 'To give to simple men, shrewdness; to a young man, knowledge and purpose.',
    kjv: 'To give subtilty to the simple, to the young man knowledge and discretion',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
  },
}; 