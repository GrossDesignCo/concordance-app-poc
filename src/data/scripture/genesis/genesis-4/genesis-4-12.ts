import { Verse } from '@/types';

export const genesis_4_12: Verse = {
  meta: {
    book: 'Genesis',
    chapter: 4,
    verse: 12,
  },
  words: [
    {
      hebrew: 'כִּי',
      transliteration: 'ki',
      englishLiteral: 'When',
      englishNatural: 'When',
      root: 'ki',
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        type: 'conjunction',
      },
      lineBreaksBefore: {
        hebrew: 1,
      },
    },
    {
      hebrew: 'תַעֲבֹד',
      transliteration: 'taavod',
      englishLiteral: 'you-serve',
      englishNatural: 'you serve',
      root: 'avad',
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '2nd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'אֶת־',
      transliteration: 'et-',
      englishLiteral: '↳',
      englishNatural: '',
      root: 'et',
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        type: 'particle',
      },
    },
    {
      hebrew: 'הָאֲדָמָה',
      transliteration: 'haAdamah',
      englishLiteral: 'the-earth',
      englishNatural: 'the earth',
      root: 'adamah',
      prefixes: ['ha'],
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
        englishLiteral: ',',
        englishNatural: ',',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'לֹא־',
      transliteration: 'lo-',
      englishLiteral: 'not-',
      englishNatural: 'not',
      root: 'lo',
      order: {
        hebrew: 5,
        english: 6,
      },
      morphology: {
        type: 'adverb',
      },
      grammarSuffix: {
        englishNatural: ',',
      },
    },
    {
      hebrew: 'תֹסֵף',
      transliteration: 'toseeph',
      englishLiteral: 'it-will-add',
      englishNatural: 'it will add',
      root: 'yasaph',
      order: {
        hebrew: 6,
        english: 5,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'hiphil',
        type: 'verb',
      },
    },
    {
      hebrew: 'תֵּת־',
      transliteration: 'tet-',
      englishLiteral: 'give-',
      englishNatural: 'to give',
      root: 'natan',
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        tense: 'infinitive_construct',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'כֹּחָהּ',
      transliteration: 'kochah',
      englishLiteral: 'her-strength',
      englishNatural: 'her strength',
      root: 'koach',
      suffixes: ['ah'],
      order: {
        hebrew: 8,
        english: 8,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        type: 'noun',
      },
    },
    {
      hebrew: 'לָךְ',
      transliteration: 'lakh',
      englishLiteral: 'to-you',
      englishNatural: 'to you',
      root: 'lamed',
      suffixes: ['kha'],
      order: {
        hebrew: 9,
        english: 9,
      },
      morphology: {
        number: 'singular',
        person: '2nd',
        type: 'preposition',
      },
      grammarSuffix: {
        englishLiteral: ';',
        englishNatural: ';',
      },
      lineBreaksAfter: 1,
    },
    {
      hebrew: 'נָע',
      transliteration: 'na',
      englishLiteral: 'wandering',
      englishNatural: 'wandering',
      root: 'na',
      order: {
        hebrew: 10,
        english: 10,
      },
      morphology: {
        type: 'adjective',
      },
    },
    {
      hebrew: 'וָנָד',
      transliteration: 'vanad',
      englishLiteral: 'and-fugitive',
      englishNatural: 'and fugitive',
      root: 'nadad',
      prefixes: ['va'],
      order: {
        hebrew: 11,
        english: 11,
      },
      morphology: {
        type: 'adjective',
      },
    },
    {
      hebrew: 'תִּהְיֶה',
      transliteration: 'tihyeh',
      englishLiteral: 'you-will-be',
      englishNatural: 'you will be',
      root: 'hayah',
      order: {
        hebrew: 12,
        english: 12,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '2nd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb',
      },
    },
    {
      hebrew: 'בָאָרֶץ',
      transliteration: 'baAretz',
      englishLiteral: 'in-the-land',
      englishNatural: 'in the land',
      root: 'eretz',
      prefixes: ['ba'],
      order: {
        hebrew: 13,
        english: 13,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: '."',
        englishNatural: '."',
      },
      lineBreaksAfter: 1,
    },
  ],
  expectedTranslations: {
    hebrew:
      'כִּי תַעֲבֹד אֶת־הָאֲדָמָה לֹא־תֹסֵף תֵּת־כֹּחָהּ לָךְ נָע וָנָד תִּהְיֶה בָאָרֶץ',
    transliteration:
      'ki taavod et-haAdamah lo-toseeph tet-kochah lakh na vanad tihyeh baAretz',
    englishLiteral:
      'When you-serve ↳ the-earth, not- it-will-add give- her-strength to-you; wandering and-fugitive you-will-be in-the-land."',
    englishNatural:
      'When you serve the earth, it will add not, to give her strength to you; wandering and fugitive you will be in the land."',
    kjv: 'When thou tillest the ground, it shall not henceforth yield unto thee her strength; a fugitive and a vagabond shalt thou be in the earth.',
    lastReviewed: { name: 'Matt Gross', date: '2025-11-27' },
  },
};
