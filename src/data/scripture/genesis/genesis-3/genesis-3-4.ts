import { Verse } from '@/types';

export const genesis_3_4: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 3,
    verse: 4,
  },
  words: [
    {
      hebrew: 'וַיֹּאמֶר',
      transliteration: 'vaYomer',
      englishLiteral: 'And-said',
      englishNatural: 'said',
      root: 'amar',
      prefixes: ['va'],
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
      hebrew: 'הַנָּחָשׁ',
      transliteration: 'haNachash',
      englishLiteral: 'the-snake',
      englishNatural: 'And the snake',
      root: 'nachash',
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
      hebrew: 'אֶל־',
      transliteration: 'el-',
      englishLiteral: 'to',
      englishNatural: 'to',
      root: 'el',
      order: 3,
      morphology: {
        type: 'preposition'
      },
    },
    {
      hebrew: 'הָאִשָּׁה',
      transliteration: 'haIshah',
      englishLiteral: 'the-woman',
      englishNatural: 'the woman',
      root: 'ishah',
      prefixes: ['ha'],
      order: 4,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun'
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'לֹא־',
      transliteration: 'lo-',
      englishLiteral: 'Not-',
      englishNatural: 'not',
      root: 'lo',
      order: {
        hebrew: 5,
        english: 7,
      },
      morphology: {
        type: 'adverb'
      },
      grammarPrefix: {
        englishLiteral: '"',
      },
      grammarSuffix: {
        englishNatural: '."',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'מוֹת',
      transliteration: 'mot',
      englishLiteral: 'dying',
      englishNatural: 'Dying',
      root: 'mut',
      order: {
        hebrew: 6,
        english: 5,
      },
      morphology: {
        type: 'verb',
        stem: 'qal',
        tense: 'infinitive_absolute'
      },
      grammarPrefix: {
        englishNatural: '"',
      },
      grammarSuffix: {
        englishNatural: '?',
      },
    },
    {
      hebrew: 'תְּמֻתוּן׃',
      transliteration: 'temutun',
      englishLiteral: 'you-shall-die',
      englishNatural: 'You shall die',
      root: 'mut',
      suffixes: ['un'],
      order: {
        hebrew: 7,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '2nd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb'
      },
      grammarSuffix: {
        englishLiteral: '."',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
  ],
  expectedTranslations: {
    hebrew: 'וַיֹּאמֶר הַנָּחָשׁ אֶל־הָאִשָּׁה לֹא־מוֹת תְּמֻתוּן׃',
    transliteration: 'vaYomer haNachash el-haIshah lo-mot temutun',
    englishLiteral: 'And-said the-snake to the-woman, "Not- dying you-shall-die."',
    englishNatural: 'And the snake said to the woman, "Dying? You shall die not."',
    kjv: 'And the serpent said unto the woman, Ye shall not surely die:',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
  },
}; 