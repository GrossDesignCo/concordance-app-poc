import { Verse } from '@/types';

export const daniel_2_36: Verse = {
  meta: {
    book: 'Daniel',
    chapter: 2,
    verse: 36,
  },
  words: [
    {
      aramaic: 'דְּנָה',
      transliteration: 'denah',
      englishLiteral: 'this',
      englishNatural: 'This',
      root: 'denah',
      order: 1,
      morphology: {
        type: 'pronoun',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
      lineBreaksBefore: 1,
    },
    {
      aramaic: 'חֶלְמָא',
      transliteration: 'chelma',
      englishLiteral: 'dream-the',
      englishNatural: 'the dream',
      root: 'chelem',
      suffixes: ['a'],
      order: 2,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
        state: 'emphatic',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      aramaic: 'וּפִשְׁרֵהּ',
      transliteration: 'uFishreH',
      englishLiteral: 'and-interpretation-its',
      englishNatural: 'and its interpretation',
      root: 'peshar',
      prefixes: ['u'],
      suffixes: ['eh'],
      order: 3,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      aramaic: 'נֵאמַר',
      transliteration: 'nemar',
      englishLiteral: 'we-will-tell',
      englishNatural: 'we will tell',
      root: 'amar',
      order: 4,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '1st',
        tense: 'imperfect',
        stem: 'peal',
        type: 'verb',
      },
    },
    {
      aramaic: 'קֳדָם',
      transliteration: 'qodam',
      englishLiteral: 'before',
      englishNatural: 'before',
      root: 'qodam',
      order: 5,
      morphology: {
        type: 'preposition',
      },
    },
    {
      aramaic: 'מַלְכָּא',
      transliteration: 'malka',
      englishLiteral: 'king-the',
      englishNatural: 'the king',
      root: 'melekh',
      suffixes: ['a'],
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
        state: 'emphatic',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    aramaic: 'דְּנָה חֶלְמָא וּפִשְׁרֵהּ נֵאמַר קֳדָם מַלְכָּא',
    transliteration: 'denah chelma uFishreH nemar qodam malka',
    englishLiteral:
      'this dream-the, and-interpretation-its we-will-tell before king-the.',
    englishNatural:
      'This, the dream, and its interpretation, we will tell before the king.',
    kjv: 'This is the dream; and we will tell the interpretation thereof before the king.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-21' },
},
};
