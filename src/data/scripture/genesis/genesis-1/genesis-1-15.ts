import { Verse } from '@/types';

export const genesis_1_15: Verse = {
  meta: {
    chapter: 1,
    number: 15,
  },
  words: [
    {
      hebrew: 'וְהָי֤וּ',
      transliteration: 'veHayu',
      englishLiteral: 'And-they-will-be',
      englishNatural: 'And they will be',
      root: 'hayah',
      prefixes: ['ve'],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'לִמְאוֹרֹ֖ת',
      transliteration: 'liMeOrot',
      englishLiteral: 'for-lights',
      englishNatural: 'for lights',
      root: 'or',
      prefixes: ['li'],
      suffixes: ['ot'],
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        gender: 'feminine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'בִּרְקִ֣יעַ',
      transliteration: 'birQia',
      englishLiteral: 'in-hammered_out_work',
      englishNatural: 'in the hammered-out-work',
      root: 'raqa',
      prefixes: ['be'],
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'הַשָּׁמַ֔יִם',
      transliteration: 'haShamayim',
      englishLiteral: 'the-skies',
      englishNatural: 'the skies',
      root: 'shamayim',
      prefixes: ['ha'],
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'לְהָאִ֖יר',
      transliteration: 'leHair',
      englishLiteral: 'to-shine',
      englishNatural: 'to shine',
      root: 'or',
      prefixes: ['le'],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        type: 'verb',
      },
    },
    {
      hebrew: 'עַל־',
      transliteration: 'al-',
      englishLiteral: 'over',
      englishNatural: 'over',
      root: 'al',
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הָאָ֑רֶץ',
      transliteration: 'haAretz',
      englishLiteral: 'the-land',
      englishNatural: 'the land',
      root: 'eretz',
      prefixes: ['ha'],
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
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
    hebrew: 'וְהָי֤וּ לִמְאוֹרֹ֖ת בִּרְקִ֣יעַ הַשָּׁמַ֔יִם לְהָאִ֖יר עַל־הָאָ֑רֶץ',
    transliteration: 'veHayu liMeOrot birQia haShamayim leHair al-haAretz',
    englishLiteral: 'And-they-will-be for-lights in-hammered_out_work the-skies, to-shine over the-land.',
    englishNatural: 'And they will be for lights in the hammered-out-work, the skies, to shine over the land.',
    kjv: 'And let them be for lights in the firmament of the heaven to give light upon the earth:',
    lastReviewed: { name: 'Matt Gross', date: '2025-05-17' },
  },
}; 