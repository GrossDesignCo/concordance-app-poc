import { Verse } from '@/types';

export const jonah_3_9: Verse = {
  meta: {
    book: 'Jonah',
    chapter: 3,
    verse: 9,
  },
  words: [
    {
      hebrew: 'מִי־',
      transliteration: 'mi-',
      englishLiteral: 'who-',
      englishNatural: 'Who',
      root: 'mi',
      order: 1,
      morphology: {
        type: 'pronoun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'יוֹדֵעַ',
      transliteration: 'yodea',
      englishLiteral: 'knows',
      englishNatural: 'knows',
      root: 'yada',
      order: 2,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'participle',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: '?',
        englishNatural: '?',
      },
    },
    {
      hebrew: 'יָשׁוּב',
      transliteration: 'yashuv',
      englishLiteral: 'he-will-return',
      englishNatural: 'will return',
      root: 'shuv',
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
      hebrew: 'וְנִחַם',
      transliteration: 'veNicham',
      englishLiteral: 'and-will-comfort',
      englishNatural: 'and will comfort',
      root: 'nacham',
      prefixes: ['ve'],
      order: {
        hebrew: 4,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'niphal',
        type: 'verb',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'הָאֱלֹהִים',
      transliteration: 'haElohim',
      englishLiteral: 'the-Gods',
      englishNatural: 'The God',
      root: 'eloah',
      prefixes: ['ha'],
      suffixes: ['im'],
      order: {
        hebrew: 5,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'וְשָׁב',
      transliteration: 'veShav',
      englishLiteral: 'and-turn',
      englishNatural: 'and turn',
      root: 'shuv',
      prefixes: ['ve'],
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'מֵחֲרוֹן',
      transliteration: 'meCharon',
      englishLiteral: 'from-burning-of',
      englishNatural: 'from the burning of',
      root: 'charon',
      prefixes: ['me'],
      order: 7,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'אַפּוֹ',
      transliteration: 'apo',
      englishLiteral: 'nose-his',
      englishNatural: 'his nose',
      root: 'aph',
      suffixes: ['o'],
      order: 8,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וְלֹא',
      transliteration: 'veLo',
      englishLiteral: 'and-not',
      englishNatural: 'not',
      root: 'lo',
      prefixes: ['ve'],
      order: {
        hebrew: 9,
        english: 10,
      },
      morphology: {
        type: 'adverb',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
      lineBreaksAfter: {
        english: 1,
      },
      grammarSuffix: {
        englishNatural: '?"',
      },
    },
    {
      hebrew: 'נֹאבֵד',
      transliteration: 'noved',
      englishLiteral: 'we-will-perish',
      englishNatural: 'and we will perish',
      root: 'abad',
      order: {
        hebrew: 10,
        english: 9,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '1st',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: '?"',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
  ],
  expectedTranslations: {
    hebrew:
      'מִי־יוֹדֵעַ יָשׁוּב וְנִחַם הָאֱלֹהִים וְשָׁב מֵחֲרוֹן אַפּוֹ וְלֹא נֹאבֵד',
    transliteration:
      'mi-yodea yashuv veNicham haElohim veShav meCharon apo veLo noved',
    englishLiteral:
      'who- knows? he-will-return and-will-comfort the-Gods, and-turn from-burning-of nose-his, and-not we-will-perish?"',
    englishNatural:
      'Who knows? The God will return and will comfort, and turn from the burning of his nose, and we will perish not?"',
    kjv: 'Who can tell if God will turn and repent, and turn away from his fierce anger, that we perish not?',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
  },
};
