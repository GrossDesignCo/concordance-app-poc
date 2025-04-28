import { Verse } from '@/types';

export const isaiah_6_6: Verse = {
  meta: {
    chapter: 6,
    number: 6,
  },
  words: [
    {
      hebrew: 'וַיָּעָף',
      transliteration: 'vaYaof',
      englishLiteral: 'And-flew',
      englishNatural: 'And flew',
      root: 'uf',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb'
      },
    },
    {
      hebrew: 'אֵלַי',
      transliteration: 'elai',
      englishLiteral: 'to-me',
      englishNatural: 'to me',
      root: 'el',
      suffixes: ['ai'],
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        type: 'preposition'
      },
    },
    {
      hebrew: 'אֶחָד',
      transliteration: 'echad',
      englishLiteral: 'one',
      englishNatural: 'one',
      root: 'echad',
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'numeral'
      },
    },
    {
      hebrew: 'מִן',
      transliteration: 'min',
      englishLiteral: 'from',
      englishNatural: 'from',
      root: 'min',
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        type: 'preposition'
      },
    },
    {
      hebrew: 'הַשְּׂרָפִים',
      transliteration: 'haSeraphim',
      englishLiteral: 'the-burning_ones',
      englishNatural: 'the burning-ones',
      root: 'saraph',
      prefixes: ['ha'],
      suffixes: ['im'],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun'
      },
    },
    {
      hebrew: 'וּבְיָדוֹ',
      transliteration: 'uVeYado',
      englishLiteral: 'and-in-his-hand',
      englishNatural: 'and in his hand',
      root: 'yad',
      prefixes: ['u', 'be'],
      suffixes: ['o'],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        type: 'noun'
      },
    },
    {
      hebrew: 'רִצְפָּה',
      transliteration: 'ritspah',
      englishLiteral: 'live_coal',
      englishNatural: 'a live coal',
      root: 'ritspah',
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun'
      },
    },
    {
      hebrew: 'בְּמֶלְקַחַיִם',
      transliteration: 'beMelkachayim',
      englishLiteral: 'with-the-tongs',
      englishNatural: 'with the tongs',
      root: 'melkachayim',
      prefixes: ['be'],
      order: {
        hebrew: 8,
        english: 9,
      },
      morphology: {
        gender: 'feminine',
        number: 'dual',
        type: 'noun'
      },
    },
    {
      hebrew: 'לָקַח',
      transliteration: 'lakach',
      englishLiteral: 'he-took',
      englishNatural: 'he had taken',
      root: 'lakach',
      order: {
        hebrew: 9,
        english: 8,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb'
      },
    },
    {
      hebrew: 'מֵעַל',
      transliteration: 'meAl',
      englishLiteral: 'from-upon',
      englishNatural: 'from upon',
      root: 'al',
      prefixes: ['me'],
      order: {
        hebrew: 10,
        english: 10,
      },
      morphology: {
        type: 'preposition'
      },
    },
    {
      hebrew: 'הַמִּזְבֵּחַ',
      transliteration: 'haMizbeach',
      englishLiteral: 'the-altar',
      englishNatural: 'the altar',
      root: 'mizbeach',
      prefixes: ['ha'],
      order: {
        hebrew: 11,
        english: 11,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun'
      },
    },
  ],
  expectedTranslations: {
    hebrew: 'וַיָּעָף אֵלַי אֶחָד מִן הַשְּׂרָפִים וּבְיָדוֹ רִצְפָּה בְּמֶלְקַחַיִם לָקַח מֵעַל הַמִּזְבֵּחַ',
    transliteration: 'vaYaof elai echad min haSeraphim uVeYado ritspah beMelkachayim lakach meAl haMizbeach',
    englishLiteral: 'And-flew to-me one from the-burning_ones and-in-his-hand live_coal with-the-tongs he-took from-upon the-altar',
    englishNatural: 'And flew to me one from the burning-ones and in his hand a live coal he had taken with the tongs from upon the altar',
  },
}; 