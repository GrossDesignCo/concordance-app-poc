import { Verse } from '@/types';

export const genesis_1_6: Verse = {
  meta: {
    chapter: 1,
    number: 6,
  },
  words: [
    {
      hebrew: 'וַיֹּאמֶר',
      transliteration: 'vaYomer',
      englishLiteral: 'And-said',
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
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'אֱלֹהִים',
      transliteration: 'Elohim',
      englishLiteral: 'Gods',
      englishNatural: 'And God',
      root: 'eloah',
      suffixes: ['im'],
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'יְהִי',
      transliteration: 'yehi',
      englishLiteral: 'Let-be',
      englishNatural: 'be',
      root: 'hayah',
      prefixes: ['ye'],
      order: {
        hebrew: 3,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'jussive',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'רָקִיעַ',
      transliteration: 'raqia',
      englishLiteral: 'canopy',
      englishNatural: 'Let canopy',
      root: 'raqia',
      order: {
        hebrew: 4,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarPrefix: {
        englishNatural: '"',
      },
    },
    {
      hebrew: 'בְּתוֹךְ',
      transliteration: 'beTokh',
      englishLiteral: 'in-midst-of',
      englishNatural: 'in the midst of',
      root: 'tokh',
      prefixes: ['be'],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הַמָּיִם֙',
      transliteration: 'haMayim',
      englishLiteral: 'the-waters',
      englishNatural: 'the waters',
      root: 'mayim',
      prefixes: ['ha'],
      order: {
        hebrew: 6,
        english: 6,
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
      lineBreaksAfter: {
        hebrew: 1,
        english: 1,
      },
    },
    {
      hebrew: 'וִיהִי',
      transliteration: 'vihi',
      englishLiteral: 'and-let-be',
      englishNatural: 'and let it be',
      root: 'hayah',
      prefixes: ['ve'],
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'jussive',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'מַבְדִּיל',
      transliteration: 'mavdil',
      englishLiteral: 'separating',
      englishNatural: 'separating',
      root: 'badal',
      prefixes: ['me'],
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        tense: 'participle',
        stem: 'hiphil',
        type: 'verb',
      },
    },
    {
      hebrew: 'בֵּין',
      transliteration: 'beyn',
      englishLiteral: 'between',
      englishNatural: 'between',
      root: 'beyn',
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'מַיִם',
      transliteration: 'mayim',
      englishLiteral: 'waters',
      englishNatural: 'waters',
      root: 'mayim',
      order: {
        hebrew: 10,
        english: 10,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'לָמָיִם',
      transliteration: 'laMayim',
      englishLiteral: 'to-waters',
      englishNatural: 'and waters',
      root: 'mayim',
      prefixes: ['la'],
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
        englishLiteral: '.',
        englishNatural: '."',
      },
      lineBreaksAfter: {
        hebrew: 2,
        english: 2,
      },
    },
  ],
  expectedTranslations: {
    hebrew: 'וַיֹּאמֶר אֱלֹהִים יְהִי רָקִיעַ בְּתוֹךְ הַמָּיִם֙ וִיהִי מַבְדִּיל בֵּין מַיִם לָמָיִם',
    transliteration: 'vaYomer Elohim yehi raqia beTokh haMayim vihi mavdil beyn mayim laMayim',
    englishLiteral: 'And-said, Gods, Let-be canopy in-midst-of the-waters, and-let-be separating between waters to-waters.',
    englishNatural: 'And God said, "Let canopy be in the midst of the waters, and let it be separating between waters and waters."',
    lastReviewed: { name: 'Matt Gross', date: '2025-05-05' },
  },
}; 