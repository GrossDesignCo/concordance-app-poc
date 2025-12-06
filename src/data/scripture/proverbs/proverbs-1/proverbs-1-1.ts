import { Verse } from '@/types';

export const proverbs_1_1: Verse = {
  meta: {
    book: 'Proverbs',
    chapter: 1,
    verse: 1,
  },
  words: [
    {
      hebrew: 'מִשְׁלֵי',
      transliteration: 'mishle',
      englishLiteral: 'Rules-of',
      englishNatural: 'Rules of',
      root: 'mashal',
      order: 1,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
        state: 'construct',
      },
    },
    {
      hebrew: 'שְׁלֹמֹה',
      transliteration: 'shlomo',
      englishLiteral: 'His_Peace (Solomon)',
      englishNatural: 'His-Peace (Solomon)',
      root: 'shlomo',
      order: 2,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'בֶן־',
      transliteration: 'ben-',
      englishLiteral: 'son-of-',
      englishNatural: 'son of',
      root: 'ben',
      order: 3,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
        state: 'construct',
      },
    },
    {
      hebrew: 'דָּוִד',
      transliteration: 'david',
      englishLiteral: 'Beloved (David)',
      englishNatural: 'Beloved (David)',
      root: 'david',
      order: 4,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'מֶלֶךְ',
      transliteration: 'melekh',
      englishLiteral: 'king of',
      englishNatural: 'king of',
      root: 'melekh',
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'יִשְׂרָאֵל',
      transliteration: 'yisrael',
      englishLiteral: 'Struggles_with_God (Israel)',
      englishNatural: 'Struggles-with-God (Israel)',
      root: 'yisrael',
      order: 6,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'מִשְׁלֵי שְׁלֹמֹה בֶן־דָּוִד מֶלֶךְ יִשְׂרָאֵל',
    transliteration: 'mishle shlomo ben-david melekh yisrael',
    englishLiteral: 'Rules-of His_Peace (Solomon), son-of- Beloved (David), king of Struggles_with_God (Israel).',
    englishNatural: 'Rules of His-Peace (Solomon), son of Beloved (David), king of Struggles-with-God (Israel).',
    kjv: 'The proverbs of Solomon the son of David, king of Israel',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
  },
}; 