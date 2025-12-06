import { Verse } from '@/types';

export const proverbs_1_5: Verse = {
  meta: {
    book: 'Proverbs',
    chapter: 1,
    verse: 5,
  },
  words: [
    {
      hebrew: 'יִשְׁמַע',
      transliteration: 'yishma',
      englishLiteral: 'Will-hear',
      englishNatural: 'will hear',
      root: 'shama',
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
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'חָכָם',
      transliteration: 'chakam',
      englishLiteral: 'wise-man',
      englishNatural: 'A wise man',
      root: 'chakam',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'וְיוֹסֵף',
      transliteration: 'veYosef',
      englishLiteral: 'and-will-add',
      englishNatural: 'and will add',
      root: 'yasaf',
      prefixes: ['ve'],
      order: 3,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'hiphil',
        type: 'verb',
      },
    },
    {
      hebrew: 'לֶקַח',
      transliteration: 'leqach',
      englishLiteral: 'teaching',
      englishNatural: 'teaching',
      root: 'leqach',
      order: 4,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'וְנָבוֹן',
      transliteration: 'veNavon',
      englishLiteral: 'and-understanding-man',
      englishNatural: 'and an understanding man',
      root: 'navon',
      prefixes: ['ve'],
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'תַּחְבֻּלוֹת',
      transliteration: 'tachbulot',
      englishLiteral: 'wise_counsels',
      englishNatural: 'wise-counsels',
      root: 'tachbulot',
      order: {
        hebrew: 6,
        english: 7,
      },
      morphology: {
        gender: 'feminine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: '.',
      },
    },
    {
      hebrew: 'יִקְנֶה',
      transliteration: 'yiqneh',
      englishLiteral: 'will-acquire',
      englishNatural: 'will acquire',
      root: 'qanah',
      order: {
        hebrew: 7,
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
        englishLiteral: '.',
      },
    },
  ],
  expectedTranslations: {
    hebrew: 'יִשְׁמַע חָכָם וְיוֹסֵף לֶקַח וְנָבוֹן תַּחְבֻּלוֹת יִקְנֶה',
    transliteration: 'yishma chakam veYosef leqach veNavon tachbulot yiqneh',
    englishLiteral: 'Will-hear wise-man, and-will-add teaching; and-understanding-man, wise_counsels will-acquire.',
    englishNatural: 'A wise man will hear, and will add teaching; and an understanding man, will acquire wise-counsels.',
    kjv: 'A wise man will hear, and will increase learning; and a man of understanding shall attain unto wise counsels',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
  },
}; 