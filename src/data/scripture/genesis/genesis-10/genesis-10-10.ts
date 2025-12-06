import { Verse } from '@/types';

export const genesis_10_10: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 10,
    verse: 10,
  },
  words: [
    {
      hebrew: 'וַתְּהִי',
      transliteration: 'vatehi',
      englishLiteral: 'And-was',
      englishNatural: 'was',
      root: 'hayah',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 3,
      },
      morphology: {
        gender: 'feminine',
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
      hebrew: 'רֵאשִׁית',
      transliteration: 'reshit',
      englishLiteral: 'heading-of',
      englishNatural: 'and the heading of',
      root: 'rosh',
      suffixes: ['it'],
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'מַמְלַכְתּוֹ',
      transliteration: 'mamlakhto',
      englishLiteral: 'his-kingdom',
      englishNatural: 'his kingdom',
      root: 'mamlakah',
      suffixes: ['o'],
      order: {
        hebrew: 3,
        english: 2,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'בָּבֶל',
      transliteration: 'Babel',
      englishLiteral: 'Confusion (Babylon)',
      englishNatural: 'Confusion (Babylon)',
      root: 'babel',
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
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וְאֶרֶךְ',
      transliteration: 'veErekh',
      englishLiteral: 'and-Length (Erech)',
      englishNatural: 'and Length (Erech)',
      root: 'erekh_name',
      prefixes: ['ve'],
      order: 5,
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
      hebrew: 'וְאַכַּד',
      transliteration: 'veAkkad',
      englishLiteral: 'and-Fortress (Akkadia)',
      englishNatural: 'and Fortress (Akkadia)',
      root: 'akkad',
      prefixes: ['ve'],
      order: 6,
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
      hebrew: 'וְכַלְנֵה',
      transliteration: 'veKhalneh',
      englishLiteral: 'and-Fortress (Calneh)',
      englishNatural: 'and Fortress (Calneh)',
      root: 'kalneh',
      prefixes: ['ve'],
      order: 7,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'בְּאֶרֶץ',
      transliteration: 'beEretz',
      englishLiteral: 'in-land-of',
      englishNatural: 'in the land of',
      root: 'eretz',
      prefixes: ['be'],
      order: 8,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'שִׁנְעָר',
      transliteration: 'Shinar',
      englishLiteral: 'Tooth_of_Two (Shinar)',
      englishNatural: 'Tooth-of-Two (Shinar)',
      root: 'shinar',
      order: 9,
      morphology: {
        gender: 'feminine',
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
      'וַתְּהִי רֵאשִׁית מַמְלַכְתּוֹ בָּבֶל וְאֶרֶךְ וְאַכַּד וְכַלְנֵה בְּאֶרֶץ שִׁנְעָר',
    transliteration:
      'vatehi reshit mamlakhto Babel veErekh veAkkad veKhalneh beEretz Shinar',
    englishLiteral:
      'And-was heading-of his-kingdom Confusion (Babylon), and-Length (Erech), and-Fortress (Akkadia), and-Fortress (Calneh), in-land-of Tooth_of_Two (Shinar).',
    englishNatural:
      'and the heading of his kingdom was Confusion (Babylon), and Length (Erech), and Fortress (Akkadia), and Fortress (Calneh), in the land of Tooth-of-Two (Shinar).',
    kjv: 'And the beginning of his kingdom was Babel, and Erech, and Akkadia, and Calneh, in the land of Shinar.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
  },
};
