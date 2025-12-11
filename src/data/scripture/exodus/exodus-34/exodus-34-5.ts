import { Verse } from '@/types';

export const exodus_34_5: Verse = {
  meta: {
    book: 'Exodus',
    chapter: 34,
    verse: 5,
  },
  words: [
    {
      hebrew: 'וַיֵּרֶד',
      transliteration: 'vaYered',
      englishLiteral: 'And-went_down',
      englishNatural: 'went-down',
      root: 'yarad',
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
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'And He-Who-Is (YHWH)',
      root: 'yhwh',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'בֶּעָנָן',
      transliteration: 'beAnan',
      englishLiteral: 'in-cloud',
      englishNatural: 'in the cloud',
      root: 'anan',
      prefixes: ['be'],
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
    },
    {
      hebrew: 'וַיִּתְיַצֵּב',
      transliteration: 'vaYityatzev',
      englishLiteral: 'and-positioned-himself',
      englishNatural: 'and positioned himself',
      root: 'yatzav',
      prefixes: ['va'],
      order: 4,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'hithpael',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'עִמּוֹ',
      transliteration: 'imo',
      englishLiteral: 'with-him',
      englishNatural: 'with him',
      root: 'im_with',
      suffixes: ['hu'],
      order: 5,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'שָׁם',
      transliteration: 'sham',
      englishLiteral: 'there',
      englishNatural: 'there',
      root: 'sham',
      order: 6,
      morphology: {
        type: 'adverb',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וַיִּקְרָא',
      transliteration: 'vaYiqra',
      englishLiteral: 'and-called_out',
      englishNatural: 'and called-out',
      root: 'qara',
      prefixes: ['va'],
      order: 7,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'בְשֵׁם',
      transliteration: 'beShem',
      englishLiteral: 'in-name',
      englishNatural: 'in the name of',
      root: 'shem',
      prefixes: ['be'],
      order: 8,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'He-Who-Is (YHWH)',
      root: 'yhwh',
      order: 9,
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
    hebrew:
      'וַיֵּרֶד יְהוָה בֶּעָנָן וַיִּתְיַצֵּב עִמּוֹ שָׁם וַיִּקְרָא בְשֵׁם יְהוָה',
    transliteration:
      'vaYered YHWH beAnan vaYityatzev imo sham vaYiqra beShem YHWH',
    englishLiteral:
      'And-went_down He_Who_Is (YHWH) in-cloud, and-positioned-himself with-him there, and-called_out in-name He_Who_Is (YHWH).',
    englishNatural:
      'And He-Who-Is (YHWH) went-down in the cloud, and positioned himself with him there, and called-out in the name of He-Who-Is (YHWH).',
    kjv: 'And the LORD descended in the cloud, and stood with him there, and proclaimed the name of the LORD.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-11' },
  },
};
