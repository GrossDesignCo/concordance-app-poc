import { Verse } from '@/types';

export const daniel_1_1: Verse = {
  meta: {
    book: 'Daniel',
    chapter: 1,
    verse: 1,
  },
  words: [
    {
      hebrew: 'בִּשְׁנַת',
      transliteration: 'biShnat',
      englishLiteral: 'in-year-of',
      englishNatural: 'In the year of',
      root: 'shanah',
      prefixes: ['bi'],
      suffixes: ['construct_t'],
      order: 1,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'שָׁלוֹשׁ',
      transliteration: 'shalosh',
      englishLiteral: 'three',
      englishNatural: 'three',
      root: 'shalosh',
      order: 2,
      morphology: {
        type: 'numeral',
      },
    },
    {
      hebrew: 'לְמַלְכוּת',
      transliteration: 'leMalkhut',
      englishLiteral: 'to-kingdom',
      englishNatural: 'to the kingdom of',
      root: 'malkhut',
      prefixes: ['le'],
      order: 3,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'יְהוֹיָקִים',
      transliteration: 'Yehoyakim',
      englishLiteral: 'He_Will_Establish (Jehoiakim)',
      englishNatural: 'He-Will-Establish (Jehoiakim)',
      root: 'yehoyakim',
      order: 4,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'מֶלֶךְ',
      transliteration: 'melekh',
      englishLiteral: 'king',
      englishNatural: 'king',
      root: 'melekh',
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'יְהוּדָה',
      transliteration: 'Yehudah',
      englishLiteral: 'Praise (Judah)',
      englishNatural: 'of Praise (Judah)',
      root: 'yehudah',
      order: 6,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'בָּא',
      transliteration: 'ba',
      englishLiteral: 'came',
      englishNatural: 'came',
      root: 'bo',
      order: 7,
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
      hebrew: 'נְבוּכַדְנֶאצַּר',
      transliteration: 'Nevukhadnetzar',
      englishLiteral: 'Nebuchadnezzar',
      englishNatural: 'Nebuchadnezzar',
      root: 'nevukhadnetzar',
      order: 8,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'מֶלֶךְ',
      transliteration: 'melekh',
      englishLiteral: 'king',
      englishNatural: 'king',
      root: 'melekh',
      order: 9,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'בָּבֶל',
      transliteration: 'Bavel',
      englishLiteral: 'Confusion (Babylon)',
      englishNatural: 'of Confusion (Babylon)',
      root: 'babel',
      order: 10,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'יְרוּשָׁלַם',
      transliteration: 'Yerushalayim',
      englishLiteral: 'Foundation_of_Peace (Jerusalem)',
      englishNatural: 'to Foundation-of-Peace (Jerusalem)',
      root: 'yerushalayim',
      order: 11,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וַיָּצַר',
      transliteration: 'vayyatsar',
      englishLiteral: 'and-he-besieged',
      englishNatural: 'and he besieged',
      root: 'tsur',
      prefixes: ['va'],
      order: 12,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'עָלֶיהָ',
      transliteration: 'aleha',
      englishLiteral: 'over-her',
      englishNatural: 'over it',
      root: 'al',
      suffixes: ['eha'],
      order: 13,
      morphology: {
        type: 'preposition',
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
      'בִּשְׁנַת שָׁלוֹשׁ לְמַלְכוּת יְהוֹיָקִים מֶלֶךְ יְהוּדָה בָּא נְבוּכַדְנֶאצַּר מֶלֶךְ בָּבֶל יְרוּשָׁלַם וַיָּצַר עָלֶיהָ',
    transliteration:
      'biShnat shalosh leMalkhut Yehoyakim melekh Yehudah ba Nevukhadnetzar melekh Bavel Yerushalayim vayyatsar aleha',
    englishLiteral:
      'in-year-of three to-kingdom He_Will_Establish (Jehoiakim) king Praise (Judah), came Nebuchadnezzar king Confusion (Babylon), Foundation_of_Peace (Jerusalem) and-he-besieged over-her.',
    englishNatural:
      'In the year of three to the kingdom of He-Will-Establish (Jehoiakim), king of Praise (Judah), came Nebuchadnezzar, king of Confusion (Babylon), to Foundation-of-Peace (Jerusalem), and he besieged over it.',
    kjv: 'In the third year of the reign of Jehoiakim king of Judah came Nebuchadnezzar king of Babylon unto Jerusalem, and besieged it.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-15' },
},
};
