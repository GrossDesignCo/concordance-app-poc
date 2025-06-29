import { Verse } from '@/types';

export const proverbs_8_3: Verse = {
  meta: {
    book: 'Proverbs',
    chapter: 8,
    verse: 3,
  },
  words: [
    {
      hebrew: 'לְיַד',
      transliteration: 'leYad',
      englishLiteral: 'To-hand-of',
      englishNatural: 'To the hand of',
      root: 'yad',
      prefixes: ['le'],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'שְׁעָרִים',
      transliteration: 'shearim',
      englishLiteral: 'gates',
      englishNatural: 'gates',
      root: 'shaar',
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
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'לְפִי',
      transliteration: 'lePhi',
      englishLiteral: 'to-mouth-of',
      englishNatural: 'to the mouth of',
      root: 'peh',
      prefixes: ['le'],
      suffixes: ['i'],
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'קָרְיָה',
      transliteration: 'qaryah',
      englishLiteral: 'city',
      englishNatural: 'a city',
      root: 'qiryah',
      order: {
        hebrew: 4,
        english: 4,
      },
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
      hebrew: 'מְבוֹא',
      transliteration: 'mevo',
      englishLiteral: 'incoming-of',
      englishNatural: 'incoming of',
      root: 'mavo',
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'פְתָחִים',
      transliteration: 'petachim',
      englishLiteral: 'openings',
      englishNatural: 'openings',
      root: 'petach',
      suffixes: ['im'],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'תָּרֹנָּה',
      transliteration: 'taRonnah',
      englishLiteral: 'she-cries_out',
      englishNatural: 'she cries-out',
      root: 'ranah',
      prefixes: ['ta'],
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'לְיַד שְׁעָרִים לְפִי קָרְיָה מְבוֹא פְתָחִים תָּרֹנָּה',
    transliteration: 'leYad shearim lePhi qaryah mevo petachim taRonnah',
    englishLiteral:
      'To-hand-of gates, to-mouth-of city, incoming-of openings she-cries_out;',
    englishNatural:
      'To the hand of gates, to the mouth of a city, incoming of openings she cries-out;',
    kjv: 'At the gates, at the entry of the city, at the coming in at the doors, she crieth',
    lastReviewed: { name: 'Matt Gross', date: '2025-06-29' },
  },
};
