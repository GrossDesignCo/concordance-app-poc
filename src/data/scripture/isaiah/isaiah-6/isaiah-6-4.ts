import { Verse } from '@/types';

export const isaiah_6_4: Verse = {
  meta: {
    book: 'Isaiah',
    chapter: 6,
    verse: 4,
  },
  words: [
    {
      hebrew: 'וַיָּנֻ֙עוּ֙',
      transliteration: 'vaiYanu',
      englishLiteral: 'And-shook',
      englishNatural: 'shook',
      root: 'nuah',
      prefixes: ['ve'],
      order: {
        hebrew: 1,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        type: 'verb',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'אַמּ֣וֹת',
      transliteration: 'amot',
      englishLiteral: 'pillars',
      englishNatural: 'And pillars of',
      root: 'amah',
      suffixes: ['ot'],
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        gender: 'feminine',
        number: 'plural',
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'הַסִּפִּ֔ים',
      transliteration: 'haSippim',
      englishLiteral: 'the-thresholds',
      englishNatural: 'the thresholds',
      root: 'sip',
      prefixes: ['ha'],
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
      hebrew: 'מִקּ֖וֹל',
      transliteration: 'miQol',
      englishLiteral: 'from-voice',
      englishNatural: 'from the voice of',
      root: 'qol',
      prefixes: ['mi'],
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'הַקּוֹרֵ֑א',
      transliteration: 'haQore',
      englishLiteral: 'the-caller',
      englishNatural: 'the caller',
      root: 'qara',
      prefixes: ['ha'],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וְהַבַּ֖יִת',
      transliteration: 'veHaBayit',
      englishLiteral: 'and-the-house',
      englishNatural: 'and the house',
      root: 'bayit',
      prefixes: ['ve', 'ha'],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'יִמָּלֵ֥א',
      transliteration: 'yimale',
      englishLiteral: 'was-filled',
      englishNatural: 'was filled with',
      root: 'male',
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        type: 'verb',
      },
    },
    {
      hebrew: 'עָשָֽׁן',
      transliteration: 'ashan',
      englishLiteral: 'smoke',
      englishNatural: 'smoke',
      root: 'ashan',
      order: {
        hebrew: 8,
        english: 8,
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
    hebrew: 'וַיָּנֻ֙עוּ֙ אַמּ֣וֹת הַסִּפִּ֔ים מִקּ֖וֹל הַקּוֹרֵ֑א וְהַבַּ֖יִת יִמָּלֵ֥א עָשָֽׁן',
    transliteration: 'vaiYanu amot haSippim miQol haQore veHaBayit yimale ashan',
    englishLiteral: 'And-shook pillars the-thresholds from-voice the-caller, and-the-house was-filled smoke.',
    englishNatural: 'And pillars of the thresholds shook from the voice of the caller, and the house was filled with smoke.',
    kjv: 'And the posts of the door moved at the voice of him that cried, and the house was filled with smoke.',
    lastReviewed: { name: 'Matt Gross', date: '2025-06-07' },
  },
}; 