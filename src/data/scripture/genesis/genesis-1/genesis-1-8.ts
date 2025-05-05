import { Verse } from '@/types';

export const genesis_1_8: Verse = {
  meta: {
    chapter: 1,
    number: 8,
  },
  words: [
    {
      hebrew: 'וַיִּקְרָ֧א',
      transliteration: 'vaYiqra',
      englishLiteral: 'And-called',
      englishNatural: 'called',
      root: 'qara',
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
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'אֱלֹהִ֛ים',
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
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'לָֽרָקִ֖יעַ',
      transliteration: 'laRaqia',
      englishLiteral: 'to_the-canopy',
      englishNatural: 'the canopy',
      root: 'raqia',
      prefixes: ['la'],
      order: {
        hebrew: 3,
        english: 3,
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
      hebrew: 'שָׁמָ֑יִם',
      transliteration: 'shamayim',
      englishLiteral: 'Heavens',
      englishNatural: 'Heavens',
      root: 'shamayim',
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarPrefix: {
        englishLiteral: '"',
        englishNatural: '"',
      },
      grammarSuffix: {
        englishLiteral: '."',
        englishNatural: '."',
      },
      lineBreaksAfter: {
        hebrew: 2,
        english: 2,
      },
    },
  ],
  expectedTranslations: {
    hebrew: 'וַיִּקְרָ֧א אֱלֹהִ֛ים לָֽרָקִ֖יעַ שָׁמָ֑יִם',
    transliteration: 'vaYiqra Elohim laRaqia shamayim',
    englishLiteral: 'And-called, Gods, to_the-canopy, "Heavens."',
    englishNatural: 'And God called the canopy, "Heavens."',
    kjv: 'And God called the firmament Heaven.',
    lastReviewed: { name: 'Matt Gross', date: '2025-05-05' },
  },
}; 