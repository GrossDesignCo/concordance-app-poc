import { Verse } from '@/types';

// Example usage:
const genesis1_1: Verse = {
  meta: {
    chapter: 1,
    verse: 1,
    paragraphBreak: true,
  },
  words: [
    {
      hebrew: 'בְּרֵאשִׁ֖ית',
      transliteration: 'beReshit',
      englishLiteral: 'in-heading',
      englishNatural: 'in the beginning',
      root: 'ראשׁ',
      prefixes: ['ב'],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        state: 'absolute',
      },
    },
    {
      hebrew: 'בָּרָ֣א',
      transliteration: 'bara',
      englishLiteral: 'created',
      englishNatural: 'created',
      root: 'ברא',
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
    },
    {
      hebrew: 'אֱלֹהִ֑ים',
      transliteration: 'Elohim',
      englishLiteral: 'Gods',
      englishNatural: 'God',
      root: 'אלה',
      order: {
        hebrew: 3,
        english: 2, // In English, "God" moves before "created"
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
      },
    },
    {
      hebrew: 'אֵ֥ת',
      transliteration: 'et',
      englishLiteral: '↳',
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
      root: 'שמים',
      prefixes: ['ה'],
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
      prefixes: ['ו'],
      order: {
        hebrew: 6,
        english: 6, // Conjunction and direct object marker stay with their object
      },
    },
    {
      hebrew: 'הָאָֽרֶץ',
      transliteration: 'haAretz',
      englishLiteral: 'the-earth',
      englishNatural: 'the earth',
      root: 'ארץ',
      prefixes: ['ה'],
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
      },
    },
  ],
  translations: {
    literal: 'In-heading, created,(m,s) Gods, ↳ the-heavens and ↳ the-earth.',
    natural: 'In the beginning God created the heavens and the earth.',
    hebrewWordOrder: 'In-heading created Gods ↳ the-heavens and-↳ the-earth.',
  },
};

export default genesis1_1;
