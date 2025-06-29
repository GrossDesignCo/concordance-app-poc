import { Verse } from '@/types';

export const proverbs_1_6: Verse = {
  meta: {
    book: 'Proverbs',
    chapter: 1,
    verse: 6,
  },
  words: [
    {
      hebrew: 'לְהָבִין',
      transliteration: 'lehavin',
      englishLiteral: 'To-understand',
      englishNatural: 'To understand',
      root: 'bin',
      prefixes: ['le'],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        tense: 'infinitive_construct',
        stem: 'hiphil',
        type: 'verb',
      },
    },
    {
      hebrew: 'מָשָׁל',
      transliteration: 'mashal',
      englishLiteral: 'rule',
      englishNatural: 'a rule',
      root: 'mashal',
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'וּמְלִיצָה',
      transliteration: 'uMelitzah',
      englishLiteral: 'and-interpretation',
      englishNatural: 'and the interpretation',
      root: 'melitzah',
      prefixes: ['u'],
      order: {
        hebrew: 3,
        english: 3,
      },
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
      hebrew: 'דִּבְרֵי',
      transliteration: 'divre',
      englishLiteral: 'words-of',
      englishNatural: 'words of',
      root: 'davar',
      suffixes: ['i'],
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'חֲכָמִים',
      transliteration: 'chachamim',
      englishLiteral: 'wise-men',
      englishNatural: 'wise men',
      root: 'chakam',
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'וְחִידֹתָם',
      transliteration: 'veChidotam',
      englishLiteral: 'and-sharp_sayings-their',
      englishNatural: 'and their sharp-sayings',
      root: 'chidah',
      prefixes: ['ve'],
      suffixes: ['am'],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'feminine',
        number: 'plural',
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
    hebrew: 'לְהָבִין מָשָׁל וּמְלִיצָה דִּבְרֵי חֲכָמִים וְחִידֹתָם',
    transliteration: 'lehavin mashal uMelitzah divre chachamim veChidotam',
    englishLiteral: 'To-understand rule and-interpretation; words-of wise-men and-sharp_sayings-their.',
    englishNatural: 'To understand a rule and the interpretation; words of wise men and their sharp-sayings.',
    kjv: 'To understand a proverb, and the interpretation; the words of the wise, and their dark sayings',
    lastReviewed: { name: 'Matt Gross', date: '2025-06-29' },
  },
}; 