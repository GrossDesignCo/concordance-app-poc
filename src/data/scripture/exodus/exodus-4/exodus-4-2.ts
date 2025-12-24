import { Verse } from '@/types';

export const exodus_4_2: Verse = {
  meta: {
    book: 'Exodus',
    chapter: 4,
    verse: 2,
  },
  words: [
    {
      hebrew: 'וַיֹּאמֶר',
      transliteration: 'vaYomer',
      englishLiteral: 'And-said',
      englishNatural: 'said',
      root: 'amar',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 2,
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
      hebrew: 'אֵלָיו',
      transliteration: 'elav',
      englishLiteral: 'to-him',
      englishNatural: 'to him',
      root: 'elav',
      order: 3,
      morphology: {
        type: 'preposition',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'And He-Who-Is (YHWH)',
      root: 'yhwh',
      order: {
        hebrew: 3,
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
      hebrew: 'מַה־',
      transliteration: 'mah-',
      englishLiteral: 'what-',
      englishNatural: 'What is',
      root: 'mah',
      order: 4,
      morphology: {
        type: 'pronoun',
      },
      grammarPrefix: {
        englishLiteral: '"',
        englishNatural: '"',
      },
    },
    {
      hebrew: 'זֶּה',
      transliteration: 'zeh',
      englishLiteral: 'this',
      englishNatural: 'this',
      root: 'zeh',
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'pronoun',
      },
    },
    {
      hebrew: 'בְיָדֶךָ',
      transliteration: 'veYadekha',
      englishLiteral: 'in-hand-your',
      englishNatural: 'in your hand',
      root: 'yad',
      prefixes: ['be'],
      suffixes: ['ekha'],
      order: 6,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: '."',
        englishNatural: '?"',
      },
    },
    {
      hebrew: 'וַיֹּאמֶר',
      transliteration: 'vaYomer',
      englishLiteral: 'And-said',
      englishNatural: 'And he said',
      root: 'amar',
      prefixes: ['va'],
      order: 7,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: 1,
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'מַטֶּה',
      transliteration: 'mateh',
      englishLiteral: 'branch',
      englishNatural: 'A branch',
      root: 'mateh',
      order: 8,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarPrefix: {
        englishLiteral: '"',
        englishNatural: '"',
      },
      grammarSuffix: {
        englishLiteral: '."',
        englishNatural: '."',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'וַיֹּאמֶר אֵלָיו יְהוָה מַה־זֶּה בְיָדֶךָ וַיֹּאמֶר מַטֶּה',
    transliteration: 'vaYomer elav YHWH mah-zeh veYadekha vaYomer mateh',
    englishLiteral:
      'And-said to-him He_Who_Is (YHWH) "what- this in-hand-your." And-said "branch."',
    englishNatural:
      'And He-Who-Is (YHWH) said to him, "What is this in your hand?" And he said, "A branch."',
    kjv: 'And the LORD said unto him, What is that in thine hand? And he said, A rod.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-24' },
},
};
