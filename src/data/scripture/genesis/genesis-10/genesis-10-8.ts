import { Verse } from '@/types';

export const genesis_10_8: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 10,
    verse: 8,
  },
  words: [
    {
      hebrew: 'וְכוּשׁ',
      transliteration: 'veKhush',
      englishLiteral: 'And-Black (Kush)',
      englishNatural: 'And Black (Kush)',
      root: 'kush',
      prefixes: ['ve'],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'יָלַד',
      transliteration: 'yalad',
      englishLiteral: 'he-birthed',
      englishNatural: 'birthed',
      root: 'yalad',
      order: {
        hebrew: 2,
        english: 2,
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
        hebrew: 3,
        english: 3,
      },
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'נִמְרֹד',
      transliteration: 'Nimrod',
      englishLiteral: 'Rebel (Nimrod)',
      englishNatural: 'Rebel (Nimrod)',
      root: 'nimrod',
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
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'הוּא',
      transliteration: 'hu',
      englishLiteral: 'he',
      englishNatural: 'he',
      root: 'hu',
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        type: 'pronoun',
      },
    },
    {
      hebrew: 'הֵחֵל',
      transliteration: 'hechel',
      englishLiteral: 'caused-to-begin',
      englishNatural: 'caused to begin',
      root: 'chalal',
      order: {
        hebrew: 6,
        english: 6,
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
      hebrew: 'לִהְיוֹת',
      transliteration: 'lihyot',
      englishLiteral: 'to-be',
      englishNatural: 'to be',
      root: 'hayah',
      prefixes: ['le'],
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        tense: 'infinitive_construct',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'גִּבֹּר',
      transliteration: 'gibbor',
      englishLiteral: 'mighty_one',
      englishNatural: 'a mighty-one',
      root: 'gibbor',
      order: {
        hebrew: 8,
        english: 8,
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
        hebrew: 9,
        english: 9,
      },
      morphology: {
        gender: 'feminine',
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
    hebrew: 'וְכוּשׁ יָלַד אֶת־נִמְרֹד הוּא הֵחֵל לִהְיוֹת גִּבֹּר בָּאָרֶץ',
    transliteration:
      'veKhush yalad et-Nimrod hu hechel lihyot gibbor baAretz',
    englishLiteral:
      'And-Black (Kush) he-birthed ↳ Rebel (Nimrod); he caused-to-begin to-be mighty_one in-the-land.',
    englishNatural:
      'And Black (Kush) birthed Rebel (Nimrod); he caused to begin to be a mighty-one in the land.',
    kjv: 'And Cush begat Nimrod: he began to be a mighty one in the earth.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
},
};

