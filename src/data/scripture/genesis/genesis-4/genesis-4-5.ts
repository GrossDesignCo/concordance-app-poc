import { Verse } from '@/types';

export const genesis_4_5: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 4,
    verse: 5,
  },
  words: [
    {
      hebrew: 'וְאֶל־',
      transliteration: 'veEl-',
      englishLiteral: 'And-to',
      englishNatural: 'And to',
      root: 'el',
      prefixes: ['ve'],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        type: 'preposition',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'קַיִן',
      transliteration: 'Qayin',
      englishLiteral: 'Acquired (Cain)',
      englishNatural: 'Acquired (Cain)',
      root: 'qanah',
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'וְאֶל־',
      transliteration: 'veEl-',
      englishLiteral: 'and-to',
      englishNatural: 'and to',
      root: 'el',
      prefixes: ['ve'],
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'מִנְחָתוֹ',
      transliteration: 'minchato',
      englishLiteral: 'his-offering',
      englishNatural: 'his offering',
      root: 'minchah',
      suffixes: ['o'],
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'לֹא',
      transliteration: 'lo',
      englishLiteral: 'no',
      englishNatural: 'no',
      root: 'lo',
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'שָׁעָה',
      transliteration: 'shaah',
      englishLiteral: 'esteeming',
      englishNatural: 'esteeming',
      root: 'shaah',
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וַיִּחַר',
      transliteration: 'vayYichar',
      englishLiteral: 'And-it-was_fuming_anger',
      englishNatural: 'And it was fuming-anger',
      root: 'charah',
      prefixes: ['va'],
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'לְקַיִן',
      transliteration: 'leQayin',
      englishLiteral: 'to-Acquired (Cain)',
      englishNatural: 'to Acquired (Cain)',
      root: 'qanah',
      prefixes: ['le'],
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'מְאֹד',
      transliteration: 'meod',
      englishLiteral: 'very_much',
      englishNatural: 'very-much',
      root: 'meod',
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        type: 'adverb',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וַיִּפְּלוּ',
      transliteration: 'vayYipelu',
      englishLiteral: 'and-they-fell',
      englishNatural: 'fell',
      root: 'napal',
      prefixes: ['va'],
      order: {
        hebrew: 10,
        english: 11,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishNatural: '.',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'פָנָיו',
      transliteration: 'panav',
      englishLiteral: 'his-faces',
      englishNatural: 'and his faces (eyes)',
      root: 'panah',
      suffixes: ['av'],
      order: {
        hebrew: 11,
        english: 10,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: '.',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
  ],
  expectedTranslations: {
    hebrew: 'וְאֶל־קַיִן וְאֶל־מִנְחָתוֹ לֹא שָׁעָה וַיִּחַר לְקַיִן מְאֹד וַיִּפְּלוּ פָנָיו',
    transliteration: 'veEl-Qayin veEl-minchato lo shaah vayYichar leQayin meod vayYipelu panav',
    englishLiteral: 'And-to Acquired (Cain) and-to his-offering, no esteeming; And-it-was_fuming_anger to-Acquired (Cain) very_much, and-they-fell his-faces.',
    englishNatural: 'And to Acquired (Cain) and to his offering, no esteeming; And it was fuming-anger to Acquired (Cain) very-much, and his faces (eyes) fell.',
    kjv: 'But unto Cain and to his offering he had not respect. And Cain was very wroth, and his countenance fell.',
    lastReviewed: { name: 'Matt Gross', date: '2025-06-18' },
  },
}; 