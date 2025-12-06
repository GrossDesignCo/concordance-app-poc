import { Verse } from '@/types';

export const genesis_9_8: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 9,
    verse: 8,
  },
  words: [
    {
      hebrew: 'וַיֹּאמֶר',
      transliteration: 'vayYomer',
      englishLiteral: 'And-said',
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
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'אֱלֹהִים',
      transliteration: 'Elohim',
      englishLiteral: 'Gods',
      englishNatural: 'And God',
      root: 'eloah',
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
      hebrew: 'אֶל־',
      transliteration: 'el-',
      englishLiteral: 'to-',
      englishNatural: 'to',
      root: 'el',
      order: 3,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'נֹחַ',
      transliteration: 'Noach',
      englishLiteral: 'Rest (Noah)',
      englishNatural: 'Rest (Noah)',
      root: 'noach',
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
      hebrew: 'וְאֶל־',
      transliteration: 'veEl-',
      englishLiteral: 'and-to-',
      englishNatural: 'and to',
      root: 'el',
      prefixes: ['ve'],
      order: 5,
      morphology: {
        type: 'preposition',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'בָּנָיו',
      transliteration: 'banav',
      englishLiteral: 'his-sons',
      englishNatural: 'his sons',
      root: 'ben',
      suffixes: ['av'],
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'אִתּוֹ',
      transliteration: 'ito',
      englishLiteral: 'with-him',
      englishNatural: 'with him',
      root: 'et',
      suffixes: ['o'],
      order: 7,
      morphology: {
        type: 'preposition',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'לֵאמֹר',
      transliteration: 'lemor',
      englishLiteral: 'to-say',
      englishNatural: 'saying',
      root: 'amar',
      prefixes: ['le'],
      order: 8,
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
  ],
  expectedTranslations: {
    hebrew: 'וַיֹּאמֶר אֱלֹהִים אֶל־נֹחַ וְאֶל־בָּנָיו אִתּוֹ לֵאמֹר',
    transliteration: 'vayYomer Elohim el-Noach veEl-banav ito lemor',
    englishLiteral:
      'And-said Gods to- Rest (Noah), and-to- his-sons with-him, to-say,',
    englishNatural:
      'And God said to Rest (Noah), and to his sons with him, saying,',
    kjv: 'And God spake unto Noah, and to his sons with him, saying,',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
},
};
