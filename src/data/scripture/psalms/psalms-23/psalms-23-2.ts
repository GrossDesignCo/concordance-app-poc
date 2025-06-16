import { Verse } from '@/types';

export const psalms_23_2: Verse = {
  meta: {
    book: 'Psalms',
    chapter: 23,
    verse: 2,
  },
  words: [
    {
      hebrew: 'בִּנְאוֹת',
      transliteration: 'biNot',
      englishLiteral: 'in-pastures-of',
      englishNatural: 'in pastures of',
      root: 'naveh',
      prefixes: ['bi'],
      suffixes: ['ot'],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        gender: 'feminine',
        number: 'plural',
        type: 'noun',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'דֶּשֶׁא',
      transliteration: 'deshe',
      englishLiteral: 'tender_shoot',
      englishNatural: 'tender-shoot',
      root: 'dasha',
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'יַרְבִּיצֵנִי',
      transliteration: 'yaRbitzeini',
      englishLiteral: 'he-causes-me-to-lie-down',
      englishNatural: 'he lies-me-down',
      root: 'ravatz',
      prefixes: ['ya'],
      suffixes: ['ni'],
      order: {
        hebrew: 3,
        english: 3,
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
        englishLiteral: ';',
        englishNatural: ';',
      },
    },
    {
      hebrew: 'עַל־',
      transliteration: 'al-',
      englishLiteral: 'over-',
      englishNatural: 'over',
      root: 'al',
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        type: 'preposition',
      },
      lineBreaksBefore: 1,
    },
    {
      hebrew: 'מֵי',
      transliteration: 'mei',
      englishLiteral: 'water-of',
      englishNatural: 'water of',
      root: 'mayim',
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'construct',
        type: 'noun',
      },
    },
    {
      hebrew: 'מְנֻחוֹת',
      transliteration: 'menuchot',
      englishLiteral: 'rest_place',
      englishNatural: 'rest-place',
      root: 'nuach',
      prefixes: ['me'],
      suffixes: ['ot'],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'feminine',
        number: 'plural',
        type: 'noun',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'יְנַהֲלֵנִי',
      transliteration: 'yeNahaleni',
      englishLiteral: 'he-leads-me',
      englishNatural: 'he leads me',
      root: 'nahal',
      prefixes: ['ye'],
      suffixes: ['ni'],
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'piel',
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
    hebrew: 'בִּנְאוֹת דֶּשֶׁא יַרְבִּיצֵנִי עַל־מֵי מְנֻחוֹת יְנַהֲלֵנִי',
    transliteration: 'biNot deshe yaRbitzeini al-mei menuchot yeNahaleni',
    englishLiteral: 'in-pastures-of tender_shoot, he-causes-me-to-lie-down; over- water-of rest_place, he-leads-me.',
    englishNatural: 'in pastures of tender-shoot, he lies-me-down; over water of rest-place, he leads me.',
    kjv: 'He maketh me to lie down in green pastures: he leadeth me beside the still waters.',
    lastReviewed: { name: 'Matt Gross', date: '2025-06-16' },
  },
}; 