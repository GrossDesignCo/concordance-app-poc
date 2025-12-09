import { Verse } from '@/types';

export const genesis_15_8: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 15,
    verse: 8,
  },
  words: [
    {
      hebrew: 'וַיֹּאמַר',
      transliteration: 'vaYomar',
      englishLiteral: 'And-he-said',
      englishNatural: 'And he said',
      root: 'amar',
      prefixes: ['va'],
      order: 1,
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
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'אֲדֹנָי',
      transliteration: 'adonai',
      englishLiteral: 'Lord',
      englishNatural: 'Lord',
      root: 'adonai',
      order: 2,
      morphology: {
        type: 'noun',
      },
      grammarPrefix: {
        englishLiteral: '"',
        englishNatural: '"',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'יְהוִה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'He-Who-Is (YHWH)',
      root: 'yhwh',
      order: 3,
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
      hebrew: 'בַּמָּה',
      transliteration: 'bamah',
      englishLiteral: 'by-what',
      englishNatural: 'by what',
      root: 'bamah',
      order: 4,
      morphology: {
        type: 'pronoun',
      },
    },
    {
      hebrew: 'אֵדַע',
      transliteration: 'eda',
      englishLiteral: 'I-will-know',
      englishNatural: 'will I know',
      root: 'yada',
      order: 5,
      morphology: {
        number: 'singular',
        person: '1st',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'כִּי',
      transliteration: 'ki',
      englishLiteral: 'that',
      englishNatural: 'that',
      root: 'ki',
      order: 6,
      morphology: {
        type: 'conjunction',
      },
    },
    {
      hebrew: 'אִירָשֶׁנָּה',
      transliteration: 'irashenah',
      englishLiteral: 'I-will-inherit-her',
      englishNatural: 'I will inherit it',
      root: 'yarash',
      suffixes: ['nah'],
      order: 7,
      morphology: {
        number: 'singular',
        person: '1st',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: '?"',
        englishNatural: '?"',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'וַיֹּאמַר אֲדֹנָי יְהוִה בַּמָּה אֵדַע כִּי אִירָשֶׁנָּה',
    transliteration: 'vaYomar adonai YHWH bamah eda ki irashenah',
    englishLiteral:
      'And-he-said "Lord He_Who_Is (YHWH), by-what I-will-know that I-will-inherit-her?"',
    englishNatural:
      'And he said, "Lord, He-Who-Is (YHWH), by what will I know that I will inherit it?"',
    kjv: 'And he said, LORD God, whereby shall I know that I shall inherit it?',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-09' },
},
};
