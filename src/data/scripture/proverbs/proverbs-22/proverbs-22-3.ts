import { Verse } from '@/types';
import { prefixes, roots, suffixes } from '../../../dictionary';

export const proverbs_22_3: Verse = {
  meta: {
    chapter: 22,
    verse: 3,
  },
  words: [
    {
      hebrew: 'עָרוּם',
      transliteration: 'arum',
      englishLiteral: 'Shrewd',
      englishNatural: 'The Shrewd',
      root: roots.arum,
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'absolute',
      },
    },
    {
      hebrew: 'רָאָה',
      transliteration: "ra'ah",
      englishLiteral: 'sees',
      englishNatural: 'sees',
      root: roots.raah_see,
      rootAppearance: {
        hebrew: 'רָאָה',
        conjugation: 'perfect 3rd person masculine singular',
      },
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
      hebrew: 'רָעָה',
      transliteration: 'raʻah',
      englishLiteral: 'bad',
      englishNatural: 'bad',
      root: roots.raah_bad,
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        state: 'absolute',
      },
    },
    {
      hebrew: 'וְנִסְתָּר',
      transliteration: 'veNiStar',
      englishLiteral: 'and-himself-hides',
      englishNatural: 'and hides himself',
      root: roots.satar,
      prefixes: [prefixes.ve, prefixes.ni],
      rootAppearance: {
        hebrew: 'סְתָּר',
        conjugation: 'niphal perfect 3rd person masculine singular',
      },
      order: {
        hebrew: 4,
        english: 4,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'niphal',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'וּפְתָיִים',
      transliteration: 'uFetayim',
      englishLiteral: 'but-simples',
      englishNatural: 'but the simple',
      root: roots.peti,
      prefixes: [prefixes.u],
      suffixes: [suffixes.im],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        state: 'absolute',
      },
    },
    {
      hebrew: 'עָבְרוּ',
      transliteration: 'avru',
      englishLiteral: 'pass-on',
      englishNatural: 'go on',
      root: roots.avar,
      rootAppearance: {
        hebrew: 'עָבְרוּ',
        conjugation: 'qal perfect 3rd person plural',
      },
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'neuter',
        number: 'plural',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
      },
    },
    {
      hebrew: 'וְנֶעֱנָשׁוּ',
      transliteration: 'veNeEnashu',
      englishLiteral: 'and-are-punished',
      englishNatural: 'and are punished',
      root: roots.anash,
      prefixes: [prefixes.ve, prefixes.ne],
      suffixes: [suffixes.u],
      rootAppearance: {
        hebrew: 'עֱנָשׁוּ',
        conjugation: 'niphal perfect 3rd person plural',
      },
      order: {
        hebrew: 7,
        english: 7,
      },
      morphology: {
        gender: 'neuter',
        number: 'plural',
        person: '3rd',
        tense: 'perfect',
        stem: 'niphal',
      },
      grammarSuffix: {
        englishLiteral: '.',
        englishNatural: '.',
      },
    },
  ],
  translations: {
    hebrew: 'עָרוּם רָאָה רָעָה וְנִסְתָּר וּפְתָיִים עָבְרוּ וְנֶעֱנָשׁוּ',
    transliteration: "arum ra'ah raʻah veNiStar uFetayim avru veNeEnashu",
    englishLiteral:
      'Shrewd sees bad and-himself-hides, but-simples pass-on and-are-punished.',
    englishNatural:
      'The Shrewd sees bad and hides himself, but the simple go on and are punished.',
  },
};
