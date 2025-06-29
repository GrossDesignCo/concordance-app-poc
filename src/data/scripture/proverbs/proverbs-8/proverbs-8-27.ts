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
      order: {
        hebrew: 1,
        english: 1,
      },
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
      englishLiteral: 'heavens',
      englishNatural: 'heavens',
      root: 'shamayim',
      order: {
        hebrew: 2,
        english: 2,
      },
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
      order: {
        hebrew: 3,
        english: 3,
      },
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
      order: {
        hebrew: 4,
        english: 4,
      },
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
      order: {
        hebrew: 5,
        english: 5,
      },
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
      englishNatural: 'circle',
      root: 'chug',
      order: {
        hebrew: 6,
        english: 6,
      },
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
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'פְּנֵי',
      transliteration: 'penei',
      englishLiteral: 'face-of',
      englishNatural: 'the face of',
      root: 'peh',
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'תְהוֹם',
      transliteration: 'tehom',
      englishLiteral: 'deep',
      englishNatural: 'the deep',
      root: 'tehom',
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
    },
  ],
  expectedTranslations: {
    hebrew: 'בַּהֲכִינוֹ שָׁמַיִם שָׁם אָנִי בְּחוּקוֹ חוּג עַל־פְּנֵי תְהוֹם',
    transliteration: 'baHakhino shamayim sham ani beChuqo chug al penei tehom',
    englishLiteral:
      'In-establishing-his heavens, there I; in-inscribing-his circle over face-of deep.',
    englishNatural:
      'In his establishing heavens, there I; in his inscribing circle over the face of the deep.',
    kjv: 'When he prepared the heavens, I was there: when he set a compass upon the face of the depth',
    lastReviewed: { name: 'Matt Gross', date: '2025-06-29' },
  },
};
