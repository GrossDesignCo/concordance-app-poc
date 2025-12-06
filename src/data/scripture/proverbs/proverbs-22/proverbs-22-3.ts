import { Verse } from '@/types';

export const proverbs_22_3: Verse = {
  meta: {
    book: 'Proverbs',
    chapter: 22,
    verse: 3,
  },
  words: [
    {
      hebrew: 'עָרוּם',
      transliteration: 'arum',
      englishLiteral: 'Shrewd',
      englishNatural: 'Shrewd',
      root: 'arum',
      order: 1,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'absolute',
        type: 'noun'
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'רָאָה',
      transliteration: "ra'ah",
      englishLiteral: 'sees',
      englishNatural: 'sees',
      root: 'raah',
      order: 2,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb'
      },
    },
    {
      hebrew: 'רָעָה',
      transliteration: 'ra`ah',
      englishLiteral: 'bad',
      englishNatural: 'bad',
      root: 'ra',
      order: 3,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        state: 'absolute',
        type: 'noun'
      },
    },
    {
      hebrew: 'וְנִסְתָּר',
      transliteration: 'veNiStar',
      englishLiteral: 'and-himself-hides',
      englishNatural: 'and hides himself',
      root: 'satar',
      prefixes: ['ve', 'ni'],
      order: 4,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'niphal',
        type: 'verb'
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'וּפְתָיִים',
      transliteration: 'uFetayim',
      englishLiteral: 'but-simples',
      englishNatural: 'but the simple',
      root: 'peti',
      prefixes: ['u'],
      suffixes: ['im'],
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'absolute',
        type: 'noun'
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'עָבְרוּ',
      transliteration: 'avru',
      englishLiteral: 'pass-on',
      englishNatural: 'go on',
      root: 'avar',
      order: 6,
      morphology: {
        gender: 'neuter',
        number: 'plural',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb'
      },
    },
    {
      hebrew: 'וְנֶעֱנָשׁוּ',
      transliteration: 'veNeEnashu',
      englishLiteral: 'and-are-punished',
      englishNatural: 'and are punished',
      root: 'anash',
      prefixes: ['ve', 'ne'],
      suffixes: ['u'],
      order: 7,
      morphology: {
        gender: 'neuter',
        number: 'plural',
        person: '3rd',
        tense: 'perfect',
        stem: 'niphal',
        type: 'verb'
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew: 'עָרוּם רָאָה רָעָה וְנִסְתָּר וּפְתָיִים עָבְרוּ וְנֶעֱנָשׁוּ',
    transliteration: "arum ra'ah ra`ah veNiStar uFetayim avru veNeEnashu",
    englishLiteral:
      'Shrewd sees bad and-himself-hides, but-simples pass-on and-are-punished.',
    englishNatural:
      'Shrewd sees bad and hides himself; but the simple go on and are punished.',
    kjv: 'A prudent man foreseeth the evil, and hideth himself: but the simple pass on, and are punished.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
},
};
