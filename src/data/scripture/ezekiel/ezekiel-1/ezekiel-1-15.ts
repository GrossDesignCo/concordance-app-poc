import { Verse } from '@/types';

export const ezekiel_1_15: Verse = {
  meta: {
    book: 'Ezekiel',
    chapter: 1,
    verse: 15,
  },
  words: [
    {
      hebrew: 'וָאֵרֶא',
      transliteration: 'vaEre',
      englishLiteral: 'And-I-saw',
      englishNatural: 'And I saw',
      root: 'raah',
      prefixes: ['va'],
      order: 1,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '1st',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'הַחַיּוֹת',
      transliteration: 'haChayot',
      englishLiteral: 'the-living-beings',
      englishNatural: 'the living-beings',
      root: 'chayah',
      prefixes: ['ha'],
      order: 2,
      morphology: {
        gender: 'feminine',
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
      hebrew: 'וְהִנֵּה',
      transliteration: 'veHineh',
      englishLiteral: 'and-behold',
      englishNatural: 'and behold',
      root: 'hineh',
      prefixes: ['ve'],
      order: 3,
      morphology: {
        type: 'interjection',
      },
    },
    {
      hebrew: 'אוֹפַן',
      transliteration: 'ophan',
      englishLiteral: 'wheel',
      englishNatural: 'wheel',
      root: 'ophan',
      order: {
        hebrew: 4,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'אֶחָד',
      transliteration: 'echad',
      englishLiteral: 'one',
      englishNatural: 'one',
      root: 'echad',
      order: {
        hebrew: 5,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'numeral',
      },
    },
    {
      hebrew: 'בָּאָרֶץ',
      transliteration: 'baAretz',
      englishLiteral: 'in-land',
      englishNatural: 'in the land',
      root: 'eretz',
      prefixes: ['be', 'ha'],
      order: 6,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      lineBreaksAfter: 1,
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'אֵצֶל',
      transliteration: 'etzal',
      englishLiteral: 'beside',
      englishNatural: 'beside',
      root: 'etzal',
      order: 7,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הַחַיּוֹת',
      transliteration: 'haChayot',
      englishLiteral: 'the-living-beings',
      englishNatural: 'the living-beings',
      root: 'chayah',
      prefixes: ['ha'],
      order: 8,
      morphology: {
        gender: 'feminine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'לְאַרְבַּעַת',
      transliteration: 'leArbaat',
      englishLiteral: 'to-four-of',
      englishNatural: 'to four of',
      root: 'arba',
      prefixes: ['le'],
      order: 9,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
        type: 'numeral',
      },
    },
    {
      hebrew: 'פָּנָיו',
      transliteration: 'panav',
      englishLiteral: 'faces-his',
      englishNatural: 'his faces',
      root: 'panim',
      suffixes: ['av'],
      order: 10,
      morphology: {
        gender: 'masculine',
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
    hebrew:
      'וָאֵרֶא הַחַיּוֹת וְהִנֵּה אוֹפַן אֶחָד בָּאָרֶץ אֵצֶל הַחַיּוֹת לְאַרְבַּעַת פָּנָיו',
    transliteration:
      'vaEre haChayot veHineh ophan echad baAretz etzal haChayot leArbaat panav',
    englishLiteral:
      'And-I-saw the-living-beings, and-behold wheel one in-land, beside the-living-beings, to-four-of faces-his.',
    englishNatural:
      'And I saw the living-beings, and behold one wheel in the land, beside the living-beings, to four of his faces.',
    kjv: 'Now as I beheld the living creatures, behold one wheel upon the earth by the living creatures, with his four faces.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-13' },
  },
};
