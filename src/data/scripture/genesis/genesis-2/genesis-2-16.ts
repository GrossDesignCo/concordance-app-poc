import { Verse } from '@/types';

export const genesis_2_16: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 2,
    number: 16,
  },
  words: [
    {
      hebrew: 'וַיְצַו',
      transliteration: 'vaYetzav',
      englishLiteral: 'And-commanded',
      englishNatural: 'commanded',
      root: 'tzavah',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 3,
      },
      morphology: {
        type: 'verb',
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'piel',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is',
      englishNatural: 'And He-Who-Is',
      root: 'yhwh',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'אֱלֹהִים',
      transliteration: 'Elohim',
      englishLiteral: 'Gods',
      englishNatural: 'God',
      root: 'eloah',
      suffixes: ['im'],
      order: {
        hebrew: 3,
        english: 2,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'plural',
      },
    },
    {
      hebrew: 'עַל־',
      transliteration: 'al-',
      englishLiteral: 'over-',
      englishNatural: 'over',
      root: 'al',
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הָאָדָם',
      transliteration: 'haAdam',
      englishLiteral: 'the-human',
      englishNatural: 'the human',
      root: 'adam',
      prefixes: ['ha'],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      grammarSuffix: {
        englishNatural: ',',
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'לֵאמֹר',
      transliteration: 'leEmor',
      englishLiteral: 'to-say',
      englishNatural: 'saying',
      root: 'amar',
      prefixes: ['le'],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        type: 'verb',
        stem: 'qal',
        tense: 'infinitive_construct',
      },
      grammarSuffix: {
        englishNatural: ',',
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'מִכֹּל',
      transliteration: 'miKol',
      englishLiteral: 'From-all',
      englishNatural: 'From all',
      root: 'kol',
      prefixes: ['mi'],
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        type: 'adjective',
      },
      grammarPrefix: {
        englishNatural: '"',
        englishLiteral: '"',
      },
    },
    {
      hebrew: 'עֵץ־',
      transliteration: 'etz-',
      englishLiteral: 'tree-',
      englishNatural: 'tree',
      root: 'etz',
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'הַגָּן',
      transliteration: 'haGan',
      englishLiteral: 'the-garden',
      englishNatural: 'of the garden',
      root: 'gan',
      prefixes: ['ha'],
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
        englishNatural: ',',
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'אָכֹל',
      transliteration: 'akhol',
      englishLiteral: 'eating',
      englishNatural: 'eating',
      root: 'akhal',
      order: {
        hebrew: 10,
        english: 10,
      },
      morphology: {
        type: 'verb',
        stem: 'qal',
        tense: 'infinitive_absolute',
      },
      grammarSuffix: {
        englishNatural: ',',
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'תֹּאכֵל׃',
      transliteration: 'toAkhel',
      englishLiteral: 'let-you-will-eat',
      englishNatural: 'let you eat',
      root: 'akhal',
      order: {
        hebrew: 11,
        english: 11,
      },
      prefixes: ['ta'],
      morphology: {
        type: 'verb',
        gender: 'masculine',
        number: 'singular',
        person: '2nd',
        tense: 'imperfect',
        stem: 'qal',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
  ],
  expectedTranslations: {
    hebrew:
      'וַיְצַו יְהוָה אֱלֹהִים עַל־הָאָדָם לֵאמֹר מִכֹּל עֵץ־הַגָּן אָכֹל תֹּאכֵל׃',
    transliteration:
      'vaYetzav YHWH Elohim al-haAdam leEmor miKol etz-haGan akhol toAkhel',
    englishLiteral:
      'And-commanded He_Who_Is Gods over- the-human, to-say, "From-all tree- the-garden, eating, let-you-will-eat,',
    englishNatural:
      'And He-Who-Is God commanded over the human, saying, "From all tree of the garden, eating, let you eat,',
    kjv: 'And the LORD God commanded the man, saying, Of every tree of the garden thou mayest freely eat:',
    lastReviewed: { name: 'Matt Gross', date: '2025-06-03' },
  },
};