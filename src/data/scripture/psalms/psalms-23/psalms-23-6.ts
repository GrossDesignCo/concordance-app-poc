import { Verse } from '@/types';

export const psalms_23_6: Verse = {
  meta: {
    book: 'Psalms',
    chapter: 23,
    verse: 6,
  },
  words: [
    {
      hebrew: 'אַךְ',
      transliteration: 'akh',
      englishLiteral: 'Only',
      englishNatural: 'Only',
      root: 'akh',
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        type: 'adverb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'טוֹב',
      transliteration: 'tov',
      englishLiteral: 'good',
      englishNatural: 'good',
      root: 'tov',
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'וָחֶסֶד',
      transliteration: 'vaChesed',
      englishLiteral: 'and-steadfast_love',
      englishNatural: 'and steadfast-love',
      root: 'chesed',
      prefixes: ['va'],
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
      hebrew: 'יִרְדְּפוּנִי',
      transliteration: 'yirdefuni',
      englishLiteral: 'they-will-pursue-me',
      englishNatural: 'will pursue me',
      root: 'radaf',
      prefixes: ['yi'],
      suffixes: ['ni'],
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        person: '3rd',
        number: 'plural',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'כָּל־',
      transliteration: 'kol-',
      englishLiteral: 'all-',
      englishNatural: 'all',
      root: 'kol',
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'יְמֵי',
      transliteration: 'yemei',
      englishLiteral: 'days-of',
      englishNatural: 'the days of',
      root: 'yom',
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
      hebrew: 'חַיַּי',
      transliteration: 'chayai',
      englishLiteral: 'my-life',
      englishNatural: 'my life',
      root: 'chayah',
      suffixes: ['ai'],
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '1st',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וְשַׁבְתִּי',
      transliteration: 'veShavti',
      englishLiteral: 'and-I-will-sit',
      englishNatural: 'and I will sit',
      root: 'yashav',
      prefixes: ['ve'],
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        person: '1st',
        number: 'singular',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'בְּבֵית',
      transliteration: 'beBeit',
      englishLiteral: 'in-house-of',
      englishNatural: 'in the house of',
      root: 'bayit',
      prefixes: ['be'],
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
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'He-Who-Is (YHWH)',
      root: 'yhwh',
      order: {
        hebrew: 10,
        english: 10,
      },
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'לְאֹרֶךְ',
      transliteration: 'leOrekh',
      englishLiteral: 'to-length-of',
      englishNatural: 'to the length of',
      root: 'orekh',
      prefixes: ['le'],
      order: {
        hebrew: 11,
        english: 11,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'יָמִים',
      transliteration: 'yamim',
      englishLiteral: 'days',
      englishNatural: 'days',
      root: 'yom',
      order: {
        hebrew: 12,
        english: 12,
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
    },
  ],
  expectedTranslations: {
    hebrew:
      'אַךְ טוֹב וָחֶסֶד יִרְדְּפוּנִי כָּל־יְמֵי חַיַּי וְשַׁבְתִּי בְּבֵית יְהוָה לְאֹרֶךְ יָמִים',
    transliteration:
      'akh tov vaChesed yirdefuni kol-yemei chayai veShavti beBeit YHWH leOrekh yamim',
    englishLiteral:
      'Only good and-steadfast_love they-will-pursue-me, all- days-of my-life; and-I-will-sit in-house-of He_Who_Is (YHWH), to-length-of days.',
    englishNatural:
      'Only good and steadfast-love will pursue me, all the days of my life; and I will sit in the house of He-Who-Is (YHWH), to the length of days.',
    kjv: 'Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the Lord for ever.',
    lastReviewed: { name: 'Matt Gross', date: '2025-11-27' },
  },
};
