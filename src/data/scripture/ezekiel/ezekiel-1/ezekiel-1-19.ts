import { Verse } from '@/types';

export const ezekiel_1_19: Verse = {
  meta: {
    book: 'Ezekiel',
    chapter: 1,
    verse: 19,
  },
  words: [
    {
      hebrew: 'וּבְלֶכֶת',
      transliteration: 'uVelekhet',
      englishLiteral: 'And-in-going-of',
      englishNatural: 'And in the going of',
      root: 'halakh',
      prefixes: ['ve', 'be'],
      order: 1,
      morphology: {
        tense: 'infinitive_construct',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'הַחַיּוֹת',
      transliteration: 'haChayot',
      englishLiteral: 'the-living-beings',
      englishNatural: 'the living-beings',
      root: 'chayah',
      prefixes: ['ha'],
      order: 2,
      morphology: {
        gender: 'feminine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'יֵלְכוּ',
      transliteration: 'yelekhu',
      englishLiteral: 'they-went',
      englishNatural: 'went',
      root: 'halakh',
      order: {
        hebrew: 3,
        english: 4,
      },
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
      hebrew: 'הָאוֹפַנִּים',
      transliteration: 'haOphanim',
      englishLiteral: 'the-wheels',
      englishNatural: 'the wheels',
      root: 'ophan',
      prefixes: ['ha'],
      order: {
        hebrew: 4,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'אֶצְלָם',
      transliteration: 'etzlam',
      englishLiteral: 'beside-them',
      englishNatural: 'beside them',
      root: 'etzal',
      suffixes: ['am'],
      order: 5,
      morphology: {
        type: 'preposition',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וּבְהִנָּשֵׂא',
      transliteration: 'uVehinase',
      englishLiteral: 'and-in-being-lifted-of',
      englishNatural: 'and in the being-lifted of',
      root: 'nasa',
      prefixes: ['ve', 'be'],
      order: 6,
      morphology: {
        tense: 'infinitive_construct',
        stem: 'niphal',
        type: 'verb',
      },
    },
    {
      hebrew: 'הַחַיּוֹת',
      transliteration: 'haChayot',
      englishLiteral: 'the-living-beings',
      englishNatural: 'the living-beings',
      root: 'chayah',
      prefixes: ['ha'],
      order: 7,
      morphology: {
        gender: 'feminine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'מֵעַל',
      transliteration: 'meAl',
      englishLiteral: 'from-over',
      englishNatural: 'from over',
      root: 'al',
      prefixes: ['me'],
      order: 8,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הָאָרֶץ',
      transliteration: 'haAretz',
      englishLiteral: 'the-land',
      englishNatural: 'the land',
      root: 'eretz',
      prefixes: ['ha'],
      order: 9,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'יִנָּשְׂאוּ',
      transliteration: 'yinasu',
      englishLiteral: 'they-were-lifted',
      englishNatural: 'were lifted',
      root: 'nasa',
      order: {
        hebrew: 10,
        english: 11,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'imperfect',
        stem: 'niphal',
        type: 'verb',
      },
      grammarSuffix: {
        englishNatural: '.',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'הָאוֹפַנִּים',
      transliteration: 'haOphanim',
      englishLiteral: 'the-wheels',
      englishNatural: 'the wheels',
      root: 'ophan',
      prefixes: ['ha'],
      order: {
        hebrew: 11,
        english: 10,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
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
      'וּבְלֶכֶת הַחַיּוֹת יֵלְכוּ הָאוֹפַנִּים אֶצְלָם וּבְהִנָּשֵׂא הַחַיּוֹת מֵעַל הָאָרֶץ יִנָּשְׂאוּ הָאוֹפַנִּים',
    transliteration:
      'uVelekhet haChayot yelekhu haOphanim etzlam uVehinase haChayot meAl haAretz yinasu haOphanim',
    englishLiteral:
      'And-in-going-of the-living-beings, they-went the-wheels beside-them, and-in-being-lifted-of the-living-beings from-over the-land, they-were-lifted the-wheels.',
    englishNatural:
      'And in the going of the living-beings, the wheels went beside them, and in the being-lifted of the living-beings from over the land, the wheels were lifted.',
    kjv: 'And when the living creatures went, the wheels went by them: and when the living creatures were lifted up from the earth, the wheels were lifted up.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
  },
};
