import { Verse } from '@/types';

export const jonah_2_9: Verse = {
  meta: {
    book: 'Jonah',
    chapter: 2,
    verse: 9,
  },
  words: [
    {
      hebrew: 'וַאֲנִי',
      transliteration: 'vaAni',
      englishLiteral: 'And-I',
      englishNatural: 'And I',
      root: 'ani',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        person: '1st',
        number: 'singular',
        type: 'pronoun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'בְּקוֹל',
      transliteration: 'beqol',
      englishLiteral: 'with-voice-of',
      englishNatural: 'with a voice of',
      root: 'qol',
      prefixes: ['be'],
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'תּוֹדָה',
      transliteration: 'todah',
      englishLiteral: 'thanksgiving',
      englishNatural: 'thanksgiving',
      root: 'todah',
      order: {
        hebrew: 3,
        english: 3,
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
      hebrew: 'אֶזְבְּחָה־',
      transliteration: 'ezbechah-',
      englishLiteral: 'I-will-sacrifice-',
      englishNatural: 'I will sacrifice',
      root: 'zavach',
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '1st',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'לָּךְ',
      transliteration: 'lakh',
      englishLiteral: 'to-you',
      englishNatural: 'to you',
      root: 'la',
      suffixes: ['kha'],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        type: 'preposition',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'אֲשֶׁר',
      transliteration: 'asher',
      englishLiteral: 'which',
      englishNatural: 'what',
      root: 'asher',
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        type: 'relative',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'נָדַרְתִּי',
      transliteration: 'nadarti',
      englishLiteral: 'I-vowed',
      englishNatural: 'I have vowed',
      root: 'nadar',
      suffixes: ['ti'],
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '1st',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'אֲשַׁלֵּמָה',
      transliteration: 'ashalemah',
      englishLiteral: 'I-will-complete',
      englishNatural: 'I will pay',
      root: 'shalem',
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
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'יְשׁוּעָתָה',
      transliteration: 'yeshuatah',
      englishLiteral: 'salvation',
      englishNatural: 'salvation',
      root: 'yeshuah',
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'לַיהוָה',
      transliteration: 'laYHWH',
      englishLiteral: 'to-He_Who_Is',
      englishNatural: 'belongs to He-Who-Is',
      root: 'hayah',
      prefixes: ['la'],
      order: {
        hebrew: 10,
        english: 10,
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
      'וַאֲנִי בְּקוֹל תּוֹדָה אֶזְבְּחָה־לָּךְ אֲשֶׁר נָדַרְתִּי אֲשַׁלֵּמָה יְשׁוּעָתָה לַיהוָה',
    transliteration:
      'vaAni beqol todah ezbechah-lakh asher nadarti ashalemah yeshuatah laYHWH',
    englishLiteral:
      'And-I with-voice-of thanksgiving, I-will-sacrifice- to-you; which I-vowed I-will-complete; salvation to-He_Who_Is.',
    englishNatural:
      'And I with a voice of thanksgiving, I will sacrifice to you; what I have vowed I will pay; salvation belongs to He-Who-Is.',
    kjv: 'But I will sacrifice unto thee with the voice of thanksgiving; I will pay that that I have vowed. Salvation is of the LORD.',
    lastReviewed: { name: 'Matt Gross', date: '2025-10-26' },
  },
};
