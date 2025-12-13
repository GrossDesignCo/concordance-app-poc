import { Verse } from '@/types';

export const genesis_6_11: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 6,
    verse: 11,
  },
  words: [
    {
      hebrew: 'וַתִּשָּׁחֵת',
      transliteration: 'vatTishachet',
      englishLiteral: 'And-it-corrupted',
      englishNatural: 'corrupted',
      root: 'shachat',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'niphal',
        type: 'verb',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'הָאָרֶץ',
      transliteration: 'haAretz',
      englishLiteral: 'the-land',
      englishNatural: 'And the land',
      root: 'eretz',
      prefixes: ['ha'],
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'לִפְנֵי',
      transliteration: 'liFney',
      englishLiteral: 'to-faces-of',
      englishNatural: 'to the face of',
      root: 'panim',
      prefixes: ['le'],
      order: 3,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'הָאֱלֹהִים',
      transliteration: 'haElohim',
      englishLiteral: 'the-Gods',
      englishNatural: 'God',
      root: 'eloah',
      prefixes: ['ha'],
      order: 4,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וַתִּמָּלֵא',
      transliteration: 'vatTimale',
      englishLiteral: 'and-it-filled',
      englishNatural: 'filled-with',
      root: 'male',
      prefixes: ['va'],
      order: {
        hebrew: 5,
        english: 6,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'niphal',
        type: 'verb',
      },
    },
    {
      hebrew: 'הָאָרֶץ',
      transliteration: 'haAretz',
      englishLiteral: 'the-land',
      englishNatural: 'and the land',
      root: 'eretz',
      prefixes: ['ha'],
      order: {
        hebrew: 6,
        english: 5,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'חָמָס',
      transliteration: 'chamas',
      englishLiteral: 'violence',
      englishNatural: 'violence',
      root: 'chamas',
      order: 7,
      morphology: {
        gender: 'masculine',
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
    hebrew: 'וַתִּשָּׁחֵת הָאָרֶץ לִפְנֵי הָאֱלֹהִים וַתִּמָּלֵא הָאָרֶץ חָמָס',
    transliteration:
      'vatTishachet haAretz liFney haElohim vatTimale haAretz chamas',
    englishLiteral:
      'And-it-corrupted the-land to-faces-of the-Gods, and-it-filled the-land violence.',
    englishNatural:
      'And the land corrupted to the face of God, and the land filled-with violence.',
    kjv: 'The earth also was corrupt before God, and the earth was filled with violence.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-13' },
  },
};
