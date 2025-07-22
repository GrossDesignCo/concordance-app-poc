import { type Verse } from '@/types';

export const genesis_5_6: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 5,
    verse: 6,
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
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'שֵׁת',
      transliteration: 'Shet',
      englishLiteral: 'Appointed (Seth)',
      englishNatural: 'And Appointed (Seth)',
      root: 'Shet',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'חָמֵשׁ',
      transliteration: 'chamesh',
      englishLiteral: 'five',
      englishNatural: 'five',
      root: 'chamesh',
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        type: 'numeral',
        gender: 'feminine',
        number: 'singular',
      },
    },
    {
      hebrew: 'שָׁנִים',
      transliteration: 'shanim',
      englishLiteral: 'years',
      englishNatural: 'years',
      root: 'shanah',
      suffixes: ['im'],
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'plural',
      },
    },
    {
      hebrew: 'וּמְאַת',
      transliteration: 'uMeat',
      englishLiteral: 'and-hundred-of',
      englishNatural: 'and a hundred',
      root: 'meah',
      prefixes: ['u', 'me'],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        type: 'numeral',
        gender: 'feminine',
        number: 'singular',
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
        hebrew: 6,
        english: 6,
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
      englishNatural: 'and he birthed',
      root: 'yalad',
      prefixes: ['va'],
      order: {
        hebrew: 7,
        english: 7,
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
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'אֱנוֹשׁ',
      transliteration: 'Enosh',
      englishLiteral: 'Mortal_Man (Enosh)',
      englishNatural: 'Mortal-Man (Enosh)',
      root: 'Enosh',
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'וַיְחִי שֵׁת חָמֵשׁ שָׁנִים וּמְאַת שָׁנָה וַיּוֹלֶד אֶת־אֱנוֹשׁ',
    transliteration:
      'vaYechi Shet chamesh shanim uMeat shanah vaYoled et-Enosh',
    englishLiteral:
      'and-lived Appointed (Seth) five years and-hundred-of year, and-he-birthed ↳ Mortal_Man (Enosh).',
    englishNatural:
      'And Appointed (Seth) lived five years and a hundred years, and he birthed Mortal-Man (Enosh).',
    kjv: 'And Seth lived an hundred and five years, and begat Enos:',
    lastReviewed: { name: 'Matt Gross', date: '2025-07-22' },
},
};
