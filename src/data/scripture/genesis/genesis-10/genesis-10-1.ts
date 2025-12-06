import { Verse } from '@/types';

export const genesis_10_1: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 10,
    verse: 1,
  },
  words: [
    {
      hebrew: 'וְאֵלֶּה',
      transliteration: 'veEleh',
      englishLiteral: 'And-these',
      englishNatural: 'And these',
      root: 'eleh',
      prefixes: ['ve'],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        type: 'pronoun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'תּוֹלְדֹת',
      transliteration: 'toledot',
      englishLiteral: 'birthings-of',
      englishNatural: 'are the birthings of',
      root: 'toledot',
      suffixes: ['ot'],
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        gender: 'feminine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'בְּנֵי־',
      transliteration: 'beney-',
      englishLiteral: 'sons-of-',
      englishNatural: 'the sons of',
      root: 'ben',
      suffixes: ['ei'],
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'נֹחַ',
      transliteration: 'Noach',
      englishLiteral: 'Rest (Noah)',
      englishNatural: 'Rest (Noah)',
      root: 'noach',
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ':',
        englishNatural: ':',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'שֵׁם',
      transliteration: 'Shem',
      englishLiteral: 'Name (Shem)',
      englishNatural: 'Name (Shem)',
      root: 'shem',
      order: {
        hebrew: 5,
        english: 5,
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
      hebrew: 'חָם',
      transliteration: 'Cham',
      englishLiteral: 'Hot (Ham)',
      englishNatural: 'Hot (Ham)',
      root: 'cham',
      order: {
        hebrew: 6,
        english: 6,
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
      hebrew: 'וָיָפֶת',
      transliteration: 'vaYafet',
      englishLiteral: 'and-Spacious (Japheth)',
      englishNatural: 'and Spacious (Japheth)',
      root: 'yafet',
      prefixes: ['va'],
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וַיִּוָּלְדוּ',
      transliteration: 'vayivaledu',
      englishLiteral: 'and-were-birthed',
      englishNatural: 'were birthed',
      root: 'yalad',
      prefixes: ['va'],
      suffixes: ['u'],
      order: {
        hebrew: 8,
        english: 9,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'imperfect',
        stem: 'niphal',
        type: 'verb',
      },
    },
    {
      hebrew: 'לָהֶם',
      transliteration: 'lahem',
      englishLiteral: 'to-them',
      englishNatural: 'and to them',
      root: 'lamed',
      suffixes: ['hem'],
      order: {
        hebrew: 9,
        english: 8,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        type: 'preposition',
      },
    },
    {
      hebrew: 'בָּנִים',
      transliteration: 'banim',
      englishLiteral: 'sons',
      englishNatural: 'sons',
      root: 'ben',
      suffixes: ['im'],
      order: {
        hebrew: 10,
        english: 10,
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
      hebrew: 'אַחַר',
      transliteration: 'achar',
      englishLiteral: 'after',
      englishNatural: 'after',
      root: 'achar',
      order: {
        hebrew: 11,
        english: 11,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הַמַּבּוּל',
      transliteration: 'haMabbul',
      englishLiteral: 'the-flood',
      englishNatural: 'the flood',
      root: 'mabbul',
      prefixes: ['ha'],
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
      'וְאֵלֶּה תּוֹלְדֹת בְּנֵי־נֹחַ שֵׁם חָם וָיָפֶת וַיִּוָּלְדוּ לָהֶם בָּנִים אַחַר הַמַּבּוּל',
    transliteration:
      'veEleh toledot beney-Noach Shem Cham vaYafet vayivaledu lahem banim achar haMabbul',
    englishLiteral:
      'And-these birthings-of sons-of- Rest (Noah): Name (Shem), Hot (Ham), and-Spacious (Japheth); and-were-birthed to-them sons, after the-flood.',
    englishNatural:
      'And these are the birthings of the sons of Rest (Noah): Name (Shem), Hot (Ham), and Spacious (Japheth); and to them were birthed sons, after the flood.',
    kjv: 'Now these are the generations of the sons of Noah, Shem, Ham, and Japheth: and unto them were sons born after the flood.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
},
};
