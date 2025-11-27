import { Verse } from '@/types';

export const jonah_4_4: Verse = {
  meta: {
    book: 'Jonah',
    chapter: 4,
    verse: 4,
  },
  words: [
    {
      hebrew: 'וַיֹּאמֶר',
      transliteration: 'vaYomer',
      englishLiteral: 'And-said',
      englishNatural: 'said',
      root: 'amar',
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
      grammarSuffix: {
        englishLiteral: ',',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'הַהֵיטֵב',
      transliteration: 'haHeitiv',
      englishLiteral: 'the-doing_well',
      englishNatural: 'the doing-well',
      root: 'yatav',
      prefixes: ['ha'],
      order: {
        hebrew: 3,
        english: 4,
      },
      morphology: {
        tense: 'infinitive_absolute',
        stem: 'hiphil',
        type: 'verb',
      },
      grammarPrefix: {
        englishLiteral: '"',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'חָרָה',
      transliteration: 'charah',
      englishLiteral: 'fuming_angrily',
      englishNatural: 'Is fuming-angrily',
      root: 'charah',
      order: {
        hebrew: 4,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarPrefix: {
        englishNatural: '"',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'לָךְ',
      transliteration: 'lakh',
      englishLiteral: 'to-you',
      englishNatural: 'to you',
      root: 'lakhem',
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        type: 'preposition',
      },
      grammarSuffix: {
        englishLiteral: '?"',
        englishNatural: '?"',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'וַיֹּאמֶר יְהוָה הַהֵיטֵב חָרָה לָךְ',
    transliteration: 'vaYomer YHWH haHeitiv charah lakh',
    englishLiteral:
      'And-said He_Who_Is (YHWH), "the-doing_well, fuming_angrily, to-you?"',
    englishNatural:
      'And He-Who-Is (YHWH) said, "Is fuming-angrily the doing-well, to you?"',
    kjv: 'Then said the LORD, Doest thou well to be angry?',
    lastReviewed: { name: 'Matt Gross', date: '2025-11-27' },
  },
};
