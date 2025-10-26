import { Verse } from '@/types';

export const jonah_2_4: Verse = {
  meta: {
    book: 'Jonah',
    chapter: 2,
    verse: 4,
  },
  words: [
    {
      hebrew: 'וַאֲנִי',
      transliteration: 'vaAni',
      englishLiteral: 'And-I',
      englishNatural: 'And I',
      root: 'ani',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        person: '1st',
        number: 'singular',
        type: 'pronoun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'אָמַרְתִּי',
      transliteration: 'amarti',
      englishLiteral: 'said',
      englishNatural: 'said',
      root: 'amar',
      suffixes: ['ti'],
      order: {
        hebrew: 2,
        english: 2,
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
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'נִגְרַשְׁתִּי',
      transliteration: 'nigrashti',
      englishLiteral: 'I-am-driven_out',
      englishNatural: 'I am driven-out',
      root: 'garash',
      suffixes: ['ti'],
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '1st',
        tense: 'perfect',
        stem: 'niphal',
        type: 'verb',
      },
      lineBreaksBefore: 1,
      grammarPrefix: {
        englishLiteral: "'",
        englishNatural: "'",
      },
    },
    {
      hebrew: 'מִנֶּגֶד',
      transliteration: 'mineged',
      englishLiteral: 'from-before',
      englishNatural: 'from before',
      root: 'neged',
      prefixes: ['mi'],
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'עֵינֶיךָ',
      transliteration: 'einekha',
      englishLiteral: 'eyes-your',
      englishNatural: 'your eyes',
      root: 'ayin_eye',
      suffixes: ['ekha'],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'feminine',
        number: 'dual',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'אַךְ',
      transliteration: 'akh',
      englishLiteral: 'Only',
      englishNatural: 'Only',
      root: 'akh',
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        type: 'adverb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'אוֹסִיף',
      transliteration: 'osif',
      englishLiteral: 'I-will-add',
      englishNatural: 'I will add',
      root: 'yasaf',
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '1st',
        tense: 'imperfect',
        stem: 'hiphil',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'לְהַבִּיט',
      transliteration: 'lehabit',
      englishLiteral: 'to-look',
      englishNatural: 'to look',
      root: 'nabat',
      prefixes: ['le', 'ha'],
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        stem: 'hiphil',
        tense: 'infinitive_construct',
        type: 'verb',
      },
    },
    {
      hebrew: 'אֶל־',
      transliteration: 'el-',
      englishLiteral: 'to-',
      englishNatural: 'to',
      root: 'el',
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הֵיכַל',
      transliteration: 'hekhal',
      englishLiteral: 'temple-of',
      englishNatural: 'the temple of',
      root: 'hekhal',
      order: {
        hebrew: 10,
        english: 10,
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
        hebrew: 11,
        english: 11,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ".'",
        englishNatural: ".'",
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew:
      'וַאֲנִי אָמַרְתִּי נִגְרַשְׁתִּי מִנֶּגֶד עֵינֶיךָ אַךְ אוֹסִיף לְהַבִּיט אֶל־הֵיכַל קָדְשֶׁךָ',
    transliteration:
      'vaAni amarti nigrashti mineged einekha akh osif lehabit el-hekhal qodshekha',
    englishLiteral:
      "And-I said, 'I-am-driven_out from-before eyes-your; Only I-will-add, to-look to- temple-of holiness-your.'",
    englishNatural:
      "And I said, 'I am driven-out from before your eyes; Only I will add, to look to the temple of your holiness.'",
    kjv: 'Then I said, I am cast out of thy sight; yet I will look again toward thy holy temple.',
    lastReviewed: { name: 'Matt Gross', date: '2025-10-26' },
  },
};
