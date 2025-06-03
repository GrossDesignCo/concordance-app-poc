import { Verse } from '@/types';

export const genesis_2_10: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 2,
    number: 10,
  },
  words: [
    {
      hebrew: 'וְנָהָר',
      transliteration: 'veNahar',
      englishLiteral: 'And-river',
      englishNatural: 'And a river',
      root: 'nahar',
      prefixes: ['ve'],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'יֹצֵא',
      transliteration: 'yotze',
      englishLiteral: 'goes-out',
      englishNatural: 'went out',
      root: 'yatsa',
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'מֵעֵדֶן',
      transliteration: 'meEden',
      englishLiteral: 'from-Delight (Eden)',
      englishNatural: 'from Delight (Eden)',
      root: 'eden',
      prefixes: ['me'],
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'לְהַשְׁקוֹת',
      transliteration: 'leHashqot',
      englishLiteral: 'to-give_drink',
      englishNatural: 'to give-drink to',
      root: 'shaqah',
      prefixes: ['le', 'ha'],
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        type: 'verb',
        stem: 'hiphil',
        tense: 'infinitive_construct',
      },
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: {
        hebrew: 5,
        english: 5,
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
        hebrew: 6,
        english: 6,
      },
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
      hebrew: 'וּמִשָּׁם',
      transliteration: 'uMisham',
      englishLiteral: 'and-from-there',
      englishNatural: 'and from there',
      root: 'sham',
      prefixes: ['u', 'mi'],
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'יִפָּרֵד',
      transliteration: 'yipared',
      englishLiteral: 'will-part',
      englishNatural: 'parted',
      root: 'parad',
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'niphal',
        type: 'verb',
      },
    },
    {
      hebrew: 'וְהָיָה',
      transliteration: 'veHayah',
      englishLiteral: 'and-was',
      englishNatural: 'and became',
      root: 'hayah',
      prefixes: ['ve'],
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'לְאַרְבָּעָה',
      transliteration: 'leArbaah',
      englishLiteral: 'to-four',
      englishNatural: 'into four',
      root: 'arba',
      prefixes: ['le'],
      order: {
        hebrew: 10,
        english: 10,
      },
      morphology: {
        type: 'numeral',
      },
    },
    {
      hebrew: 'רָאשִׁים׃',
      transliteration: 'rashim',
      englishLiteral: 'heads',
      englishNatural: 'heads',
      root: 'rosh',
      order: {
        hebrew: 11,
        english: 11,
      },
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
      'וְנָהָר יֹצֵא מֵעֵדֶן לְהַשְׁקוֹת אֶת־הַגָּן וּמִשָּׁם יִפָּרֵד וְהָיָה לְאַרְבָּעָה רָאשִׁים׃',
    transliteration:
      'veNahar yotze meEden leHashqot et-haGan uMisham yipared veHayah leArbaah rashim',
    englishLiteral:
      'And-river goes-out from-Delight (Eden) to-give_drink ↳ the-garden, and-from-there will-part and-was to-four heads.',
    englishNatural:
      'And a river went out from Delight (Eden) to give-drink to the garden, and from there parted and became into four heads.',
    kjv: 'And a river went out of Eden to water the garden; and from thence it was parted, and became into four heads.',
    lastReviewed: { name: 'Matt Gross', date: '2025-06-03' },
  },
};
