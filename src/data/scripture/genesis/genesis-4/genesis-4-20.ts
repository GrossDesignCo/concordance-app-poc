import { type Verse } from '@/types';

export const genesis_4_20: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 4,
    verse: 20,
  },
  words: [
    {
      hebrew: 'וַתֵּלֶד',
      transliteration: 'vaTeled',
      englishLiteral: 'And-bore',
      englishNatural: 'bore',
      root: 'yalad',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'feminine',
        stem: 'qal',
        tense: 'imperfect',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'עָדָה',
      transliteration: 'Adah',
      englishLiteral: 'Ornament (Adah)',
      englishNatural: 'And Ornament (Adah)',
      root: 'Adah',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'singular',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'יָבָל',
      transliteration: 'Yaval',
      englishLiteral: 'Stream (Jabal)',
      englishNatural: 'Stream (Jabal)',
      root: 'Yaval',
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'הוּא',
      transliteration: 'hu',
      englishLiteral: 'he',
      englishNatural: 'he',
      root: 'hu',
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        type: 'pronoun',
        person: '3rd',
        gender: 'masculine',
        number: 'singular',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'הָיָה',
      transliteration: 'hayah',
      englishLiteral: 'was',
      englishNatural: 'was',
      root: 'hayah',
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        type: 'verb',
        person: '3rd',
        gender: 'masculine',
        stem: 'qal',
        tense: 'perfect',
      },
    },
    {
      hebrew: 'אֲבִי',
      transliteration: 'avi',
      englishLiteral: 'father-of',
      englishNatural: 'father of',
      root: 'av',
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
      },
    },
    {
      hebrew: 'יֹשֵׁב',
      transliteration: 'yoshev',
      englishLiteral: 'dwelling',
      englishNatural: 'dwelling',
      root: 'yashav',
      order: {
        hebrew: 8,
        english: 9,
      },
      morphology: {
        type: 'verb',
        gender: 'masculine',
        number: 'singular',
        stem: 'qal',
        tense: 'participle',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'אֹהֶל',
      transliteration: 'ohel',
      englishLiteral: 'tent',
      englishNatural: 'tent',
      root: 'ohel',
      order: {
        hebrew: 9,
        english: 8,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'וּמִקְנֶה',
      transliteration: 'uMiqneh',
      englishLiteral: 'and-cattle',
      englishNatural: 'and cattle',
      root: 'miqneh',
      prefixes: ['u'],
      order: {
        hebrew: 10,
        english: 10,
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
    hebrew: 'וַתֵּלֶד עָדָה אֶת־יָבָל הוּא הָיָה אֲבִי יֹשֵׁב אֹהֶל וּמִקְנֶה',
    transliteration: 'vaTeled Adah et-Yaval hu hayah avi yoshev ohel uMiqneh',
    englishLiteral:
      'And-bore Ornament (Adah) ↳ Stream (Jabal); he was father-of dwelling tent, and-cattle.',
    englishNatural:
      'And Ornament (Adah) bore Stream (Jabal); he was father of tent dwelling, and cattle.',
    kjv: 'And Adah bare Jabal: he was the father of such as dwell in tents, and of such as have cattle.',
    lastReviewed: { name: 'Matt Gross', date: '2025-07-06' },
},
};
