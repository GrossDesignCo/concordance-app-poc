import { Verse } from '@/types';

export const psalms_1_2: Verse = {
  meta: {
    book: 'Psalms',
    chapter: 1,
    verse: 2,
  },
  words: [
    {
      hebrew: 'כִּי',
      transliteration: 'ki',
      englishLiteral: 'That',
      englishNatural: 'That',
      root: 'ki',
      order: 1,
      morphology: {
        type: 'conjunction',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'אִם',
      transliteration: 'im',
      englishLiteral: 'if',
      englishNatural: 'if',
      root: 'im',
      order: 2,
      morphology: {
        type: 'conjunction',
      },
    },
    {
      hebrew: 'בְּתוֹרַת',
      transliteration: 'beTorah',
      englishLiteral: 'in-law-of',
      englishNatural: 'in the law of',
      root: 'torah',
      prefixes: ['be'],
      order: 3,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'He_Who_Is (YHWH)',
      englishNatural: 'He-Who-Is (YHWH)',
      root: 'yhwh',
      order: 4,
      morphology: {
        type: 'noun',
      },
    },
    {
      hebrew: 'חֶפְצוֹ',
      transliteration: 'cheftzo',
      englishLiteral: 'his-choice_thing',
      englishNatural: 'his choice-thing',
      root: 'chafetz',
      suffixes: ['o'],
      order: 5,
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וּבְתוֹרָתוֹ',
      transliteration: 'uvTorato',
      englishLiteral: 'and-in-his-law',
      englishNatural: 'and in his law',
      root: 'torah',
      prefixes: ['u', 'be'],
      suffixes: ['o'],
      order: 6,
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'יֶהְגֶּה',
      transliteration: 'yehgeh',
      englishLiteral: 'he-meditates',
      englishNatural: 'he meditates',
      root: 'hagah',
      prefixes: ['ye'],
      order: 7,
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
      hebrew: 'יוֹמָם',
      transliteration: 'yomam',
      englishLiteral: 'by-day',
      englishNatural: 'by day',
      root: 'yom',
      suffixes: ['am'],
      order: 8,
      morphology: {
        type: 'adverb',
      },
    },
    {
      hebrew: 'וָלָיְלָה',
      transliteration: 'vaLaylah',
      englishLiteral: 'and-night',
      englishNatural: 'and night',
      root: 'layil',
      prefixes: ['va'],
      suffixes: ['ah'],
      order: 9,
      morphology: {
        type: 'adverb',
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
      'כִּי אִם בְּתוֹרַת יְהוָה חֶפְצוֹ וּבְתוֹרָתוֹ יֶהְגֶּה יוֹמָם וָלָיְלָה',
    transliteration:
      'ki im beTorah YHWH cheftzo uvTorato yehgeh yomam vaLaylah',
    englishLiteral:
      'That if in-law-of He_Who_Is (YHWH) his-choice_thing, and-in-his-law he-meditates by-day and-night.',
    englishNatural:
      'That if in the law of He-Who-Is (YHWH) his choice-thing, and in his law he meditates by day and night.',
    kjv: 'But his delight is in the law of the LORD; and in his law doth he meditate day and night.',
    lastReviewed: { name: 'Matt Gross', date: '2025-12-06' },
  },
};
