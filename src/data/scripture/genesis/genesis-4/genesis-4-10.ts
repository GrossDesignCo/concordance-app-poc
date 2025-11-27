import { Verse } from '@/types';

export const genesis_4_10: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 4,
    verse: 10,
  },
  words: [
    {
      hebrew: 'וַיֹּאמֶר',
      transliteration: 'vayYomer',
      englishLiteral: 'And-he-said',
      englishNatural: 'And he said',
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
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'מֶה',
      transliteration: 'meh',
      englishLiteral: 'What',
      englishNatural: 'What',
      root: 'mah',
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        type: 'pronoun',
      },
      grammarPrefix: {
        englishLiteral: '"',
        englishNatural: '"',
      },
    },
    {
      hebrew: 'עָשִׂיתָ',
      transliteration: 'asita',
      englishLiteral: 'you-did',
      englishNatural: 'have you done',
      root: 'asah',
      suffixes: ['ta'],
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '2nd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: '?',
        englishNatural: '?',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'קוֹל',
      transliteration: 'qol',
      englishLiteral: 'Voice-of',
      englishNatural: 'The voice of',
      root: 'qol',
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'דְּמֵי',
      transliteration: 'demey',
      englishLiteral: 'blood-of',
      englishNatural: 'the blood of',
      root: 'dam',
      suffixes: ['ey'],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'אָחִיךָ',
      transliteration: 'achikha',
      englishLiteral: 'your-brother',
      englishNatural: 'your brother',
      root: 'ach',
      suffixes: ['kha'],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '2nd',
        type: 'noun',
      },
    },
    {
      hebrew: 'צֹעֲקִים',
      transliteration: 'tsoaqim',
      englishLiteral: 'crying_out',
      englishNatural: 'is crying-out',
      root: 'tsaaq',
      suffixes: ['im'],
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        tense: 'participle',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'אֵלַי',
      transliteration: 'elay',
      englishLiteral: 'to-me',
      englishNatural: 'to me',
      root: 'el',
      suffixes: ['i'],
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        number: 'singular',
        person: '1st',
        type: 'preposition',
      },
    },
    {
      hebrew: 'מִן־',
      transliteration: 'min-',
      englishLiteral: 'from-',
      englishNatural: 'from',
      root: 'min',
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        type: 'preposition',
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
        hebrew: 10,
        english: 10,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
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
      'וַיֹּאמֶר מֶה עָשִׂיתָ קוֹל דְּמֵי אָחִיךָ צֹעֲקִים אֵלַי מִן־הָאֲדָמָה',
    transliteration:
      'vayYomer meh asita qol demey achikha tsoaqim elay min-haAdamah',
    englishLiteral:
      'And-he-said, "What you-did? Voice-of blood-of your-brother crying_out to-me from- the-earth.',
    englishNatural:
      'And he said, "What have you done? The voice of the blood of your brother is crying-out to me from the earth.',
    kjv: "And he said, What hast thou done? the voice of thy brother's blood crieth unto me from the ground.",
    lastReviewed: { name: 'Matt Gross', date: '2025-11-27' },
  },
};
