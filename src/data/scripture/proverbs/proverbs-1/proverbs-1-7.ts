import { Verse } from '@/types';

export const proverbs_1_7: Verse = {
  meta: {
    book: 'Proverbs',
    chapter: 1,
    verse: 7,
  },
  words: [
    {
      hebrew: 'יִרְאַת',
      transliteration: 'yirat',
      englishLiteral: 'Fear-of',
      englishNatural: 'Fear of',
      root: 'yirah',
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is',
      englishNatural: 'He-Who-Is',
      root: 'yhwh',
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'רֵאשִׁית',
      transliteration: 'reshit',
      englishLiteral: 'heading-of',
      englishNatural: 'heading of',
      root: 'rosh',
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'דָּעַת',
      transliteration: 'daat',
      englishLiteral: 'knowledge',
      englishNatural: 'knowledge',
      root: 'daat',
      order: {
        hebrew: 4,
        english: 4,
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
      hebrew: 'חָכְמָה',
      transliteration: 'chokmah',
      englishLiteral: 'Wisdom',
      englishNatural: 'Wisdom',
      root: 'chokmah',
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'וּמוּסָר',
      transliteration: 'uMusar',
      englishLiteral: 'and-discipline',
      englishNatural: 'and discipline',
      root: 'musar',
      prefixes: ['u'],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'אֱוִילִים',
      transliteration: 'ewilim',
      englishLiteral: 'fools',
      englishNatural: 'fools',
      root: 'ewil',
      suffixes: ['im'],
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun',
      },
    },
    {
      hebrew: 'בָּזוּ',
      transliteration: 'bazu',
      englishLiteral: 'despise',
      englishNatural: 'despise',
      root: 'bazah',
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
    },
  ],
  expectedTranslations: {
    hebrew: 'יִרְאַת יְהוָה רֵאשִׁית דָּעַת חָכְמָה וּמוּסָר אֱוִילִים בָּזוּ',
    transliteration: 'yirat YHWH reshit daat chokmah uMusar ewilim bazu',
    englishLiteral: 'Fear-of He_Who_Is, heading-of knowledge; Wisdom and-discipline fools despise.',
    englishNatural: 'Fear of He-Who-Is, heading of knowledge; Wisdom and discipline fools despise.',
    kjv: 'The fear of the LORD is the beginning of knowledge: but fools despise wisdom and instruction',
    lastReviewed: { name: 'Matt Gross', date: '2025-06-29' },
  },
}; 