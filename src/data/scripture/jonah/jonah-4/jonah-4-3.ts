import { Verse } from '@/types';

export const jonah_4_3: Verse = {
  meta: {
    book: 'Jonah',
    chapter: 4,
    verse: 3,
  },
  words: [
    {
      hebrew: 'וְעַתָּה',
      transliteration: 'veAttah',
      englishLiteral: 'And-now',
      englishNatural: 'And now',
      root: 'attah',
      prefixes: ['ve'],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        type: 'adverb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is',
      englishNatural: 'He-Who-Is',
      root: 'yhwh',
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'קַח־',
      transliteration: 'qach-',
      englishLiteral: 'take-',
      englishNatural: 'take',
      root: 'laqach',
      order: {
        hebrew: 3,
        english: 3,
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
      hebrew: 'נָא',
      transliteration: 'na',
      englishLiteral: 'please',
      englishNatural: 'please',
      root: 'na',
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'נַפְשִׁי',
      transliteration: 'nafshi',
      englishLiteral: 'throat-my',
      englishNatural: 'my throat',
      root: 'nephesh',
      suffixes: ['i_possessive'],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'מִמֶּנִּי',
      transliteration: 'mimeni',
      englishLiteral: 'from-me',
      englishNatural: 'from me',
      root: 'min_from',
      suffixes: ['i_possessive'],
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        type: 'preposition',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'כִּי',
      transliteration: 'ki',
      englishLiteral: 'that',
      englishNatural: 'that',
      root: 'ki',
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        type: 'relative',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'טוֹב',
      transliteration: 'tov',
      englishLiteral: 'good',
      englishNatural: 'good-is',
      root: 'tov',
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        type: 'adjective',
      },
    },
    {
      hebrew: 'מוֹתִי',
      transliteration: 'moti',
      englishLiteral: 'death-my',
      englishNatural: 'my death',
      root: 'mot',
      suffixes: ['i_possessive'],
      order: {
        hebrew: 10,
        english: 10,
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
      hebrew: 'מֵחַיָּי',
      transliteration: 'mechayyai',
      englishLiteral: 'from-lives-my',
      englishNatural: 'from my life',
      root: 'chayyim',
      prefixes: ['me'],
      suffixes: ['i_possessive'],
      order: {
        hebrew: 11,
        english: 11,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: '."',
        englishNatural: '."',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew:
      'וְעַתָּה יְהוָה קַח־נָא אֶת־נַפְשִׁי מִמֶּנִּי כִּי טוֹב מוֹתִי מֵחַיָּי',
    transliteration:
      'veAttah YHWH qach-na et-nafshi mimeni ki tov moti mechayyai',
    englishLiteral:
      'And-now He_Who_Is, take- please ↳ throat-my from-me, that good death-my, from-lives-my."',
    englishNatural:
      'And now He-Who-Is, take please my throat from me, that good-is my death, from my life."',
    kjv: 'Therefore now, O LORD, take, I beseech thee, my life from me; for it is better for me to die than to live.',
    lastReviewed: { name: 'Matt Gross', date: '2025-10-19' },
  },
};
