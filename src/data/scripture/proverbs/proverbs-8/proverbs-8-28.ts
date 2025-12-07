import { Verse } from '@/types';

export const proverbs_8_28: Verse = {
  meta: {
    book: 'Proverbs',
    chapter: 8,
    verse: 28,
  },
  words: [
    {
      hebrew: 'בְּאַמְּצוֹ',
      transliteration: 'beAmetso',
      englishLiteral: 'In-strengtheng-his',
      englishNatural: 'In his strengthening',
      root: 'amats',
      prefixes: ['be'],
      suffixes: ['o'],
      order: 1,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        tense: 'infinitive_construct',
        stem: 'piel',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'שְׁחָקִים',
      transliteration: 'shechaqim',
      englishLiteral: 'clouds',
      englishNatural: 'clouds',
      root: 'shachaq',
      suffixes: ['im'],
      order: 2,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'מִמָּעַל',
      transliteration: 'miMaal',
      englishLiteral: 'from-above',
      englishNatural: 'from above',
      root: 'maal',
      prefixes: ['mi'],
      order: 3,
      morphology: {
        type: 'adverb',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'בַּעֲזוֹז',
      transliteration: 'baAzoz',
      englishLiteral: 'in-being_strong',
      englishNatural: 'in being-strong',
      root: 'azaz',
      prefixes: ['ba'],
      order: 4,
      morphology: {
        tense: 'infinitive_construct',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'עֵינוֹת',
      transliteration: 'eynot',
      englishLiteral: 'fountains-of',
      englishNatural: 'the fountains of',
      root: 'ayin',
      suffixes: ['ot'],
      order: 5,
      morphology: {
        gender: 'feminine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'תְּהוֹם',
      transliteration: 'tehom',
      englishLiteral: 'abyss',
      englishNatural: 'the abyss',
      root: 'tehom',
      order: 6,
      morphology: {
        gender: 'masculine',
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
    hebrew: 'בְּאַמְּצוֹ שְׁחָקִים מִמָּעַל בַּעֲזוֹז עֵינוֹת תְּהוֹם',
    transliteration: 'beAmetso shechaqim miMaal baAzoz eynot tehom',
    englishLiteral:
      'In-strengtheng-his clouds from-above; in-being_strong fountains-of abyss.',
    englishNatural:
      'In his strengthening clouds from above; in being-strong the fountains of the abyss.',
    kjv: 'When he established the clouds above: when he strengthened the fountains of the deep:',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-07' },
},
};
