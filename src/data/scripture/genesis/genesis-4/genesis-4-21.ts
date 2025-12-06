import { type Verse } from '@/types';

export const genesis_4_21: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 4,
    verse: 21,
  },
  words: [
    {
      hebrew: 'וְשֵׁם',
      transliteration: 'veShem',
      englishLiteral: 'and-name',
      englishNatural: 'And the name',
      root: 'shem',
      prefixes: ['ve'],
      order: 1,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'אָחִיו',
      transliteration: 'achiv',
      englishLiteral: 'brother-his',
      englishNatural: 'of his brother',
      root: 'ach',
      order: 2,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'יוּבָל',
      transliteration: 'Yuval',
      englishLiteral: 'Music (Jubal)',
      englishNatural: 'Music (Jubal)',
      root: 'Yuval',
      order: 3,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
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
      englishNatural: 'he',
      root: 'hu',
      order: 4,
      morphology: {
        type: 'pronoun',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'הָיָה',
      transliteration: 'hayah',
      englishLiteral: 'was',
      englishNatural: 'was',
      root: 'hayah',
      order: 5,
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'masculine',
        stem: 'qal',
        tense: 'perfect',
      },
    },
    {
      hebrew: 'אֲבִי',
      transliteration: 'avi',
      englishLiteral: 'father-of',
      englishNatural: 'father of',
      root: 'av',
      order: 6,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
      },
    },
    {
      hebrew: 'כָּל־',
      transliteration: 'kol-',
      englishLiteral: 'all',
      englishNatural: 'all',
      root: 'kol',
      order: 7,
      morphology: {
        type: 'noun',
        state: 'construct',
      },
    },
    {
      hebrew: 'תֹּפֵשׂ',
      transliteration: 'tofes',
      englishLiteral: 'handling',
      englishNatural: 'handling',
      root: 'tafas',
      order: {
        hebrew: 8,
        english: 9,
      },
      morphology: {
        type: 'verb',
        gender: 'masculine',
        number: 'singular',
        stem: 'qal',
        tense: 'participle',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'כִּנּוֹר',
      transliteration: 'kinnor',
      englishLiteral: 'lyre',
      englishNatural: 'lyre',
      root: 'kinnor',
      order: {
        hebrew: 9,
        english: 8,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'וְעוּגָב',
      transliteration: 'veUgav',
      englishLiteral: 'and-flute',
      englishNatural: 'and flute',
      root: 'ugav',
      prefixes: ['ve'],
      order: 10,
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
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
      'וְשֵׁם אָחִיו יוּבָל הוּא הָיָה אֲבִי כָּל־תֹּפֵשׂ כִּנּוֹר וְעוּגָב',
    transliteration: 'veShem achiv Yuval hu hayah avi kol-tofes kinnor veUgav',
    englishLiteral:
      'and-name brother-his, Music (Jubal); he was father-of all handling lyre, and-flute.',
    englishNatural:
      'And the name of his brother, Music (Jubal); he was father of all lyre handling, and flute.',
    kjv: "And his brother's name was Jubal: he was the father of all such as handle the harp and organ.",
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
},
};
