import { Verse } from '@/types';

export const jonah_1_13: Verse = {
  meta: {
    book: 'Jonah',
    chapter: 1,
    verse: 13,
  },
  words: [
    {
      hebrew: 'וַיַּחְתְּרוּ',
      transliteration: 'vaYachteru',
      englishLiteral: 'And-rowed',
      englishNatural: 'rowed',
      root: 'chatar',
      prefixes: ['va'],
      suffixes: ['u'],
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'הָאֲנָשִׁים',
      transliteration: 'haAnashim',
      englishLiteral: 'the-men',
      englishNatural: 'And the men',
      root: 'ish',
      prefixes: ['ha'],
      suffixes: ['im'],
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'לְהָשִׁיב',
      transliteration: 'lehashiv',
      englishLiteral: 'to-return',
      englishNatural: 'to return',
      root: 'shuv',
      prefixes: ['le'],
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        tense: 'infinitive_construct',
        stem: 'hiphil',
        type: 'verb',
      },
    },
    {
      hebrew: 'אֶל־',
      transliteration: 'el-',
      englishLiteral: 'to-',
      englishNatural: 'to',
      root: 'el',
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הַיַּבָּשָׁה',
      transliteration: 'haYabashah',
      englishLiteral: 'the-dry_ground',
      englishNatural: 'the dry-ground',
      root: 'yabashah',
      prefixes: ['ha'],
      order: {
        hebrew: 5,
        english: 5,
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
      hebrew: 'וְלֹא',
      transliteration: 'veLo',
      englishLiteral: 'and-not',
      englishNatural: 'not',
      root: 'lo',
      prefixes: ['ve'],
      order: {
        hebrew: 6,
        english: 7,
      },
      morphology: {
        type: 'adverb',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
      grammarSuffix: {
        englishNatural: ';',
      },
    },
    {
      hebrew: 'יָכֹלוּ',
      transliteration: 'yakholu',
      englishLiteral: 'they-were-able',
      englishNatural: 'and they were-able',
      root: 'yakol',
      suffixes: ['u'],
      order: {
        hebrew: 7,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ';',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'כִּי',
      transliteration: 'ki',
      englishLiteral: 'that',
      englishNatural: 'that',
      root: 'ki',
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        type: 'conjunction',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'הַיָּם',
      transliteration: 'haYam',
      englishLiteral: 'the-sea',
      englishNatural: 'the sea',
      root: 'yam',
      prefixes: ['ha'],
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'הוֹלֵךְ',
      transliteration: 'holekh',
      englishLiteral: 'walking',
      englishNatural: 'was walking',
      root: 'halakh',
      order: {
        hebrew: 10,
        english: 10,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        tense: 'participle',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'וְסֹעֵר',
      transliteration: 'vesoer',
      englishLiteral: 'and-storming',
      englishNatural: 'and storming',
      root: 'soer',
      prefixes: ['ve'],
      order: {
        hebrew: 11,
        english: 11,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        tense: 'participle',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'עֲלֵיהֶם',
      transliteration: 'alehem',
      englishLiteral: 'over-them',
      englishNatural: 'over them',
      root: 'al',
      suffixes: ['hem'],
      order: {
        hebrew: 12,
        english: 12,
      },
      morphology: {
        type: 'preposition',
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
      'וַיַּחְתְּרוּ הָאֲנָשִׁים לְהָשִׁיב אֶל־הַיַּבָּשָׁה וְלֹא יָכֹלוּ כִּי הַיָּם הוֹלֵךְ וְסֹעֵר עֲלֵיהֶם',
    transliteration:
      'vaYachteru haAnashim lehashiv el-haYabashah veLo yakholu ki haYam holekh vesoer alehem',
    englishLiteral:
      'And-rowed the-men to-return to- the-dry_ground; and-not they-were-able; that the-sea walking and-storming over-them.',
    englishNatural:
      'And the men rowed to return to the dry-ground; and they were-able not; that the sea was walking and storming over them.',
    kjv: 'Nevertheless the men rowed hard to bring it to the land; but they could not: for the sea wrought, and was tempestuous against them.',
    lastReviewed: { name: 'Matt Gross', date: '2025-10-26' },
  },
};
