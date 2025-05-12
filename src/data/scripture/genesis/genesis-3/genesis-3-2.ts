import { Verse } from '@/types';

export const genesis_3_2: Verse = {
  meta: {
    chapter: 3,
    number: 2,
  },
  expectedTranslations: {
    hebrew: 'וַתֹּאמֶר הָאִשָּׁה אֶל־הַנָּחָשׁ מִפְּרִי עֵץ־הַגָּן נֹאכֵל',
    transliteration: 'vaTomar haIshah el-haNachash miPri etz-haGan nochil',
    englishLiteral: 'And-said, the-woman, to, the-snake, "from-fruit-of tree the-garden, we-eat."',
    englishNatural: 'And the woman said to the snake, "From the fruit of the tree of the garden we may eat."',
    kjv: 'And the woman said unto the serpent, We may eat of the fruit of the trees of the garden:',
    lastReviewed: { name: 'Matt Gross', date: '2025-05-12' },
},
  words: [
    {
      hebrew: 'וַתֹּאמֶר',
      transliteration: 'vaTomar',
      englishLiteral: 'And-said',
      englishNatural: 'said',
      root: 'amar',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb'
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: '',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'הָאִשָּׁה',
      transliteration: 'haIshah',
      englishLiteral: 'the-woman',
      englishNatural: 'And the woman',
      root: 'ishah',
      prefixes: ['ha'],
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun'
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: '',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'אֶל־',
      transliteration: 'el-',
      englishLiteral: 'to',
      englishNatural: 'to',
      root: 'el',
      order: {
        hebrew: 3,
        english: 3,
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: '',
      },
    },
    {
      hebrew: 'הַנָּחָשׁ',
      transliteration: 'haNachash',
      englishLiteral: 'the-snake',
      englishNatural: 'the snake',
      root: 'nachash',
      prefixes: ['ha'],
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun'
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'מִפְּרִי',
      transliteration: 'miPri',
      englishLiteral: 'from-fruit-of',
      englishNatural: 'From the fruit of',
      root: 'peri',
      prefixes: ['mi'],
      suffixes: ['construct_y'],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
        type: 'noun'
      },
      grammarPrefix: {
        englishLiteral: '"',
        englishNatural: '"',
      },
    },
    {
      hebrew: 'עֵץ־',
      transliteration: 'etz-',
      englishLiteral: 'tree',
      englishNatural: 'the tree of',
      root: 'etz',
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun'
      },
    },
    {
      hebrew: 'הַגָּן',
      transliteration: 'haGan',
      englishLiteral: 'the-garden',
      englishNatural: 'the garden',
      root: 'gan',
      prefixes: ['ha'],
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun'
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: '',
      },
    },
    {
      hebrew: 'נֹאכֵל',
      transliteration: 'nochil',
      englishLiteral: 'we-eat',
      englishNatural: 'we may eat',
      root: 'akhal',
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        gender: 'common',
        number: 'plural',
        person: '1st',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb'
      },
      grammarSuffix: {
        englishLiteral: '."',
        englishNatural: '."',
      },
      lineBreaksAfter: 1,
    },
  ],
}; 