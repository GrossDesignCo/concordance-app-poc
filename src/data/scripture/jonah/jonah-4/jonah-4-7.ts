import { Verse } from '@/types';

export const jonah_4_7: Verse = {
  meta: {
    book: 'Jonah',
    chapter: 4,
    verse: 7,
  },
  words: [
    {
      hebrew: 'וַיְמַן',
      transliteration: 'vaYeman',
      englishLiteral: 'And-appointed',
      englishNatural: 'appointed',
      root: 'manah',
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
        stem: 'piel',
        type: 'verb',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'הָאֱלֹהִים',
      transliteration: 'haElohim',
      englishLiteral: 'the-Gods',
      englishNatural: 'And the God',
      root: 'eloah',
      prefixes: ['ha'],
      suffixes: ['im'],
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'תּוֹלַעַת',
      transliteration: 'tolaat',
      englishLiteral: 'worm',
      englishNatural: 'a worm',
      root: 'tolaat',
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'בַּעֲלוֹת',
      transliteration: 'baAlot',
      englishLiteral: 'at-rising_of',
      englishNatural: 'at the rising of',
      root: 'alah',
      prefixes: ['ba'],
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        tense: 'infinitive_construct',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'הַשַּׁחַר',
      transliteration: 'haShachar',
      englishLiteral: 'the-dawn',
      englishNatural: 'the dawn',
      root: 'shachar',
      prefixes: ['ha'],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'לַמָּחֳרָת',
      transliteration: 'laMacharath',
      englishLiteral: 'to-the-next_day',
      englishNatural: 'to the next-day',
      root: 'macharath',
      prefixes: ['la'],
      order: {
        hebrew: 6,
        english: 6,
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
      hebrew: 'וַתַּךְ',
      transliteration: 'vaTakh',
      englishLiteral: 'and-struck_down',
      englishNatural: 'and it struck-down',
      root: 'nakah',
      prefixes: ['va'],
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'hiphil',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'הַקִּיקָיוֹן',
      transliteration: 'haQiqayon',
      englishLiteral: 'the-luscious_plant',
      englishNatural: 'the luscious-plant',
      root: 'qiqayon',
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
      hebrew: 'וַיִּיבָשׁ',
      transliteration: 'vaYivash',
      englishLiteral: 'and-withered',
      englishNatural: 'and it withered',
      root: 'yavesh',
      prefixes: ['va'],
      order: {
        hebrew: 10,
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
      lineBreaksBefore: 1,
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew:
      'וַיְמַן הָאֱלֹהִים תּוֹלַעַת בַּעֲלוֹת הַשַּׁחַר לַמָּחֳרָת וַתַּךְ אֶת־הַקִּיקָיוֹן וַיִּיבָשׁ',
    transliteration:
      'vaYeman haElohim tolaat baAlot haShachar laMacharath vaTakh et-haQiqayon vaYivash',
    englishLiteral:
      'And-appointed the-Gods worm at-rising_of the-dawn to-the-next_day, and-struck_down ↳ the-luscious_plant, and-withered.',
    englishNatural:
      'And the God appointed a worm at the rising of the dawn to the next-day, and it struck-down the luscious-plant, and it withered.',
    kjv: 'But God prepared a worm when the morning rose the next day, and it smote the gourd that it withered.',
    lastReviewed: { name: 'Matt Gross', date: '2025-10-26' },
  },
};
