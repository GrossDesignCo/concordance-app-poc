import { Verse } from '@/types';

export const genesis_2_4: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 2,
    verse: 4,
  },
  words: [
    {
      hebrew: 'אֵלֶּה',
      transliteration: 'eleh',
      englishLiteral: 'These',
      englishNatural: 'These',
      root: 'zeh',
      order: 1,
      morphology: {
        type: 'pronoun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'תוֹלְדוֹת',
      transliteration: 'toledot',
      englishLiteral: 'birthings',
      englishNatural: 'are the birthings',
      root: 'yalad',
      order: 2,
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'הַשָּׁמַיִם',
      transliteration: 'haShamayim',
      englishLiteral: 'the-skies',
      englishNatural: 'of the skies',
      root: 'shamayim',
      prefixes: ['ha'],
      order: 3,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'וְהָאָרֶץ',
      transliteration: 'veHaAretz',
      englishLiteral: 'and-the-land',
      englishNatural: 'and the land',
      root: 'eretz',
      prefixes: ['ve', 'ha'],
      order: 4,
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
      hebrew: 'בְּהִבָּרְאָם',
      transliteration: 'beHibaram',
      englishLiteral: 'in-being-created-them',
      englishNatural: 'in their being created',
      root: 'bara',
      prefixes: ['be'],
      suffixes: ['am'],
      order: 5,
      morphology: {
        type: 'verb',
        stem: 'niphal',
        tense: 'infinitive_construct',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'בְּיוֹם',
      transliteration: 'beYom',
      englishLiteral: 'in-day',
      englishNatural: 'in the day',
      root: 'yom',
      prefixes: ['be'],
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'עֲשׂוֹת',
      transliteration: 'asot',
      englishLiteral: 'making',
      englishNatural: 'made',
      root: 'asah',
      order: {
        hebrew: 7,
        english: 9,
      },
      morphology: {
        type: 'verb',
        stem: 'qal',
        tense: 'infinitive_construct',
      },
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'He-Who-Is (YHWH)',
      root: 'yhwh',
      order: {
        hebrew: 8,
        english: 7,
      },
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'אֱלֹהִים',
      transliteration: 'Elohim',
      englishLiteral: 'Gods',
      englishNatural: 'God',
      root: 'eloah',
      suffixes: ['im'],
      order: {
        hebrew: 9,
        english: 8,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'אֶרֶץ',
      transliteration: 'eretz',
      englishLiteral: 'land',
      englishNatural: 'land',
      root: 'eretz',
      order: 10,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'וְשָׁמָיִם׃',
      transliteration: 'veShamayim',
      englishLiteral: 'and-skies',
      englishNatural: 'and skies',
      root: 'shamayim',
      prefixes: ['ve'],
      order: 11,
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
      'אֵלֶּה תוֹלְדוֹת הַשָּׁמַיִם וְהָאָרֶץ בְּהִבָּרְאָם בְּיוֹם עֲשׂוֹת יְהוָה אֱלֹהִים אֶרֶץ וְשָׁמָיִם׃',
    transliteration:
      'eleh toledot haShamayim veHaAretz beHibaram beYom asot YHWH Elohim eretz veShamayim',
    englishLiteral:
      'These birthings the-skies and-the-land, in-being-created-them; in-day making He_Who_Is (YHWH) Gods land and-skies.',
    englishNatural:
      'These are the birthings of the skies and the land, in their being created; in the day He-Who-Is (YHWH) God made land and skies.',
    kjv: 'These are the generations of the heavens and of the earth when they were created, in the day that the LORD God made the earth and the heavens.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
  },
};
