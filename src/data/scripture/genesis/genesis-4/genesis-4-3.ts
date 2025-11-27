import { Verse } from '@/types';

export const genesis_4_3: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 4,
    verse: 3,
  },
  words: [
    {
      hebrew: 'וַיְהִי',
      transliteration: 'vayHi',
      englishLiteral: 'And-it-was',
      englishNatural: 'And it was',
      root: 'hayah',
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
      hebrew: 'מִקֵּץ',
      transliteration: 'miQetz',
      englishLiteral: 'from-end-of',
      englishNatural: 'from the end of',
      root: 'qetz',
      prefixes: ['mi'],
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'יָמִים',
      transliteration: 'yamim',
      englishLiteral: 'days',
      englishNatural: 'days',
      root: 'yom',
      suffixes: ['im'],
      order: {
        hebrew: 3,
        english: 3,
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
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'וַיָּבֵא',
      transliteration: 'vayYave',
      englishLiteral: 'And-he-brought',
      englishNatural: 'brought',
      root: 'bo',
      prefixes: ['va'],
      order: {
        hebrew: 4,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'hiphil',
        type: 'verb',
      },
    },
    {
      hebrew: 'קַיִן',
      transliteration: 'Qayin',
      englishLiteral: 'Acquired (Cain)',
      englishNatural: 'And Acquired (Cain)',
      root: 'qanah',
      order: {
        hebrew: 5,
        english: 4,
      },
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'מִפְּרִי',
      transliteration: 'miPeri',
      englishLiteral: 'from-fruit-of',
      englishNatural: 'from the fruit of',
      root: 'peri',
      prefixes: ['mi'],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'הָאֲדָמָה',
      transliteration: 'haAdamah',
      englishLiteral: 'the-earth',
      englishNatural: 'the earth',
      root: 'adamah',
      prefixes: ['ha'],
      order: {
        hebrew: 7,
        english: 7,
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
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'מִנְחָה',
      transliteration: 'minchah',
      englishLiteral: 'offering',
      englishNatural: 'an offering',
      root: 'minchah',
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        gender: 'feminine',
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
      order: {
        hebrew: 9,
        english: 9,
      },
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
      'וַיְהִי מִקֵּץ יָמִים וַיָּבֵא קַיִן מִפְּרִי הָאֲדָמָה מִנְחָה לַיהוָה',
    transliteration:
      'vayHi miQetz yamim vayYave Qayin miPeri haAdamah minchah laYHWH',
    englishLiteral:
      'And-it-was from-end-of days; And-he-brought Acquired (Cain) from-fruit-of the-earth, offering to-He_Who_Is (YHWH).',
    englishNatural:
      'And it was from the end of days; And Acquired (Cain) brought from the fruit of the earth, an offering to He-Who-Is (YHWH).',
    kjv: 'And in process of time it came to pass, that Cain brought of the fruit of the ground an offering unto the LORD.',
    lastReviewed: { name: 'Matt Gross', date: '2025-11-27' },
  },
};
