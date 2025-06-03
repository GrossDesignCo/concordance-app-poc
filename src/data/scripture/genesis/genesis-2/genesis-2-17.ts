import { Verse } from '@/types';

export const genesis_2_17: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 2,
    number: 17,
  },
  words: [
    {
      hebrew: 'וּמֵעֵץ',
      transliteration: 'uMeEtz',
      englishLiteral: 'and-from-tree',
      englishNatural: 'and from the Tree',
      root: 'etz',
      prefixes: ['u', 'me'],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'הַדַּעַת',
      transliteration: 'haDaat',
      englishLiteral: 'the-knowledge',
      englishNatural: 'of Knowledge of',
      root: 'daat',
      prefixes: ['ha'],
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'טוֹב',
      transliteration: 'tov',
      englishLiteral: 'good',
      englishNatural: 'Good',
      root: 'tov',
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        type: 'adjective',
      },
    },
    {
      hebrew: 'וָרָע',
      transliteration: 'vaRa',
      englishLiteral: 'and-bad',
      englishNatural: 'and Bad',
      root: 'raah_bad',
      prefixes: ['va'],
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        type: 'adjective',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'לֹא',
      transliteration: 'lo',
      englishLiteral: 'not',
      englishNatural: 'not',
      root: 'lo',
      order: {
        hebrew: 5,
        english: 7,
      },
      morphology: {
        type: 'adverb',
      },
      grammarSuffix: {
        englishNatural: ';',
      },
    },
    {
      hebrew: 'תֹאכַל',
      transliteration: 'toAkhal',
      englishLiteral: 'you-will-eat',
      englishNatural: 'you will eat',
      root: 'akhal',
      prefixes: ['ta'],
      order: {
        hebrew: 6,
        english: 5,
      },
      morphology: {
        type: 'verb',
        gender: 'masculine',
        number: 'singular',
        person: '2nd',
        tense: 'imperfect',
        stem: 'qal',
      },
    },
    {
      hebrew: 'מִמֶּנּוּ',
      transliteration: 'mimennu',
      englishLiteral: 'from-it',
      englishNatural: 'from it',
      root: 'min',
      prefixes: ['mi'],
      suffixes: ['nu'],
      order: {
        hebrew: 7,
        english: 6,
      },
      morphology: {
        type: 'preposition',
      },
      grammarSuffix: {
        englishLiteral: ';',
      },
    },
    {
      hebrew: 'כִּי',
      transliteration: 'ki',
      englishLiteral: 'that',
      englishNatural: 'that',
      root: 'ki',
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        type: 'conjunction',
      },
    },
    {
      hebrew: 'בְּיוֹם',
      transliteration: 'beYom',
      englishLiteral: 'in-day',
      englishNatural: 'in the day of',
      root: 'yom',
      prefixes: ['be'],
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'אֲכָלְךָ',
      transliteration: 'akhalekha',
      englishLiteral: 'your-eating',
      englishNatural: 'your eating',
      root: 'akhal',
      suffixes: ['kha'],
      order: {
        hebrew: 10,
        english: 10,
      },
      morphology: {
        type: 'verb',
        stem: 'qal',
        tense: 'infinitive_construct',
      },
    },
    {
      hebrew: 'מִמֶּנּוּ',
      transliteration: 'mimennu',
      englishLiteral: 'from-it',
      englishNatural: 'from it',
      root: 'min',
      prefixes: ['mi'],
      suffixes: ['nu'],
      order: {
        hebrew: 11,
        english: 11,
      },
      morphology: {
        type: 'preposition',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'מוֹת',
      transliteration: 'mot',
      englishLiteral: 'death',
      englishNatural: 'death',
      root: 'mavet',
      order: {
        hebrew: 12,
        english: 12,
      },
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'תָּמוּת׃',
      transliteration: 'tamuth',
      englishLiteral: 'you-will-die',
      englishNatural: 'you will die',
      root: 'mut',
      prefixes: ['ta'],
      order: {
        hebrew: 13,
        english: 13,
      },
      morphology: {
        type: 'verb',
        gender: 'masculine',
        number: 'singular',
        person: '2nd',
        tense: 'imperfect',
        stem: 'qal',
      },
      grammarSuffix: {
        englishLiteral: '."',
        englishNatural: '."',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew:
      'וּמֵעֵץ הַדַּעַת טוֹב וָרָע לֹא תֹאכַל מִמֶּנּוּ כִּי בְּיוֹם אֲכָלְךָ מִמֶּנּוּ מוֹת תָּמוּת׃',
    transliteration:
      'uMeEtz haDaat tov vaRa lo toAkhal mimennu ki beYom akhalekha mimennu mot tamuth',
    englishLiteral:
      'and-from-tree the-knowledge good and-bad, not you-will-eat from-it; that in-day your-eating from-it, death, you-will-die."',
    englishNatural:
      'and from the Tree of Knowledge of Good and Bad, you will eat from it not; that in the day of your eating from it, death, you will die."',
    kjv: 'But of the tree of the knowledge of good and evil, thou shalt not eat of it: for in the day that thou eatest thereof thou shalt surely die.',
    lastReviewed: { name: 'Matt Gross', date: '2025-06-03' },
  },
};
