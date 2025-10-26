import { Verse } from '@/types';

export const jonah_2_3: Verse = {
  meta: {
    book: 'Jonah',
    chapter: 2,
    verse: 3,
  },
  words: [
    {
      hebrew: 'וַתַּשְׁלִיכֵנִי',
      transliteration: 'vaTaShlikheni',
      englishLiteral: 'And-you-sent-me',
      englishNatural: 'And you sent me',
      root: 'shalach',
      prefixes: ['va', 'ta'],
      suffixes: ['ni'],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '2nd',
        tense: 'imperfect',
        stem: 'hiphil',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'מְצוּלָה',
      transliteration: 'metzulah',
      englishLiteral: 'deep',
      englishNatural: 'into the deep',
      root: 'metzulah',
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'בִּלְבַב',
      transliteration: 'biLevav',
      englishLiteral: 'in-heart-of',
      englishNatural: 'in the heart of',
      root: 'levav',
      prefixes: ['bi'],
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
    },
    {
      hebrew: 'יַמִּים',
      transliteration: 'yamim',
      englishLiteral: 'seas',
      englishNatural: 'the seas',
      root: 'yam',
      suffixes: ['im'],
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'וְנָהָר',
      transliteration: 'veNahar',
      englishLiteral: 'and-river',
      englishNatural: 'and the river',
      root: 'nahar',
      prefixes: ['ve'],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'יְסֹבְבֵנִי',
      transliteration: 'yesoveveni',
      englishLiteral: 'surrounds-me',
      englishNatural: 'surrounds me',
      root: 'savav',
      suffixes: ['ni'],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'כָּל־',
      transliteration: 'kol-',
      englishLiteral: 'all-',
      englishNatural: 'all',
      root: 'kol',
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        type: 'adjective',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'מִשְׁבָּרֶיךָ',
      transliteration: 'mishbarekha',
      englishLiteral: 'breakers-your',
      englishNatural: 'your breakers',
      root: 'mishbar',
      suffixes: ['ekha'],
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'וְגַלֶּיךָ',
      transliteration: 'veGalekha',
      englishLiteral: 'and-waves-your',
      englishNatural: 'and your waves',
      root: 'gal',
      prefixes: ['ve'],
      suffixes: ['ekha'],
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'עָלַי',
      transliteration: 'alay',
      englishLiteral: 'over-me',
      englishNatural: 'over me',
      root: 'al',
      suffixes: ['ay'],
      order: {
        hebrew: 10,
        english: 10,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'עָבָרוּ',
      transliteration: 'avaru',
      englishLiteral: 'passed',
      englishNatural: 'have passed',
      root: 'avar',
      suffixes: ['u'],
      order: {
        hebrew: 11,
        english: 11,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
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
      'וַתַּשְׁלִיכֵנִי מְצוּלָה בִּלְבַב יַמִּים וְנָהָר יְסֹבְבֵנִי כָּל־מִשְׁבָּרֶיךָ וְגַלֶּיךָ עָלַי עָבָרוּ',
    transliteration:
      'vaTaShlikheni metzulah biLevav yamim veNahar yesoveveni kol-mishbarekha veGalekha alay avaru',
    englishLiteral:
      'And-you-sent-me deep, in-heart-of seas; and-river surrounds-me; all- breakers-your and-waves-your, over-me passed.',
    englishNatural:
      'And you sent me into the deep, in the heart of the seas; and the river surrounds me; all your breakers and your waves, over me have passed.',
    kjv: 'For thou hadst cast me into the deep, in the midst of the seas; and the floods compassed me about: all thy billows and thy waves passed over me.',
    lastReviewed: { name: 'Matt Gross', date: '2025-10-26' },
  },
};
