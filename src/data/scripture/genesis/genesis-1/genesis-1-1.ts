import { Verse } from '@/types';

export const genesis_1_1: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 1,
    verse: 1,
  },
  words: [
    {
      hebrew: 'בְּרֵאשִׁ֖ית',
      transliteration: 'beReshit',
      englishLiteral: 'In-heading',
      englishNatural: 'In the heading',
      root: 'rosh',
      prefixes: ['be'],
      suffixes: ['it'],
      order: 1,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        state: 'absolute',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'בָּרָ֣א',
      transliteration: 'bara',
      englishLiteral: 'created',
      englishNatural: 'created',
      root: 'bara',
      order: {
        hebrew: 2,
        english: 3, // In English verb comes after object
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
      hebrew: 'אֱלֹהִ֑ים',
      transliteration: 'Elohim',
      englishLiteral: 'Gods',
      englishNatural: 'God',
      root: 'eloah',
      suffixes: ['im'],
      order: {
        hebrew: 3,
        english: 2, // In English, "God" moves before "created"
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'אֵ֥ת',
      transliteration: 'et',
      englishLiteral: '↳',
      root: 'et',
      order: 4,
    },
    {
      hebrew: 'הַשָּׁמַ֖יִם',
      transliteration: 'haShamayim',
      englishLiteral: 'the-skies',
      englishNatural: 'the skies',
      root: 'shamayim',
      prefixes: ['ha'],
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'וְאֵ֥ת',
      transliteration: 'veEt',
      englishLiteral: 'and-↳',
      englishNatural: 'and',
      root: 'et',
      prefixes: ['ve'],
      order: 6,
    },
    {
      hebrew: 'הָאָֽרֶץ',
      transliteration: 'haAretz',
      englishLiteral: 'the-land',
      englishNatural: 'the land',
      root: 'eretz',
      prefixes: ['ha'],
      order: 7,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'בְּרֵאשִׁ֖ית בָּרָ֣א אֱלֹהִ֑ים אֵ֥ת הַשָּׁמַ֖יִם וְאֵ֥ת הָאָֽרֶץ',
    transliteration: 'beReshit bara Elohim et haShamayim veEt haAretz',
    englishLiteral: 'In-heading, created Gods ↳ the-skies and-↳ the-land',
    englishNatural: 'In the heading, God created the skies and the land.',
    kjv: 'In the beginning God created the heaven and the earth.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-11' },
  },
};
