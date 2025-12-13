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
      order: 1,
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
      order: 2,
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
      order: 3,
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
      englishLiteral: 'to-faces-of',
      englishNatural: 'to the faces of',
      root: 'panim',
      prefixes: ['li'],
      order: 4,
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
      order: 5,
      morphology: {
        gender: 'feminine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'נוֹלָדְתִּי',
      transliteration: 'noladti',
      englishLiteral: 'was-birthed-I',
      englishNatural: 'I was birthed',
      root: 'yalad',
      suffixes: ['ti'],
      order: 6,
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
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'בְּטֶרֶם הָרִים הָטְבָּעוּ לִפְנֵי גְבָעוֹת נוֹלָדְתִּי',
    transliteration: 'beTerem harim hotbau lifnei gevaot noladti',
    englishLiteral:
      'In-before mountains were-sunk, to-faces-of hills was-birthed-I.',
    englishNatural:
      'In before mountains were sunk, to the faces of hills I was birthed.',
    kjv: 'Before the mountains were settled, before the hills was I brought forth',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-13' },
  },
};
