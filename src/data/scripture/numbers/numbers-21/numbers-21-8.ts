import { Verse } from '@/types';
import { prefixes, roots, suffixes, specialElements } from '../../../dictionary';

export const numbers_21_8: Verse = {
  meta: {
    chapter: 21,
    verse: 8,
  },
  words: [
    {
      hebrew: 'וַיֹּאמֶר',
      transliteration: 'vaYomer',
      englishLiteral: 'And-said',
      englishNatural: 'said',
      root: roots.amar,
      prefixes: [prefixes.va],
      rootAppearance: {
        hebrew: 'יֹּאמֶר',
        conjugation: 'imperfect 3rd person masculine singular with vav-consecutive',
      },
      order: {
        hebrew: 1,
        english: 2, // In English, subject comes first
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
      },
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'I_AM',
      englishNatural: 'And I-AM',
      root: roots.yhwh,
      order: {
        hebrew: 2,
        english: 1, // Subject first in English
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
      },
    },
    {
      hebrew: 'אֶל',
      transliteration: 'el',
      englishLiteral: 'to',
      englishNatural: 'to',
      root: roots.el,
      order: {
        hebrew: 3,
        english: 3,
      },
    },
    {
      hebrew: 'מֹשֶׁה',
      transliteration: 'Moshe',
      englishLiteral: 'Moses',
      englishNatural: 'Moses',
      root: roots.moshe,
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'עֲשֵׂה',
      transliteration: 'aseh',
      englishLiteral: 'Make',
      englishNatural: 'Make',
      root: roots.asah,
      rootAppearance: {
        hebrew: 'עֲשֵׂה',
        conjugation: 'imperative masculine singular',
      },
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        stem: 'qal',
      },
      grammarPrefix: {
        englishLiteral: '"',
        englishNatural: '"',
      },
    },
    {
      hebrew: 'לְךָ',
      transliteration: 'lekha',
      englishLiteral: 'for-yourself',
      englishNatural: 'for yourself',
      root: roots.atah,
      prefixes: [prefixes.le],
      suffixes: [suffixes.kha],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '2nd',
      },
    },
    {
      hebrew: 'שָׂרָף',
      transliteration: 'saraph',
      englishLiteral: 'burning_one',
      englishNatural: 'a burning-one',
      root: roots.saraph,
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'absolute',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וְשִׂים',
      transliteration: 'veSim',
      englishLiteral: 'and-place',
      englishNatural: 'and place',
      root: roots.sim,
      prefixes: [prefixes.ve],
      rootAppearance: {
        hebrew: 'שִׂים',
        conjugation: 'imperative masculine singular',
      },
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        stem: 'qal',
      },
    },
    {
      hebrew: 'אֹתוֹ',
      transliteration: 'oto',
      englishLiteral: 'it',
      englishNatural: 'it',
      root: specialElements.directObjectMarker,
      suffixes: [suffixes.o],
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
      },
    },
    {
      hebrew: 'עַל',
      transliteration: 'al',
      englishLiteral: 'on',
      englishNatural: 'on',
      root: roots.al,
      order: {
        hebrew: 10,
        english: 10,
      },
    },
    {
      hebrew: 'נֵס',
      transliteration: 'nes',
      englishLiteral: 'standard',
      englishNatural: 'a standard',
      root: roots.nes,
      order: {
        hebrew: 11,
        english: 11,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'absolute',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'וְהָיָה',
      transliteration: 'veHayah',
      englishLiteral: 'and-it-will-be',
      englishNatural: 'and it shall come about',
      root: roots.hayah,
      prefixes: [prefixes.ve],
      rootAppearance: {
        hebrew: 'הָיָה',
        conjugation: 'perfect 3rd person masculine singular with vav-consecutive',
      },
      order: {
        hebrew: 12,
        english: 12,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'כָּל',
      transliteration: 'kol',
      englishLiteral: 'all',
      englishNatural: 'that everyone',
      root: roots.kol,
      order: {
        hebrew: 13,
        english: 13,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
      },
    },
    {
      hebrew: 'הַנָּשׁוּךְ',
      transliteration: 'haNashukh',
      englishLiteral: 'the-bitten',
      englishNatural: 'who is bitten',
      root: roots.nashakh,
      prefixes: [prefixes.ha],
      rootAppearance: {
        hebrew: 'נָּשׁוּךְ',
        conjugation: 'qal passive participle masculine singular',
      },
      order: {
        hebrew: 14,
        english: 14,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        tense: 'participle',
        stem: 'qal',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וְרָאָה',
      transliteration: 'veRaah',
      englishLiteral: 'and-he-will-look',
      englishNatural: 'he will look',
      root: roots.raah_see,
      prefixes: [prefixes.ve],
      rootAppearance: {
        hebrew: 'רָאָה',
        conjugation: 'perfect 3rd person masculine singular with vav-consecutive',
      },
      order: {
        hebrew: 15,
        english: 15,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
      },
    },
    {
      hebrew: 'אֹתוֹ',
      transliteration: 'oto',
      englishLiteral: 'at-it',
      englishNatural: 'at it',
      root: specialElements.directObjectMarker,
      suffixes: [suffixes.o],
      order: {
        hebrew: 16,
        english: 16,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וָחָי',
      transliteration: 'vaChai',
      englishLiteral: 'and-will-live',
      englishNatural: 'and will live',
      root: roots.chayah,
      prefixes: [prefixes.va],
      rootAppearance: {
        hebrew: 'חָי',
        conjugation: 'perfect 3rd person masculine singular with vav-consecutive',
      },
      order: {
        hebrew: 17,
        english: 17,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
      },
      grammarSuffix: {
        englishLiteral: '."',
        englishNatural: '."',
      },
      lineBreaksAfter: 2,
    },
  ],
  translations: {
    hebrew: 'וַיֹּאמֶר יְהוָה אֶל מֹשֶׁה עֲשֵׂה לְךָ שָׂרָף וְשִׂים אֹתוֹ עַל נֵס וְהָיָה כָּל הַנָּשׁוּךְ וְרָאָה אֹתוֹ וָחָי',
    transliteration: 'vaYomer YHWH el Moshe aseh lekha saraph veSim oto al nes veHayah kol haNashukh veRaah oto vaChai',
    englishLiteral: 'And-said I_AM to Moses, "Make for-yourself burning_one, and-place it on standard, and-it-will-be, all the-bitten, and-he-will-look at-it, and-will-live."',
    englishNatural: 'And I-AM said to Moses, "Make for yourself a burning-one, and place it on a standard; and it shall come about, that everyone who is bitten, he will look at it, and will live."',
  },
}; 