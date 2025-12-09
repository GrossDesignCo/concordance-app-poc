import { Verse } from '@/types';

export const genesis_14_18: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 14,
    verse: 18,
  },
  words: [
    {
      hebrew: 'וּמַלְכִּי־',
      transliteration: 'uMalki-',
      englishLiteral: 'And-King_of_My-',
      englishNatural: 'And King-of-My',
      root: 'melekh',
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
      hebrew: 'צֶדֶק',
      transliteration: 'Tzedeq',
      englishLiteral: 'Righteousness (Melchizedek)',
      englishNatural: 'Righteousness (Melchizedek)',
      root: 'tzedeq',
      order: 2,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'מֶלֶךְ',
      transliteration: 'melekh',
      englishLiteral: 'king-of',
      englishNatural: 'king of',
      root: 'melekh',
      order: 3,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'שָׁלֵם',
      transliteration: 'Shalem',
      englishLiteral: 'Peace (Salem)',
      englishNatural: 'Peace (Salem)',
      root: 'shalem_place',
      order: 4,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'הוֹצִיא',
      transliteration: 'hotzi',
      englishLiteral: 'he-brought-out',
      englishNatural: 'brought out',
      root: 'yatsa',
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'hiphil',
        type: 'verb',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'לֶחֶם',
      transliteration: 'lechem',
      englishLiteral: 'bread',
      englishNatural: 'bread',
      root: 'lechem',
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'וָיָיִן',
      transliteration: 'vaYayin',
      englishLiteral: 'and-wine',
      englishNatural: 'and wine',
      root: 'yayin',
      prefixes: ['ve'],
      order: 7,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'וְהוּא',
      transliteration: 'veHu',
      englishLiteral: 'and-he',
      englishNatural: 'and he',
      root: 'hu',
      prefixes: ['ve'],
      order: 8,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        type: 'pronoun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'כֹהֵן',
      transliteration: 'kohen',
      englishLiteral: 'priest',
      englishNatural: 'was priest',
      root: 'kohen',
      order: 9,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'לְאֵל',
      transliteration: 'leEl',
      englishLiteral: 'to-God',
      englishNatural: 'to G.',
      root: 'eloah',
      prefixes: ['le'],
      order: 10,
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'עֶלְיוֹן',
      transliteration: 'Elyon',
      englishLiteral: 'Most_High',
      englishNatural: 'Most-High',
      root: 'elyon',
      order: 11,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'adjective',
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
      'וּמַלְכִּי־צֶדֶק מֶלֶךְ שָׁלֵם הוֹצִיא לֶחֶם וָיָיִן וְהוּא כֹהֵן לְאֵל עֶלְיוֹן',
    transliteration:
      'uMalki-Tzedeq melekh Shalem hotzi lechem vaYayin veHu kohen leEl Elyon',
    englishLiteral:
      'And-King_of_My- Righteousness (Melchizedek) king-of Peace (Salem) he-brought-out bread and-wine, and-he priest to-God Most_High.',
    englishNatural:
      'And King-of-My Righteousness (Melchizedek), king of Peace (Salem), brought out bread and wine; and he was priest to G. Most-High.',
    kjv: 'And Melchizedek king of Salem brought forth bread and wine: and he was the priest of the most high God.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-09' },
},
};
