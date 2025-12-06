import { Verse } from '@/types';

export const ezekiel_1_11: Verse = {
  meta: {
    book: 'Ezekiel',
    chapter: 1,
    verse: 11,
  },
  words: [
    {
      hebrew: 'וּפְנֵיהֶם',
      transliteration: 'uFeneihem',
      englishLiteral: 'And-faces-their',
      englishNatural: 'And their faces',
      root: 'panah',
      prefixes: ['ve'],
      suffixes: ['hem'],
      order: 1,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'וְכַנְפֵיהֶם',
      transliteration: 'veKhanfeihem',
      englishLiteral: 'and-wings-their',
      englishNatural: 'and their wings',
      root: 'kenaf',
      prefixes: ['ve'],
      suffixes: ['hem'],
      order: 2,
      morphology: {
        gender: 'feminine',
        number: 'dual',
        type: 'noun',
      },
    },
    {
      hebrew: 'פְּרֻדוֹת',
      transliteration: 'perudot',
      englishLiteral: 'separated',
      englishNatural: 'separated',
      root: 'parad',
      order: 3,
      morphology: {
        gender: 'feminine',
        number: 'plural',
        tense: 'participle',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'מִלְמָעְלָה',
      transliteration: 'miLemaala',
      englishLiteral: 'from-to-upward',
      englishNatural: 'upward',
      root: 'maala',
      prefixes: ['me', 'le'],
      order: 4,
      morphology: {
        type: 'adverb',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'לְאִישׁ',
      transliteration: 'leIsh',
      englishLiteral: 'to-man',
      englishNatural: 'to man',
      root: 'ish',
      prefixes: ['le'],
      order: {
        hebrew: 5,
        english: 8,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'שְׁתַּיִם',
      transliteration: 'shtayim',
      englishLiteral: 'two',
      englishNatural: 'two',
      root: 'shnayim',
      order: {
        hebrew: 6,
        english: 5,
      },
      morphology: {
        gender: 'feminine',
        number: 'dual',
        type: 'numeral',
      },
    },
    {
      hebrew: 'חֹבְרוֹת',
      transliteration: 'choverot',
      englishLiteral: 'joining',
      englishNatural: 'joining',
      root: 'chavar',
      order: {
        hebrew: 7,
        english: 6,
      },
      morphology: {
        gender: 'feminine',
        number: 'plural',
        tense: 'participle',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'אִישׁ',
      transliteration: 'ish',
      englishLiteral: 'man',
      englishNatural: 'man',
      root: 'ish',
      order: {
        hebrew: 8,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'וּשְׁתַּיִם',
      transliteration: 'uShtayim',
      englishLiteral: 'and-two',
      englishNatural: 'and two',
      root: 'shnayim',
      prefixes: ['ve'],
      order: 9,
      morphology: {
        gender: 'feminine',
        number: 'dual',
        type: 'numeral',
      },
    },
    {
      hebrew: 'מְכַסּוֹת',
      transliteration: 'mekhasot',
      englishLiteral: 'covering',
      englishNatural: 'covering',
      root: 'kasah',
      order: 10,
      morphology: {
        gender: 'feminine',
        number: 'plural',
        tense: 'participle',
        stem: 'piel',
        type: 'verb',
      },
    },
    {
      hebrew: 'אֵת',
      transliteration: 'et',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: 11,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'גְּוִיֹּתֵיהֶנָה',
      transliteration: 'geviyoteihenah',
      englishLiteral: 'bodies-their',
      englishNatural: 'their bodies',
      root: 'geviyah',
      suffixes: ['henah'],
      order: 12,
      morphology: {
        gender: 'feminine',
        number: 'plural',
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
    hebrew:
      'וּפְנֵיהֶם וְכַנְפֵיהֶם פְּרֻדוֹת מִלְמָעְלָה לְאִישׁ שְׁתַּיִם חֹבְרוֹת אִישׁ וּשְׁתַּיִם מְכַסּוֹת אֵת גְּוִיֹּתֵיהֶנָה',
    transliteration:
      'uFeneihem veKhanfeihem perudot miLemaala leIsh shtayim choverot ish uShtayim mekhasot et geviyoteihenah',
    englishLiteral:
      'And-faces-their and-wings-their separated from-to-upward; to-man two joining man, and-two covering ↳ bodies-their.',
    englishNatural:
      'And their faces and their wings separated upward; two joining man to man, and two covering their bodies.',
    kjv: 'Thus were their faces: and their wings were stretched upward; two wings of every one were joined one to another, and two covered their bodies.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
  },
};
