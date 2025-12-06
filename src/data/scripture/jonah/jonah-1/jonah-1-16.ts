import { Verse } from '@/types';

export const jonah_1_16: Verse = {
  meta: {
    book: 'Jonah',
    chapter: 1,
    verse: 16,
  },
  words: [
    {
      hebrew: 'וַיִּירְאוּ',
      transliteration: 'vaYireu',
      englishLiteral: 'And-feared',
      englishNatural: 'feared',
      root: 'yare',
      prefixes: ['va'],
      suffixes: ['u'],
      order: {
        hebrew: 1,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
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
      hebrew: 'הָאֲנָשִׁים',
      transliteration: 'haAnashim',
      englishLiteral: 'the-men',
      englishNatural: 'And the men',
      root: 'ish',
      prefixes: ['ha'],
      suffixes: ['im'],
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'יִרְאָה',
      transliteration: 'yirah',
      englishLiteral: 'fear',
      englishNatural: 'fear of',
      root: 'yirah',
      order: {
        hebrew: 3,
        english: 4,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'גְדוֹלָה',
      transliteration: 'gedolah',
      englishLiteral: 'great',
      englishNatural: 'a great',
      root: 'gadol',
      suffixes: ['ah'],
      order: {
        hebrew: 4,
        english: 3,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'adjective',
      },
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: 5,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'He-Who-Is (YHWH)',
      root: 'yhwh',
      order: 6,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'וַיִּזְבְּחוּ־',
      transliteration: 'vaYizbechu-',
      englishLiteral: 'and-sacrificed-',
      englishNatural: 'and sacrificed',
      root: 'zavach',
      prefixes: ['va'],
      suffixes: ['u'],
      order: 7,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'זֶבַח',
      transliteration: 'zevach',
      englishLiteral: 'sacrifice',
      englishNatural: 'a sacrifice',
      root: 'zavach',
      order: 8,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'לַיהוָה',
      transliteration: 'laYHWH',
      englishLiteral: 'to-He_Who_Is (YHWH)',
      englishNatural: 'to He-Who-Is (YHWH)',
      root: 'yhwh',
      prefixes: ['la'],
      order: 9,
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'וַיִּדְּרוּ',
      transliteration: 'vaYideru',
      englishLiteral: 'and-vowed',
      englishNatural: 'and vowed',
      root: 'darar',
      prefixes: ['va'],
      suffixes: ['u'],
      order: 10,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'נְדָרִים',
      transliteration: 'nedarim',
      englishLiteral: 'vows',
      englishNatural: 'vows',
      root: 'neder',
      suffixes: ['im'],
      order: 11,
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
    hebrew:
      'וַיִּירְאוּ הָאֲנָשִׁים יִרְאָה גְדוֹלָה אֶת־יְהוָה וַיִּזְבְּחוּ־זֶבַח לַיהוָה וַיִּדְּרוּ נְדָרִים',
    transliteration:
      'vaYireu haAnashim yirah gedolah et-YHWH vaYizbechu-zevach laYHWH vaYideru nedarim',
    englishLiteral:
      'And-feared the-men fear great ↳ He_Who_Is (YHWH); and-sacrificed- sacrifice to-He_Who_Is (YHWH) and-vowed vows.',
    englishNatural:
      'And the men feared a great fear of He-Who-Is (YHWH); and sacrificed a sacrifice to He-Who-Is (YHWH) and vowed vows.',
    kjv: 'Then the men feared the LORD exceedingly, and offered a sacrifice unto the LORD, and made vows.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
  },
};
