import { Verse } from '@/types';

export const genesis_1_3: Verse = {
  meta: {
    chapter: 1,
    number: 3,
  },
  words: [
    {
      hebrew: 'וַיֹּ֥אמֶר',
      transliteration: 'vaYomer',
      englishLiteral: 'And-said',
      englishNatural: 'said',
      root: 'amar',
      prefixes: ['va'],
      rootAppearance: {
        hebrew: 'יֹּ֥אמֶר',
        conjugation:
          'imperfect 3rd person masculine singular with vav-consecutive',
      },
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
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'אֱלֹהִ֖ים',
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
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'יְהִ֣י',
      transliteration: 'yehi',
      englishLiteral: 'Let-be',
      englishNatural: 'Let there be',
      root: 'hayah',
      rootAppearance: {
        hebrew: 'יְהִ֣י',
        conjugation: 'jussive 3rd person masculine singular',
      },
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'jussive',
        stem: 'qal',
      },
      grammarPrefix: {
        englishLiteral: '"',
        englishNatural: '"',
      },
    },
    {
      hebrew: 'א֑וֹר',
      transliteration: 'or',
      englishLiteral: 'light',
      englishNatural: 'light',
      root: 'or',
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'absolute',
      },
      grammarSuffix: {
        englishLiteral: '."',
        englishNatural: '."',
      },
    },
    {
      hebrew: 'וַֽיְהִי',
      transliteration: 'vayehi',
      englishLiteral: 'And-there-was',
      englishNatural: 'And there was',
      root: 'hayah',
      prefixes: ['va'],
      rootAppearance: {
        hebrew: 'יְהִי',
        conjugation:
          'imperfect 3rd person masculine singular with vav-consecutive',
      },
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
      },
    },
    {
      hebrew: 'אֽוֹר',
      transliteration: 'or',
      englishLiteral: 'light',
      englishNatural: 'light',
      root: 'or',
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'absolute',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: {
        hebrew: 2,
        english: 2,
      },
    },
  ],
  translations: {
    hebrew: 'וַיֹּ֥אמֶר אֱלֹהִ֖ים יְהִ֣י א֑וֹר וַֽיְהִי אֽוֹר',
    transliteration: 'vaYomer Elohim yehi or vayehi or',
    englishLiteral: 'And-said, Gods, "Let-be light." And-there-was light.',
    englishNatural: 'And God said, "Let there be light." And there was light.',
  },
};
