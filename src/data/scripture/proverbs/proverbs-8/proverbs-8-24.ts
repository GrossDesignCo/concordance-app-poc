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
      order: {
        hebrew: 1,
        english: 1,
      },
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
      englishLiteral: 'depths',
      englishNatural: 'depths',
      root: 'tehom',
      suffixes: ['ot'],
      order: {
        hebrew: 2,
        english: 2,
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
      hebrew: 'נוֹלָדְתִּי',
      transliteration: 'noladti',
      englishLiteral: 'was-born-I',
      englishNatural: 'I was born',
      root: 'yalad',
      suffixes: ['ti'],
      order: {
        hebrew: 3,
        english: 3,
      },
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
      order: {
        hebrew: 4,
        english: 4,
      },
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
      order: {
        hebrew: 6,
        english: 6,
      },
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
      order: {
        hebrew: 7,
        english: 7,
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
    },
  ],
  expectedTranslations: {
    hebrew:
      'בְּאֵין תְּהֹמוֹת נוֹלָדְתִּי בְּאֵין מַעְיָנוֹת נִכְבַּדֵּי מָיִם',
    transliteration: 'beEin tehomot noladti beEin mayanot nikhbadei mayim',
    englishLiteral:
      'In-nothing, depths, was-born-I; in-nothing, springs, heavy_with waters.',
    englishNatural:
      'In nothing, depths, I was born; in nothing, springs, heavy-with waters.',
    kjv: 'When there were no depths, I was brought forth; when there were no fountains abounding with water',
    lastReviewed: { name: 'Matt Gross', date: '2025-06-29' },
  },
};
