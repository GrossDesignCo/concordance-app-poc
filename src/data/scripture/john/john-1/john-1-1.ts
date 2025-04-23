import { Verse } from '@/types';
import { roots } from '../../../../data/dictionary/greek/roots';

export const john_1_1: Verse = {
  meta: {
    chapter: 1,
    verse: 1,
  },
  words: [
    {
      greek: 'Ἐν',
      transliteration: 'En',
      englishLiteral: 'In',
      englishNatural: 'In',
      root: roots.en,
      order: {
        greek: 1,
        english: 1,
      },
      morphology: {
        type: 'preposition',
        case: 'dative',
      },
    },
    {
      greek: 'ἀρχῇ',
      transliteration: 'archē',
      englishLiteral: 'first',
      englishNatural: 'the beginning',
      root: roots.arche,
      order: {
        greek: 2,
        english: 2,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        case: 'dative',
        state: 'anarthrous', // without article
      },
    },
    {
      greek: 'ἦν',
      transliteration: 'ēn',
      englishLiteral: 'was',
      englishNatural: 'was',
      root: roots.eimi,
      order: {
        greek: 3,
        english: 3,
      },
      morphology: {
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        voice: 'active',
        mood: 'indicative',
      },
    },
    {
      greek: 'ὁ',
      transliteration: 'ho',
      englishLiteral: 'the',
      englishNatural: 'the',
      root: roots.ho,
      order: {
        greek: 4,
        english: 4,
      },
      morphology: {
        type: 'article',
        gender: 'masculine',
        number: 'singular',
        case: 'nominative',
      },
    },
    {
      greek: 'λόγος',
      transliteration: 'logos',
      englishLiteral: 'Word',
      englishNatural: 'Word',
      root: roots.logos,
      order: {
        greek: 5,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        case: 'nominative',
        state: 'definite', // with article (from previous word)
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      greek: 'καὶ',
      transliteration: 'kai',
      englishLiteral: 'and',
      englishNatural: 'and',
      root: roots.kai,
      order: {
        greek: 6,
        english: 6,
      },
      morphology: {
        type: 'conjunction',
      },
    },
    {
      greek: 'ὁ',
      transliteration: 'ho',
      englishLiteral: 'the',
      englishNatural: 'the',
      root: roots.ho,
      order: {
        greek: 7,
        english: 7,
      },
      morphology: {
        type: 'article',
        gender: 'masculine',
        number: 'singular',
        case: 'nominative',
      },
    },
    {
      greek: 'λόγος',
      transliteration: 'logos',
      englishLiteral: 'Word',
      englishNatural: 'Word',
      root: roots.logos,
      order: {
        greek: 8,
        english: 8,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        case: 'nominative',
        state: 'definite', // with article (from previous word)
      },
    },
    {
      greek: 'ἦν',
      transliteration: 'ēn',
      englishLiteral: 'was',
      englishNatural: 'was',
      root: roots.eimi,
      order: {
        greek: 9,
        english: 9,
      },
      morphology: {
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        voice: 'active',
        mood: 'indicative',
      },
    },
    {
      greek: 'πρὸς',
      transliteration: 'pros',
      englishLiteral: 'with',
      englishNatural: 'with',
      root: roots.pros,
      order: {
        greek: 10,
        english: 10,
      },
      morphology: {
        type: 'preposition',
        case: 'accusative',
      },
    },
    {
      greek: 'τὸν',
      transliteration: 'ton',
      englishLiteral: 'the',
      englishNatural: 'the',
      root: roots.ho,
      order: {
        greek: 11,
        english: 11,
      },
      morphology: {
        type: 'article',
        gender: 'masculine',
        number: 'singular',
        case: 'accusative',
      },
    },
    {
      greek: 'θεόν',
      transliteration: 'theon',
      englishLiteral: 'God',
      englishNatural: 'God',
      root: roots.theos,
      order: {
        greek: 12,
        english: 12,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        case: 'accusative',
        state: 'definite', // with article (from previous word)
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      greek: 'καὶ',
      transliteration: 'kai',
      englishLiteral: 'and',
      englishNatural: 'and',
      root: roots.kai,
      order: {
        greek: 13,
        english: 13,
      },
      morphology: {
        type: 'conjunction',
      },
    },
    {
      greek: 'θεὸς',
      transliteration: 'theos',
      englishLiteral: 'God',
      englishNatural: 'God',
      root: roots.theos,
      order: {
        greek: 14,
        english: 17,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        case: 'nominative',
        state: 'anarthrous', // without article - significant theological point
      },
      grammarSuffix: {
        englishNatural: '.',
      },
    },
    {
      greek: 'ἦν',
      transliteration: 'ēn',
      englishLiteral: 'was',
      englishNatural: 'was',
      root: roots.eimi,
      order: {
        greek: 15,
        english: 16,
      },
      morphology: {
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        voice: 'active',
        mood: 'indicative',
      },
    },
    {
      greek: 'ὁ',
      transliteration: 'ho',
      englishLiteral: 'the',
      englishNatural: 'the',
      root: roots.ho,
      order: {
        greek: 16,
        english: 14,
      },
      morphology: {
        type: 'article',
        gender: 'masculine',
        number: 'singular',
        case: 'nominative',
      },
    },
    {
      greek: 'λόγος',
      transliteration: 'logos',
      englishLiteral: 'Word',
      englishNatural: 'Word',
      root: roots.logos,
      order: {
        greek: 17,
        english: 15,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        case: 'nominative',
        state: 'definite', // with article (from previous word)
      },
      grammarSuffix: {
        englishLiteral: '.',
      },
    },
  ],
  translations: {
    greek: 'Ἐν ἀρχῇ ἦν ὁ λόγος καὶ ὁ λόγος ἦν πρὸς τὸν θεόν καὶ θεὸς ἦν ὁ λόγος',
    transliteration: 'En archē ēn ho logos kai ho logos ēn pros ton theon kai theos ēn ho logos',
    englishLiteral:
      'In first was the Word, and the Word was with the God, and God was the Word.',
    englishNatural:
      'In the beginning was the Word, and the Word was with the God, and the Word was God.',
  },
};
