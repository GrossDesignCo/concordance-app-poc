import { Verse } from '@/types';

export const ezekiel_1_17: Verse = {
  meta: {
    book: 'Ezekiel',
    chapter: 1,
    verse: 17,
  },
  words: [
    {
      hebrew: 'עַל־',
      transliteration: 'al-',
      englishLiteral: 'over-',
      englishNatural: 'Over',
      root: 'al',
      order: 1,
      morphology: {
        type: 'preposition',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'אַרְבַּעַת',
      transliteration: 'arbaat',
      englishLiteral: 'four-of',
      englishNatural: 'four of',
      root: 'arba',
      order: 2,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
        type: 'numeral',
      },
    },
    {
      hebrew: 'רִבְעֵיהֶן',
      transliteration: 'riveihen',
      englishLiteral: 'sides-their',
      englishNatural: 'their sides',
      root: 'reva',
      suffixes: ['hen'],
      order: 3,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'יֵלֵכוּ',
      transliteration: 'yelekhu',
      englishLiteral: 'they-went',
      englishNatural: 'they went',
      root: 'halakh',
      order: 4,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'בְּלֶכְתָּן',
      transliteration: 'beLekhtan',
      englishLiteral: 'in-going-their',
      englishNatural: 'in their going',
      root: 'halakh',
      prefixes: ['be'],
      suffixes: ['tan'],
      order: 5,
      morphology: {
        tense: 'infinitive_construct',
        type: 'verb',
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
        hebrew: 6,
        english: 7,
      },
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'יִסַּבּוּ',
      transliteration: 'yisabbu',
      englishLiteral: 'they-went-around',
      englishNatural: 'they went-around',
      root: 'savav',
      order: {
        hebrew: 7,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'imperfect',
        stem: 'niphal',
        type: 'verb',
      },
    },
    {
      hebrew: 'בְּלֶכְתָּן',
      transliteration: 'beLekhtan',
      englishLiteral: 'in-going-their',
      englishNatural: 'in their going',
      root: 'halakh',
      prefixes: ['be'],
      suffixes: ['tan'],
      order: 8,
      morphology: {
        tense: 'infinitive_construct',
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
    hebrew:
      'עַל־אַרְבַּעַת רִבְעֵיהֶן יֵלֵכוּ בְּלֶכְתָּן לֹא יִסַּבּוּ בְּלֶכְתָּן',
    transliteration:
      'al-arbaat riveihen yelekhu beLekhtan lo yisabbu beLekhtan',
    englishLiteral:
      'over- four-of sides-their they-went in-going-their; not they-went-around in-going-their.',
    englishNatural:
      'Over four of their sides they went in their going; they went-around not in their going.',
    kjv: 'When they went, they went upon their four sides: and they turned not when they went.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
  },
};
