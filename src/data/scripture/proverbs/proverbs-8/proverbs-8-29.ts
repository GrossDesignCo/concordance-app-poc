import { Verse } from '@/types';

export const proverbs_8_29: Verse = {
  meta: {
    book: 'Proverbs',
    chapter: 8,
    verse: 29,
  },
  words: [
    {
      hebrew: 'בְּשׂוּמוֹ',
      transliteration: 'beSumo',
      englishLiteral: 'In-placing-his',
      englishNatural: 'In his placing',
      root: 'sim',
      prefixes: ['be'],
      suffixes: ['o'],
      order: 1,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        tense: 'infinitive_construct',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'לַיָּם',
      transliteration: 'laYam',
      englishLiteral: 'to-the-sea',
      englishNatural: 'to the sea',
      root: 'yam',
      prefixes: ['la'],
      order: 2,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'חֻקּוֹ',
      transliteration: 'chuqo',
      englishLiteral: 'his-decree',
      englishNatural: 'his decree',
      root: 'chaq',
      suffixes: ['o'],
      order: 3,
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
      hebrew: 'וּמַיִם',
      transliteration: 'uMayim',
      englishLiteral: 'and-waters',
      englishNatural: 'and the waters',
      root: 'mayim',
      prefixes: ['u'],
      order: 4,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'לֹא',
      transliteration: 'lo',
      englishLiteral: 'not',
      englishNatural: 'not',
      root: 'lo',
      order: {
        hebrew: 5,
        english: 7,
      },
      morphology: {
        type: 'adverb',
      },
      grammarSuffix: {
        englishNatural: ';',
      },
    },
    {
      hebrew: 'יַעַבְרוּ־',
      transliteration: 'yaavru-',
      englishLiteral: 'they-will-pass-',
      englishNatural: 'will pass',
      root: 'avar',
      suffixes: ['u'],
      order: {
        hebrew: 6,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'פִיו',
      transliteration: 'piw',
      englishLiteral: 'his-mouth',
      englishNatural: 'his mouth',
      root: 'peh',
      suffixes: ['o'],
      order: {
        hebrew: 7,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
      },
    },
    {
      hebrew: 'בְּחוּקוֹ',
      transliteration: 'beChuqo',
      englishLiteral: 'in-inscribing-his',
      englishNatural: 'in his inscribing',
      root: 'chaq',
      prefixes: ['be'],
      suffixes: ['o'],
      order: 8,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        tense: 'infinitive_construct',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'מוֹסְדֵי',
      transliteration: 'mosdei',
      englishLiteral: 'foundations-of',
      englishNatural: 'the foundations of',
      root: 'mosed',
      order: 9,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'אָרֶץ',
      transliteration: 'aretz',
      englishLiteral: 'land',
      englishNatural: 'land',
      root: 'eretz',
      order: 10,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
    },
  ],
  expectedTranslations: {
    hebrew:
      'בְּשׂוּמוֹ לַיָּם חֻקּוֹ וּמַיִם לֹא יַעַבְרוּ־פִיו בְּחוּקוֹ מוֹסְדֵי אָרֶץ',
    transliteration:
      'beSumo laYam chuqo uMayim lo yaavru-piw beChuqo mosdei aretz',
    englishLiteral:
      'In-placing-his to-the-sea his-decree, and-waters not they-will-pass- his-mouth; in-inscribing-his foundations-of land.',
    englishNatural:
      'In his placing to the sea his decree, and the waters will pass his mouth not; in his inscribing the foundations of land.',
    kjv: 'When he gave to the sea his decree, that the waters should not pass his commandment: when he appointed the foundations of the earth:',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
},
};
