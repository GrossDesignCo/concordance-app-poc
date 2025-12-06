import { Verse } from '@/types';

export const genesis_2_12: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 2,
    verse: 12,
  },
  words: [
    {
      hebrew: 'וּזְהַב',
      transliteration: 'uZehav',
      englishLiteral: 'and-gold',
      englishNatural: 'And the gold',
      root: 'zahav',
      prefixes: ['u'],
      order: 1,
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'הָאָרֶץ',
      transliteration: 'haAretz',
      englishLiteral: 'the-land',
      englishNatural: 'land',
      root: 'eretz',
      prefixes: ['ha'],
      order: {
        hebrew: 2,
        english: 3,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'הַהִוא',
      transliteration: 'haHi',
      englishLiteral: 'the-that',
      englishNatural: 'of that',
      root: 'hu',
      prefixes: ['ha'],
      order: {
        hebrew: 3,
        english: 2,
      },
      morphology: {
        type: 'pronoun',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'טוֹב',
      transliteration: 'tov',
      englishLiteral: 'good',
      englishNatural: 'good',
      root: 'tov',
      order: 4,
      morphology: {
        type: 'adjective',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'שָׁם',
      transliteration: 'sham',
      englishLiteral: 'there',
      englishNatural: 'there is',
      root: 'sham',
      order: 5,
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'הַבְּדֹלַח',
      transliteration: 'haBedolach',
      englishLiteral: 'the-bedolach',
      englishNatural: 'the bedolach',
      root: 'bedolach',
      prefixes: ['ha'],
      order: 6,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וְאֶבֶן',
      transliteration: 'veEven',
      englishLiteral: 'and-stone',
      englishNatural: 'and the stone',
      root: 'even',
      prefixes: ['ve'],
      order: 7,
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'הַשֹּׁהַם׃',
      transliteration: 'haShoham',
      englishLiteral: 'the-onyx',
      englishNatural: 'of onyx',
      root: 'shoham',
      prefixes: ['ha'],
      order: 8,
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
    hebrew: 'וּזְהַב הָאָרֶץ הַהִוא טוֹב שָׁם הַבְּדֹלַח וְאֶבֶן הַשֹּׁהַם׃',
    transliteration: 'uZehav haAretz haHi tov sham haBedolach veEven haShoham',
    englishLiteral:
      'and-gold the-land the-that, good; there the-bedolach, and-stone the-onyx.',
    englishNatural:
      'And the gold of that land, good; there is the bedolach, and the stone of onyx.',
    kjv: 'And the gold of that land is good: there is bdellium and the onyx stone.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
  },
};
