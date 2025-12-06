import { Verse } from '@/types';

export const genesis_7_9: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 7,
    verse: 9,
  },
  words: [
    {
      hebrew: 'שְׁנַיִם',
      transliteration: 'shnayim',
      englishLiteral: 'two',
      englishNatural: 'two',
      root: 'shnayim',
      order: 1,
      morphology: {
        gender: 'masculine',
        number: 'dual',
        type: 'numeral',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'שְׁנַיִם',
      transliteration: 'shnayim',
      englishLiteral: 'two',
      englishNatural: 'two',
      root: 'shnayim',
      order: 2,
      morphology: {
        gender: 'masculine',
        number: 'dual',
        type: 'numeral',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'בָּאוּ',
      transliteration: 'bau',
      englishLiteral: 'they-came',
      englishNatural: 'they came',
      root: 'bo',
      order: 3,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'אֶל־',
      transliteration: 'el-',
      englishLiteral: 'to-',
      englishNatural: 'to',
      root: 'el',
      order: 4,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'נֹחַ',
      transliteration: 'Noach',
      englishLiteral: 'Rest (Noah)',
      englishNatural: 'Rest (Noah)',
      root: 'noach',
      order: 5,
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'אֶל־',
      transliteration: 'el-',
      englishLiteral: 'to-',
      englishNatural: 'to',
      root: 'el',
      order: 6,
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
      order: 7,
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
      hebrew: 'זָכָר',
      transliteration: 'zakhar',
      englishLiteral: 'male',
      englishNatural: 'male',
      root: 'zakhar',
      order: 8,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'וּנְקֵבָה',
      transliteration: 'uNeqevah',
      englishLiteral: 'and-female',
      englishNatural: 'and female',
      root: 'neqevah',
      prefixes: ['u'],
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
      hebrew: 'כַּאֲשֶׁר',
      transliteration: 'kaAsher',
      englishLiteral: 'as-which',
      englishNatural: 'as which',
      root: 'asher',
      prefixes: ['ka'],
      order: 10,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'צִוָּה',
      transliteration: 'tzivvah',
      englishLiteral: 'he-commanded',
      englishNatural: 'commanded',
      root: 'tzavah',
      order: {
        hebrew: 11,
        english: 12,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'piel',
        type: 'verb',
      },
    },
    {
      hebrew: 'אֱלֹהִים',
      transliteration: 'Elohim',
      englishLiteral: 'Gods',
      englishNatural: 'God',
      root: 'eloah',
      suffixes: ['im'],
      order: {
        hebrew: 12,
        english: 11,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: 13,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'נֹחַ',
      transliteration: 'Noach',
      englishLiteral: 'Rest (Noah)',
      englishNatural: 'Rest (Noah)',
      root: 'noach',
      order: 14,
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
      'שְׁנַיִם שְׁנַיִם בָּאוּ אֶל־נֹחַ אֶל־הַתֵּבָה זָכָר וּנְקֵבָה כַּאֲשֶׁר צִוָּה אֱלֹהִים אֶת־נֹחַ',
    transliteration:
      'shnayim shnayim bau el-Noach el-haTevah zakhar uNeqevah kaAsher tzivvah Elohim et-Noach',
    englishLiteral:
      'two, two, they-came to- Rest (Noah) to- the-ark, male and-female, as-which he-commanded Gods ↳ Rest (Noah).',
    englishNatural:
      'two, two, they came to Rest (Noah) to the ark, male and female, as which God commanded Rest (Noah).',
    kjv: 'There went in two and two unto Noah into the ark, the male and the female, as God had commanded Noah.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
  },
};
