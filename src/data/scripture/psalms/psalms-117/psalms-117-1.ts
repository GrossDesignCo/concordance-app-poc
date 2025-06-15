import { Verse } from '@/types';

export const psalms_117_1: Verse = {
  meta: {
    book: 'Psalms',
    chapter: 117,
    verse: 1,
  },
  words: [
    {
      hebrew: 'הַלְלוּ',
      transliteration: 'halelu',
      englishLiteral: 'Praise',
      englishNatural: 'Praise',
      root: 'palal',
      prefixes: ['ha'],
      suffixes: ['u'],
      order: {
        hebrew: 1,
        english: 1,
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
      hebrew: 'אֶת',
      transliteration: 'et',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is',
      englishNatural: 'He-Who-Is',
      root: 'yhwh',
      order: {
        hebrew: 3,
        english: 3,
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
      hebrew: 'כָּל',
      transliteration: 'kol',
      englishLiteral: 'all',
      englishNatural: 'all',
      root: 'kol',
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'adjective',
      },
    },
    {
      hebrew: 'גּוֹיִם',
      transliteration: 'goyim',
      englishLiteral: 'nations',
      englishNatural: 'nations',
      root: 'goy',
      suffixes: ['im'],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ':',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'שַׁבְּחוּהוּ',
      transliteration: 'shabechuhu',
      englishLiteral: 'send-to-him',
      englishNatural: 'send to him',
      root: 'shalach',
      suffixes: ['u', 'hu'],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '2nd',
        tense: 'imperative',
        stem: 'piel',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'כָּל',
      transliteration: 'kol',
      englishLiteral: 'all',
      englishNatural: 'all',
      root: 'kol',
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'adjective',
      },
    },
    {
      hebrew: 'הָאֻמִּים',
      transliteration: 'haUmim',
      englishLiteral: 'the-peoples',
      englishNatural: 'the peoples',
      root: 'am',
      prefixes: ['ha'],
      suffixes: ['im'],
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'הַלְלוּ אֶת יְהוָה כָּל גּוֹיִם שַׁבְּחוּהוּ כָּל הָאֻמִּים',
    transliteration: 'halelu et YHWH kol goyim shabechuhu kol haUmim',
    englishLiteral: 'Praise ↳ He_Who_Is, all nations; send-to-him, all the-peoples.',
    englishNatural: 'Praise He-Who-Is, all nations: send to him, all the peoples.',
    kjv: 'O praise the LORD, all ye nations: praise him, all ye people.',
    lastReviewed: { name: 'Matt Gross', date: '2025-06-15' },
  },
}; 