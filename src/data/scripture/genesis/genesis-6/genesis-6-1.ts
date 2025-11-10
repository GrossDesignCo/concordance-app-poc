import { Verse } from '@/types';

export const genesis_6_1: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 6,
    verse: 1,
  },
  words: [
    {
      hebrew: 'וַיְהִי',
      transliteration: 'vayHi',
      englishLiteral: 'And-it-was',
      englishNatural: 'And it was',
      root: 'hayah',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: 1,
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'כִּי־',
      transliteration: 'ki-',
      englishLiteral: 'that-',
      englishNatural: 'that',
      root: 'ki',
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        type: 'conjunction',
      },
    },
    {
      hebrew: 'הֵחֵל',
      transliteration: 'hechel',
      englishLiteral: 'began',
      englishNatural: 'began',
      root: 'chalal',
      order: {
        hebrew: 3,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'hiphil',
        type: 'verb',
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
        hebrew: 4,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'לָרֹב',
      transliteration: 'laRov',
      englishLiteral: 'to-multiply',
      englishNatural: 'to multiply',
      root: 'rabah',
      prefixes: ['la'],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        tense: 'infinitive_construct',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'עַל־',
      transliteration: 'al-',
      englishLiteral: 'over-',
      englishNatural: 'over',
      root: 'al',
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'פְּנֵי',
      transliteration: 'peney',
      englishLiteral: 'face-of',
      englishNatural: 'the face of',
      root: 'panah',
      suffixes: ['ey'],
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'הָאֲדָמָה',
      transliteration: 'haAdamah',
      englishLiteral: 'the-soil',
      englishNatural: 'the soil',
      root: 'adamah',
      prefixes: ['ha'],
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        gender: 'feminine',
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
      hebrew: 'וּבָנוֹת',
      transliteration: 'uVanot',
      englishLiteral: 'and-daughters',
      englishNatural: 'and daughters',
      root: 'bat',
      prefixes: ['u'],
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        gender: 'feminine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'יֻלְּדוּ',
      transliteration: 'yuledu',
      englishLiteral: 'were-birthed',
      englishNatural: 'were birthed',
      root: 'yalad',
      order: {
        hebrew: 10,
        english: 10,
      },
      morphology: {
        gender: 'feminine',
        number: 'plural',
        person: '3rd',
        tense: 'perfect',
        stem: 'pual',
        type: 'verb',
      },
    },
    {
      hebrew: 'לָהֶם',
      transliteration: 'lahem',
      englishLiteral: 'to-them',
      englishNatural: 'to them',
      root: 'lamed',
      suffixes: ['hem'],
      order: {
        hebrew: 11,
        english: 11,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
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
      'וַיְהִי כִּי־הֵחֵל הָאָדָם לָרֹב עַל־פְּנֵי הָאֲדָמָה וּבָנוֹת יֻלְּדוּ לָהֶם',
    transliteration:
      'vayHi ki-hechel haAdam laRov al-peney haAdamah uVanot yuledu lahem',
    englishLiteral:
      'And-it-was, that- began the-human to-multiply over- face-of the-soil; and-daughters were-birthed to-them.',
    englishNatural:
      'And it was, that the human began to multiply over the face of the soil; and daughters were birthed to them.',
    kjv: 'And it came to pass, when men began to multiply on the face of the earth, and daughters were born unto them,',
    lastReviewed: { name: 'Matt Gross', date: '2025-11-10' },
  },
};
