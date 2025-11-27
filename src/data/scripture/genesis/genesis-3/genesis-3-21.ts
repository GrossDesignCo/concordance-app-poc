import { Verse } from '@/types';

export const genesis_3_21: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 3,
    verse: 21,
  },
  words: [
    {
      hebrew: 'וַיַּעַשׂ',
      transliteration: 'vayYaas',
      englishLiteral: 'And-he-made',
      englishNatural: 'made',
      root: 'asah',
      prefixes: ['va', 'yi'],
      order: {
        hebrew: 1,
        english: 3,
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
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is',
      englishNatural: 'And He-Who-Is',
      root: 'yhwh',
      order: {
        hebrew: 2,
        english: 1,
      },
      morphology: {
        type: 'noun',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'אֱלֹהִים',
      transliteration: 'Elohim',
      englishLiteral: 'Gods',
      englishNatural: 'God',
      root: 'eloah',
      suffixes: ['im'],
      order: {
        hebrew: 3,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'לְאָדָם',
      transliteration: 'leAdam',
      englishLiteral: 'to-Earth (Adam)',
      englishNatural: 'to Earth (Adam)',
      root: 'adam',
      prefixes: ['le'],
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'וּלְאִשְׁתּוֹ',
      transliteration: 'uleIshto',
      englishLiteral: 'and-to-woman-his',
      englishNatural: 'and to his woman',
      root: 'ishah',
      prefixes: ['u', 'le'],
      suffixes: ['o'],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'כָּתְנוֹת',
      transliteration: 'kotnot',
      englishLiteral: 'tunics',
      englishNatural: 'tunics',
      root: 'kuttonet',
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'feminine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'עוֹר',
      transliteration: 'or',
      englishLiteral: 'skin',
      englishNatural: 'of skin',
      root: 'or_skin',
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'וַיַּלְבִּשֵׁם׃',
      transliteration: 'vayYaLbishem',
      englishLiteral: 'and-he-clothed-them',
      englishNatural: 'and clothed them',
      root: 'labash',
      prefixes: ['va', 'yi'],
      suffixes: ['am'],
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'hiphil',
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
    hebrew:
      'וַיַּעַשׂ יְהוָה אֱלֹהִים לְאָדָם וּלְאִשְׁתּוֹ כָּתְנוֹת עוֹר וַיַּלְבִּשֵׁם׃',
    transliteration:
      'vayYaas YHWH Elohim leAdam uleIshto kotnot or vayYaLbishem',
    englishLiteral:
      'And-he-made He_Who_Is Gods to-Earth (Adam) and-to-woman-his; tunics skin and-he-clothed-them.',
    englishNatural:
      'And He-Who-Is God made to Earth (Adam) and to his woman; tunics of skin and clothed them.',
    kjv: 'Unto Adam also and to his wife did the LORD God make coats of skins, and clothed them.',
    lastReviewed: { name: 'Matt Gross', date: '2025-11-27' },
  },
};
