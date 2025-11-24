import { Verse } from '@/types';

export const genesis_6_22: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 6,
    verse: 22,
  },
  words: [
    {
      hebrew: 'וַיַּעַשׂ',
      transliteration: 'vayYaas',
      englishLiteral: 'And-he-made',
      englishNatural: 'made',
      root: 'asah',
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
      grammarSuffix: {
        englishNatural: ';',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'נֹחַ',
      transliteration: 'Noach',
      englishLiteral: 'Rest (Noah)',
      englishNatural: 'And Rest (Noah)',
      root: 'noach',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
      },
      lineBreaksBefore: {
        english: 1,
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'כְּכֹל',
      transliteration: 'keKhol',
      englishLiteral: 'like-all',
      englishNatural: 'like all',
      root: 'kol',
      prefixes: ['ke'],
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
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
        hebrew: 4,
        english: 4,
      },
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'צִוָּה',
      transliteration: 'tzivvah',
      englishLiteral: 'he-commanded',
      englishNatural: 'commanded',
      root: 'tzavah',
      order: {
        hebrew: 5,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'piel',
        type: 'verb',
      },
    },
    {
      hebrew: 'אֹתוֹ',
      transliteration: 'oto',
      englishLiteral: 'him',
      englishNatural: 'him',
      root: 'et',
      suffixes: ['o'],
      order: {
        hebrew: 6,
        english: 7,
      },
      morphology: {
        type: 'particle',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
      lineBreaksAfter: {
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
        hebrew: 7,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'כֵּן',
      transliteration: 'ken',
      englishLiteral: 'so',
      englishNatural: 'so',
      root: 'ken',
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'עָשָׂה',
      transliteration: 'asah',
      englishLiteral: 'he-made',
      englishNatural: 'he made',
      root: 'asah',
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'וַיַּעַשׂ נֹחַ כְּכֹל אֲשֶׁר צִוָּה אֹתוֹ אֱלֹהִים כֵּן עָשָׂה',
    transliteration: 'vayYaas Noach keKhol asher tzivvah oto Elohim ken asah',
    englishLiteral:
      'And-he-made Rest (Noah); like-all which he-commanded him Gods, so he-made.',
    englishNatural:
      'And Rest (Noah) made; like all which God commanded him, so he made.',
    kjv: 'Thus did Noah; according to all that God commanded him, so did he.',
    lastReviewed: { name: 'Matt Gross', date: '2025-11-24' },
  },
};
