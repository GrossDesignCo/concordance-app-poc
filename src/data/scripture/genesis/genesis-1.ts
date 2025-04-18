import { Verse, Chapter } from '@/types';

// Example usage:
export const genesis1_1: Verse = {
  meta: {
    chapter: 1,
    verse: 1,
    paragraphBreak: true,
  },
  words: [
    {
      hebrew: 'בְּרֵאשִׁ֖ית',
      transliteration: 'beReshit',
      englishLiteral: 'In-heading',
      englishNatural: 'In heading',
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
      grammarSuffix: {
        englishLiteral: ',',
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
      grammarSuffix: {
        englishLiteral: ',',
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
      englishNatural: 'and',
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
      grammarSuffix: {
        englishLiteral: '.',
      },
      lineBreaksAfter: 2,
    },
  ],
  translations: {
    literal: 'In-heading, created,(m,s) Gods, ↳ the-heavens and ↳ the-earth.',
    natural: 'In the beginning God created the heavens and the earth.',
    hebrewWordOrder: 'In-heading created Gods ↳ the-heavens and-↳ the-earth.',
  },
};

// Genesis 1:2 data structure
export const genesis1_2: Verse = {
  meta: {
    chapter: 1,
    verse: 2,
    paragraphBreak: false,
  },
  words: [
    {
      hebrew: 'וְהָאָ֗רֶץ',
      transliteration: 'veHaAretz',
      englishLiteral: 'And-the-earth',
      englishNatural: 'And the earth',
      root: 'ארץ',
      prefixes: ['ו', 'ה'],
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
      root: 'היה',
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
      root: 'תהו',
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
      root: 'בהו',
      prefixes: ['ו'],
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
      root: 'חשך',
      prefixes: ['ו'],
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
      root: 'פנה',
      prefixes: ['על'],
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
      englishLiteral: 'And-Wind-of',
      englishNatural: 'And the Spirit of',
      root: 'רוח',
      prefixes: ['ו'],
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
      root: 'אלה',
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
      root: 'רחף',
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
      root: 'פנה',
      prefixes: ['על'],
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
      root: 'מים',
      prefixes: ['ה'],
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

export const genesis1_3: Verse = {
  meta: {
    chapter: 1,
    verse: 3,
    paragraphBreak: false,
  },
  words: [
    {
      hebrew: 'וַיֹּאמֶר',
      transliteration: 'vaYomer',
      englishLiteral: 'And-said',
      englishNatural: 'And said',
      root: 'אמר',
      prefixes: ['ו'],
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
      root: 'אלה',
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
      root: 'היה',
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
      root: 'אור',
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
      root: 'היה',
      prefixes: ['ו'],
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
      root: 'אור',
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
    literal: 'And-said Gods let-there-be light, And-was light.',
    natural: 'And God said, "Let there be light," and there was light.',
    hebrewWordOrder: 'And-said Gods let-there-be light And-was light.',
  },
};

export const genesis_1: Chapter = {
  number: 1,
  verses: [genesis1_1, genesis1_2, genesis1_3],
};
