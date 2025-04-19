import { Verse, Chapter } from '@/types';

// Example usage:
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
      root: {
        hebrew: 'ראשׁ',
        transliteration: 'rosh',
        englishLiteral: 'head',
        englishNatural: 'begin',
      },
      prefixes: [
        {
          hebrew: 'ב',
          transliteration: 'be',
          englishLiteral: 'in',
          englishNatural: 'in the',
        },
      ],
      suffixes: [
        {
          hebrew: 'ית',
          transliteration: 'it',
          englishLiteral: 'ing',
          englishNatural: 'ing',
        },
      ],
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
      },
    },
    {
      hebrew: 'בָּרָ֣א',
      transliteration: 'bara',
      englishLiteral: 'created',
      englishNatural: 'created',
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
      root: {
        hebrew: 'שמים',
        transliteration: 'shamayim',
        englishLiteral: 'heavens',
        englishNatural: 'heavens',
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
      root: {
        hebrew: 'את',
        transliteration: 'et',
        englishLiteral: '↳',
        englishNatural: '',
      },
      prefixes: [
        {
          hebrew: 'ו',
          transliteration: 've',
          englishLiteral: 'and',
          englishNatural: 'and',
        },
      ],
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
      root: {
        hebrew: 'ארץ',
        transliteration: 'eretz',
        englishLiteral: 'land',
        englishNatural: 'land',
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
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
      },
      grammarSuffix: {
        englishLiteral: '.',
      },
      lineBreaksAfter: 2,
    },
  ],
  translations: {
    literal: 'In-heading, created,(m,s) Gods, ↳ the-heavens and ↳ the-land.',
    natural: 'In the beginning God created the heavens and the land.',
    hebrewWordOrder: 'In-heading created Gods ↳ the-heavens and-↳ the-land.',
  },
};

// Genesis 1:2 data structure
export const genesis_1_2: Verse = {
  meta: {
    chapter: 1,
    verse: 2,
  },
  words: [
    {
      hebrew: 'וְהָאָ֗רֶץ',
      transliteration: 'veHaAretz',
      englishLiteral: 'And-the-earth',
      englishNatural: 'And the earth',
      root: {
        hebrew: 'ארץ',
        transliteration: 'eretz',
        englishLiteral: 'earth',
        englishNatural: 'earth',
      },
      prefixes: [
        {
          hebrew: 'ו',
          transliteration: 've',
          englishLiteral: 'and',
          englishNatural: 'and',
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
        gender: 'feminine',
        number: 'singular',
      },
    },
    {
      hebrew: 'הָיְתָ֥ה',
      transliteration: 'haytah',
      englishLiteral: 'was',
      englishNatural: 'was',
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
      },
    },
    {
      hebrew: 'תֹ֙הוּ֙',
      transliteration: 'Tohu',
      englishLiteral: 'waste',
      englishNatural: 'formless',
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
      hebrew: 'וָבֹ֔הוּ',
      transliteration: 'vaVohu',
      englishLiteral: 'and-void',
      englishNatural: 'and void',
      root: {
        hebrew: 'בהו',
        transliteration: 'vohu',
        englishLiteral: 'void',
        englishNatural: 'void',
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
        hebrew: 4,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'absolute',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וְחֹ֖שֶׁךְ',
      transliteration: 'veChoshekh',
      englishLiteral: 'and-darkness',
      englishNatural: 'and darkness',
      root: {
        hebrew: 'חשך',
        transliteration: 'choshekh',
        englishLiteral: 'darkness',
        englishNatural: 'darkness',
      },
      prefixes: [
        {
          hebrew: 'ו',
          transliteration: 've',
          englishLiteral: 'and',
          englishNatural: 'and',
        },
      ],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'absolute',
      },
    },
    {
      hebrew: 'עַל־פְּנֵ֣י',
      transliteration: 'al-peney',
      englishLiteral: 'on-face-of',
      englishNatural: 'was over',
      root: {
        hebrew: 'פנה',
        transliteration: 'panah',
        englishLiteral: 'face',
        englishNatural: '',
      },
      prefixes: [
        {
          hebrew: 'על',
          transliteration: 'al',
          englishLiteral: 'on',
          englishNatural: 'was over',
        },
      ],
      suffixes: [
        {
          hebrew: 'י',
          transliteration: 'ey',
          englishLiteral: 'of',
          englishNatural: '',
        },
      ],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
      },
    },
    {
      hebrew: 'תְהֹ֑ום',
      transliteration: 'tehom',
      englishLiteral: 'deep',
      englishNatural: 'the deep',
      root: 'תהם',
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        state: 'absolute',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: '.',
      },
    },
    {
      hebrew: 'וְר֣וּחַ',
      transliteration: 'veRuach',
      englishLiteral: 'And-Wind',
      englishNatural: 'And the Spirit of',
      root: {
        hebrew: 'רוח',
        transliteration: 'ruach',
        englishLiteral: 'Wind',
        englishNatural: 'Spirit',
      },
      prefixes: [
        {
          hebrew: 'ו',
          transliteration: 've',
          englishLiteral: 'and',
          englishNatural: 'and the',
        },
      ],
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        state: 'construct',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'אֱלֹהִ֔ים',
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
        hebrew: 9,
        english: 9,
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
      hebrew: 'מְרַחֶ֖פֶת',
      transliteration: 'meRachefet',
      englishLiteral: 'was-stirring',
      englishNatural: 'was hovering',
      root: {
        hebrew: 'רחף',
        transliteration: 'rachaf',
        englishLiteral: 'stir',
        englishNatural: 'hover',
      },
      prefixes: [
        {
          hebrew: 'מ',
          transliteration: 'me',
          englishLiteral: 'was',
          englishNatural: 'was',
        },
      ],
      suffixes: [
        {
          hebrew: 'ת',
          transliteration: 'et',
          englishLiteral: 'ing',
          englishNatural: 'ing',
        },
      ],
      order: {
        hebrew: 10,
        english: 10,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        stem: 'piel',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'עַל־פְּנֵ֥י',
      transliteration: 'al-peney',
      englishLiteral: 'on-face-of',
      englishNatural: 'on the face of',
      root: {
        hebrew: 'פנה',
        transliteration: 'panah',
        englishLiteral: 'face',
        englishNatural: '',
      },
      prefixes: [
        {
          hebrew: 'על',
          transliteration: 'al',
          englishLiteral: 'on',
          englishNatural: 'over',
        },
      ],
      suffixes: [
        {
          hebrew: 'י',
          transliteration: 'ey',
          englishLiteral: 'of',
          englishNatural: '',
        },
      ],
      order: {
        hebrew: 11,
        english: 11,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
      },
    },
    {
      hebrew: 'הַמָּֽיִם',
      transliteration: 'haMayim',
      englishLiteral: 'the-waters',
      englishNatural: 'the waters',
      root: {
        hebrew: 'מים',
        transliteration: 'mayim',
        englishLiteral: 'waters',
        englishNatural: 'waters',
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
        hebrew: 12,
        english: 12,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
      },
      lineBreaksAfter: 2,
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
    },
  ],
  translations: {
    literal:
      'And-the-earth was(f,s) waste and-void, and-darkness on-face-of deep,\nAnd-Wind-of Gods, stirring,(f,s) on-face-of the-waters.',
    natural:
      'And the earth was formless and void, and darkness was over the face of the deep, and the Spirit of God was hovering over the face of the waters.',
    hebrewWordOrder:
      'And-the-earth was waste and-void and-darkness on-face-of deep and-Wind-of Gods stirring on-face-of the-waters.',
  },
};

export const genesis_1_3: Verse = {
  meta: {
    chapter: 1,
    verse: 3,
  },
  words: [
    {
      hebrew: 'וַיֹּאמֶר',
      transliteration: 'vaYomer',
      englishLiteral: 'And-said',
      englishNatural: 'And said',
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
        hebrew: 1,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
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
        hebrew: 2,
        english: 2,
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
      hebrew: 'יְהִי',
      transliteration: 'yehi',
      englishLiteral: 'be',
      englishNatural: 'let there be',
      root: {
        hebrew: 'היה',
        transliteration: 'hayah',
        englishLiteral: 'be',
        englishNatural: 'be',
      },
      prefixes: [
        {
          hebrew: 'י',
          transliteration: 'ye',
          englishLiteral: '',
          englishNatural: 'let there',
        },
      ],
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
      },
      grammarPrefix: {
        englishLiteral: '“',
      },
      grammarSuffix: {
        englishLiteral: ';',
      },
    },
    {
      hebrew: 'אוֹר',
      transliteration: 'or',
      englishLiteral: 'light',
      englishNatural: 'light',
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'absolute',
      },
      grammarSuffix: {
        englishLiteral: '.”',
      },
    },
    {
      hebrew: 'וַיְהִי',
      transliteration: 'vaYehi',
      englishLiteral: 'And-was',
      englishNatural: 'and there was',
      root: {
        hebrew: 'היה',
        transliteration: 'hayah',
        englishLiteral: 'was',
        englishNatural: 'was',
      },
      prefixes: [
        {
          hebrew: 'ו',
          transliteration: 'va',
          englishLiteral: 'and',
          englishNatural: 'and there',
        },
      ],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
      },
      lineBreaksBefore: 1,
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'אוֹר',
      transliteration: 'or',
      englishLiteral: 'light',
      englishNatural: 'light',
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'absolute',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
    },
  ],
  translations: {
    literal: 'And-said Gods be; light, And-was light.',
    natural: 'And God said, "Let there be light," and there was light.',
    hebrewWordOrder: 'And-said Gods let-there-be light And-was light.',
  },
};

export const genesis_1: Chapter = {
  number: 1,
  verses: [genesis_1_1, genesis_1_2, genesis_1_3],
};
