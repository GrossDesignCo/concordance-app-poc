import { Verse } from '@/types';

export const jonah_2_8: Verse = {
  meta: {
    book: 'Jonah',
    chapter: 2,
    verse: 8,
  },
  words: [
    {
      hebrew: 'מְשַׁמְּרִים',
      transliteration: 'meshamrim',
      englishLiteral: 'Keepers-of',
      englishNatural: 'Keepers of',
      root: 'shamar',
      prefixes: ['me'],
      suffixes: ['im'],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        tense: 'participle',
        stem: 'piel',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'הַבְלֵי־',
      transliteration: 'havlei-',
      englishLiteral: 'vapors-of',
      englishNatural: 'vapors of',
      root: 'hevel',
      prefixes: ['ha'],
      suffixes: ['ei'],
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'שָׁוְא',
      transliteration: 'shav',
      englishLiteral: 'emptiness',
      englishNatural: 'emptiness',
      root: 'shav',
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
      hebrew: 'חַסְדָּם',
      transliteration: 'chasdam',
      englishLiteral: 'steadfast_love-their',
      englishNatural: 'their steadfast-love',
      root: 'chesed',
      suffixes: ['am'],
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'יַעֲזֹבוּ',
      transliteration: 'yaazovu',
      englishLiteral: 'they-forsake',
      englishNatural: 'they forsake',
      root: 'azav',
      prefixes: ['ya'],
      suffixes: ['u'],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
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
    hebrew: 'מְשַׁמְּרִים הַבְלֵי־שָׁוְא חַסְדָּם יַעֲזֹבוּ',
    transliteration: 'meshamrim havlei-shav chasdam yaazovu',
    englishLiteral:
      'Keepers-of vapors-of emptiness, steadfast_love-their they-forsake.',
    englishNatural:
      'Keepers of vapors of emptiness, their steadfast-love they forsake.',
    kjv: 'They that observe lying vanities forsake their own mercy.',
    lastReviewed: { name: 'Matt Gross', date: '2025-10-26' },
  },
};
