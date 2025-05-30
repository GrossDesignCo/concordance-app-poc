import { Verse } from '@/types';

export const genesis_2_6: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 2,
    number: 6,
  },
  words: [
    {
      hebrew: 'וְאֵד',
      transliteration: 'veEd',
      englishLiteral: 'And-mist',
      englishNatural: 'And a mist',
      root: 'ed',
      prefixes: ['ve'],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'יַעֲלֶה',
      transliteration: 'yaaleh',
      englishLiteral: 'will-go_up',
      englishNatural: 'went up',
      root: 'alah',
      order: {
        hebrew: 2,
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
    },
    {
      hebrew: 'מִן־',
      transliteration: 'min-',
      englishLiteral: 'from-',
      englishNatural: 'from',
      root: 'min',
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הָאָרֶץ',
      transliteration: 'haAretz',
      englishLiteral: 'the-land',
      englishNatural: 'the land',
      root: 'eretz',
      prefixes: ['ha'],
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וְהִשְׁקָה',
      transliteration: 'veHishqah',
      englishLiteral: 'and-gave_drink',
      englishNatural: 'and gave drink to',
      root: 'shaqah',
      prefixes: ['ve'],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'hiphil',
        type: 'verb',
      },
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: {
        hebrew: 6,
        english: 6,
      },
    },
    {
      hebrew: 'כָּל־',
      transliteration: 'kol-',
      englishLiteral: 'all-',
      englishNatural: 'all',
      root: 'kol',
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        type: 'adjective',
      },
    },
    {
      hebrew: 'פְּנֵי',
      transliteration: 'peney',
      englishLiteral: 'face-of',
      englishNatural: 'the face of',
      root: 'panah',
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'הָאֲדָמָה׃',
      transliteration: 'haAdamah',
      englishLiteral: 'the-soil',
      englishNatural: 'the soil',
      root: 'adamah',
      prefixes: ['ha'],
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
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
    hebrew: 'וְאֵד יַעֲלֶה מִן־הָאָרֶץ וְהִשְׁקָה אֶת־כָּל־פְּנֵי הָאֲדָמָה׃',
    transliteration: 'veEd yaaleh min-haAretz veHishqah et-kol-peney haAdamah',
    englishLiteral:
      'And-mist will-go_up from- the-land, and-gave_drink ↳ all- face-of the-soil.',
    englishNatural:
      'And a mist went up from the land, and gave drink to all the face of the soil.',
    kjv: 'But there went up a mist from the earth, and watered the whole face of the ground.',
    lastReviewed: { name: 'Matt Gross', date: '2025-05-30' },
  },
};
