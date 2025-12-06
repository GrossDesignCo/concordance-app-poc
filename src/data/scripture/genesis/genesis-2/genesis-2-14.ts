import { Verse } from '@/types';

export const genesis_2_14: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 2,
    verse: 14,
  },
  words: [
    {
      hebrew: 'שֵׁם',
      transliteration: 'shem',
      englishLiteral: 'name',
      englishNatural: 'The name of',
      root: 'shem',
      order: 1,
      morphology: {
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'הַנָּהָר',
      transliteration: 'haNahar',
      englishLiteral: 'the-river',
      englishNatural: 'river',
      root: 'nahar',
      prefixes: ['ha'],
      order: {
        hebrew: 2,
        english: 3,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'הַשְּׁלִישִׁי',
      transliteration: 'haShlishi',
      englishLiteral: 'the-third',
      englishNatural: 'the third',
      root: 'shlishi',
      prefixes: ['ha'],
      order: {
        hebrew: 3,
        english: 2,
      },
      morphology: {
        type: 'numeral',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'חִדֶּקֶל',
      transliteration: 'Chidekel',
      englishLiteral: 'Rapid (Chidekel)',
      englishNatural: 'Rapid (Chidekel)',
      root: 'chidekel',
      order: 4,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'הוּא',
      transliteration: 'hu',
      englishLiteral: 'he',
      englishNatural: 'it',
      root: 'hu',
      order: 5,
      morphology: {
        type: 'pronoun',
      },
    },
    {
      hebrew: 'הַהֹלֵךְ',
      transliteration: 'haHolekh',
      englishLiteral: 'the-walking',
      englishNatural: 'walks',
      root: 'halakh',
      prefixes: ['ha'],
      order: 6,
      morphology: {
        type: 'verb',
        stem: 'qal',
        tense: 'participle',
      },
    },
    {
      hebrew: 'קִדְמַת',
      transliteration: 'qidmat',
      englishLiteral: 'east-of',
      englishNatural: 'east of',
      root: 'qedem',
      order: 7,
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'אַשּׁוּר',
      transliteration: 'Ashur',
      englishLiteral: 'Steppe (Assyria)',
      englishNatural: 'Steppe (Assyria)',
      root: 'ashur',
      order: 8,
      morphology: {
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
    },
    {
      hebrew: 'וְהַנָּהָר',
      transliteration: 'veHaNahar',
      englishLiteral: 'And-the-river',
      englishNatural: 'river',
      root: 'nahar',
      prefixes: ['ve', 'ha'],
      order: {
        hebrew: 9,
        english: 10,
      },
      morphology: {
        type: 'noun',
        gender: 'masculine',
        number: 'singular',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'הָרְבִיעִי',
      transliteration: 'haRevii',
      englishLiteral: 'the-fourth',
      englishNatural: 'And the fourth',
      root: 'revii',
      prefixes: ['ha'],
      order: {
        hebrew: 10,
        english: 9,
      },
      morphology: {
        type: 'numeral',
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
      lineBreaksBefore: {
        english: 1,
      },
    },
    {
      hebrew: 'הוּא',
      transliteration: 'hu',
      englishLiteral: 'he',
      englishNatural: 'it is',
      root: 'hu',
      order: 11,
      morphology: {
        type: 'pronoun',
      },
    },
    {
      hebrew: 'פְּרָת׃',
      transliteration: 'Perat',
      englishLiteral: 'Fruitful (Perat)',
      englishNatural: 'Fruitful (Perat)',
      root: 'perat',
      order: 12,
      morphology: {
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
    hebrew:
      'שֵׁם הַנָּהָר הַשְּׁלִישִׁי חִדֶּקֶל הוּא הַהֹלֵךְ קִדְמַת אַשּׁוּר וְהַנָּהָר הָרְבִיעִי הוּא פְּרָת׃',
    transliteration:
      'shem haNahar haShlishi Chidekel hu haHolekh qidmat Ashur veHaNahar haRevii hu Perat',
    englishLiteral:
      'name the-river the-third, Rapid (Chidekel); he the-walking east-of Steppe (Assyria). And-the-river the-fourth, he Fruitful (Perat).',
    englishNatural:
      'The name of the third river, Rapid (Chidekel); it walks east of Steppe (Assyria). And the fourth river, it is Fruitful (Perat).',
    kjv: 'And the name of the third river is Hiddekel: that is it which goeth toward the east of Assyria. And the fourth river is Euphrates.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
  },
};
