import { type Verse } from '@/types';

export const genesis_5_4: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 5,
    verse: 4,
  },
  words: [
    {
      hebrew: 'וַיִּהְיוּ',
      transliteration: 'vaYihyu',
      englishLiteral: 'and-were',
      englishNatural: 'were',
      root: 'hayah',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 7,
      },
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'masculine',
        number: 'plural',
        stem: 'qal',
        tense: 'imperfect',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'יְמֵי־',
      transliteration: 'yemey-',
      englishLiteral: 'days-of',
      englishNatural: 'And the days of',
      root: 'yom',
      suffixes: ['ey'],
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
      },
    },
    {
      hebrew: 'אָדָם',
      transliteration: 'Adam',
      englishLiteral: 'Human (Adam)',
      englishNatural: 'Human (Adam)',
      root: 'adam',
      order: {
        hebrew: 3,
        english: 2,
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
        hebrew: 4,
        english: 3,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הוֹלִידוֹ',
      transliteration: 'holido',
      englishLiteral: 'birthing-him',
      englishNatural: 'he had birthed',
      root: 'yalad',
      prefixes: ['ho'],
      suffixes: ['o'],
      order: {
        hebrew: 5,
        english: 4,
      },
      morphology: {
        type: 'verb',
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
        hebrew: 6,
        english: 5,
      },
    },
    {
      hebrew: 'שֵׁת',
      transliteration: 'Shet',
      englishLiteral: 'Appointed (Seth)',
      englishNatural: 'Appointed (Seth)',
      root: 'Shet',
      order: {
        hebrew: 7,
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
    },
    {
      hebrew: 'שְׁמֹנֶה',
      transliteration: 'shmoneh',
      englishLiteral: 'eight',
      englishNatural: 'eight',
      root: 'shmoneh',
      order: {
        hebrew: 8,
        english: 8,
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
      prefixes: ['me'],
      order: {
        hebrew: 9,
        english: 9,
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
        hebrew: 10,
        english: 10,
      },
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'וַיּוֹלֶד',
      transliteration: 'vaYoled',
      englishLiteral: 'and-birthed',
      englishNatural: 'and he birthed',
      root: 'yalad',
      prefixes: ['va'],
      order: {
        hebrew: 11,
        english: 11,
      },
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
        stem: 'hiphil',
        tense: 'imperfect',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'בָּנִים',
      transliteration: 'banim',
      englishLiteral: 'sons',
      englishNatural: 'sons',
      root: 'ben',
      suffixes: ['im'],
      order: {
        hebrew: 12,
        english: 12,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
      },
    },
    {
      hebrew: 'וּבָנוֹת',
      transliteration: 'uBanot',
      englishLiteral: 'and-daughters',
      englishNatural: 'and daughters',
      root: 'bat',
      prefixes: ['u'],
      suffixes: ['ot'],
      order: {
        hebrew: 13,
        english: 13,
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
      'וַיִּהְיוּ יְמֵי־אָדָם אַחֲרֵי הוֹלִידוֹ אֶת־שֵׁת שְׁמֹנֶה מֵאוֹת שָׁנָה וַיּוֹלֶד בָּנִים וּבָנוֹת',
    transliteration:
      'vaYihyu yemey-Adam acharey holido et-Shet shmoneh meot shanah vaYoled banim uBanot',
    englishLiteral:
      'and-were days-of Human (Adam) after birthing-him ↳ Appointed (Seth), eight hundreds year; and-birthed sons and-daughters.',
    englishNatural:
      'And the days of Human (Adam) after he had birthed Appointed (Seth), were eight hundred years; and he birthed sons and daughters.',
    kjv: 'And the days of Adam after he had begotten Seth were eight hundred years: and he begat sons and daughters.',
    lastReviewed: { name: 'Matt Gross', date: '2025-07-22' },
  },
};
