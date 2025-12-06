import { Verse } from '@/types';

export const genesis_1_17: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 1,
    verse: 17,
  },
  words: [
    {
      hebrew: 'וַיִּתֵּ֥ן',
      transliteration: 'vaYiten',
      englishLiteral: 'And-put',
      englishNatural: 'put',
      root: 'natan',
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
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'אֹתָ֛ם',
      transliteration: 'otam',
      englishLiteral: 'them',
      englishNatural: 'them',
      root: 'et',
      suffixes: ['am'],
      order: {
        hebrew: 2,
        english: 3,
      },
      morphology: {
        type: 'pronoun',
      },
    },
    {
      hebrew: 'אֱלֹהִ֖ים',
      transliteration: 'Elohim',
      englishLiteral: 'Gods',
      englishNatural: 'And God',
      root: 'eloah',
      suffixes: ['im'],
      order: {
        hebrew: 3,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'בִּרְקִ֣יעַ',
      transliteration: 'biRqia',
      englishLiteral: 'in-hammering_out',
      englishNatural: 'in the hammering-out',
      root: 'raqia',
      prefixes: ['be'],
      order: 4,
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
      hebrew: 'הַשָּׁמָ֑יִם',
      transliteration: 'haShamayim',
      englishLiteral: 'the-skies',
      englishNatural: 'the skies',
      root: 'shamayim',
      prefixes: ['ha'],
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'לְהָאִ֖יר',
      transliteration: 'leHair',
      englishLiteral: 'to-shine_light',
      englishNatural: 'to shine-light',
      root: 'or',
      prefixes: ['le'],
      order: 6,
      morphology: {
        type: 'verb',
      },
    },
    {
      hebrew: 'עַל־',
      transliteration: 'al-',
      englishLiteral: 'over',
      englishNatural: 'over',
      root: 'al',
      order: 7,
      morphology: {
        type: 'preposition',
      },
    },
    {
      hebrew: 'הָאָֽרֶץ׃',
      transliteration: 'haAretz',
      englishLiteral: 'the-land',
      englishNatural: 'the land',
      root: 'eretz',
      prefixes: ['ha'],
      order: 8,
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
    hebrew: 'וַיִּתֵּ֥ן אֹתָ֛ם אֱלֹהִ֖ים בִּרְקִ֣יעַ הַשָּׁמָ֑יִם לְהָאִ֖יר עַל־הָאָֽרֶץ׃',
    transliteration: 'vaYiten otam Elohim biRqia haShamayim leHair al-haAretz',
    englishLiteral: 'And-put them Gods in-hammering_out, the-skies, to-shine_light over the-land.',
    englishNatural: 'And God put them in the hammering-out, the skies, to shine-light over the land.',
    kjv: 'And God set them in the firmament of the heaven to give light upon the earth,',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
  },
}; 