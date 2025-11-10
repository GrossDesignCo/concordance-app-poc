import { Verse } from '@/types';

export const genesis_6_6: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 6,
    verse: 6,
  },
  words: [
    {
      hebrew: 'וַיִּנָּחֶם',
      transliteration: 'vayYinachem',
      englishLiteral: 'And-he-relented',
      englishNatural: 'relented',
      root: 'nacham',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'niphal',
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
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'כִּי־',
      transliteration: 'ki-',
      englishLiteral: 'that-',
      englishNatural: 'that',
      root: 'ki',
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        type: 'conjunction',
      },
    },
    {
      hebrew: 'עָשָׂה',
      transliteration: 'asah',
      englishLiteral: 'he-made',
      englishNatural: 'he made',
      root: 'asah',
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
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
      hebrew: 'הָאָדָם',
      transliteration: 'haAdam',
      englishLiteral: 'the-human',
      englishNatural: 'Human (Adam)',
      root: 'adam',
      prefixes: ['ha'],
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
      hebrew: 'בָּאָרֶץ',
      transliteration: 'baAretz',
      englishLiteral: 'in-the-land',
      englishNatural: 'in the land',
      root: 'eretz',
      prefixes: ['ba'],
      order: {
        hebrew: 7,
        english: 7,
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
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וַיִּתְעַצֵּב',
      transliteration: 'vayYitatzev',
      englishLiteral: 'and-it-grieved-him',
      englishNatural: 'and it grieved him',
      root: 'atzav',
      prefixes: ['va'],
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'hithpael',
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
      hebrew: 'לִבּוֹ',
      transliteration: 'libbo',
      englishLiteral: 'heart-his',
      englishNatural: 'his heart',
      root: 'lev',
      prefixes: ['le'],
      suffixes: ['o'],
      order: {
        hebrew: 10,
        english: 10,
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
      'וַיִּנָּחֶם יְהוָה כִּי־עָשָׂה אֶת־הָאָדָם בָּאָרֶץ וַיִּתְעַצֵּב אֶל־לִבּוֹ',
    transliteration:
      'vayYinachem YHWH ki-asah et-haAdam baAretz vayYitatzev el-libbo',
    englishLiteral:
      'And-he-relented He_Who_Is, that- he-made ↳ the-human in-the-land, and-it-grieved-him to- heart-his.',
    englishNatural:
      'And He-Who-Is relented, that he made Human (Adam) in the land, and it grieved him to his heart.',
    kjv: 'And it repented the LORD that he had made man on the earth, and it grieved him at his heart.',
    lastReviewed: { name: 'Matt Gross', date: '2025-11-10' },
  },
};
