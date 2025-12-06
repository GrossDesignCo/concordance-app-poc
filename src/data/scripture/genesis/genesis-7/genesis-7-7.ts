import { Verse } from '@/types';

export const genesis_7_7: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 7,
    verse: 7,
  },
  words: [
    {
      hebrew: 'וַיָּבֹא',
      transliteration: 'vayYavo',
      englishLiteral: 'And-he-came',
      englishNatural: 'came',
      root: 'bo',
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
        englishNatural: ',',
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
      lineBreaksBefore: {
        english: 1,
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'וּבָנָיו',
      transliteration: 'uVanav',
      englishLiteral: 'and-sons-his',
      englishNatural: 'and his sons',
      root: 'ben',
      prefixes: ['u'],
      suffixes: ['av'],
      order: 3,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'וְאִשְׁתּוֹ',
      transliteration: 'veIshto',
      englishLiteral: 'and-woman-his',
      englishNatural: 'and his woman',
      root: 'ishah',
      prefixes: ['ve'],
      suffixes: ['o'],
      order: 4,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'וּנְשֵׁי־',
      transliteration: 'uNeshey-',
      englishLiteral: 'and-women-of-',
      englishNatural: 'and the women of',
      root: 'ishah',
      prefixes: ['u'],
      order: 5,
      morphology: {
        gender: 'feminine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'בָנָיו',
      transliteration: 'vanav',
      englishLiteral: 'sons-his',
      englishNatural: 'his sons',
      root: 'ben',
      suffixes: ['av'],
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'אִתּוֹ',
      transliteration: 'itto',
      englishLiteral: 'with-him',
      englishNatural: 'with him',
      root: 'et_with',
      suffixes: ['o'],
      order: 7,
      morphology: {
        type: 'preposition',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'אֶל־',
      transliteration: 'el-',
      englishLiteral: 'to-',
      englishNatural: 'to',
      root: 'el',
      order: 8,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הַתֵּבָה',
      transliteration: 'haTevah',
      englishLiteral: 'the-ark',
      englishNatural: 'the ark',
      root: 'tevah',
      prefixes: ['ha'],
      order: 9,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'מִפְּנֵי',
      transliteration: 'mippeney',
      englishLiteral: 'from-face-of',
      englishNatural: 'from the face of',
      root: 'panah',
      prefixes: ['mi'],
      order: 10,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'מֵי',
      transliteration: 'mey',
      englishLiteral: 'waters-of',
      englishNatural: 'the waters of',
      root: 'mayim',
      order: 11,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'הַמַּבּוּל',
      transliteration: 'haMabbul',
      englishLiteral: 'the-flood',
      englishNatural: 'the flood',
      root: 'mabbul',
      prefixes: ['ha'],
      order: 12,
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
    hebrew:
      'וַיָּבֹא נֹחַ וּבָנָיו וְאִשְׁתּוֹ וּנְשֵׁי־בָנָיו אִתּוֹ אֶל־הַתֵּבָה מִפְּנֵי מֵי הַמַּבּוּל',
    transliteration:
      'vayYavo Noach uVanav veIshto uNeshey-vanav itto el-haTevah mippeney mey haMabbul',
    englishLiteral:
      'And-he-came Rest (Noah), and-sons-his and-woman-his and-women-of- sons-his with-him, to- the-ark, from-face-of waters-of the-flood.',
    englishNatural:
      'And Rest (Noah) came, and his sons and his woman and the women of his sons with him, to the ark, from the face of the waters of the flood.',
    kjv: "And Noah went in, and his sons, and his wife, and his sons' wives with him, into the ark, because of the waters of the flood.",
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
  },
};
