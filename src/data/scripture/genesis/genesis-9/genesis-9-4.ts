import { Verse } from '@/types';

export const genesis_9_4: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 9,
    verse: 4,
  },
  words: [
    {
      hebrew: 'אַךְ־',
      transliteration: 'akh-',
      englishLiteral: 'Only-',
      englishNatural: 'Only',
      root: 'akh',
      order: 1,
      morphology: {
        type: 'adverb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'בָּשָׂר',
      transliteration: 'basar',
      englishLiteral: 'flesh',
      englishNatural: 'flesh',
      root: 'basar',
      order: 2,
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
      hebrew: 'בְּנַפְשׁוֹ',
      transliteration: 'beNafsho',
      englishLiteral: 'in-its-wind',
      englishNatural: 'in its wind',
      root: 'nephesh',
      prefixes: ['be'],
      suffixes: ['o'],
      order: 3,
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
      hebrew: 'דָמוֹ',
      transliteration: 'damo',
      englishLiteral: 'its-blood',
      englishNatural: 'its blood',
      root: 'dam',
      suffixes: ['o'],
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
    },
    {
      hebrew: 'לֹא',
      transliteration: 'lo',
      englishLiteral: 'not',
      englishNatural: 'not',
      root: 'lo',
      order: {
        hebrew: 5,
        english: 6,
      },
      morphology: {
        type: 'adverb',
      },
      grammarSuffix: {
        englishNatural: '.',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'תֹאכֵלוּ',
      transliteration: 'tokhelu',
      englishLiteral: 'you-will-eat',
      englishNatural: 'you will eat',
      root: 'akhal',
      suffixes: ['u'],
      order: {
        hebrew: 6,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '2nd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: '.',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
  ],
  expectedTranslations: {
    hebrew: 'אַךְ־בָּשָׂר בְּנַפְשׁוֹ דָמוֹ לֹא תֹאכֵלוּ',
    transliteration: 'akh-basar beNafsho damo lo tokhelu',
    englishLiteral: 'Only- flesh, in-its-wind, its-blood, not you-will-eat.',
    englishNatural: 'Only flesh, in its wind, its blood, you will eat not.',
    kjv: 'But flesh with the life thereof, which is the blood thereof, shall ye not eat.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
  },
};
