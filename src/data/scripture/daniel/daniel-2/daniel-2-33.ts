import { Verse } from '@/types';

export const daniel_2_33: Verse = {
  meta: {
    book: 'Daniel',
    chapter: 2,
    verse: 33,
  },
  words: [
    {
      aramaic: 'שָׁקוֹהִי',
      transliteration: 'shaqohi',
      englishLiteral: 'legs-its',
      englishNatural: 'its legs',
      root: 'shaq',
      suffixes: ['ohi'],
      order: 1,
      morphology: {
        gender: 'feminine',
        number: 'dual',
        type: 'noun',
      },
    },
    {
      aramaic: 'דִּי',
      transliteration: 'di',
      englishLiteral: 'which',
      englishNatural: 'of',
      root: 'di',
      order: 2,
      morphology: {
        type: 'particle',
      },
    },
    {
      aramaic: 'פַרְזֶל',
      transliteration: 'parzel',
      englishLiteral: 'iron',
      englishNatural: 'iron',
      root: 'parzel',
      order: 3,
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
      aramaic: 'רַגְלוֹהִי',
      transliteration: 'raglohi',
      englishLiteral: 'feet-its',
      englishNatural: 'its feet',
      root: 'regel',
      suffixes: ['ohi'],
      order: 4,
      morphology: {
        gender: 'feminine',
        number: 'dual',
        type: 'noun',
      },
    },
    {
      aramaic: 'מִנְהוֹן',
      transliteration: 'minhon',
      englishLiteral: 'from-them',
      englishNatural: 'from them',
      root: 'min',
      suffixes: ['hon'],
      order: 5,
      morphology: {
        type: 'preposition',
      },
    },
    {
      aramaic: 'דִּי',
      transliteration: 'di',
      englishLiteral: 'which',
      englishNatural: 'of',
      root: 'di',
      order: 6,
      morphology: {
        type: 'particle',
      },
    },
    {
      aramaic: 'פַרְזֶל',
      transliteration: 'parzel',
      englishLiteral: 'iron',
      englishNatural: 'iron',
      root: 'parzel',
      order: 7,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      aramaic: 'וּמִנְהוֹן',
      transliteration: 'uMinhon',
      englishLiteral: 'and-from-them',
      englishNatural: 'and from them',
      root: 'min',
      prefixes: ['u'],
      suffixes: ['hon'],
      order: 8,
      morphology: {
        type: 'preposition',
      },
    },
    {
      aramaic: 'דִּי',
      transliteration: 'di',
      englishLiteral: 'which',
      englishNatural: 'of',
      root: 'di',
      order: 9,
      morphology: {
        type: 'particle',
      },
    },
    {
      aramaic: 'חֲסַף',
      transliteration: 'chasaf',
      englishLiteral: 'clay',
      englishNatural: 'clay',
      root: 'chasaf',
      order: 10,
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
    aramaic:
      'שָׁקוֹהִי דִּי פַרְזֶל רַגְלוֹהִי מִנְהוֹן דִּי פַרְזֶל וּמִנְהוֹן דִּי חֲסַף',
    transliteration:
      'shaqohi di parzel raglohi minhon di parzel uMinhon di chasaf',
    englishLiteral:
      'legs-its which iron, feet-its from-them which iron and-from-them which clay.',
    englishNatural:
      'its legs of iron, its feet from them of iron and from them of clay.',
    kjv: 'His legs of iron, his feet part of iron and part of clay.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-21' },
},
};
