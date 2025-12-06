import { Verse } from '@/types';

export const proverbs_8_22: Verse = {
  meta: {
    book: 'Proverbs',
    chapter: 8,
    verse: 22,
  },
  words: [
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'He-Who-Is (YHWH)',
      root: 'yhwh',
      order: 1,
      morphology: {
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'קָנָנִי',
      transliteration: 'qanani',
      englishLiteral: 'acquired-me',
      englishNatural: 'acquired me',
      root: 'qanah',
      suffixes: ['ni'],
      order: 2,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'רֵאשִׁית',
      transliteration: 'reshit',
      englishLiteral: 'heading-of',
      englishNatural: 'the heading of',
      root: 'rosh',
      order: 3,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'דַּרְכּוֹ',
      transliteration: 'darko',
      englishLiteral: 'way-his',
      englishNatural: 'his way',
      root: 'derekh',
      suffixes: ['o'],
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
      hebrew: 'קֶדֶם',
      transliteration: 'qedem',
      englishLiteral: 'before',
      englishNatural: 'before',
      root: 'qedem',
      order: 5,
      morphology: {
        type: 'adverb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'מִפְעָלָיו',
      transliteration: 'miphalav',
      englishLiteral: 'from-works-his',
      englishNatural: 'his works',
      root: 'paal',
      prefixes: ['mi'],
      suffixes: ['av'],
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'מֵאָז',
      transliteration: 'meAz',
      englishLiteral: 'from-that_time',
      englishNatural: 'from that-time',
      root: 'az',
      prefixes: ['me'],
      order: 7,
      morphology: {
        type: 'adverb',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
    },
  ],
  expectedTranslations: {
    hebrew: 'יְהוָה קָנָנִי רֵאשִׁית דַּרְכּוֹ קֶדֶם מִפְעָלָיו מֵאָז',
    transliteration: 'YHWH qanani reshit darko qedem miphalav meAz',
    englishLiteral:
      'He_Who_Is (YHWH) acquired-me, heading-of way-his, before from-works-his from-that_time.',
    englishNatural:
      'He-Who-Is (YHWH) acquired me, the heading of his way, before his works from that-time.',
    kjv: 'The LORD possessed me in the beginning of his way, before his works of old',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
  },
};
