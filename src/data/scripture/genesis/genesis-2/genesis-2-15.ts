import { Verse } from '@/types';

export const genesis_2_15: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 2,
    verse: 15,
  },
  words: [
    {
      hebrew: 'וַיִּקַּח',
      transliteration: 'vaYikach',
      englishLiteral: 'And-took',
      englishNatural: 'took',
      root: 'lakach',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: {
        hebrew: 1,
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
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: {
        hebrew: 4,
        english: 4,
      },
    },
    {
      hebrew: 'הָאָדָם',
      transliteration: 'haAdam',
      englishLiteral: 'the-human',
      englishNatural: 'the human',
      root: 'adam',
      prefixes: ['ha'],
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
      hebrew: 'וַיַּנִּחֵהוּ',
      transliteration: 'vaYanNichehu',
      englishLiteral: 'and-rested-him',
      englishNatural: 'and rested him',
      root: 'nuach',
      prefixes: ['va'],
      suffixes: ['ehu'],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'hiphil',
        type: 'verb',
      },
    },
    {
      hebrew: 'בְגַן־',
      transliteration: 'beGan-',
      englishLiteral: 'in-garden-',
      englishNatural: 'in the garden of',
      root: 'gan',
      prefixes: ['be'],
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'עֵדֶן',
      transliteration: 'Eden',
      englishLiteral: 'Delight (Eden)',
      englishNatural: 'Delight (Eden)',
      root: 'eden',
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'לְעָבְדָהּ',
      transliteration: 'leAvdah',
      englishLiteral: 'to-serve-her',
      englishNatural: 'to serve her',
      root: 'avad',
      prefixes: ['le'],
      suffixes: ['ah'],
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        type: 'verb',
        stem: 'qal',
        tense: 'infinitive_construct',
      },
    },
    {
      hebrew: 'וּלְשָׁמְרָהּ׃',
      transliteration: 'uLeShamrah',
      englishLiteral: 'and-to-keep-her',
      englishNatural: 'and to keep her',
      root: 'shamar',
      prefixes: ['u', 'le'],
      suffixes: ['ah'],
      order: {
        hebrew: 10,
        english: 10,
      },
      morphology: {
        type: 'verb',
        stem: 'qal',
        tense: 'infinitive_construct',
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
      'וַיִּקַּח יְהוָה אֱלֹהִים אֶת־הָאָדָם וַיַּנִּחֵהוּ בְגַן־עֵדֶן לְעָבְדָהּ וּלְשָׁמְרָהּ׃',
    transliteration:
      'vaYikach YHWH Elohim et-haAdam vaYanNichehu beGan-Eden leAvdah uLeShamrah',
    englishLiteral:
      'And-took He_Who_Is Gods ↳ the-human, and-rested-him in-garden- Delight (Eden), to-serve-her and-to-keep-her.',
    englishNatural:
      'And He-Who-Is God took the human, and rested him in the garden of Delight (Eden), to serve her and to keep her.',
    kjv: 'And the LORD God took the man, and put him into the garden of Eden to dress it and to keep it.',
    lastReviewed: { name: 'Matt Gross', date: '2025-06-04' },
  },
};
