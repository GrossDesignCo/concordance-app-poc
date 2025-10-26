import { Verse } from '@/types';

export const jonah_1_15: Verse = {
  meta: {
    book: 'Jonah',
    chapter: 1,
    verse: 15,
  },
  words: [
    {
      hebrew: 'וַיִּשְׂאוּ',
      transliteration: 'vaYiseu',
      englishLiteral: 'And-lifted_up',
      englishNatural: 'And they lifted-up',
      root: 'nasa',
      prefixes: ['va'],
      suffixes: ['u'],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
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
        hebrew: 2,
        english: 2,
      },
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'יוֹנָה',
      transliteration: 'Yonah',
      englishLiteral: 'Dove (Jonah)',
      englishNatural: 'Dove (Jonah)',
      root: 'yonah',
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'וַיְטִלֻהוּ',
      transliteration: 'vaYetiluhu',
      englishLiteral: 'and-hurled-him',
      englishNatural: 'and hurled him',
      root: 'tul',
      prefixes: ['va'],
      suffixes: ['hu'],
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'imperfect',
        stem: 'hiphil',
        type: 'verb',
      },
    },
    {
      hebrew: 'אֶל־',
      transliteration: 'el-',
      englishLiteral: 'to-',
      englishNatural: 'to',
      root: 'el',
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הַיָּם',
      transliteration: 'haYam',
      englishLiteral: 'the-sea',
      englishNatural: 'the sea',
      root: 'yam',
      prefixes: ['ha'],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'וַיַּעֲמֹד',
      transliteration: 'vaYaamod',
      englishLiteral: 'and-stood',
      englishNatural: 'stood',
      root: 'amad',
      prefixes: ['va'],
      order: {
        hebrew: 7,
        english: 8,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'הַיָּם',
      transliteration: 'haYam',
      englishLiteral: 'the-sea',
      englishNatural: 'and the sea',
      root: 'yam',
      prefixes: ['ha'],
      order: {
        hebrew: 8,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'מִזַּעְפּוֹ',
      transliteration: 'mizaapo',
      englishLiteral: 'from-rage-its',
      englishNatural: 'from its rage',
      root: 'zaaf',
      prefixes: ['mi'],
      suffixes: ['o'],
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        gender: 'masculine',
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
    hebrew:
      'וַיִּשְׂאוּ אֶת־יוֹנָה וַיְטִלֻהוּ אֶל־הַיָּם וַיַּעֲמֹד הַיָּם מִזַּעְפּוֹ',
    transliteration:
      'vaYiseu et-Yonah vaYetiluhu el-haYam vaYaamod haYam mizaapo',
    englishLiteral:
      'And-lifted_up ↳ Dove (Jonah) and-hurled-him to- the-sea; and-stood the-sea from-rage-its.',
    englishNatural:
      'And they lifted-up Dove (Jonah) and hurled him to the sea; and the sea stood from its rage.',
    kjv: 'So they took up Jonah, and cast him forth into the sea: and the sea ceased from her raging.',
    lastReviewed: { name: 'Matt Gross', date: '2025-10-26' },
  },
};
