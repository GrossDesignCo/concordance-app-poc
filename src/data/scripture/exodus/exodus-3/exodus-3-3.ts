import { Verse } from '@/types';

export const exodus_3_3: Verse = {
  meta: {
    book: 'Exodus',
    chapter: 3,
    verse: 3,
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
        englishNatural: ',',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'מֹשֶׁה',
      transliteration: 'Moshe',
      englishLiteral: 'Drawn_Out (Moses)',
      englishNatural: 'And Drawn-Out (Moses)',
      root: 'moshe',
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
      hebrew: 'אָסֻרָה־',
      transliteration: 'asurah-',
      englishLiteral: 'I-will-turn_aside-',
      englishNatural: 'I will turn-aside',
      root: 'sur',
      order: {
        hebrew: 3,
        english: 2,
      },
      morphology: {
        number: 'singular',
        person: '1st',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarPrefix: {
        englishLiteral: '"',
        englishNatural: '"',
      },
    },
    {
      hebrew: 'נָּא',
      transliteration: 'nah',
      englishLiteral: 'please',
      englishNatural: 'please',
      root: 'anna',
      order: 4,
      morphology: {
        type: 'particle',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וְאֶרְאֶה',
      transliteration: 'veEreh',
      englishLiteral: 'and-will-see',
      englishNatural: 'and see',
      root: 'raah',
      prefixes: ['ve'],
      order: 5,
      morphology: {
        number: 'singular',
        person: '1st',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: 6,
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'הַמַּרְאֶה',
      transliteration: 'haMareh',
      englishLiteral: 'the-sight',
      englishNatural: 'sight',
      root: 'mareh',
      prefixes: ['ha'],
      order: {
        hebrew: 7,
        english: 9,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'הַגָּדֹל',
      transliteration: 'haGadol',
      englishLiteral: 'the-great',
      englishNatural: 'great',
      root: 'gadol',
      prefixes: ['ha'],
      order: 8,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'adjective',
      },
    },
    {
      hebrew: 'הַזֶּה',
      transliteration: 'haZeh',
      englishLiteral: 'the-this',
      englishNatural: 'this',
      root: 'zeh',
      prefixes: ['ha'],
      order: {
        hebrew: 9,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'pronoun',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'מַדּוּעַ',
      transliteration: 'madua',
      englishLiteral: 'why',
      englishNatural: 'why',
      root: 'madua',
      order: 10,
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'לֹא־',
      transliteration: 'lo-',
      englishLiteral: 'not-',
      englishNatural: 'not',
      root: 'lo',
      order: {
        hebrew: 11,
        english: 13,
      },
      morphology: {
        type: 'adverb',
      },
      grammarSuffix: {
        englishNatural: '."',
      },
      lineBreaksAfter: {
        english: 1,
      },
    },
    {
      hebrew: 'יִבְעַר',
      transliteration: 'yivar',
      englishLiteral: 'burns',
      englishNatural: 'burns',
      root: 'baar',
      order: 12,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'הַסְּנֶה',
      transliteration: 'haSeneh',
      englishLiteral: 'the-thornbush',
      englishNatural: 'the thornbush',
      root: 'seneh',
      prefixes: ['ha'],
      order: {
        hebrew: 13,
        english: 11,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: '."',
      },
      lineBreaksAfter: {
        hebrew: 1,
      },
    },
  ],
  expectedTranslations: {
    hebrew:
      'וַיֹּאמֶר מֹשֶׁה אָסֻרָה־נָּא וְאֶרְאֶה אֶת־הַמַּרְאֶה הַגָּדֹל הַזֶּה מַדּוּעַ לֹא־יִבְעַר הַסְּנֶה',
    transliteration:
      'vaYomer Moshe asurah-nah veEreh et-haMareh haGadol haZeh madua lo-yivar haSeneh',
    englishLiteral:
      'And-said Drawn_Out (Moses) "I-will-turn_aside- please and-will-see ↳ the-sight the-great the-this, why not- burns the-thornbush."',
    englishNatural:
      'And Drawn-Out (Moses) said, "I will turn-aside please, and see this great sight, why the thornbush burns not."',
    kjv: 'And Moses said, I will now turn aside, and see this great sight, why the bush is not burnt.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-24' },
  },
};
