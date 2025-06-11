import { Verse } from '@/types';

export const genesis_3_20: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 3,
    verse: 20,
  },
  words: [
    {
      hebrew: 'וַיִּקְרָא',
      transliteration: 'vayYiqra',
      englishLiteral: 'And-he-called_out',
      englishNatural: 'called-out',
      root: 'qara',
      prefixes: ['va', 'yi'],
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb'
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'הָאָדָם',
      transliteration: 'haAdam',
      englishLiteral: 'the-human',
      englishNatural: 'And the human',
      root: 'adam',
      prefixes: ['ha'],
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun'
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'שֵׁם',
      transliteration: 'shem',
      englishLiteral: 'name',
      englishNatural: 'name',
      root: 'shem',
      order: {
        hebrew: 3,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun'
      },
    },
    {
      hebrew: 'אִשְׁתּוֹ',
      transliteration: 'ishto',
      englishLiteral: 'wife-his',
      englishNatural: 'his wife\'s',
      root: 'ishah',
      suffixes: ['o'],
      order: {
        hebrew: 4,
        english: 3,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun'
      },
    },
    {
      hebrew: 'חַוָּה',
      transliteration: 'Chavah',
      englishLiteral: 'Life_Giver (Eve)',
      englishNatural: 'Life-Giver (Eve)',
      root: 'chavah',
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun'
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'כִּי',
      transliteration: 'ki',
      englishLiteral: 'that',
      englishNatural: 'that',
      root: 'ki',
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        type: 'conjunction'
      },
    },
    {
      hebrew: 'הִוא',
      transliteration: 'hi',
      englishLiteral: 'she',
      englishNatural: 'she',
      root: 'hi',
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        type: 'pronoun'
      },
    },
    {
      hebrew: 'הָיְתָה',
      transliteration: 'hayetah',
      englishLiteral: 'was',
      englishNatural: 'was',
      root: 'hayah',
      suffixes: ['ah'],
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb'
      },
    },
    {
      hebrew: 'אֵם',
      transliteration: 'em',
      englishLiteral: 'Mother',
      englishNatural: 'Mother',
      root: 'em',
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun'
      },
    },
    {
      hebrew: 'כָּל־',
      transliteration: 'kol-',
      englishLiteral: 'all',
      englishNatural: 'of all',
      root: 'kol',
      order: {
        hebrew: 10,
        english: 10,
      },
      morphology: {
        type: 'adjective'
      },
    },
    {
      hebrew: 'חָי׃',
      transliteration: 'chai',
      englishLiteral: 'Living',
      englishNatural: 'Living',
      root: 'chai',
      order: {
        hebrew: 11,
        english: 11,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'adjective'
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'וַיִּקְרָא הָאָדָם שֵׁם אִשְׁתּוֹ חַוָּה כִּי הִוא הָיְתָה אֵם כָּל־חָי׃',
    transliteration: 'vayYiqra haAdam shem ishto Chavah ki hi hayetah em kol-chai',
    englishLiteral: 'And-he-called_out the-human name wife-his Life_Giver (Eve); that she was Mother all Living.',
    englishNatural: 'And the human called-out his wife\'s name Life-Giver (Eve); that she was Mother of all Living.',
    kjv: 'And Adam called his wife\'s name Eve; because she was the mother of all living.',
    lastReviewed: { name: 'Matt Gross', date: '2025-06-11' },
  },
}; 