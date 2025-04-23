import { Verse } from '@/types';
import { prefixes, roots, suffixes, specialElements } from '../../../dictionary';

export const numbers_21_9: Verse = {
  meta: {
    chapter: 21,
    verse: 9,
  },
  words: [
    {
      hebrew: 'וַיַּעַשׂ',
      transliteration: 'vaYaas',
      englishLiteral: 'And-made',
      englishNatural: 'made',
      root: roots.asah,
      prefixes: [prefixes.va],
      rootAppearance: {
        hebrew: 'יַּעַשׂ',
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
      hebrew: 'מֹשֶׁה',
      transliteration: 'Moshe',
      englishLiteral: 'Moses',
      englishNatural: 'And Moses',
      root: roots.moshe,
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
      hebrew: 'נְחַשׁ',
      transliteration: 'nechash',
      englishLiteral: 'snake-of',
      englishNatural: 'a snake of', // Preserving "snake" translation
      root: roots.nachash,
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
      },
    },
    {
      hebrew: 'נְחֹשֶׁת',
      transliteration: 'nechoshet',
      englishLiteral: 'bronze',
      englishNatural: 'bronze',
      root: roots.nechoshet,
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        state: 'absolute',
      },
    },
    {
      hebrew: 'וַיְשִׂמֵהוּ',
      transliteration: 'vaYesimehu',
      englishLiteral: 'and-he-placed-it',
      englishNatural: 'and placed it',
      root: roots.sim,
      prefixes: [prefixes.va],
      suffixes: [suffixes.ehu],
      rootAppearance: {
        hebrew: 'יְשִׂמֵהוּ',
        conjugation: 'imperfect 3rd person masculine singular with vav-consecutive + suffix 3rd masc sing',
      },
      order: {
        hebrew: 5,
        english: 5,
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
      hebrew: 'עַל',
      transliteration: 'al',
      englishLiteral: 'on',
      englishNatural: 'on',
      root: roots.al,
      order: {
        hebrew: 6,
        english: 6,
      },
    },
    {
      hebrew: 'הַנֵּס',
      transliteration: 'haNes',
      englishLiteral: 'the-standard',
      englishNatural: 'the standard',
      root: roots.nes,
      prefixes: [prefixes.ha],
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'וְהָיָה',
      transliteration: 'veHayah',
      englishLiteral: 'and-it-was',
      englishNatural: 'and it came about',
      root: roots.hayah,
      prefixes: [prefixes.ve],
      rootAppearance: {
        hebrew: 'הָיָה',
        conjugation: 'perfect 3rd person masculine singular with vav-consecutive',
      },
      order: {
        hebrew: 8,
        english: 8,
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
      hebrew: 'אִם',
      transliteration: 'im',
      englishLiteral: 'if',
      englishNatural: 'if',
      root: roots.im,
      order: {
        hebrew: 9,
        english: 9,
      },
    },
    {
      hebrew: 'נָשַׁךְ',
      transliteration: 'nashakh',
      englishLiteral: 'struck',
      englishNatural: 'struck',
      root: roots.nashakh,
      rootAppearance: {
        hebrew: 'נָשַׁךְ',
        conjugation: 'perfect 3rd person masculine singular',
      },
      order: {
        hebrew: 10,
        english: 11, // Position changes in English
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
      hebrew: 'הַנָּחָשׁ',
      transliteration: 'haNachash',
      englishLiteral: 'the-snake',
      englishNatural: 'the snake',
      root: roots.nachash,
      prefixes: [prefixes.ha],
      order: {
        hebrew: 11,
        english: 10, // Position changes in English
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
      },
    },
    {
      hebrew: 'אֶת',
      transliteration: 'et',
      englishLiteral: '↳',
      englishNatural: '',
      root: specialElements.directObjectMarker,
      order: {
        hebrew: 12,
        english: 0, // Not translated
      },
    },
    {
      hebrew: 'אִישׁ',
      transliteration: 'ish',
      englishLiteral: 'man',
      englishNatural: 'a man',
      root: roots.ish,
      order: {
        hebrew: 13,
        english: 12,
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
      hebrew: 'וְהִבִּיט',
      transliteration: 'veHibit',
      englishLiteral: 'and-he-looked',
      englishNatural: 'and he looked',
      root: roots.nabat,
      prefixes: [prefixes.ve, prefixes.hi],
      rootAppearance: {
        hebrew: 'הִבִּיט',
        conjugation: 'perfect 3rd person masculine singular with vav-consecutive',
      },
      order: {
        hebrew: 14,
        english: 13,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'hiphil',
      },
    },
    {
      hebrew: 'אֶל',
      transliteration: 'el',
      englishLiteral: 'to',
      englishNatural: 'to',
      root: roots.el,
      order: {
        hebrew: 15,
        english: 14,
      },
    },
    {
      hebrew: 'נְחַשׁ',
      transliteration: 'nechash',
      englishLiteral: 'snake',
      englishNatural: 'snake',
      root: roots.nachash,
      order: {
        hebrew: 16,
        english: 16,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'הַנְּחֹשֶׁת',
      transliteration: 'haNechoshet',
      englishLiteral: 'the-bronze',
      englishNatural: 'the bronze', // Combined with previous word in English
      root: roots.nechoshet,
      prefixes: [prefixes.ha],
      order: {
        hebrew: 17,
        english: 15, // Combined with previous word
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'וָחָי',
      transliteration: 'vaChai',
      englishLiteral: 'and-lived',
      englishNatural: 'he lived',
      root: roots.chayah,
      prefixes: [prefixes.va],
      rootAppearance: {
        hebrew: 'חָי',
        conjugation: 'perfect 3rd person masculine singular with vav-consecutive',
      },
      order: {
        hebrew: 18,
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
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 2,
    },
  ],
  translations: {
    hebrew: 'וַיַּעַשׂ מֹשֶׁה נְחַשׁ נְחֹשֶׁת וַיְשִׂמֵהוּ עַל הַנֵּס וְהָיָה אִם נָשַׁךְ הַנָּחָשׁ אֶת אִישׁ וְהִבִּיט אֶל נְחַשׁ הַנְּחֹשֶׁת וָחָי',
    transliteration: 'vaYaas Moshe nechash nechoshet vaYesimehu al haNes veHayah im nashakh haNachash et ish veHibit el nechash haNechoshet vaChai',
    englishLiteral: 'And-made Moses snake-of bronze and-he-placed-it on the-standard, and-it-was, if struck the-snake ↳ man, and-he-looked to snake, the-bronze, and-lived.',
    englishNatural: 'And Moses made a snake of bronze and placed it on the standard; and it came about, if the snake struck a man, and he looked to the bronze snake, he lived.',
  },
}; 