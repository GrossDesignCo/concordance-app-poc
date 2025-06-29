import { Verse } from '@/types';

export const proverbs_1_3: Verse = {
  meta: {
    book: 'Proverbs',
    chapter: 1,
    verse: 3,
  },
  words: [
    {
      hebrew: 'לָקַחַת',
      transliteration: 'laqachat',
      englishLiteral: 'To-receive',
      englishNatural: 'To receive',
      root: 'laqach',
      prefixes: ['la'],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        tense: 'infinitive_construct',
        type: 'verb',
      },
    },
    {
      hebrew: 'מוּסַר',
      transliteration: 'musar',
      englishLiteral: 'discipline',
      englishNatural: 'discipline',
      root: 'musar',
      order: {
        hebrew: 2,
        english: 2,
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
      hebrew: 'הַשְׂכֵּל',
      transliteration: 'haskel',
      englishLiteral: 'wise_conduct',
      englishNatural: 'wise-conduct',
      root: 'haskel',
      prefixes: ['ha'],
      order: {
        hebrew: 3,
        english: 3,
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
    },
    {
      hebrew: 'צֶדֶק',
      transliteration: 'tzedeq',
      englishLiteral: 'righteousness',  
      englishNatural: 'righteousness',
      root: 'tzedeq',
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
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'וּמִשְׁפָּט',
      transliteration: 'umishpat',
      englishLiteral: 'and-judgement',
      englishNatural: 'and judgement',
      root: 'mishpat',
      prefixes: ['u'],
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
      hebrew: 'וּמֵישָׁרִים',
      transliteration: 'umesharim',
      englishLiteral: 'and-uprightness',
      englishNatural: 'and uprightness',
      root: 'mesharim',
      prefixes: ['u'],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
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
    hebrew: 'לָקַחַת מוּסַר הַשְׂכֵּל צֶדֶק וּמִשְׁפָּט וּמֵישָׁרִים',
    transliteration: 'laqachat musar haskel tzedeq umishpat umesharim',
    englishLiteral: 'To-receive discipline, wise_conduct; righteousness, and-judgement, and-uprightness.',
    englishNatural: 'To receive discipline, wise-conduct; righteousness, and judgement, and uprightness.',
    kjv: 'To receive the instruction of wisdom, in justice, and judgment, and equity',
    lastReviewed: { name: 'Matt Gross', date: '2025-06-29' },
  },
}; 