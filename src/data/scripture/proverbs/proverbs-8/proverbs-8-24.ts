import { Verse } from '@/types';

export const proverbs_8_24: Verse = {
  meta: {
    book: 'Proverbs',
    chapter: 8,
    verse: 24,
  },
  words: [
    {
      hebrew: 'בְּאֵין',
      transliteration: 'beEin',
      englishLiteral: 'In-nothing',
      englishNatural: 'In nothing',
      root: 'ein',
      prefixes: ['be'],
      order: 1,
      morphology: {
        type: 'adverb',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'תְּהֹמוֹת',
      transliteration: 'tehomot',
      englishLiteral: 'abyss',
      englishNatural: 'abyss',
      root: 'tehom',
      suffixes: ['ot'],
      order: 2,
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
      hebrew: 'נוֹלָדְתִּי',
      transliteration: 'noladti',
      englishLiteral: 'was-birthed-I',
      englishNatural: 'I was birthed',
      root: 'yalad',
      suffixes: ['ti'],
      order: 3,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '1st',
        tense: 'perfect',
        stem: 'niphal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'בְּאֵין',
      transliteration: 'beEin',
      englishLiteral: 'in-nothing',
      englishNatural: 'in nothing',
      root: 'ein',
      prefixes: ['be'],
      order: 4,
      morphology: {
        type: 'adverb',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'מַעְיָנוֹת',
      transliteration: 'mayanot',
      englishLiteral: 'springs',
      englishNatural: 'springs',
      root: 'mayan',
      suffixes: ['ot'],
      order: 5,
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
      hebrew: 'נִכְבַּדֵּי',
      transliteration: 'nikhbadei',
      englishLiteral: 'heavy_with',
      englishNatural: 'heavy-with',
      root: 'kavad',
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        stem: 'niphal',
        type: 'adjective',
      },
    },
    {
      hebrew: 'מָיִם',
      transliteration: 'mayim',
      englishLiteral: 'waters',
      englishNatural: 'waters',
      root: 'mayim',
      order: 7,
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
    hebrew:
      'בְּאֵין תְּהֹמוֹת נוֹלָדְתִּי בְּאֵין מַעְיָנוֹת נִכְבַּדֵּי מָיִם',
    transliteration: 'beEin tehomot noladti beEin mayanot nikhbadei mayim',
    englishLiteral:
      'In-nothing, abyss, was-birthed-I; in-nothing, springs, heavy_with waters.',
    englishNatural:
      'In nothing, abyss, I was birthed; in nothing, springs, heavy-with waters.',
    kjv: 'When there were no depths, I was brought forth; when there were no fountains abounding with water',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
  },
};
