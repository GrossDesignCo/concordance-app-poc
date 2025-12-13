import { Verse } from '@/types';

export const proverbs_8_27: Verse = {
  meta: {
    book: 'Proverbs',
    chapter: 8,
    verse: 27,
  },
  words: [
    {
      hebrew: 'בַּהֲכִינוֹ',
      transliteration: 'baHakhino',
      englishLiteral: 'In-establishing-his',
      englishNatural: 'In his establishing',
      root: 'kun',
      prefixes: ['ba', 'ha'],
      suffixes: ['o'],
      order: 1,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        stem: 'hiphil',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'שָׁמַיִם',
      transliteration: 'shamayim',
      englishLiteral: 'skies',
      englishNatural: 'skies',
      root: 'shamayim',
      order: 2,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'שָׁם',
      transliteration: 'sham',
      englishLiteral: 'there',
      englishNatural: 'there',
      root: 'sham',
      order: 3,
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'אָנִי',
      transliteration: 'ani',
      englishLiteral: 'I',
      englishNatural: 'I',
      root: 'ani',
      order: 4,
      morphology: {
        person: '1st',
        number: 'singular',
        type: 'pronoun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'בְּחוּקוֹ',
      transliteration: 'beChuqo',
      englishLiteral: 'in-inscribing-his',
      englishNatural: 'in his inscribing',
      root: 'chaq',
      prefixes: ['be'],
      suffixes: ['o'],
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'חוּג',
      transliteration: 'chug',
      englishLiteral: 'circle',
      englishNatural: 'a circle',
      root: 'chug',
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'עַל־',
      transliteration: 'al',
      englishLiteral: 'over',
      englishNatural: 'over',
      root: 'al',
      order: 7,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'פְּנֵי',
      transliteration: 'penei',
      englishLiteral: 'mouth-of',
      englishNatural: 'the mouth of',
      root: 'peh',
      order: 8,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'תְהוֹם',
      transliteration: 'tehom',
      englishLiteral: 'abyss',
      englishNatural: 'the abyss',
      root: 'tehom',
      order: 9,
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
    hebrew: 'בַּהֲכִינוֹ שָׁמַיִם שָׁם אָנִי בְּחוּקוֹ חוּג עַל־פְּנֵי תְהוֹם',
    transliteration: 'baHakhino shamayim sham ani beChuqo chug al penei tehom',
    englishLiteral:
      'In-establishing-his skies, there I; in-inscribing-his circle over mouth-of abyss.',
    englishNatural:
      'In his establishing skies, there I; in his inscribing a circle over the mouth of the abyss.',
    kjv: 'When he prepared the heavens, I was there: when he set a compass upon the face of the depth',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-13' },
  },
};
