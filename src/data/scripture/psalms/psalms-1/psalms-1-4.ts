import { Verse } from '@/types';

export const psalms_1_4: Verse = {
  meta: {
    book: 'Psalms',
    chapter: 1,
    verse: 4,
  },
  words: [
    {
      hebrew: 'לֹא',
      transliteration: 'lo',
      englishLiteral: 'Not',
      englishNatural: 'Not',
      root: 'lo',
      order: 1,
      morphology: {
        type: 'adverb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'כֵן',
      transliteration: 'khen',
      englishLiteral: 'so',
      englishNatural: 'so',
      root: 'ken',
      order: 2,
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'הָרְשָׁעִים',
      transliteration: 'haRshaim',
      englishLiteral: 'the-wicked',
      englishNatural: 'the wicked',
      root: 'rasha',
      prefixes: ['ha'],
      suffixes: ['im'],
      order: 3,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'adjective',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'כִּי',
      transliteration: 'ki',
      englishLiteral: 'that',
      englishNatural: 'that',
      root: 'ki',
      order: 4,
      morphology: {
        type: 'conjunction',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'אִם',
      transliteration: 'im',
      englishLiteral: 'if',
      englishNatural: 'if',
      root: 'im',
      order: 5,
      morphology: {
        type: 'conjunction',
      },
    },
    {
      hebrew: 'כַּמֹּץ',
      transliteration: 'kaMotz',
      englishLiteral: 'as-chaff',
      englishNatural: 'as chaff',
      root: 'motz',
      prefixes: ['ka'],
      order: 6,
      morphology: {
        gender: 'masculine',
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
      order: 7,
      morphology: {
        type: 'relative',
      },
    },
    {
      hebrew: 'תִּדְּפֶנּוּ',
      transliteration: 'tidpenu',
      englishLiteral: 'it-drives_away-it',
      englishNatural: 'drives-away',
      root: 'nadaf',
      prefixes: ['ti'],
      suffixes: ['nu'],
      order: {
        hebrew: 8,
        english: 9,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
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
      hebrew: 'רוּחַ',
      transliteration: 'ruach',
      englishLiteral: 'wind',
      englishNatural: 'the wind',
      root: 'ruach',
      order: {
        hebrew: 9,
        english: 8,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
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
    hebrew: 'לֹא כֵן הָרְשָׁעִים כִּי אִם כַּמֹּץ אֲשֶׁר תִּדְּפֶנּוּ רוּחַ',
    transliteration: 'lo khen haRshaim ki im kaMotz asher tidpenu ruach',
    englishLiteral:
      'Not so the-wicked, that if as-chaff which it-drives_away-it wind.',
    englishNatural:
      'Not so the wicked, that if as chaff which the wind drives-away.',
    kjv: 'The ungodly are not so: but are like the chaff which the wind driveth away.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
},
}; 