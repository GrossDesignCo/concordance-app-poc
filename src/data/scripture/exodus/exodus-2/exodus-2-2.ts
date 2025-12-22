import { Verse } from '@/types';

export const exodus_2_2: Verse = {
  meta: {
    book: 'Exodus',
    chapter: 2,
    verse: 2,
  },
  words: [
    {
      hebrew: 'וַתַּהַר',
      transliteration: 'vaTahar',
      englishLiteral: 'And-conceived',
      englishNatural: 'conceived',
      root: 'harah',
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
        type: 'verb',
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
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'וַתֵּלֶד',
      transliteration: 'vaTeledֿ',
      englishLiteral: 'and-birthed',
      englishNatural: 'and birthed',
      root: 'yalad',
      prefixes: ['va'],
      order: 3,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'בֵּן',
      transliteration: 'ben',
      englishLiteral: 'son',
      englishNatural: 'a son',
      root: 'ben',
      order: 4,
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
      hebrew: 'וַתֵּרֶא',
      transliteration: 'vaTere',
      englishLiteral: 'and-saw',
      englishNatural: 'and she saw',
      root: 'raah',
      prefixes: ['va'],
      order: 5,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'אֹתוֹ',
      transliteration: 'oto',
      englishLiteral: '↳him',
      englishNatural: 'him',
      root: 'et',
      suffixes: ['o'],
      order: 6,
      morphology: {
        type: 'particle',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'כִּי־',
      transliteration: 'ki-',
      englishLiteral: 'that-',
      englishNatural: 'that',
      root: 'ki',
      order: 7,
      morphology: {
        type: 'conjunction',
      },
    },
    {
      hebrew: 'טוֹב',
      transliteration: 'tov',
      englishLiteral: 'good',
      englishNatural: 'good',
      root: 'tov',
      order: {
        hebrew: 8,
        english: 9,
      },
      morphology: {
        type: 'adjective',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'הוּא',
      transliteration: 'hu',
      englishLiteral: 'he',
      englishNatural: 'he was',
      root: 'hu',
      order: {
        hebrew: 9,
        english: 8,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        type: 'pronoun',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'וַתִּצְפְּנֵהוּ',
      transliteration: 'vaTitzpenehu',
      englishLiteral: 'and-concealed-him',
      englishNatural: 'and she concealed him',
      root: 'tsaphan',
      prefixes: ['va'],
      suffixes: ['hu'],
      order: 10,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'שְׁלֹשָׁה',
      transliteration: 'shloshah',
      englishLiteral: 'three',
      englishNatural: 'three',
      root: 'shalosh',
      order: 11,
      morphology: {
        type: 'numeral',
      },
    },
    {
      hebrew: 'יְרָחִים',
      transliteration: 'yerachim',
      englishLiteral: 'moon_cycles',
      englishNatural: 'moon-cycles',
      root: 'yerach',
      suffixes: ['im'],
      order: 12,
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
      'וַתַּהַר הָאִשָּׁה וַתֵּלֶד בֵּן וַתֵּרֶא אֹתוֹ כִּי־טוֹב הוּא וַתִּצְפְּנֵהוּ שְׁלֹשָׁה יְרָחִים',
    transliteration:
      'vaTahar haIshah vaTeledֿ ben vaTere oto ki-tov hu vaTitzpenehu shloshah yerachim',
    englishLiteral:
      'And-conceived the-woman and-birthed son, and-saw ↳him that- good he, and-concealed-him three moon_cycles.',
    englishNatural:
      'And the woman conceived and birthed a son, and she saw him, that he was good, and she concealed him three moon-cycles.',
    kjv: 'And the woman conceived, and bare a son: and when she saw him that he was a goodly child, she hid him three months.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-22' },
},
};
