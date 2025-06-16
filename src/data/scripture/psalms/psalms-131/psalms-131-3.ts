import { Verse } from '@/types';

export const psalms_131_3: Verse = {
  meta: {
    book: 'Psalms',
    chapter: 131,
    verse: 3,
  },
  words: [
    {
      hebrew: 'יַחֵל',
      transliteration: 'yachel',
      englishLiteral: 'Hope',
      englishNatural: 'Hope',
      root: 'yachal',
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'piel',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'יִשְׂרָאֵל',
      transliteration: 'Yisrael',
      englishLiteral: 'Struggles_with_God (Israel)',
      englishNatural: 'Struggles-with-God (Israel)',
      root: 'yisrael',
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'אֶל־',
      transliteration: 'el-',
      englishLiteral: 'to-',
      englishNatural: 'to',
      root: 'el',
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is',
      englishNatural: 'He-Who-Is',
      root: 'yhwh',
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'מֵעַתָּה',
      transliteration: 'meAtah',
      englishLiteral: 'from-now',
      englishNatural: 'from now',
      root: 'atah',
      prefixes: ['me'],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'וְעַד־',
      transliteration: 'veAd-',
      englishLiteral: 'and-on_behalf_of-',
      englishNatural: 'and on-behalf-of',
      root: 'ad',
      prefixes: ['ve'],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'עוֹלָם',
      transliteration: 'olam',
      englishLiteral: 'the_age',
      englishNatural: 'the-age',
      root: 'olam',
      order: {
        hebrew: 7,
        english: 7,
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
    },
  ],
  expectedTranslations: {
    hebrew: 'יַחֵל יִשְׂרָאֵל אֶל־יְהוָה מֵעַתָּה וְעַד־עוֹלָם',
    transliteration: 'yachel Yisrael el-YHWH meAtah veAd-olam',
    englishLiteral: 'Hope, Struggles_with_God (Israel) to- He_Who_Is, from-now and-on_behalf_of- the_age.',
    englishNatural: 'Hope, Struggles-with-God (Israel) to He-Who-Is, from now and on-behalf-of the-age.',
    kjv: 'Let Israel hope in the LORD from henceforth and for ever.',
    lastReviewed: { name: 'Matt Gross', date: '2025-06-16' },
  },
}; 