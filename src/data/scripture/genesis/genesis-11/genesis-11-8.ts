import { Verse } from '@/types';

export const genesis_11_8: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 11,
    verse: 8,
  },
  words: [
    {
      hebrew: 'וַיָּפֶץ',
      transliteration: 'vayYafetz',
      englishLiteral: 'And-he-scattered',
      englishNatural: 'scattered',
      root: 'puts',
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
        stem: 'hiphil',
        type: 'verb',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'And He-Who-Is (YHWH)',
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
      hebrew: 'אֹתָם',
      transliteration: 'otam',
      englishLiteral: '↳ them',
      englishNatural: 'them',
      root: 'et',
      suffixes: ['am'],
      order: 3,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'מִשָּׁם',
      transliteration: 'misham',
      englishLiteral: 'from-there',
      englishNatural: 'from there',
      root: 'sham',
      prefixes: ['mi'],
      order: 4,
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'עַל־',
      transliteration: 'al-',
      englishLiteral: 'over-',
      englishNatural: 'over',
      root: 'al',
      order: 5,
      morphology: {
        type: 'preposition',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'פְּנֵי',
      transliteration: 'peney',
      englishLiteral: 'faces-of',
      englishNatural: 'the faces of',
      root: 'panah',
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'כָל־',
      transliteration: 'khol-',
      englishLiteral: 'all-',
      englishNatural: 'all',
      root: 'kol',
      order: 7,
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'הָאָרֶץ',
      transliteration: 'haAretz',
      englishLiteral: 'the-land',
      englishNatural: 'the land',
      root: 'eretz',
      prefixes: ['ha'],
      order: 8,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וַיַּחְדְּלוּ',
      transliteration: 'vayachdelu',
      englishLiteral: 'and-they-ceased',
      englishNatural: 'and they ceased',
      root: 'chadal',
      prefixes: ['va'],
      suffixes: ['u'],
      order: 9,
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
      hebrew: 'לִבְנֹת',
      transliteration: 'livnot',
      englishLiteral: 'to-build',
      englishNatural: 'to build',
      root: 'banah',
      prefixes: ['le'],
      order: 10,
      morphology: {
        tense: 'infinitive_construct',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'הָעִיר',
      transliteration: 'haIr',
      englishLiteral: 'the-city',
      englishNatural: 'the city',
      root: 'ir',
      prefixes: ['ha'],
      order: 11,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
  ],
  expectedTranslations: {
    hebrew:
      'וַיָּפֶץ יְהוָה אֹתָם מִשָּׁם עַל־פְּנֵי כָל־הָאָרֶץ וַיַּחְדְּלוּ לִבְנֹת הָעִיר',
    transliteration:
      'vayYafetz YHWH otam misham al-peney khol-haAretz vayachdelu livnot haIr',
    englishLiteral:
      'And-he-scattered He_Who_Is (YHWH) ↳ them from-there over- faces-of all- the-land, and-they-ceased to-build the-city.',
    englishNatural:
      'And He-Who-Is (YHWH) scattered them from there over the faces of all the land; and they ceased to build the city.',
    kjv: 'So the LORD scattered them abroad from thence upon the face of all the earth: and they left off to build the city.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-09' },
},
};
