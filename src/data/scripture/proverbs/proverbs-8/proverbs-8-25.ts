import { Verse } from '@/types';

export const proverbs_8_25: Verse = {
  meta: {
    book: 'Proverbs',
    chapter: 8,
    verse: 25,
  },
  words: [
    {
      hebrew: 'בְּטֶרֶם',
      transliteration: 'beTerem',
      englishLiteral: 'In-before',
      englishNatural: 'In before',
      root: 'terem',
      prefixes: ['be'],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        type: 'adverb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'הָרִים',
      transliteration: 'harim',
      englishLiteral: 'mountains',
      englishNatural: 'mountains',
      root: 'har',
      suffixes: ['im'],
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'הָטְבָּעוּ',
      transliteration: 'hotbau',
      englishLiteral: 'were-sunk',
      englishNatural: 'were sunk',
      root: 'taba',
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'perfect',
        stem: 'hophal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'לִפְנֵי',
      transliteration: 'lifnei',
      englishLiteral: 'to-face-of',
      englishNatural: 'to the-face-of',
      root: 'peh',
      prefixes: ['li'],
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        type: 'preposition',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'גְבָעוֹת',
      transliteration: 'gevaot',
      englishLiteral: 'hills',
      englishNatural: 'hills',
      root: 'givah',
      suffixes: ['ot'],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'feminine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'נוֹלָדְתִּי',
      transliteration: 'noladti',
      englishLiteral: 'was-born-I',
      englishNatural: 'I was born',
      root: 'yalad',
      suffixes: ['ti'],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '1st',
        tense: 'perfect',
        stem: 'niphal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
    },
  ],
  expectedTranslations: {
    hebrew: 'בְּטֶרֶם הָרִים הָטְבָּעוּ לִפְנֵי גְבָעוֹת נוֹלָדְתִּי',
    transliteration: 'beTerem harim hotbau lifnei gevaot noladti',
    englishLiteral:
      'In-before mountains were-sunk, to-face-of hills was-born-I.',
    englishNatural:
      'In before mountains were sunk, to the-face-of hills I was born.',
    kjv: 'Before the mountains were settled, before the hills was I brought forth',
    lastReviewed: { name: 'Matt Gross', date: '2025-06-29' },
  },
};
