import { Verse } from '@/types';

export const genesis_3_23: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 3,
    verse: 23,
  },
  words: [
    {
      hebrew: 'וַיְשַׁלְּחֵהוּ',
      transliteration: 'vayShallachehu',
      englishLiteral: 'And-he-sent-him',
      englishNatural: 'sent him out',
      root: 'shalach',
      prefixes: ['va', 'yi'],
      suffixes: ['ehu'],
      order: {
        hebrew: 1,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'piel',
        type: 'verb',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'And He-Who-Is (YHWH)',
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
    },
    {
      hebrew: 'אֱלֹהִים',
      transliteration: 'Elohim',
      englishLiteral: 'Gods',
      englishNatural: 'God',
      root: 'eloah',
      suffixes: ['im'],
      order: {
        hebrew: 3,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'מִגַּן־',
      transliteration: 'miGan-',
      englishLiteral: 'from-Garden',
      englishNatural: 'from Garden',
      root: 'gan',
      prefixes: ['mi'],
      order: 4,
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'עֵדֶן',
      transliteration: 'Eden',
      englishLiteral: 'Delight (Eden)',
      englishNatural: 'of Delight (Eden)',
      root: 'eden',
      order: 5,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'לַעֲבֹד',
      transliteration: 'laAvod',
      englishLiteral: 'to-serve',
      englishNatural: 'to serve',
      root: 'avad',
      prefixes: ['la'],
      order: 6,
      morphology: {
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: 7,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'הָאֲדָמָה',
      transliteration: 'haAdamah',
      englishLiteral: 'the-earth',
      englishNatural: 'the earth',
      root: 'adamah',
      prefixes: ['ha'],
      order: 8,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'אֲשֶׁר',
      transliteration: 'asher',
      englishLiteral: 'which',
      englishNatural: 'which',
      root: 'asher',
      order: {
        hebrew: 9,
        english: 10,
      },
      morphology: {
        type: 'relative',
      },
    },
    {
      hebrew: 'לֻקַּח',
      transliteration: 'luQach',
      englishLiteral: 'was-taken',
      englishNatural: 'he was taken',
      root: 'laqach',
      order: {
        hebrew: 10,
        english: 11,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'pual',
        type: 'verb',
      },
      grammarSuffix: {
        englishNatural: '.',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'מִשָּׁם׃',
      transliteration: 'miSham',
      englishLiteral: 'from-there',
      englishNatural: 'from there',
      root: 'sham',
      prefixes: ['mi'],
      order: {
        hebrew: 11,
        english: 9,
      },
      morphology: {
        type: 'adverb',
      },
      grammarSuffix: {
        englishLiteral: '.',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
  ],
  expectedTranslations: {
    hebrew:
      'וַיְשַׁלְּחֵהוּ יְהוָה אֱלֹהִים מִגַּן־עֵדֶן לַעֲבֹד אֶת־הָאֲדָמָה אֲשֶׁר לֻקַּח מִשָּׁם׃',
    transliteration:
      'vayShallachehu YHWH Elohim miGan-Eden laAvod et-haAdamah asher luQach miSham',
    englishLiteral:
      'And-he-sent-him He_Who_Is (YHWH) Gods from-Garden Delight (Eden); to-serve ↳ the-earth which was-taken from-there.',
    englishNatural:
      'And He-Who-Is (YHWH) God sent him out from Garden of Delight (Eden); to serve the earth from there which he was taken.',
    kjv: 'Therefore the LORD God sent him forth from the garden of Eden, to till the ground from whence he was taken.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-24' },
  },
};
