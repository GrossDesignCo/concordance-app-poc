import { Verse } from '@/types';

export const jonah_2_7: Verse = {
  meta: {
    book: 'Jonah',
    chapter: 2,
    verse: 7,
  },
  words: [
    {
      hebrew: 'בְּהִתְעַטֵּף',
      transliteration: 'behitatef',
      englishLiteral: 'In-fainting',
      englishNatural: 'In fainting',
      root: 'ataf',
      prefixes: ['be', 'hit'],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        stem: 'hithpael',
        tense: 'infinitive_construct',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'עָלַי',
      transliteration: 'alay',
      englishLiteral: 'over-me',
      englishNatural: 'over me',
      root: 'al',
      suffixes: ['ay'],
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'נַפְשִׁי',
      transliteration: 'nafshi',
      englishLiteral: 'throat-my',
      englishNatural: 'my throat',
      root: 'nephesh',
      suffixes: ['i'],
      order: {
        hebrew: 3,
        english: 3,
      },
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
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        type: 'particle',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'He-Who-Is (YHWH)',
      root: 'hayah',
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'זָכַרְתִּי',
      transliteration: 'zakharti',
      englishLiteral: 'I-remembered',
      englishNatural: 'I remembered',
      root: 'zakhar',
      suffixes: ['ti'],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '1st',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'וַתָּבוֹא',
      transliteration: 'vatavo',
      englishLiteral: 'and-came',
      englishNatural: 'and came',
      root: 'bo',
      prefixes: ['va', 'ta'],
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'אֵלֶיךָ',
      transliteration: 'elekha',
      englishLiteral: 'to-you',
      englishNatural: 'to you',
      root: 'el',
      suffixes: ['ekha'],
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'תְפִלָּתִי',
      transliteration: 'tefilati',
      englishLiteral: 'prayer-my',
      englishNatural: 'my prayer',
      root: 'tefilah',
      suffixes: ['i'],
      order: {
        hebrew: 9,
        english: 9,
      },
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
      hebrew: 'אֶל־',
      transliteration: 'el-',
      englishLiteral: 'to-',
      englishNatural: 'to',
      root: 'el',
      order: {
        hebrew: 10,
        english: 10,
      },
      morphology: {
        type: 'preposition',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'הֵיכַל',
      transliteration: 'hekhal',
      englishLiteral: 'temple-of',
      englishNatural: 'the temple of',
      root: 'hekhal',
      order: {
        hebrew: 11,
        english: 11,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'קָדְשֶׁךָ',
      transliteration: 'qodshekha',
      englishLiteral: 'holiness-your',
      englishNatural: 'your holiness',
      root: 'qodesh',
      suffixes: ['ekha'],
      order: {
        hebrew: 12,
        english: 12,
      },
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
      'בְּהִתְעַטֵּף עָלַי נַפְשִׁי אֶת־יְהוָה זָכַרְתִּי וַתָּבוֹא אֵלֶיךָ תְפִלָּתִי אֶל־הֵיכַל קָדְשֶׁךָ',
    transliteration:
      'behitatef alay nafshi et-YHWH zakharti vatavo elekha tefilati el-hekhal qodshekha',
    englishLiteral:
      'In-fainting over-me throat-my, ↳ He_Who_Is (YHWH) I-remembered; and-came to-you prayer-my, to- temple-of holiness-your.',
    englishNatural:
      'In fainting over me my throat, He-Who-Is (YHWH) I remembered; and came to you my prayer, to the temple of your holiness.',
    kjv: 'When my soul fainted within me I remembered the LORD: and my prayer came in unto thee, into thy holy temple.',
    lastReviewed: { name: 'Matt Gross', date: '2025-11-27' },
  },
};
