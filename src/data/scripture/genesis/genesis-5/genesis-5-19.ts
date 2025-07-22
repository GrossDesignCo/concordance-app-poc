import { type Verse } from '@/types';

export const genesis_5_19: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 5,
    verse: 19,
  },
  words: [
    {
      hebrew: 'וַיְחִי',
      transliteration: 'vaYechi',
      englishLiteral: 'and-lived',
      englishNatural: 'lived',
      root: 'chayah',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
        stem: 'qal',
        tense: 'imperfect',
      },
    },
    {
      hebrew: 'יָרֶד',
      transliteration: 'Yared',
      englishLiteral: 'Descending (Jared)',
      englishNatural: 'And Descending (Jared)',
      root: 'yared',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
    },
    {
      hebrew: 'אַחֲרֵי',
      transliteration: 'acharey',
      englishLiteral: 'after',
      englishNatural: 'after',
      root: 'achar',
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הוֹלִידוֹ',
      transliteration: 'holido',
      englishLiteral: 'his-birthing',
      englishNatural: 'he birthed',
      root: 'yalad',
      suffixes: ['o'],
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
        stem: 'hiphil',
        tense: 'infinitive_construct',
      },
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'חֲנוֹךְ',
      transliteration: 'Chanokh',
      englishLiteral: 'Dedicated (Enoch)',
      englishNatural: 'Dedicated (Enoch)',
      root: 'Chanokh',
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'שְׁמֹנֶה',
      transliteration: 'shmoneh',
      englishLiteral: 'eight',
      englishNatural: 'eight',
      root: 'shmoneh',
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        type: 'numeral',
        gender: 'feminine',
        number: 'singular',
      },
    },
    {
      hebrew: 'מֵאוֹת',
      transliteration: 'meot',
      englishLiteral: 'hundreds',
      englishNatural: 'hundred',
      root: 'meah',
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        type: 'numeral',
        gender: 'feminine',
        number: 'plural',
        state: 'construct',
      },
    },
    {
      hebrew: 'שָׁנָה',
      transliteration: 'shanah',
      englishLiteral: 'year',
      englishNatural: 'years',
      root: 'shanah',
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וַיּוֹלֶד',
      transliteration: 'vaYoled',
      englishLiteral: 'and-he-birthed',
      englishNatural: 'and birthed',
      root: 'yalad',
      prefixes: ['va'],
      order: {
        hebrew: 10,
        english: 10,
      },
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
        stem: 'hiphil',
        tense: 'imperfect',
      },
    },
    {
      hebrew: 'בָּנִים',
      transliteration: 'banim',
      englishLiteral: 'sons',
      englishNatural: 'sons',
      root: 'ben',
      suffixes: ['im'],
      order: {
        hebrew: 11,
        english: 11,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
      },
    },
    {
      hebrew: 'וּבָנוֹת',
      transliteration: 'uVanot',
      englishLiteral: 'and-daughters',
      englishNatural: 'and daughters',
      root: 'bat',
      prefixes: ['u'],
      suffixes: ['ot'],
      order: {
        hebrew: 12,
        english: 12,
      },
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'plural',
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
      'וַיְחִי יָרֶד אַחֲרֵי הוֹלִידוֹ אֶת־חֲנוֹךְ שְׁמֹנֶה מֵאוֹת שָׁנָה וַיּוֹלֶד בָּנִים וּבָנוֹת',
    transliteration:
      'vaYechi Yared acharey holido et-Chanokh shmoneh meot shanah vaYoled banim uVanot',
    englishLiteral:
      'and-lived Descending (Jared) after his-birthing ↳ Dedicated (Enoch), eight hundreds year, and-he-birthed sons and-daughters.',
    englishNatural:
      'And Descending (Jared) lived after he birthed Dedicated (Enoch), eight hundred years, and birthed sons and daughters.',
    kjv: 'And Jared lived after he begat Enoch eight hundred years, and begat sons and daughters:',
    lastReviewed: { name: 'Matt Gross', date: '2025-07-22' },
},
};
