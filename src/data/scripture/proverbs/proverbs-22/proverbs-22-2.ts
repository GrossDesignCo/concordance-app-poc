import { Verse } from '@/types';

export const proverbs_22_2: Verse = {
  meta: {
    chapter: 22,
    number: 2,
  },
  words: [
    {
      hebrew: 'עָשִׁיר',
      transliteration: 'ashir',
      englishLiteral: 'Rich',
      englishNatural: 'Rich',
      root: 'ashar',
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'absolute',
        type: 'adjective',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'וָרָשׁ',
      transliteration: 'vaRash',
      englishLiteral: 'and-Poor',
      englishNatural: 'and Poor',
      root: 'rash',
      prefixes: ['va'],
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'absolute',
        type: 'adjective',
      },
    },
    {
      hebrew: 'נִפְגָּשׁוּ',
      transliteration: 'niFgashu',
      englishLiteral: 'meet',
      englishNatural: 'meet',
      root: 'pagash',
      prefixes: ['ni'],
      suffixes: ['u'],
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'perfect',
        stem: 'niphal',
        type: 'verb',
      },
    },
    {
      hebrew: 'זֶה',
      transliteration: 'zeh',
      englishLiteral: 'this',
      englishNatural: 'together',
      root: 'zeh',
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'pronoun',
      },
      grammarSuffix: {
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'עִם',
      transliteration: 'im',
      englishLiteral: 'with',
      englishNatural: 'with',
      root: 'im',
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'זֶה',
      transliteration: 'zeh',
      englishLiteral: 'this',
      englishNatural: 'this',
      root: 'zeh',
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'pronoun',
      },
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'I_AM',
      englishNatural: 'I-AM',
      root: 'yhwh',
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'עָשָׂה',
      transliteration: 'asah',
      englishLiteral: 'made',
      englishNatural: 'made',
      root: 'asah',
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
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
    hebrew: 'עָשִׁיר וָרָשׁ נִפְגָּשׁוּ זֶה עִם זֶה יְהוָה עָשָׂה',
    transliteration: 'ashir vaRash niFgashu zeh im zeh YHWH asah',
    englishLiteral: 'Rich and-Poor meet this with this I_AM made.',
    englishNatural: 'Rich and Poor meet together; with this I-AM made.',
    kjv: 'The rich and poor meet together: the LORD is the maker of them all.',
    lastReviewed: { name: 'Matt Gross', date: '2025-05-12' },
  },
}; 