import { Verse } from '@/types';

export const jonah_2_10: Verse = {
  meta: {
    book: 'Jonah',
    chapter: 2,
    verse: 10,
  },
  words: [
    {
      hebrew: 'וַיֹּאמֶר',
      transliteration: 'vaYomer',
      englishLiteral: 'And-said',
      englishNatural: 'spoke',
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
        type: 'verb',
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
      hebrew: 'לַדָּג',
      transliteration: 'laDag',
      englishLiteral: 'to-the-fish',
      englishNatural: 'to the fish',
      root: 'dag',
      prefixes: ['la'],
      order: {
        hebrew: 3,
        english: 3,
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
      hebrew: 'וַיָּקֵא',
      transliteration: 'vaYaqe',
      englishLiteral: 'and-vomited',
      englishNatural: 'and he vomited',
      root: 'qey',
      prefixes: ['va'],
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'hiphil',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'יוֹנָה',
      transliteration: 'Yonah',
      englishLiteral: 'Dove (Jonah)',
      englishNatural: 'Dove (Jonah)',
      root: 'yonah',
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'אֶל־',
      transliteration: 'el-',
      englishLiteral: 'to-',
      englishNatural: 'to',
      root: 'el',
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הַיַּבָּשָׁה',
      transliteration: 'haYabashah',
      englishLiteral: 'the-dry_ground',
      englishNatural: 'the dry-ground',
      root: 'yabashah',
      prefixes: ['ha'],
      order: {
        hebrew: 8,
        english: 8,
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
    hebrew: 'וַיֹּאמֶר יְהוָה לַדָּג וַיָּקֵא אֶת־יוֹנָה אֶל־הַיַּבָּשָׁה',
    transliteration: 'vaYomer YHWH laDag vaYaqe et-Yonah el-haYabashah',
    englishLiteral:
      'And-said He_Who_Is to-the-fish, and-vomited ↳ Dove (Jonah) to- the-dry_ground.',
    englishNatural:
      'And He-Who-Is spoke to the fish, and he vomited Dove (Jonah) to the dry-ground.',
    kjv: 'And the LORD spake unto the fish, and it vomited out Jonah upon the dry land.',
    lastReviewed: { name: 'Matt Gross', date: '2025-09-29' },
  },
};
