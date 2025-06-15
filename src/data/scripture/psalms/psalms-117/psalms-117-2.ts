import { Verse } from '@/types';

export const psalms_117_2: Verse = {
  meta: {
    book: 'Psalms',
    chapter: 117,
    verse: 2,
  },
  words: [
    {
      hebrew: 'כִּי',
      transliteration: 'ki',
      englishLiteral: 'That',
      englishNatural: 'That',
      root: 'ki',
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        type: 'conjunction',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'גָבַר',
      transliteration: 'gavar',
      englishLiteral: 'is-great',
      englishNatural: 'great',
      root: 'gadol',
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'עָלֵינוּ',
      transliteration: 'aleinu',
      englishLiteral: 'toward-us',
      englishNatural: 'toward us',
      root: 'al',
      suffixes: ['nu'],
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '1st',
        type: 'preposition',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'חַסְדּוֹ',
      transliteration: 'chasdo',
      englishLiteral: 'his-steadfast_love',
      englishNatural: 'his steadfast-love',
      root: 'chesed',
      suffixes: ['o'],
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וֶאֱמֶת־',
      transliteration: 'veEmet-',
      englishLiteral: 'and-truth-of',
      englishNatural: 'and truth of',
      root: 'emet',
      prefixes: ['ve'],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is',
      englishNatural: 'He-Who-Is',
      root: 'yhwh',
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'לְעוֹלָם',
      transliteration: 'leOlam',
      englishLiteral: 'to-the_age',
      englishNatural: 'to the-age',
      root: 'olam',
      prefixes: ['le'],
      order: {
        hebrew: 7,
        english: 7,
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
      hebrew: 'הַלְלוּ',
      transliteration: 'halelu',
      englishLiteral: 'Praise',
      englishNatural: 'Praise',
      root: 'palal',
      prefixes: ['ha'],
      suffixes: ['u'],
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '2nd',
        tense: 'imperative',
        stem: 'piel',
        type: 'verb',
      },
    },
    {
      hebrew: 'יָהּ',
      transliteration: 'yah',
      englishLiteral: 'He—',
      englishNatural: 'He—',
      root: 'yhwh',
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
    },
  ],
  expectedTranslations: {
    hebrew: 'כִּי גָבַר עָלֵינוּ חַסְדּוֹ וֶאֱמֶת־יְהוָה לְעוֹלָם הַלְלוּ יָהּ',
    transliteration: 'ki gavar aleinu chasdo veEmet-YHWH leOlam halelu yah',
    englishLiteral: 'That is-great toward-us, his-steadfast_love; and-truth-of He_Who_Is to-the_age, Praise He—.',
    englishNatural: 'That great toward us, his steadfast-love; and truth of He-Who-Is to the-age, Praise He—.',
    kjv: 'For his merciful kindness is great toward us: and the truth of the LORD endureth for ever. Praise ye the LORD.',
    lastReviewed: { name: 'Matt Gross', date: '2025-06-15' },
  },
}; 