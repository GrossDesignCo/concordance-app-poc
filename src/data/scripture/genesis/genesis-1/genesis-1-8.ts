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
      lineBreaksBefore: {
        hebrew: 1,
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
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'לָֽרָקִ֖יעַ',
      transliteration: 'laRaqia',
      englishLiteral: 'to_the-hammered_out_work',
      englishNatural: 'the hammered-out-work',
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
      englishLiteral: 'Skies',
      englishNatural: 'Skies',
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
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'וַיִּקְרָ֧א אֱלֹהִ֛ים לָֽרָקִ֖יעַ שָׁמָ֑יִם',
    transliteration: 'vaYiqra Elohim laRaqia shamayim',
    englishLiteral: 'And-called, Gods, to_the-hammered_out_work, "Skies."',
    englishNatural: 'And God called the hammered-out-work, "Skies."',
    kjv: 'And God called the firmament Heaven.',
    lastReviewed: { name: 'Matt Gross', date: '2025-05-12' },
  },
}; 