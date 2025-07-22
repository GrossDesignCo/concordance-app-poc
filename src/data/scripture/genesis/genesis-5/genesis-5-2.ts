import { type Verse } from '@/types';

export const genesis_5_2: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 5,
    verse: 2,
  },
  words: [
    {
      hebrew: 'זָכָר',
      transliteration: 'zakhar',
      englishLiteral: 'male',
      englishNatural: 'Male',
      root: 'zakhar',
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
    },
    {
      hebrew: 'וּנְקֵבָה',
      transliteration: 'uNeqevah',
      englishLiteral: 'and-female',
      englishNatural: 'and female',
      root: 'neqevah',
      prefixes: ['u'],
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'singular',
      },
    },
    {
      hebrew: 'בְּרָאָם',
      transliteration: 'beroam',
      englishLiteral: 'he-created',
      englishNatural: 'he created',
      root: 'bara',
      suffixes: ['am'],
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
        stem: 'qal',
        tense: 'perfect',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'וַיְבָרֶךְ',
      transliteration: 'vaYevarekh',
      englishLiteral: 'and-blessed',
      englishNatural: 'and blessed',
      root: 'barakh',
      prefixes: ['va'],
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
        stem: 'piel',
        tense: 'imperfect',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'אֹתָם',
      transliteration: 'otam',
      englishLiteral: 'them',
      englishNatural: 'them',
      root: 'et',
      suffixes: ['am'],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        type: 'pronoun',
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וַיִּקְרָא',
      transliteration: 'vaYiqra',
      englishLiteral: 'and-called_out',
      englishNatural: 'and called-out',
      root: 'qara',
      prefixes: ['va'],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
        stem: 'qal',
        tense: 'imperfect',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: {
        hebrew: 7,
        english: 7,
      },
    },
    {
      hebrew: 'שְׁמָם',
      transliteration: 'shemam',
      englishLiteral: 'name-their',
      englishNatural: 'their name',
      root: 'shem',
      suffixes: ['am'],
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'אָדָם',
      transliteration: 'Adam',
      englishLiteral: 'Human (Adam)',
      englishNatural: 'Human (Adam)',
      root: 'adam',
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      grammarPrefix: {
        englishLiteral: '"',
        englishNatural: '"',
      },
      grammarSuffix: {
        englishLiteral: ',"',
        englishNatural: ',"',
      },
    },
    {
      hebrew: 'בְּיוֹם',
      transliteration: 'beYom',
      englishLiteral: 'in-day',
      englishNatural: 'in the day of',
      root: 'yom',
      prefixes: ['be'],
      order: {
        hebrew: 10,
        english: 10,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'הִבָּרְאָם',
      transliteration: 'hiBaram',
      englishLiteral: 'them-being-created',
      englishNatural: 'them being created',
      root: 'bara',
      prefixes: ['hi'],
      suffixes: ['am'],
      order: {
        hebrew: 11,
        english: 11,
      },
      morphology: {
        type: 'verb',
        stem: 'niphal',
        tense: 'infinitive_construct',
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
      'זָכָר וּנְקֵבָה בְּרָאָם וַיְבָרֶךְ אֹתָם וַיִּקְרָא אֶת־שְׁמָם אָדָם בְּיוֹם הִבָּרְאָם',
    transliteration:
      'zakhar uNeqevah beroam vaYevarekh otam vaYiqra et-shemam Adam beYom hiBaram',
    englishLiteral:
      'male and-female he-created; and-blessed them, and-called_out ↳ name-their, "Human (Adam)," in-day them-being-created.',
    englishNatural:
      'Male and female he created; and blessed them, and called-out their name, "Human (Adam)," in the day of them being created.',
    kjv: 'Male and female created he them; and blessed them, and called their name Adam, in the day when they were created.',
    lastReviewed: { name: 'Matt Gross', date: '2025-07-22' },
  },
};
