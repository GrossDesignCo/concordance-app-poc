import { Verse } from '@/types';
import {
  prefixes,
  roots,
  suffixes,
  specialElements,
} from '../../../dictionary';

export const genesis_1_1: Verse = {
  meta: {
    chapter: 1,
    verse: 1,
  },
  words: [
    {
      hebrew: 'בְּרֵאשִׁ֖ית',
      transliteration: 'beReshit',
      englishLiteral: 'In-heading',
      englishNatural: 'In heading',
      root: roots.rosh,
      prefixes: [prefixes.be],
      suffixes: [suffixes.it],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        state: 'absolute',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'בָּרָ֣א',
      transliteration: 'bara',
      englishLiteral: 'created',
      englishNatural: 'created',
      root: roots.bara,
      rootAppearance: {
        hebrew: 'בָּרָ֣א',
        conjugation: 'perfect 3rd person masculine singular',
      },
      order: {
        hebrew: 2,
        english: 3, // In English, "created" comes after "God"
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'אֱלֹהִ֑ים',
      transliteration: 'Elohim',
      englishLiteral: 'Gods',
      englishNatural: 'God',
      root: roots.eloah,
      suffixes: [suffixes.im],
      order: {
        hebrew: 3,
        english: 2, // In English, "God" moves before "created"
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'אֵ֥ת',
      transliteration: 'et',
      englishLiteral: '↳',
      root: specialElements.directObjectMarker,
      order: {
        hebrew: 4,
        english: 4, // Direct object marker typically aligns with its object
      },
    },
    {
      hebrew: 'הַשָּׁמַ֖יִם',
      transliteration: 'haShamayim',
      englishLiteral: 'the-heavens',
      englishNatural: 'the heavens',
      root: roots.shamayim,
      prefixes: [prefixes.ha],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
      },
    },
    {
      hebrew: 'וְאֵ֥ת',
      transliteration: 'veEt',
      englishLiteral: 'and-↳',
      englishNatural: 'and',
      root: specialElements.directObjectMarker,
      prefixes: [prefixes.ve],
      order: {
        hebrew: 6,
        english: 6, // Conjunction and direct object marker stay with their object
      },
    },
    {
      hebrew: 'הָאָֽרֶץ',
      transliteration: 'haAretz',
      englishLiteral: 'the-land',
      englishNatural: 'the land',
      root: roots.eretz,
      prefixes: [prefixes.ha],
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
      lineBreaksAfter: 2,
    },
  ],
  translations: {
    hebrew: 'בְּרֵאשִׁ֖ית בָּרָ֣א אֱלֹהִ֑ים אֵ֥ת הַשָּׁמַ֖יִם וְאֵ֥ת הָאָֽרֶץ',
    transliteration: 'beReshit bara Elohim et haShamayim veEt haAretz',
    englishLiteral: 'In-heading, created, Gods, ↳ the-heavens and-↳ the-land.',
    englishNatural: 'In heading, God created the heavens and the land.',
  },
};
