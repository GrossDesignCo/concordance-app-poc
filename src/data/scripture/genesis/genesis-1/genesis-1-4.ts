import { Verse } from '@/types';

export const genesis_1_4: Verse = {
  meta: {
    chapter: 1,
    number: 4,
  },
  words: [
    {
      hebrew: 'וַיַּ֧רְא',
      transliteration: 'vaYar',
      englishLiteral: 'And-saw',
      englishNatural: 'And he saw',
      root: 'raah',
      prefixes: ['va'],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb'
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'אֱלֹהִ֛ים',
      transliteration: 'Elohim',
      englishLiteral: 'Gods',
      englishNatural: 'God',
      root: 'eloah',
      suffixes: ['im'],
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun'
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: {
        hebrew: 3,
        english: 3,
      },
    },
    {
      hebrew: 'הָא֖וֹר',
      transliteration: 'haOr',
      englishLiteral: 'the-light',
      englishNatural: 'the light',
      root: 'or',
      prefixes: ['ha'],
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun'
      },
    },
    {
      hebrew: 'כִּי־',
      transliteration: 'ki-',
      englishLiteral: 'that',
      englishNatural: 'that',
      root: 'ki',
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        type: 'conjunction'
      },
    },
    {
      hebrew: 'ט֑וֹב',
      transliteration: 'tov',
      englishLiteral: 'good',
      englishNatural: 'it was good',
      root: 'tov',
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'absolute',
        type: 'adjective'
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וַיַּבְדֵּ֣ל',
      transliteration: 'vaYavdel',
      englishLiteral: 'And-separated',
      englishNatural: 'And he separated',
      root: 'badal',
      prefixes: ['va'],
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'piel',
        type: 'verb'
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'אֱלֹהִ֔ים',
      transliteration: 'Elohim',
      englishLiteral: 'Gods',
      englishNatural: 'God',
      root: 'eloah',
      suffixes: ['im'],
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun'
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'בֵּ֥ין',
      transliteration: 'beyn',
      englishLiteral: 'between',
      englishNatural: 'between',
      root: 'beyn',
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        type: 'preposition'
      },
    },
    {
      hebrew: 'הָא֖וֹר',
      transliteration: 'haOr',
      englishLiteral: 'the-light',
      englishNatural: 'the light',
      root: 'or',
      prefixes: ['ha'],
      order: {
        hebrew: 10,
        english: 10,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun'
      },
    },
    {
      hebrew: 'וּבֵ֥ין',
      transliteration: 'uBeyn',
      englishLiteral: 'and-between',
      englishNatural: 'and between',
      root: 'beyn',
      prefixes: ['u'],
      order: {
        hebrew: 11,
        english: 11,
      },
      morphology: {
        type: 'preposition'
      },
    },
    {
      hebrew: 'הַחֹֽשֶׁךְ',
      transliteration: 'haChoshekh',
      englishLiteral: 'the-darkness',
      englishNatural: 'the darkness',
      root: 'choshekh',
      prefixes: ['ha'],
      order: {
        hebrew: 12,
        english: 12,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun'
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: {
        hebrew: 2,
        english: 2,
      },
    },
  ],
  expectedTranslations: {
    hebrew: 'וַיַּ֧רְא אֱלֹהִ֛ים אֶת־הָא֖וֹר כִּי־ט֑וֹב וַיַּבְדֵּ֣ל אֱלֹהִ֔ים בֵּ֥ין הָא֖וֹר וּבֵ֥ין הַחֹֽשֶׁךְ׃',
    transliteration: 'vaYar Elohim et-haOr ki-tov vaYavdel Elohim beyn haOr uBeyn haChoshekh',
    englishLiteral: 'And-saw, Gods, ↳ the-light that good, And-separated, Gods, between the-light and-between the-darkness.',
    englishNatural: 'And God saw the light, that it was good, and God separated between the light and between the darkness.',
  },
}; 