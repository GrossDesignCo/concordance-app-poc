import { Verse } from '@/types';

export const ezekiel_1_2: Verse = {
  meta: {
    book: 'Ezekiel',
    chapter: 1,
    verse: 2,
  },
  words: [
    {
      hebrew: 'בַּחֲמִשָּׁה',
      transliteration: 'baChamishah',
      englishLiteral: 'In-the-five',
      englishNatural: 'In the five',
      root: 'chamesh',
      prefixes: ['ba'],
      order: 1,
      morphology: {
        type: 'numeral',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'לַחֹדֶשׁ',
      transliteration: 'laChodes',
      englishLiteral: 'to-the-month',
      englishNatural: 'to the month',
      root: 'chodesh',
      prefixes: ['la'],
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
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'הִיא',
      transliteration: 'hi',
      englishLiteral: 'it',
      englishNatural: 'it-was',
      root: 'hu',
      order: 3,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        type: 'pronoun',
      },
    },
    {
      hebrew: 'הַשָּׁנָה',
      transliteration: 'haShanah',
      englishLiteral: 'the-year',
      englishNatural: 'the year',
      root: 'shanah',
      prefixes: ['ha'],
      order: 4,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'הַחֲמִישִׁית',
      transliteration: 'haChamisit',
      englishLiteral: 'the-fifth',
      englishNatural: 'the fifth',
      root: 'chamesh',
      prefixes: ['ha'],
      order: 5,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'numeral',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'לְגָלוּת',
      transliteration: 'leGalut',
      englishLiteral: 'to-exile-of',
      englishNatural: 'to the exile of',
      root: 'golah',
      prefixes: ['le'],
      order: 6,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'הַמֶּלֶךְ',
      transliteration: 'haMelekh',
      englishLiteral: 'the-king',
      englishNatural: 'the king',
      root: 'melekh',
      prefixes: ['ha'],
      order: 7,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'יְהוֹיָכִין',
      transliteration: 'Yehoyakhin',
      englishLiteral: 'He_Establishes (Jehoiachin)',
      englishNatural: 'He-Establishes (Jehoiachin)',
      root: 'yehoyakhin',
      order: 8,
      morphology: {
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
      'בַּחֲמִשָּׁה לַחֹדֶשׁ הִיא הַשָּׁנָה הַחֲמִישִׁית לְגָלוּת הַמֶּלֶךְ יְהוֹיָכִין',
    transliteration:
      'baChamishah laChodes hi haShanah haChamisit leGalut haMelekh Yehoyakhin',
    englishLiteral:
      'In-the-five to-the-month, it the-year the-fifth to-exile-of the-king He_Establishes (Jehoiachin).',
    englishNatural:
      'In the five to the month, it-was the year the fifth to the exile of the king He-Establishes (Jehoiachin).',
    kjv: "In the fifth day of the month, which was the fifth year of king Jehoiachin's captivity,",
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
},
};
