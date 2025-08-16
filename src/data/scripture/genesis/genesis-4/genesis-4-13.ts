import { Verse } from '@/types';

export const genesis_4_13: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 4,
    verse: 13,
  },
  words: [
    {
      hebrew: 'וַיֹּאמֶר',
      transliteration: 'vayYomer',
      englishLiteral: 'And-he-said',
      englishNatural: 'said',
      root: 'amar',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'קַיִן',
      transliteration: 'Qayin',
      englishLiteral: 'Acquired (Cain)',
      englishNatural: 'And Acquired (Cain)',
      root: 'qanah',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'אֶל־',
      transliteration: 'el-',
      englishLiteral: 'to',
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
      hebrew: 'גָּדוֹל',
      transliteration: 'gadol',
      englishLiteral: 'Great',
      englishNatural: 'Great',
      root: 'gadol',
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'adjective',
      },
      grammarPrefix: {
        englishLiteral: '"',
        englishNatural: '"',
      },
    },
    {
      hebrew: 'עֲוֹנִי',
      transliteration: 'avoni',
      englishLiteral: 'my-twisting',
      englishNatural: 'is my twisting',
      root: 'avon',
      suffixes: ['i'],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '1st',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'מִנְּשֹׂא',
      transliteration: 'minso',
      englishLiteral: 'from-lifting_up',
      englishNatural: 'from lifting-up',
      root: 'nasa',
      prefixes: ['mi'],
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        tense: 'infinitive_construct',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'וַיֹּאמֶר קַיִן אֶל־יְהוָה גָּדוֹל עֲוֹנִי מִנְּשֹׂא',
    transliteration: 'vayYomer Qayin el-YHWH gadol avoni minso',
    englishLiteral:
      'And-he-said Acquired (Cain) to He_Who_Is, "Great my-twisting, from-lifting_up.',
    englishNatural:
      'Acquired (Cain) said to He-Who-Is, "Great is my twisting, from lifting-up.',
    kjv: 'And Cain said unto the LORD, My punishment is greater than I can bear.',
    lastReviewed: { name: 'Matt Gross', date: '2025-08-16' },
},
};
