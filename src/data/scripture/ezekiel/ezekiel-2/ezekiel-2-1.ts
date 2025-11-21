import { Verse } from '@/types';

export const ezekiel_2_1: Verse = {
  meta: {
    book: 'Ezekiel',
    chapter: 2,
    verse: 1,
  },
  words: [
    {
      hebrew: 'וַיֹּאמֶר',
      transliteration: 'vayYomer',
      englishLiteral: 'And-he-said',
      englishNatural: 'And He said',
      root: 'amar',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'אֵלָי',
      transliteration: 'elai',
      englishLiteral: 'to-me',
      englishNatural: 'to me',
      root: 'el',
      suffixes: ['ai'],
      order: {
        hebrew: 2,
        english: 2,
      },
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
      hebrew: 'בֶּן־',
      transliteration: 'ben-',
      englishLiteral: 'son-of-',
      englishNatural: 'Son of',
      root: 'ben',
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
      grammarPrefix: {
        englishLiteral: '"',
        englishNatural: '"',
      },
    },
    {
      hebrew: 'אָדָם',
      transliteration: 'adam',
      englishLiteral: 'Human (Adam)',
      englishNatural: 'Human (Adam)',
      root: 'adam',
      order: {
        hebrew: 4,
        english: 4,
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
      hebrew: 'עֲמֹד',
      transliteration: 'amod',
      englishLiteral: 'stand',
      englishNatural: 'stand',
      root: 'amad',
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '2nd',
        tense: 'imperative',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'עַל־',
      transliteration: 'al-',
      englishLiteral: 'over-',
      englishNatural: 'over',
      root: 'al',
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'רַגְלֶיךָ',
      transliteration: 'ragleikha',
      englishLiteral: 'feet-your',
      englishNatural: 'your feet',
      root: 'regel',
      suffixes: ['ekha'],
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'feminine',
        number: 'dual',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וַאֲדַבֵּר',
      transliteration: 'vaAdabber',
      englishLiteral: 'and-I-will-speak',
      englishNatural: 'and I will speak',
      root: 'dabar',
      prefixes: ['va'],
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '1st',
        tense: 'imperfect',
        stem: 'piel',
        type: 'verb',
      },
    },
    {
      hebrew: 'אֹתָךְ',
      transliteration: 'otakh',
      englishLiteral: 'you',
      englishNatural: 'to you',
      root: 'et',
      suffixes: ['kha'],
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        type: 'particle',
      },
      grammarSuffix: {
        englishLiteral: '."',
        englishNatural: '."',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'וַיֹּאמֶר אֵלָי בֶּן־אָדָם עֲמֹד עַל־רַגְלֶיךָ וַאֲדַבֵּר אֹתָךְ',
    transliteration: 'vayYomer elai ben-adam amod al-ragleikha vaAdabber otakh',
    englishLiteral:
      'And-he-said to-me, "son-of- Human (Adam), stand over- feet-your, and-I-will-speak you."',
    englishNatural:
      'And He said to me, "Son of Human (Adam), stand over your feet, and I will speak to you."',
    kjv: 'And he said unto me, Son of man, stand upon thy feet, and I will speak unto thee.',
    lastReviewed: { name: 'Matt Gross', date: '2025-11-21' },
  },
};
