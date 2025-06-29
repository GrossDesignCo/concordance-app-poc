import { Verse } from '@/types';

export const proverbs_8_1: Verse = {
  meta: {
    book: 'Proverbs',
    chapter: 8,
    verse: 1,
  },
  words: [
    {
      hebrew: 'הֲלֹא־',
      transliteration: 'haLo',
      englishLiteral: 'Does-not',
      englishNatural: 'Does not',
      root: 'lo',
      prefixes: ['ha'],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'חָכְמָה',
      transliteration: 'chokmah',
      englishLiteral: 'Wisdom',
      englishNatural: 'Wisdom',
      root: 'chokmah',
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'תִקְרָא',
      transliteration: 'tiqra',
      englishLiteral: 'will-call_out',
      englishNatural: 'call-out',
      root: 'qara',
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: '?',
        englishNatural: '?',
      },
    },
    {
      hebrew: 'וּתְבוּנָה',
      transliteration: 'uTevunah',
      englishLiteral: 'and-Understanding',
      englishNatural: 'and Understanding',
      root: 'tevunah',
      prefixes: ['u'],
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'תִּתֵּן',
      transliteration: 'titten',
      englishLiteral: 'will-give',
      englishNatural: 'give',
      root: 'natan',
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'קוֹלָהּ',
      transliteration: 'qolah',
      englishLiteral: 'voice-her',
      englishNatural: 'her voice',
      root: 'qol',
      suffixes: ['ah'],
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
        englishLiteral: '?',
        englishNatural: '?',
      },
    },
  ],
  expectedTranslations: {
    hebrew: 'הֲלֹא־חָכְמָה תִקְרָא וּתְבוּנָה תִּתֵּן קוֹלָהּ',
    transliteration: 'haLo chokmah tiqra uTevunah titten qolah',
    englishLiteral: 'Does-not Wisdom will-call_out? and-Understanding will-give voice-her?',
    englishNatural: 'Does not Wisdom call-out? and Understanding give her voice?',
    kjv: 'Doth not wisdom cry? and understanding put forth her voice?',
    lastReviewed: { name: 'Matt Gross', date: '2025-06-29' },
  },
}; 