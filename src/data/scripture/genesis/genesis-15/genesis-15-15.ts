import { Verse } from '@/types';

export const genesis_15_15: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 15,
    verse: 15,
  },
  words: [
    {
      hebrew: 'וְאַתָּה',
      transliteration: 'veAtah',
      englishLiteral: 'And-you',
      englishNatural: 'And you',
      root: 'atah',
      prefixes: ['ve'],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '2nd',
        type: 'pronoun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'תָּבוֹא',
      transliteration: 'tavo',
      englishLiteral: 'you-will-come',
      englishNatural: 'will go',
      root: 'bo',
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '2nd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'אֶל־',
      transliteration: 'el-',
      englishLiteral: 'to-',
      englishNatural: 'to',
      root: 'el',
      order: 3,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'אֲבֹתֶיךָ',
      transliteration: 'avotekha',
      englishLiteral: 'fathers-of-you',
      englishNatural: 'your fathers',
      root: 'av',
      suffixes: ['kha'],
      order: 4,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'בְּשָׁלוֹם',
      transliteration: 'beShalom',
      englishLiteral: 'in-peace',
      englishNatural: 'in peace',
      root: 'shalom',
      prefixes: ['be'],
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
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
      hebrew: 'תִּקָּבֵר',
      transliteration: 'tiqaver',
      englishLiteral: 'you-will-be-buried',
      englishNatural: 'you will be buried',
      root: 'qavar',
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '2nd',
        tense: 'imperfect',
        stem: 'niphal',
        type: 'verb',
      },
    },
    {
      hebrew: 'בְּשֵׂיבָה',
      transliteration: 'beSeivah',
      englishLiteral: 'in-old-age',
      englishNatural: 'old age',
      root: 'seivah',
      prefixes: ['be'],
      order: {
        hebrew: 7,
        english: 8,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: '.',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'טוֹבָה',
      transliteration: 'tovah',
      englishLiteral: 'good',
      englishNatural: 'in good',
      root: 'tov',
      order: {
        hebrew: 8,
        english: 7,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'adjective',
      },
      grammarSuffix: {
        englishLiteral: '.',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
  ],
  expectedTranslations: {
    hebrew:
      'וְאַתָּה תָּבוֹא אֶל־אֲבֹתֶיךָ בְּשָׁלוֹם תִּקָּבֵר בְּשֵׂיבָה טוֹבָה',
    transliteration: 'veAtah tavo el-avotekha beShalom tiqaver beSeivah tovah',
    englishLiteral:
      'And-you you-will-come to- fathers-of-you in-peace, you-will-be-buried in-old-age good.',
    englishNatural:
      'And you will go to your fathers in peace; you will be buried in good old age.',
    kjv: 'And thou shalt go to thy fathers in peace; thou shalt be buried in a good old age.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-11' },
  },
};
