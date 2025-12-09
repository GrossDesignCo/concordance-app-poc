import { Verse } from '@/types';

export const genesis_15_12: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 15,
    verse: 12,
  },
  words: [
    {
      hebrew: 'וַיְהִי',
      transliteration: 'vayehi',
      englishLiteral: 'And-he-was',
      englishNatural: 'was',
      root: 'hayah',
      prefixes: ['va'],
      order: {
        hebrew: 1,
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
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'הַשֶּׁמֶשׁ',
      transliteration: 'haShemesh',
      englishLiteral: 'the-sun',
      englishNatural: 'And the sun',
      root: 'shemesh',
      prefixes: ['ha'],
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'לָבוֹא',
      transliteration: 'lavo',
      englishLiteral: 'to-come',
      englishNatural: 'to come',
      root: 'bo',
      prefixes: ['la'],
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        tense: 'infinitive_construct',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וְתַרְדֵּמָה',
      transliteration: 'veTardemah',
      englishLiteral: 'and-deep_trance',
      englishNatural: 'and a deep-trance',
      root: 'tardemah',
      prefixes: ['ve'],
      order: 4,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'נָפְלָה',
      transliteration: 'naflah',
      englishLiteral: 'she-fell',
      englishNatural: 'fell',
      root: 'naphal',
      order: 5,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'עַל־',
      transliteration: 'al-',
      englishLiteral: 'over-',
      englishNatural: 'over',
      root: 'al',
      order: 6,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'אַבְרָם',
      transliteration: 'Abram',
      englishLiteral: 'Exalted_Father (Abram)',
      englishNatural: 'Exalted-Father (Abram)',
      root: 'abram',
      order: 7,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וְהִנֵּה',
      transliteration: 'veHineh',
      englishLiteral: 'and-behold',
      englishNatural: 'and behold',
      root: 'hineh',
      prefixes: ['ve'],
      order: 8,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'אֵימָה',
      transliteration: 'emah',
      englishLiteral: 'terror',
      englishNatural: 'terror',
      root: 'emah',
      order: 9,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'חֲשֵׁכָה',
      transliteration: 'chashekha',
      englishLiteral: 'darkness',
      englishNatural: 'darkness',
      root: 'choshekh',
      order: {
        hebrew: 10,
        english: 11,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'גְדֹלָה',
      transliteration: 'gedolah',
      englishLiteral: 'great',
      englishNatural: 'great',
      root: 'gadol',
      order: {
        hebrew: 11,
        english: 10,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'adjective',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'נֹפֶלֶת',
      transliteration: 'nofelet',
      englishLiteral: 'falling',
      englishNatural: 'falling',
      root: 'naphal',
      order: 12,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        tense: 'participle',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'עָלָיו',
      transliteration: 'alav',
      englishLiteral: 'over-him',
      englishNatural: 'over him',
      root: 'al',
      suffixes: ['av'],
      order: {
        hebrew: 13,
        english: 14,
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
      'וַיְהִי הַשֶּׁמֶשׁ לָבוֹא וְתַרְדֵּמָה נָפְלָה עַל־אַבְרָם וְהִנֵּה אֵימָה חֲשֵׁכָה גְדֹלָה נֹפֶלֶת עָלָיו',
    transliteration:
      'vayehi haShemesh lavo veTardemah naflah al-Abram veHineh emah chashekha gedolah nofelet alav',
    englishLiteral:
      'And-he-was the-sun to-come, and-deep_trance she-fell over- Exalted_Father (Abram), and-behold terror darkness great, falling over-him.',
    englishNatural:
      'And the sun was to come, and a deep-trance fell over Exalted-Father (Abram); and behold terror, great darkness, falling over him.',
    kjv: 'And when the sun was going down, a deep sleep fell upon Abram; and, lo, an horror of great darkness fell upon him.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-09' },
},
};
