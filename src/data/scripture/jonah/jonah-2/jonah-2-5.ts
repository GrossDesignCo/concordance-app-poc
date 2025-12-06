import { Verse } from '@/types';

export const jonah_2_5: Verse = {
  meta: {
    book: 'Jonah',
    chapter: 2,
    verse: 5,
  },
  words: [
    {
      hebrew: 'אֲפָפוּנִי',
      transliteration: 'afafuni',
      englishLiteral: 'Surrounded-me',
      englishNatural: 'have surrounded me',
      root: 'afaf',
      suffixes: ['ni'],
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'מַיִם',
      transliteration: 'mayim',
      englishLiteral: 'waters',
      englishNatural: 'Waters',
      root: 'mayim',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'עַד־',
      transliteration: 'ad-',
      englishLiteral: 'unto-',
      englishNatural: 'unto',
      root: 'ad',
      order: 3,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'נֶפֶשׁ',
      transliteration: 'nephesh',
      englishLiteral: 'throat',
      englishNatural: 'the throat',
      root: 'nephesh',
      order: 4,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'תְּהוֹם',
      transliteration: 'tehom',
      englishLiteral: 'abyss',
      englishNatural: 'the abyss',
      root: 'tehom',
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'יְסֹבְבֵנִי',
      transliteration: 'yesoveveni',
      englishLiteral: 'goes_around-me',
      englishNatural: 'goes-around me',
      root: 'savav',
      prefixes: ['ye'],
      suffixes: ['ni'],
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'סוּף',
      transliteration: 'suf',
      englishLiteral: 'reed',
      englishNatural: 'reed',
      root: 'suf',
      order: 7,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'חָבוּשׁ',
      transliteration: 'chavush',
      englishLiteral: 'binds',
      englishNatural: 'binds',
      root: 'chavash',
      order: 8,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        tense: 'participle',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'לְרֹאשִׁי',
      transliteration: 'leroshi',
      englishLiteral: 'to-head-my',
      englishNatural: 'to my head',
      root: 'rosh',
      prefixes: ['le'],
      suffixes: ['i'],
      order: 9,
      morphology: {
        gender: 'masculine',
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
    hebrew:
      'אֲפָפוּנִי מַיִם עַד־נֶפֶשׁ תְּהוֹם יְסֹבְבֵנִי סוּף חָבוּשׁ לְרֹאשִׁי',
    transliteration:
      'afafuni mayim ad-nephesh tehom yesoveveni suf chavush leroshi',
    englishLiteral:
      'Surrounded-me waters, unto- throat; abyss goes_around-me; reed binds, to-head-my.',
    englishNatural:
      'Waters have surrounded me, unto the throat; the abyss goes-around me; reed binds, to my head.',
    kjv: 'The waters compassed me about, even to the soul: the depth compassed me round about, the weeds were wrapped about my head.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
  },
};
