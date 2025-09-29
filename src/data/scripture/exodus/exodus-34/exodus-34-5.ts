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
      englishLiteral: 'He_Who_Is',
      englishNatural: 'And He-Who-Is',
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
      order: {
        hebrew: 4,
        english: 4,
      },
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
      order: {
        hebrew: 5,
        english: 5,
      },
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
      order: {
        hebrew: 6,
        english: 6,
      },
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
      englishLiteral: 'and-called-out',
      englishNatural: 'and called out',
      root: 'qara',
      prefixes: ['va'],
      order: {
        hebrew: 7,
        english: 7,
      },
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
      transliteration: 'beshem',
      englishLiteral: 'in-name',
      englishNatural: 'the name of',
      root: 'shem',
      prefixes: ['be'],
      order: {
        hebrew: 8,
        english: 8,
      },
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
      englishLiteral: 'He_Who_Is',
      englishNatural: 'He-Who-Is',
      root: 'yhwh',
      order: {
        hebrew: 9,
        english: 9,
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
    hebrew:
      'וַיֵּרֶד יְהוָה בֶּעָנָן וַיִּתְיַצֵּב עִמּוֹ שָׁם וַיִּקְרָא בְשֵׁם יְהוָה',
    transliteration:
      'vaYered YHWH beAnan vaYityatzev imo sham vaYiqra beshem YHWH',
    englishLiteral:
      'And-went_down He_Who_Is in-cloud, and-positioned-himself with-him there, and-called-out in-name He_Who_Is.',
    englishNatural:
      'And He-Who-Is went-down in the cloud, and positioned himself with him there, and called out the name of He-Who-Is.',
    kjv: 'And the LORD descended in the cloud, and stood with him there, and proclaimed the name of the LORD.',
    lastReviewed: { name: 'Matt Gross', date: '2025-09-29' },
  },
};
