import { Verse } from '@/types';

export const genesis_2_24: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 2,
    verse: 24,
  },
  words: [
    {
      hebrew: 'עַל־',
      transliteration: 'al-',
      englishLiteral: 'over-',
      englishNatural: 'moreover',
      root: 'al',
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        type: 'preposition',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'כֵּן',
      transliteration: 'ken',
      englishLiteral: 'so',
      englishNatural: 'So',
      root: 'ken',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'adverb',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'יַעֲזָב',
      transliteration: 'yaazov',
      englishLiteral: 'he-will-leave',
      englishNatural: 'will leave',
      root: 'azav',
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
        type: 'verb',
      },
    },
    {
      hebrew: 'אִישׁ',
      transliteration: 'ish',
      englishLiteral: 'man',
      englishNatural: 'Man',
      root: 'ish',
      order: {
        hebrew: 4,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
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
    },
    {
      hebrew: 'אָבִיו',
      transliteration: 'aviv',
      englishLiteral: 'his-father',
      englishNatural: 'his father',
      root: 'av',
      suffixes: ['av'],
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
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וְאֶת־',
      transliteration: 'veEt-',
      englishLiteral: 'and-↳',
      englishNatural: 'and',
      root: 'et',
      prefixes: ['ve'],
      order: {
        hebrew: 7,
        english: 7,
      },
    },
    {
      hebrew: 'אִמּוֹ',
      transliteration: 'immo',
      englishLiteral: 'his-mother',
      englishNatural: 'his mother',
      root: 'em',
      suffixes: ['o'],
      order: {
        hebrew: 8,
        english: 8,
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
      hebrew: 'וְדָבַק',
      transliteration: 'veDavaq',
      englishLiteral: 'and-cling',
      englishNatural: 'and cling',
      root: 'davaq',
      prefixes: ['ve'],
      order: {
        hebrew: 9,
        english: 9,
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
      hebrew: 'בְּאִשְׁתּוֹ',
      transliteration: 'beIshto',
      englishLiteral: 'in-his-woman',
      englishNatural: 'in his woman',
      root: 'ishah',
      prefixes: ['be'],
      suffixes: ['o'],
      order: {
        hebrew: 10,
        english: 10,
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
      hebrew: 'וְהָיוּ',
      transliteration: 'veHayu',
      englishLiteral: 'and-will-be',
      englishNatural: 'and will become',
      root: 'hayah',
      prefixes: ['ve'],
      order: {
        hebrew: 11,
        english: 11,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'לְבָשָׂר',
      transliteration: 'leVasar',
      englishLiteral: 'to-flesh',
      englishNatural: 'flesh',
      root: 'basar',
      prefixes: ['le'],
      order: {
        hebrew: 12,
        english: 13,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: '.',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'אֶחָד׃',
      transliteration: 'echad',
      englishLiteral: 'one',
      englishNatural: 'one',
      root: 'echad',
      order: {
        hebrew: 13,
        english: 12,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'numeral',
      },
      grammarSuffix: {
        englishLiteral: '.',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
  ],
  expectedTranslations: {
    hebrew:
      'עַל־כֵּן יַעֲזָב אִישׁ אֶת־אָבִיו וְאֶת־אִמּוֹ וְדָבַק בְּאִשְׁתּוֹ וְהָיוּ לְבָשָׂר אֶחָד׃',
    transliteration:
      'al-ken yaazov ish et-aviv veEt-immo veDavaq beIshto veHayu leVasar echad',
    englishLiteral:
      'over- so, he-will-leave man ↳ his-father, and-↳ his-mother, and-cling in-his-woman, and-will-be to-flesh one.',
    englishNatural:
      'So moreover, Man will leave his father, and his mother, and cling in his woman, and will become one flesh.',
    kjv: 'Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh.',
    lastReviewed: { name: 'Matt Gross', date: '2025-06-05' },
  },
};
