import { Verse } from '@/types';
import { prefixes, roots, suffixes } from '../../../dictionary/hebrew';

export const genesis_1_2: Verse = {
  meta: {
    chapter: 1,
    verse: 2,
  },
  words: [
    {
      hebrew: 'וְהָאָ֗רֶץ',
      transliteration: 'veHaAretz',
      englishLiteral: 'And-the-land',
      englishNatural: 'And the land',
      root: roots.eretz,
      prefixes: [prefixes.ve, prefixes.ha],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
      },
    },
    {
      hebrew: 'הָיְתָ֥ה',
      transliteration: 'haytah',
      englishLiteral: 'was',
      englishNatural: 'was',
      root: roots.hayah,
      rootAppearance: {
        hebrew: 'הָיְתָ֥ה',
        conjugation: 'perfect 3rd person feminine singular',
      },
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
      },
    },
    {
      hebrew: 'תֹ֙הוּ֙',
      transliteration: 'Tohu',
      englishLiteral: 'waste',
      englishNatural: 'waste',
      root: roots.tohu,
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'absolute',
      },
    },
    {
      hebrew: 'וָבֹ֔הוּ',
      transliteration: 'vaVohu',
      englishLiteral: 'and-void',
      englishNatural: 'and void',
      root: roots.vohu,
      prefixes: [prefixes.va],
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'absolute',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וְחֹ֖שֶׁךְ',
      transliteration: 'veChoshekh',
      englishLiteral: 'and-darkness',
      englishNatural: 'and darkness',
      root: roots.choshekh,
      prefixes: [prefixes.ve],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'absolute',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'עַל־פְּנֵ֣י',
      transliteration: 'al-peney',
      englishLiteral: 'on-face-of',
      englishNatural: 'on the face of',
      root: roots.panah,
      prefixes: [prefixes.al],
      suffixes: [suffixes.ey],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
      },
    },
    {
      hebrew: 'תְהֹ֑ום',
      transliteration: 'tehom',
      englishLiteral: 'deep',
      englishNatural: 'the deep',
      root: roots.tehom,
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        state: 'absolute',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
    },
    {
      hebrew: 'וְר֣וּחַ',
      transliteration: 'veRuach',
      englishLiteral: 'And-Wind',
      englishNatural: 'And the Wind of',
      root: roots.ruach,
      prefixes: [prefixes.ve],
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        state: 'construct',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'אֱלֹהִ֔ים',
      transliteration: 'Elohim',
      englishLiteral: 'Gods',
      englishNatural: 'God',
      root: roots.eloah,
      suffixes: [suffixes.im],
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
      },
    },
    {
      hebrew: 'מְרַחֶ֖פֶת',
      transliteration: 'meRachefet',
      englishLiteral: 'was-stirring',
      englishNatural: 'was stirring',
      root: roots.rachaf,
      prefixes: [prefixes.me],
      suffixes: [suffixes.et],
      order: {
        hebrew: 10,
        english: 10,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        stem: 'piel',
      },
    },
    {
      hebrew: 'עַל־פְּנֵ֥י',
      transliteration: 'al-peney',
      englishLiteral: 'on-face-of',
      englishNatural: 'on the face of',
      root: roots.panah,
      prefixes: [prefixes.al],
      suffixes: [suffixes.ey],
      order: {
        hebrew: 11,
        english: 11,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
      },
    },
    {
      hebrew: 'הַמָּֽיִם',
      transliteration: 'haMayim',
      englishLiteral: 'the-waters',
      englishNatural: 'the waters',
      root: roots.mayim,
      prefixes: [prefixes.ha],
      order: {
        hebrew: 12,
        english: 12,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
      },
      lineBreaksAfter: 2,
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
    },
  ],
  translations: {
    hebrew:
      'וְהָאָ֗רֶץ הָיְתָ֥ה תֹ֙הוּ֙ וָבֹ֔הוּ וְחֹ֖שֶׁךְ עַל־פְּנֵ֣י תְהֹ֑ום וְר֣וּחַ אֱלֹהִ֔ים מְרַחֶ֖פֶת עַל־פְּנֵ֥י הַמָּֽיִם',
    transliteration:
      'veHaAretz haytah Tohu vaVohu veChoshekh al-peney tehom veRuach Elohim meRachefet al-peney haMayim',
    englishLiteral:
      'And-the-land was waste and-void, and-darkness, on-face-of deep. And-Wind Gods was-stirring on-face-of the-waters.',
    englishNatural:
      'And the land was waste and void, and darkness, on the face of the deep. And the Wind of God was stirring on the face of the waters.',
  },
};
