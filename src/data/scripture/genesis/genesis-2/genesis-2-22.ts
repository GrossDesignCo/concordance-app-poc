import { Verse } from '@/types';

export const genesis_2_22: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 2,
    verse: 22,
  },
  words: [
    {
      hebrew: 'וַיִּבֶן',
      transliteration: 'vaYiven',
      englishLiteral: 'And-built',
      englishNatural: 'built',
      root: 'banah',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
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
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is',
      englishNatural: 'And He-Who-Is',
      root: 'yhwh',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
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
        hebrew: 3,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: {
        hebrew: 4,
        english: 4,
      },
    },
    {
      hebrew: 'הַצֵּלָע',
      transliteration: 'haTzela',
      englishLiteral: 'the-side',
      englishNatural: 'the side',
      root: 'tzela',
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
    },
    {
      hebrew: 'אֲשֶׁר',
      transliteration: 'asher',
      englishLiteral: 'which',
      englishNatural: 'which',
      root: 'asher',
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        type: 'relative',
      },
    },
    {
      hebrew: 'לָקַח',
      transliteration: 'lakach',
      englishLiteral: 'he-took',
      englishNatural: 'he took',
      root: 'lakach',
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'מִן־',
      transliteration: 'min-',
      englishLiteral: 'from-',
      englishNatural: 'from',
      root: 'min',
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הָאָדָם',
      transliteration: 'haAdam',
      englishLiteral: 'the-human',
      englishNatural: 'the human',
      root: 'adam',
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
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'לְאִשָּׁה',
      transliteration: 'leIshah',
      englishLiteral: 'to-woman',
      englishNatural: 'into a woman',
      root: 'ishah',
      prefixes: ['le'],
      order: {
        hebrew: 10,
        english: 10,
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
      hebrew: 'וַיְבִאֶהָ',
      transliteration: 'vaYeviEha',
      englishLiteral: 'and-brought-her',
      englishNatural: 'and brought her',
      root: 'bo',
      prefixes: ['va'],
      suffixes: ['ah'],
      order: {
        hebrew: 11,
        english: 11,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
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
        hebrew: 12,
        english: 12,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הָאָדָם׃',
      transliteration: 'haAdam',
      englishLiteral: 'the-human',
      englishNatural: 'the human',
      root: 'adam',
      prefixes: ['ha'],
      order: {
        hebrew: 13,
        english: 13,
      },
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
    hebrew:
      'וַיִּבֶן יְהוָה אֱלֹהִים אֶת־הַצֵּלָע אֲשֶׁר לָקַח מִן־הָאָדָם לְאִשָּׁה וַיְבִאֶהָ אֶל־הָאָדָם׃',
    transliteration:
      'vaYiven YHWH Elohim et-haTzela asher lakach min-haAdam leIshah vaYeviEha el-haAdam',
    englishLiteral:
      'And-built He_Who_Is Gods ↳ the-side which he-took from- the-human, to-woman, and-brought-her to- the-human.',
    englishNatural:
      'And He-Who-Is God built the side which he took from the human, into a woman, and brought her to the human.',
    kjv: 'And the rib, which the LORD God had taken from man, made he a woman, and brought her unto the man.',
    lastReviewed: { name: 'Matt Gross', date: '2025-06-05' },
  },
};
