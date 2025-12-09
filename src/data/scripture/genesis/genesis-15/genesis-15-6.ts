import { Verse } from '@/types';

export const genesis_15_6: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 15,
    verse: 6,
  },
  words: [
    {
      hebrew: 'וְהֶאֱמִן',
      transliteration: 'veHemin',
      englishLiteral: 'And-he-believed',
      englishNatural: 'And he believed',
      root: 'aman',
      prefixes: ['ve'],
      order: 1,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'hiphil',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'בַּיהוָה',
      transliteration: 'baYHWH',
      englishLiteral: 'in-He_Who_Is (YHWH)',
      englishNatural: 'in He-Who-Is (YHWH)',
      root: 'yhwh',
      prefixes: ['ba'],
      order: 2,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וַיַּחְשְׁבֶהָ',
      transliteration: 'vaYachsheveha',
      englishLiteral: 'and-he-counted-her',
      englishNatural: 'and he counted it',
      root: 'chashav',
      prefixes: ['va'],
      suffixes: ['ah'],
      order: 3,
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
      hebrew: 'לּוֹ',
      transliteration: 'lo',
      englishLiteral: 'to-him',
      englishNatural: 'to him',
      root: 'lamed',
      suffixes: ['o'],
      order: 4,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'צְדָקָה',
      transliteration: 'tsedaqah',
      englishLiteral: 'righteousness',
      englishNatural: 'as righteousness',
      root: 'tsedaqah',
      order: 5,
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
    hebrew: 'וְהֶאֱמִן בַּיהוָה וַיַּחְשְׁבֶהָ לּוֹ צְדָקָה',
    transliteration: 'veHemin baYHWH vaYachsheveha lo tsedaqah',
    englishLiteral:
      'And-he-believed in-He_Who_Is (YHWH), and-he-counted-her to-him righteousness.',
    englishNatural:
      'And he believed in He-Who-Is (YHWH); and he counted it to him as righteousness.',
    kjv: 'And he believed in the LORD; and he counted it to him for righteousness.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-09' },
},
};
