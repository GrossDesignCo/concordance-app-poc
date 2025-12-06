import { Verse } from '@/types';

export const genesis_1_18: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 1,
    verse: 18,
  },
  words: [
    {
      hebrew: 'וְלִמְשֹׁל֙',
      transliteration: 'veLiMshol',
      englishLiteral: 'And-to-rule',
      englishNatural: 'And to rule',
      root: 'mashal',
      prefixes: ['ve', 'li'],
      order: 1,
      morphology: {
        type: 'verb',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'בַּיּ֣וֹם',
      transliteration: 'baYom',
      englishLiteral: 'in-the-day',
      englishNatural: 'in the day',
      root: 'yom',
      prefixes: ['be', 'ha'],
      order: 2,
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
      hebrew: 'וּבַלַּ֔יְלָה',
      transliteration: 'uBaLaylah',
      englishLiteral: 'and-in-the-night',
      englishNatural: 'and in the night',
      root: 'layil',
      prefixes: ['u', 'be', 'ha'],
      order: 3,
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
      hebrew: 'וֽלֲהַבְדִּ֔יל',
      transliteration: 'uLeHavdil',
      englishLiteral: 'and-to-separate',
      englishNatural: 'and to separate',
      root: 'badal',
      prefixes: ['u', 'le'],
      order: 4,
      morphology: {
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'בֵּ֥ין',
      transliteration: 'beyn',
      englishLiteral: 'between',
      englishNatural: 'between',
      root: 'beyn',
      order: 5,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הָא֖וֹר',
      transliteration: 'haOr',
      englishLiteral: 'the-light',
      englishNatural: 'the light',
      root: 'or',
      prefixes: ['ha'],
      order: 6,
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
      hebrew: 'וּבֵ֣ין',
      transliteration: 'uBeyn',
      englishLiteral: 'and-between',
      englishNatural: 'and between',
      root: 'beyn',
      prefixes: ['u'],
      order: 7,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הַחֹ֑שֶׁךְ',
      transliteration: 'haHoshekh',
      englishLiteral: 'the-darkness',
      englishNatural: 'the darkness',
      root: 'choshekh',
      prefixes: ['ha'],
      order: 8,
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
      hebrew: 'וַיַּ֧רְא',
      transliteration: 'vaYar',
      englishLiteral: 'And-saw',
      englishNatural: 'saw',
      root: 'raah',
      prefixes: ['va'],
      order: {
        hebrew: 9,
        english: 10,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'אֱלֹהִ֖ים',
      transliteration: 'Elohim',
      englishLiteral: 'Gods',
      englishNatural: 'And God',
      root: 'eloah',
      suffixes: ['im'],
      order: {
        hebrew: 10,
        english: 9,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'כִּי־',
      transliteration: 'ki-',
      englishLiteral: 'that-',
      englishNatural: 'that it was',
      root: 'ki',
      order: 11,
      morphology: {
        type: 'conjunction',
      },
    },
    {
      hebrew: 'טֽוֹב׃',
      transliteration: 'tov',
      englishLiteral: 'good',
      englishNatural: 'good',
      root: 'tov',
      order: 12,
      morphology: {
        type: 'adjective',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'וְלִמְשֹׁל֙ בַּיּ֣וֹם וּבַלַּ֔יְלָה וֽלֲהַבְדִּ֔יל בֵּ֥ין הָא֖וֹר וּבֵ֣ין הַחֹ֑שֶׁךְ וַיַּ֧רְא אֱלֹהִ֖ים כִּי־טֽוֹב׃',
    transliteration: 'veLiMshol baYom uBaLaylah uLeHavdil beyn haOr uBeyn haHoshekh vaYar Elohim ki-tov',
    englishLiteral: 'And-to-rule in-the-day, and-in-the-night, and-to-separate between the-light, and-between the-darkness, And-saw Gods, that- good.',
    englishNatural: 'And to rule in the day, and in the night, and to separate between the light, and between the darkness, And God saw, that it was good.',
    kjv: 'And to rule over the day and over the night, and to divide the light from the darkness: and God saw that it was good.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
  },
}; 