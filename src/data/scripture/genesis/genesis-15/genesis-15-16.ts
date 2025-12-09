import { Verse } from '@/types';

export const genesis_15_16: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 15,
    verse: 16,
  },
  words: [
    {
      hebrew: 'וְדוֹר',
      transliteration: 'veDor',
      englishLiteral: 'And-generation',
      englishNatural: 'generation',
      root: 'dor',
      prefixes: ['ve'],
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'רְבִיעִי',
      transliteration: 'revii',
      englishLiteral: 'fourth',
      englishNatural: 'And the fourth',
      root: 'revii',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'numeral',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'יָשׁוּבוּ',
      transliteration: 'yashuvu',
      englishLiteral: 'they-will-return',
      englishNatural: 'will return',
      root: 'shuv',
      prefixes: ['ya'],
      suffixes: ['u'],
      order: 3,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'הֵנָּה',
      transliteration: 'hennah',
      englishLiteral: 'here',
      englishNatural: 'here',
      root: 'hennah',
      order: 4,
      morphology: {
        type: 'adverb',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ';',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'כִּי',
      transliteration: 'ki',
      englishLiteral: 'that',
      englishNatural: 'that',
      root: 'ki',
      order: 5,
      morphology: {
        type: 'conjunction',
      },
    },
    {
      hebrew: 'לֹא־',
      transliteration: 'lo-',
      englishLiteral: 'not-',
      englishNatural: 'not',
      root: 'lo',
      order: 6,
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'שָׁלֵם',
      transliteration: 'shalem',
      englishLiteral: 'complete',
      englishNatural: 'is complete',
      root: 'shalem',
      order: {
        hebrew: 6,
        english: 10,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'adjective',
      },
    },
    {
      hebrew: 'עֲוֺן',
      transliteration: 'avon',
      englishLiteral: 'iniquity-of',
      englishNatural: 'the iniquity of',
      root: 'avon',
      order: 8,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
        state: 'construct',
      },
    },
    {
      hebrew: 'הָאֱמֹרִי',
      transliteration: 'haEmori',
      englishLiteral: 'the-Amorite',
      englishNatural: 'the Amorite',
      root: 'emori',
      prefixes: ['ha'],
      order: 9,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'עַד־',
      transliteration: 'ad-',
      englishLiteral: 'until-',
      englishNatural: 'until',
      root: 'ad',
      order: {
        hebrew: 10,
        english: 7,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הֵנָּה',
      transliteration: 'hennah',
      englishLiteral: 'here',
      englishNatural: 'here',
      root: 'hennah',
      order: 11,
      morphology: {
        type: 'adverb',
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
      'וְדוֹר רְבִיעִי יָשׁוּבוּ הֵנָּה כִּי לֹא־שָׁלֵם עֲוֺן הָאֱמֹרִי עַד־הֵנָּה',
    transliteration:
      'veDor revii yashuvu hennah ki lo-shalem avon haEmori ad-hennah',
    englishLiteral:
      'And-generation fourth they-will-return here, that not- complete iniquity-of the-Amorite until- here.',
    englishNatural:
      'And the fourth generation will return here; that not until the iniquity of the Amorite is complete here.',
    kjv: 'But in the fourth generation they shall come again hither: for the iniquity of the Amorites is not yet full.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-09' },
},
};
