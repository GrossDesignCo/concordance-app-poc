import { Chapter, Verse } from '@/types';

export const genesis_3_1: Verse = {
  meta: {
    chapter: 3,
    verse: 1,
  },
  words: [
    {
      hebrew: 'וְהַנָּחָשׁ',
      transliteration: 'veHaNachash',
      englishLiteral: 'And-the-serpent',
      englishNatural: 'Now the serpent',
      root: {
        hebrew: 'נחשׁ',
        transliteration: 'nachash',
        englishLiteral: 'serpent',
        englishNatural: 'serpent',
      },
      prefixes: [
        {
          hebrew: 'ו',
          transliteration: 've',
          englishLiteral: 'and',
          englishNatural: 'now',
        },
        {
          hebrew: 'ה',
          transliteration: 'ha',
          englishLiteral: 'the',
          englishNatural: 'the',
        },
      ],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
      },
    },
    {
      hebrew: 'הָיָה',
      transliteration: 'hayah',
      englishLiteral: 'was',
      englishNatural: 'was',
      order: {
        hebrew: 2,
        english: 2,
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
      hebrew: 'עָרוּם',
      transliteration: 'arum',
      englishLiteral: 'shrewd',
      englishNatural: 'more crafty',
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'absolute',
      },
    },
    {
      hebrew: 'מִכֹּל',
      transliteration: 'miKol',
      englishLiteral: 'from-all',
      englishNatural: 'than any',
      root: {
        hebrew: 'כל',
        transliteration: 'kol',
        englishLiteral: 'all',
        englishNatural: 'any',
      },
      prefixes: [
        {
          hebrew: 'מ',
          transliteration: 'mi',
          englishLiteral: 'from',
          englishNatural: 'than',
        },
      ],
      order: {
        hebrew: 4,
        english: 4,
      },
    },
    {
      hebrew: 'חַיַּת',
      transliteration: 'chayat',
      englishLiteral: 'living-thing-of',
      englishNatural: 'beast of',
      root: {
        hebrew: 'חיה',
        transliteration: 'chayah',
        englishLiteral: 'living-thing',
        englishNatural: 'beast',
      },
      prefixes: [],
      suffixes: [
        {
          hebrew: 'ת',
          transliteration: '',
          englishLiteral: 'of',
          englishNatural: 'of',
        },
      ],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        state: 'construct',
      },
    },
    {
      hebrew: 'הַשָּׂדֶה',
      transliteration: 'haSadeh',
      englishLiteral: 'the-field',
      englishNatural: 'the field',
      root: {
        hebrew: 'שׂדה',
        transliteration: 'sadeh',
        englishLiteral: 'field',
        englishNatural: 'field',
      },
      prefixes: [
        {
          hebrew: 'ה',
          transliteration: 'ha',
          englishLiteral: 'the',
          englishNatural: 'the',
        },
      ],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
      },
    },
    {
      hebrew: 'אֲשֶׁר',
      transliteration: 'asher',
      englishLiteral: 'which',
      englishNatural: 'which',
      order: {
        hebrew: 7,
        english: 7,
      },
    },
    {
      hebrew: 'עָשָׂה',
      transliteration: 'asah',
      englishLiteral: 'made',
      englishNatural: 'had made',
      order: {
        hebrew: 8,
        english: 10, // Changes position in English
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
        englishNatural: '.',
      },
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'Iam',
      englishLiteral: 'Iam',
      englishNatural: 'the LORD',
      order: {
        hebrew: 9,
        english: 8, // Moves before "made" in English
      },
    },
    {
      hebrew: 'אֱלֹהִים',
      transliteration: 'Elohim',
      englishLiteral: 'Gods',
      englishNatural: 'God',
      root: {
        hebrew: 'אלה',
        transliteration: 'eloah',
        englishLiteral: 'God',
        englishNatural: 'God',
      },
      suffixes: [
        {
          hebrew: 'ים',
          transliteration: 'im',
          englishLiteral: 's',
          englishNatural: '',
        },
      ],
      order: {
        hebrew: 10,
        english: 9,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
    },
    {
      hebrew: 'וַיֹּאמֶר',
      transliteration: 'vaYomer',
      englishLiteral: 'And-said',
      englishNatural: 'He said',
      root: {
        hebrew: 'אמר',
        transliteration: 'amar',
        englishLiteral: 'said',
        englishNatural: 'said',
      },
      prefixes: [
        {
          hebrew: 'ו',
          transliteration: 'va',
          englishLiteral: 'and',
          englishNatural: 'and',
        },
      ],
      order: {
        hebrew: 11,
        english: 11,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
      },
      lineBreaksBefore: 2,
    },
    {
      hebrew: 'אֶל',
      transliteration: 'el',
      englishLiteral: 'to',
      englishNatural: 'to',
      order: {
        hebrew: 12,
        english: 12,
      },
    },
    {
      hebrew: 'הָאִשָּׁה',
      transliteration: 'haIshah',
      englishLiteral: 'the-woman',
      englishNatural: 'the woman',
      root: {
        hebrew: 'אשׁה',
        transliteration: 'ishah',
        englishLiteral: 'woman',
        englishNatural: 'woman',
      },
      prefixes: [
        {
          hebrew: 'ה',
          transliteration: 'ha',
          englishLiteral: 'the',
          englishNatural: 'the',
        },
      ],
      order: {
        hebrew: 13,
        english: 13,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'אַף',
      transliteration: 'af',
      englishLiteral: 'Indeed',
      englishNatural: 'Indeed',
      order: {
        hebrew: 14,
        english: 14,
      },
      grammarPrefix: {
        englishLiteral: '“',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'כִּי',
      transliteration: 'ki',
      englishLiteral: 'that',
      englishNatural: '', // Often not translated in this context
      order: {
        hebrew: 15,
        english: 15,
      },
    },
    {
      hebrew: 'אָמַר',
      transliteration: 'amar',
      englishLiteral: 'said',
      englishNatural: 'did say',
      root: 'אמר',
      order: {
        hebrew: 16,
        english: 17, // Position shifts in English
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
      hebrew: 'אֱלֹהִים',
      transliteration: 'Elohim',
      englishLiteral: 'Gods',
      englishNatural: 'God',
      root: 'אלה',
      order: {
        hebrew: 17,
        english: 16, // Moves before "said" in English
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
      hebrew: 'לֹא',
      transliteration: 'lo',
      englishLiteral: 'not',
      englishNatural: 'not',
      order: {
        hebrew: 18,
        english: 18,
      },
    },
    {
      hebrew: 'תֹאכְלוּ',
      transliteration: 'tokhlu',
      englishLiteral: 'you-shall-eat',
      englishNatural: 'you shall eat',
      root: {
        hebrew: 'אכל',
        transliteration: 'akhal',
        englishLiteral: 'eat',
        englishNatural: 'eat',
      },
      prefixes: [
        {
          hebrew: 'ת',
          transliteration: 'tav',
          englishLiteral: 'you-shall',
          englishNatural: 'you shall',
        },
      ],
      suffixes: [
        {
          hebrew: 'ו',
          transliteration: '',
          englishLiteral: '',
          englishNatural: '',
        },
      ],

      order: {
        hebrew: 19,
        english: 19,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '2nd',
        tense: 'imperfect',
        stem: 'qal',
      },
    },
    {
      hebrew: 'מִכֹּל',
      transliteration: 'miKol',
      englishLiteral: 'from-all',
      englishNatural: 'from any',
      root: {
        hebrew: 'כל',
        transliteration: 'kol',
        englishLiteral: 'all',
        englishNatural: 'any',
      },
      prefixes: [
        {
          hebrew: 'מ',
          transliteration: 'mi',
          englishLiteral: 'from',
          englishNatural: 'from',
        },
      ],
      order: {
        hebrew: 20,
        english: 20,
      },
    },
    {
      hebrew: 'עֵץ',
      transliteration: 'etz',
      englishLiteral: 'tree',
      englishNatural: 'tree',
      order: {
        hebrew: 21,
        english: 21,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
      },
    },
    {
      hebrew: 'הַגָּן',
      transliteration: 'haGan',
      englishLiteral: 'the-garden',
      englishNatural: 'of the garden',
      root: {
        hebrew: 'גן',
        transliteration: 'gan',
        englishLiteral: 'garden',
        englishNatural: 'garden',
      },
      prefixes: [
        {
          hebrew: 'ה',
          transliteration: 'ha',
          englishLiteral: 'the',
          englishNatural: 'of the',
        },
      ],
      suffixes: [],
      order: {
        hebrew: 22,
        english: 22,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: '?”',
      },
    },
  ],
  translations: {
    literal:
      'And-the-serpent was shrewd from-all living-thing-of the-field which made Iam Gods. And-said,(m,s) to the-woman, indeed, that said Gods not you-shall-eat from-all tree the-garden?',
    natural:
      'Now the serpent was more crafty than any beast of the field which the LORD God had made. And he said to the woman, "Indeed, has God said, \'You shall not eat from any tree of the garden\'?"',
    hebrewWordOrder:
      'And-the-serpent was shrewd from-all living-thing-of the-field which Iam Gods made. And-said to the-woman, indeed, that Gods said not you-shall-eat from-all tree the-garden?',
  },
};

export const genesis_3: Chapter = {
  number: 3,
  verses: [genesis_3_1],
};
