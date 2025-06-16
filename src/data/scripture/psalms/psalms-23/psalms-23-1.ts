import { Verse } from '@/types';

export const psalms_23_1: Verse = {
  meta: {
    book: 'Psalms',
    chapter: 23,
    verse: 1,
  },
  words: [
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is',
      englishNatural: 'He-Who-Is',
      root: 'yhwh',
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'רֹעִי',
      transliteration: 'roi',
      englishLiteral: 'my-shepherd',
      englishNatural: 'my shepherd',
      root: 'raah_shepherd',
      suffixes: ['i'],
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '1st',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'לֹא',
      transliteration: 'lo',
      englishLiteral: 'not',
      englishNatural: 'not',
      root: 'lo',
      order: {
        hebrew: 3,
        english: 4,
      },
      morphology: {
        type: 'adverb',
      },
      grammarSuffix: {
        englishNatural: '.',
      },
      lineBreaksAfter: {
        english: 1,
      }
    },
    {
      hebrew: 'אֶחְסָר',
      transliteration: 'echsar',
      englishLiteral: 'I-will-lack',
      englishNatural: 'I will lack',
      root: 'chaser',
      prefixes: ['e'],
      order: {
        hebrew: 4,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '1st',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: '.',
      },
      lineBreaksAfter: {
        hebrew: 1,
      }
    },
  ],
  expectedTranslations: {
    hebrew: 'יְהוָה רֹעִי לֹא אֶחְסָר',
    transliteration: 'YHWH roi lo echsar',
    englishLiteral: 'He_Who_Is, my-shepherd; not I-will-lack.',
    englishNatural: 'He-Who-Is, my shepherd; I will lack not.',
    kjv: 'The LORD is my shepherd; I shall not want.',
    lastReviewed: { name: 'Matt Gross', date: '2025-06-16' },
  },
}; 