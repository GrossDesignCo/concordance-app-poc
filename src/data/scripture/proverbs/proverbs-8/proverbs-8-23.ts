import { Verse } from '@/types';

export const proverbs_8_23: Verse = {
  meta: {
    book: 'Proverbs',
    chapter: 8,
    verse: 23,
  },
  words: [
    {
      hebrew: 'מֵעוֹלָם',
      transliteration: 'meOlam',
      englishLiteral: 'From-the_age',
      englishNatural: 'From the-age',
      root: 'olam',
      prefixes: ['me'],
      order: 1,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'נִסַּכְתִּי',
      transliteration: 'nisakhti',
      englishLiteral: 'was-poured_out-I',
      englishNatural: 'I was poured-out',
      root: 'nasakh',
      suffixes: ['ti'],
      order: 2,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '1st',
        tense: 'perfect',
        stem: 'niphal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'מֵרֹאשׁ',
      transliteration: 'meRosh',
      englishLiteral: 'from-heading',
      englishNatural: 'from the heading',
      root: 'rosh',
      prefixes: ['me'],
      order: 3,
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
      hebrew: 'מִקַּדְמֵי־',
      transliteration: 'miQadmei',
      englishLiteral: 'from-east-of',
      englishNatural: 'from the-east of',
      root: 'qedem',
      prefixes: ['mi'],
      order: 4,
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'אָרֶץ',
      transliteration: 'aretz',
      englishLiteral: 'land',
      englishNatural: 'land',
      root: 'eretz',
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
    hebrew: 'מֵעוֹלָם נִסַּכְתִּי מֵרֹאשׁ מִקַּדְמֵי־אָרֶץ',
    transliteration: 'meOlam nisakhti meRosh miQadmei aretz',
    englishLiteral:
      'From-the_age was-poured_out-I, from-heading, from-east-of land.',
    englishNatural:
      'From the-age I was poured-out, from the heading, from the-east of land.',
    kjv: 'I was set up from everlasting, from the beginning, or ever the earth was',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
  },
};
