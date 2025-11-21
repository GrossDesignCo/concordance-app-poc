import { Verse } from '@/types';

export const genesis_2_11: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 2,
    verse: 11,
  },
  words: [
    {
      hebrew: 'שֵׁם',
      transliteration: 'shem',
      englishLiteral: 'Name',
      englishNatural: 'The name',
      root: 'shem',
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'הָאֶחָד',
      transliteration: 'haEchad',
      englishLiteral: 'the-one',
      englishNatural: 'of one',
      root: 'echad',
      prefixes: ['ha'],
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        type: 'numeral',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'פִּישׁוֹן',
      transliteration: 'Pishon',
      englishLiteral: 'Spreading (Pishon)',
      englishNatural: 'Spreading (Pishon)',
      root: 'Pishon',
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'הוּא',
      transliteration: 'hu',
      englishLiteral: 'he',
      englishNatural: 'it',
      root: 'hu',
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        type: 'pronoun',
      },
    },
    {
      hebrew: 'הַסֹּבֵב',
      transliteration: 'haSovev',
      englishLiteral: 'the-going_around',
      englishNatural: 'goes-around',
      root: 'savav',
      prefixes: ['ha'],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        type: 'verb',
        stem: 'qal',
        tense: 'participle',
      },
    },
    {
      hebrew: 'אֵת',
      transliteration: 'et',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: {
        hebrew: 6,
        english: 6,
      },
    },
    {
      hebrew: 'כָּל־',
      transliteration: 'kol-',
      englishLiteral: 'all-',
      englishNatural: 'all',
      root: 'kol',
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        type: 'adjective',
      },
    },
    {
      hebrew: 'אֶרֶץ',
      transliteration: 'eretz',
      englishLiteral: 'land',
      englishNatural: 'the land',
      root: 'eretz',
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'הַחֲוִילָה',
      transliteration: 'haChavilah',
      englishLiteral: 'the-Strength (Havilah)',
      englishNatural: 'of Strength (Havilah)',
      root: 'Chavilah',
      prefixes: ['ha'],
      order: {
        hebrew: 9,
        english: 9,
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
      hebrew: 'אֲשֶׁר',
      transliteration: 'asher',
      englishLiteral: 'which',
      englishNatural: 'which',
      root: 'asher',
      order: {
        hebrew: 10,
        english: 10,
      },
      morphology: {
        type: 'relative',
      },
    },
    {
      hebrew: 'שָׁם',
      transliteration: 'sham',
      englishLiteral: 'there',
      englishNatural: 'there is',
      root: 'sham',
      order: {
        hebrew: 11,
        english: 11,
      },
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'הַזָּהָב׃',
      transliteration: 'haZahav',
      englishLiteral: 'the-gold',
      englishNatural: 'the gold',
      root: 'zahav',
      prefixes: ['ha'],
      order: {
        hebrew: 12,
        english: 12,
      },
      morphology: {
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
      'שֵׁם הָאֶחָד פִּישׁוֹן הוּא הַסֹּבֵב אֵת כָּל־אֶרֶץ הַחֲוִילָה אֲשֶׁר שָׁם הַזָּהָב׃',
    transliteration:
      'shem haEchad Pishon hu haSovev et kol-eretz haChavilah asher sham haZahav',
    englishLiteral:
      'Name the-one, Spreading (Pishon); he the-going_around ↳ all- land the-Strength (Havilah), which there the-gold.',
    englishNatural:
      'The name of one, Spreading (Pishon); it goes-around all the land of Strength (Havilah), which there is the gold.',
    kjv: 'The name of the first is Pishon: that is it which compasseth the whole land of Havilah, where there is gold;',
    lastReviewed: { name: 'Matt Gross', date: '2025-11-21' },
  },
};
