import { Verse } from '@/types';

export const genesis_4_6: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 4,
    verse: 6,
  },
  words: [
    {
      hebrew: 'וַיֹּאמֶר',
      transliteration: 'vayYomer',
      englishLiteral: 'And-He-said',
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
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: {
        hebrew: 1,
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
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'אֶל־',
      transliteration: 'el-',
      englishLiteral: 'to-',
      englishNatural: 'to',
      root: 'el',
      order: 3,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'קַיִן',
      transliteration: 'Qayin',
      englishLiteral: 'Acquired (Cain)',
      englishNatural: 'Acquired (Cain)',
      root: 'qanah',
      order: 4,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'לָמָּה',
      transliteration: 'lamah',
      englishLiteral: 'Why',
      englishNatural: 'Why',
      root: 'lamah',
      order: 5,
      morphology: {
        type: 'adverb',
      },
      grammarPrefix: {
        englishLiteral: '"',
        englishNatural: '"',
      },
    },
    {
      hebrew: 'חָרָה',
      transliteration: 'charah',
      englishLiteral: 'it-fumed_angrily',
      englishNatural: 'is it fuming-anger',
      root: 'charah',
      order: 6,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'לָךְ',
      transliteration: 'lakh',
      englishLiteral: 'to-you',
      englishNatural: 'to you',
      root: 'lamed',
      suffixes: ['kh'],
      order: 7,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '2nd',
        type: 'preposition',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וְלָמָּה',
      transliteration: 'velamah',
      englishLiteral: 'and-why',
      englishNatural: 'and why',
      root: 'lamah',
      prefixes: ['ve'],
      order: 8,
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'נָפְלוּ',
      transliteration: 'nafelu',
      englishLiteral: 'they-fell',
      englishNatural: 'fallen',
      root: 'napal',
      order: {
        hebrew: 9,
        english: 10,
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
        englishNatural: '?',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'פָנֶיךָ',
      transliteration: 'panekha',
      englishLiteral: 'your-faces',
      englishNatural: 'have your faces',
      root: 'panim',
      suffixes: ['kha'],
      order: {
        hebrew: 10,
        english: 9,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '2nd',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: '?',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
  ],
  expectedTranslations: {
    hebrew:
      'וַיֹּאמֶר יְהוָה אֶל־קַיִן לָמָּה חָרָה לָךְ וְלָמָּה נָפְלוּ פָנֶיךָ',
    transliteration:
      'vayYomer YHWH el-Qayin lamah charah lakh velamah nafelu panekha',
    englishLiteral:
      'And-He-said He_Who_Is (YHWH) to- Acquired (Cain), "Why it-fumed_angrily to-you, and-why they-fell your-faces?',
    englishNatural:
      'And He-Who-Is (YHWH) said to Acquired (Cain), "Why is it fuming-anger to you, and why have your faces fallen?',
    kjv: 'And the LORD said unto Cain, Why art thou wroth? and why is thy countenance fallen?',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-13' },
  },
};
