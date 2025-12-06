import { Verse } from '@/types';

export const genesis_1_8: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 1,
    verse: 8,
  },
  words: [
    {
      hebrew: 'וַיִּקְרָ֧א',
      transliteration: 'vaYiqra',
      englishLiteral: 'And-called_out',
      englishNatural: 'called-out',
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
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'לָֽרָקִ֖יעַ',
      transliteration: 'laRaqia',
      englishLiteral: 'to_the-hammering_out',
      englishNatural: 'to the hammering-out',
      root: 'raqia',
      prefixes: ['la'],
      order: 3,
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
      order: 4,
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
    {
      hebrew: 'וַֽיְהִי',
      transliteration: 'vaYehi',
      englishLiteral: 'And-was',
      englishNatural: 'was',
      root: 'hayah',
      prefixes: ['va'],
      order: {
        hebrew: 5,
        english: 6,
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
        englishNatural: ',',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'עֶ֥רֶב',
      transliteration: 'erev',
      englishLiteral: 'evening',
      englishNatural: 'And evening',
      root: 'erev',
      order: {
        hebrew: 6,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
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
      hebrew: 'וַֽיְהִי',
      transliteration: 'vaYehi',
      englishLiteral: 'And-was',
      englishNatural: 'was',
      root: 'hayah',
      prefixes: ['va'],
      order: {
        hebrew: 7,
        english: 8,
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
        englishNatural: ',',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'בֹ֖קֶר',
      transliteration: 'voqer',
      englishLiteral: 'morning',
      englishNatural: 'And morning',
      root: 'boqer',
      order: {
        hebrew: 8,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: '',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'י֥וֹם',
      transliteration: 'yom',
      englishLiteral: 'Day',
      englishNatural: 'day',
      root: 'yom',
      order: {
        hebrew: 9,
        english: 10,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: '.',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'שֵׁנִֽי׃',
      transliteration: 'sheni',
      englishLiteral: 'second',
      englishNatural: 'A second',
      root: 'sheni',
      order: {
        hebrew: 10,
        english: 9,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'adjective',
      },
      grammarSuffix: {
        englishLiteral: '.',
      },
      lineBreaksBefore: {
        english: 1,
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
  ],
  expectedTranslations: {
    hebrew: 'וַיִּקְרָ֧א אֱלֹהִ֛ים לָֽרָקִ֖יעַ שָׁמָ֑יִם וַֽיְהִי עֶ֥רֶב וַֽיְהִי בֹ֖קֶר י֥וֹם שֵׁנִֽי׃',
    transliteration: 'vaYiqra Elohim laRaqia shamayim vaYehi erev vaYehi voqer yom sheni',
    englishLiteral: 'And-called_out Gods to_the-hammering_out, "Skies." And-was evening, And-was morning, Day second.',
    englishNatural: 'And God called-out to the hammering-out, "Skies." And evening was, And morning was, A second day.',
    kjv: 'And God called the firmament Heaven. And the evening and the morning were the second day.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
  },
}; 