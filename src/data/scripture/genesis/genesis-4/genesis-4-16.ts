import { Verse } from '@/types';

export const genesis_4_16: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 4,
    verse: 16,
  },
  words: [
    {
      hebrew: 'וַיֵּצֵא',
      transliteration: 'vayYetze',
      englishLiteral: 'And-he-went-out',
      englishNatural: 'went out',
      root: 'yatsa',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
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
      hebrew: 'קַיִן',
      transliteration: 'Qayin',
      englishLiteral: 'Acquired (Cain)',
      englishNatural: 'And Acquired (Cain)',
      root: 'qanah',
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
      hebrew: 'מִלִּפְנֵי',
      transliteration: 'miliPhney',
      englishLiteral: 'from-face-of',
      englishNatural: 'from the presence of',
      root: 'panah',
      prefixes: ['mi', 'li'],
      order: {
        hebrew: 3,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is',
      englishNatural: 'He-Who-Is',
      root: 'yhwh',
      order: {
        hebrew: 4,
        english: 5,
      },
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וַיֵּשֶׁב',
      transliteration: 'vayYeshev',
      englishLiteral: 'and-he-dwelt',
      englishNatural: 'and dwelt',
      root: 'yashav',
      prefixes: ['va'],
      order: {
        hebrew: 5,
        english: 6,
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
      hebrew: 'בְּאֶרֶץ־',
      transliteration: 'beEretz-',
      englishLiteral: 'in-land-',
      englishNatural: 'in the land',
      root: 'eretz',
      prefixes: ['be'],
      order: {
        hebrew: 6,
        english: 7,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'נוֹד',
      transliteration: 'Nod',
      englishLiteral: 'Wandering',
      englishNatural: 'of Wandering',
      root: 'nadad',
      order: {
        hebrew: 7,
        english: 8,
      },
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'קִדְמַת־',
      transliteration: 'qidmat-',
      englishLiteral: 'east-',
      englishNatural: 'east',
      root: 'qedem',
      order: {
        hebrew: 8,
        english: 9,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'עֵדֶן',
      transliteration: 'Eden',
      englishLiteral: 'Delight',
      englishNatural: 'of Delight',
      root: 'eden',
      order: {
        hebrew: 9,
        english: 10,
      },
      morphology: {
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
      'וַיֵּצֵא קַיִן מִלִּפְנֵי יְהוָה וַיֵּשֶׁב בְּאֶרֶץ־נוֹד קִדְמַת־עֵדֶן',
    transliteration:
      'vayYetze Qayin miliPhney YHWH vayYeshev beEretz-Nod qidmat-Eden',
    englishLiteral:
      'And-he-went-out Acquired (Cain), from-face-of He_Who_Is; and-he-dwelt in-land- Wandering, east- Delight.',
    englishNatural:
      'Acquired (Cain) went out, from the presence of He-Who-Is; and dwelt in the land of Wandering, east of Delight.',
    kjv: 'And Cain went out from the presence of the LORD, and dwelt in the land of Nod, on the east of Eden.',
    lastReviewed: { name: 'Matt Gross', date: '2025-08-16' },
},
};
