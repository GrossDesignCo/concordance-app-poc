import { Verse } from '@/types';

export const genesis_15_14: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 15,
    verse: 14,
  },
  words: [
    {
      hebrew: 'וְגַם',
      transliteration: 'veGam',
      englishLiteral: 'And-also',
      englishNatural: 'And also',
      root: 'gam',
      prefixes: ['ve'],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        type: 'adverb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: 2,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'הַגּוֹי',
      transliteration: 'haGoy',
      englishLiteral: 'the-nation',
      englishNatural: 'the nation',
      root: 'goy',
      prefixes: ['ha'],
      order: 3,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'אֲשֶׁר',
      transliteration: 'asher',
      englishLiteral: 'which',
      englishNatural: 'which',
      root: 'asher',
      order: 4,
      morphology: {
        type: 'relative',
      },
    },
    {
      hebrew: 'יַעֲבֹדוּ',
      transliteration: 'yaavodu',
      englishLiteral: 'they-will-serve',
      englishNatural: 'they will serve',
      root: 'abad',
      prefixes: ['ya'],
      suffixes: ['u'],
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'דָּן',
      transliteration: 'dan',
      englishLiteral: 'judging',
      englishNatural: 'judge',
      root: 'din',
      order: {
        hebrew: 6,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        tense: 'participle',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishNatural: ';',
      },
    },
    {
      hebrew: 'אָנֹכִי',
      transliteration: 'anoki',
      englishLiteral: 'I',
      englishNatural: 'I will',
      root: 'anoki',
      order: {
        hebrew: 7,
        english: 6,
      },
      morphology: {
        person: '1st',
        number: 'singular',
        type: 'pronoun',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'וְאַחֲרֵי־',
      transliteration: 'veAcharey-',
      englishLiteral: 'and-after-',
      englishNatural: 'and after',
      root: 'achar',
      prefixes: ['ve'],
      order: 8,
      morphology: {
        type: 'preposition',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'כֵן',
      transliteration: 'khen',
      englishLiteral: 'so',
      englishNatural: 'so',
      root: 'ken',
      order: 9,
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'יֵצְאוּ',
      transliteration: 'yetzeu',
      englishLiteral: 'they-will-come-out',
      englishNatural: 'they will come out',
      root: 'yatsa',
      prefixes: ['ye'],
      suffixes: ['u'],
      order: 10,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'בִּרְכֻשׁ',
      transliteration: 'birkhush',
      englishLiteral: 'with-substance',
      englishNatural: 'substance',
      root: 'rekush',
      prefixes: ['bi'],
      order: {
        hebrew: 11,
        english: 12,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: '.',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'גָּדוֹל',
      transliteration: 'gadol',
      englishLiteral: 'great',
      englishNatural: 'with great',
      root: 'gadol',
      order: {
        hebrew: 12,
        english: 11,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'adjective',
      },
      grammarSuffix: {
        englishLiteral: '.',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
  ],
  expectedTranslations: {
    hebrew:
      'וְגַם אֶת־הַגּוֹי אֲשֶׁר יַעֲבֹדוּ דָּן אָנֹכִי וְאַחֲרֵי־כֵן יֵצְאוּ בִּרְכֻשׁ גָּדוֹל',
    transliteration:
      'veGam et-haGoy asher yaavodu dan anoki veAcharey-khen yetzeu birkhush gadol',
    englishLiteral:
      'And-also ↳ the-nation which they-will-serve, judging I, and-after- so they-will-come-out with-substance great.',
    englishNatural:
      'And also the nation which they will serve, I will judge; and after so they will come out with great substance.',
    kjv: 'And also that nation, whom they shall serve, will I judge: and afterward shall they come out with great substance.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-09' },
},
};
