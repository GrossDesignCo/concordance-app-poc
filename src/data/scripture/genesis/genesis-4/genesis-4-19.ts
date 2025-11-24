import { type Verse } from '@/types';

export const genesis_4_19: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 4,
    verse: 19,
  },
  words: [
    {
      hebrew: 'וַיִּקַּח־',
      transliteration: 'vayYiqach-',
      englishLiteral: 'And-took-',
      englishNatural: 'took',
      root: 'laqach',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        type: 'verb',
        person: '3rd',
        stem: 'qal',
        tense: 'imperfect',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'לוֹ',
      transliteration: 'lo',
      englishLiteral: 'to-himself',
      englishNatural: 'to himself',
      root: 'lo',
      order: {
        hebrew: 2,
        english: 3,
      },
      morphology: {
        type: 'preposition',
        person: '3rd',
      },
    },
    {
      hebrew: 'לֶמֶךְ',
      transliteration: 'Lemekh',
      englishLiteral: 'Powerful (Lamech)',
      englishNatural: 'And Powerful (Lamech)',
      root: 'Lemekh',
      order: {
        hebrew: 3,
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
      hebrew: 'שְׁתֵּי',
      transliteration: 'shte',
      englishLiteral: 'two',
      englishNatural: 'two',
      root: 'shnayim',
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        type: 'numeral',
        gender: 'feminine',
        number: 'dual',
      },
    },
    {
      hebrew: 'נָשִׁים',
      transliteration: 'nashim',
      englishLiteral: 'women',
      englishNatural: 'women',
      root: 'ish',
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        type: 'noun',
        gender: 'feminine',
        number: 'plural',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'שֵׁם',
      transliteration: 'shem',
      englishLiteral: 'name',
      englishNatural: 'the name',
      root: 'shem',
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'הָאַחַת',
      transliteration: 'haAchat',
      englishLiteral: 'the-one',
      englishNatural: 'of the one',
      root: 'echad',
      prefixes: ['ha'],
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        type: 'adjective',
        gender: 'feminine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'עָדָה',
      transliteration: 'Adah',
      englishLiteral: 'Ornament (Adah)',
      englishNatural: 'Ornament (Adah)',
      root: 'Adah',
      order: {
        hebrew: 8,
        english: 8,
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
    },
    {
      hebrew: 'וְשֵׁם',
      transliteration: 'veShem',
      englishLiteral: 'and-name',
      englishNatural: 'and the name',
      root: 'shem',
      prefixes: ['ve'],
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'הַשֵּׁנִית',
      transliteration: 'haShenith',
      englishLiteral: 'the-second',
      englishNatural: 'of the second',
      root: 'sheni',
      prefixes: ['ha'],
      order: {
        hebrew: 10,
        english: 10,
      },
      morphology: {
        type: 'adjective',
        gender: 'feminine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'צִלָּה',
      transliteration: 'Tzillah',
      englishLiteral: 'Shadow (Zillah)',
      englishNatural: 'Shadow (Zillah)',
      root: 'Tzillah',
      order: {
        hebrew: 11,
        english: 11,
      },
      morphology: {
        type: 'noun',
        gender: 'feminine',
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
    hebrew:
      'וַיִּקַּח־לוֹ לֶמֶךְ שְׁתֵּי נָשִׁים שֵׁם הָאַחַת עָדָה וְשֵׁם הַשֵּׁנִית צִלָּה',
    transliteration:
      'vayYiqach-lo Lemekh shte nashim shem haAchat Adah veShem haShenith Tzillah',
    englishLiteral:
      'And-took- to-himself Powerful (Lamech) two women; name the-one, Ornament (Adah), and-name the-second, Shadow (Zillah).',
    englishNatural:
      'And Powerful (Lamech) took to himself two women; the name of the one, Ornament (Adah), and the name of the second, Shadow (Zillah).',
    kjv: 'And Lamech took unto him two wives: the name of the one was Adah, and the name of the other Zillah.',
    lastReviewed: { name: 'Matt Gross', date: '2025-11-24' },
},
};
