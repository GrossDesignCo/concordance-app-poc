import { Verse } from '@/types';
import { prefixes, roots, suffixes } from '../../../dictionary/hebrew';

export const genesis_1_3: Verse = {
  meta: {
    chapter: 1,
    verse: 3,
  },
  words: [
    {
      hebrew: 'וַיֹּאמֶר',
      transliteration: 'vaYomer',
      englishLiteral: 'And-said',
      englishNatural: 'said',
      root: roots.amar,
      prefixes: [prefixes.va],
      rootAppearance: {
        hebrew: 'יֹּאמֶר',
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
      hebrew: 'אֱלֹהִים',
      transliteration: 'Elohim',
      englishLiteral: 'Gods',
      englishNatural: 'And God',
      root: roots.eloah,
      suffixes: [suffixes.im],
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
      hebrew: 'יְהִי',
      transliteration: 'yehi',
      englishLiteral: 'be',
      englishNatural: 'be',
      root: roots.hayah,
      prefixes: [prefixes.ye],
      rootAppearance: {
        hebrew: 'יְהִי',
        conjugation: 'jussive 3rd person masculine singular',
      },
      order: {
        hebrew: 3,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
      },
      grammarPrefix: {
        englishLiteral: '"',
      },
      grammarSuffix: {
        englishNatural: '."',
      },
    },
    {
      hebrew: 'אוֹר',
      transliteration: 'or',
      englishLiteral: 'light',
      englishNatural: 'light',
      root: roots.or,
      order: {
        hebrew: 4,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'absolute',
      },
      grammarPrefix: {
        englishNatural: '"',
      },
      grammarSuffix: {
        englishLiteral: '."',
        englishNatural: ':',
      },
    },
    {
      hebrew: 'וַיְהִי',
      transliteration: 'vaYehi',
      englishLiteral: 'And-was',
      englishNatural: 'was',
      root: roots.hayah,
      prefixes: [prefixes.va],
      rootAppearance: {
        hebrew: 'יְהִי',
        conjugation:
          'imperfect 3rd person masculine singular with vav-consecutive',
      },
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
      },
      lineBreaksBefore: 1,
      grammarSuffix: {
        englishNatural: '.',
      },
    },
    {
      hebrew: 'אוֹר',
      transliteration: 'or',
      englishLiteral: 'light',
      englishNatural: 'And light',
      root: roots.or,
      order: {
        hebrew: 6,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'absolute',
      },
      grammarSuffix: {
        englishLiteral: '.',
      },
    },
  ],
  translations: {
    hebrew: 'וַיֹּאמֶר אֱלֹהִים יְהִי אוֹר וַיְהִי אוֹר',
    transliteration: 'vaYomer Elohim yehi or vaYehi or',
    englishLiteral: 'And-said, Gods, "be light." And-was light.',
    englishNatural: 'And God said, "light: be." And light was.',
  },
};
