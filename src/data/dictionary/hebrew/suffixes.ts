/**
 * Dictionary of Hebrew suffix elements
 */
interface SuffixElement {
    hebrew: string;
    transliteration: string;
    englishLiteral: string;
    englishNatural: string;
    function: string;
  }

// Hebrew suffixes
export const suffixes: Record<string, SuffixElement> = {
    im: {
      hebrew: 'ים',
      transliteration: 'im',
      englishLiteral: 's',
      englishNatural: '',
      function: 'masculine plural',
    },
    it: {
      hebrew: 'ית',
      transliteration: 'it',
      englishLiteral: 'ing',
      englishNatural: 'ing',
      function: 'abstract noun formation',
    },
    et: {
      hebrew: 'ת',
      transliteration: 'et',
      englishLiteral: 'ing',
      englishNatural: 'ing',
      function: 'feminine singular participle',
    },
    ey: {
      hebrew: 'י',
      transliteration: 'ey',
      englishLiteral: 'of',
      englishNatural: '',
      function: 'construct state',
    },
    u: {
      hebrew: 'ו',
      transliteration: 'u',
      englishLiteral: '',
      englishNatural: '',
      function: 'plural verb marker',
    },
    construct_t: {
      hebrew: 'ת',
      transliteration: '',
      englishLiteral: 'of',
      englishNatural: 'of',
      function: 'feminine construct marker',
    },
    plural_verb_u: {
      hebrew: 'ו',
      transliteration: '',
      englishLiteral: '',
      englishNatural: '',
      function: 'plural verb marker',
    },
    // Numbers 21:6-9 suffixes
    nu: {
      hebrew: 'נו',
      transliteration: 'nu',
      englishLiteral: 'we',
      englishNatural: 'we',
      function: '1st person plural verb/pronoun',
    },
    kha: {
      hebrew: 'ךָ',
      transliteration: 'kha',
      englishLiteral: 'you',
      englishNatural: 'you',
      function: '2nd person masculine singular',
    },
    einu: {
      hebrew: 'ֵינוּ',
      transliteration: 'einu',
      englishLiteral: 'our',
      englishNatural: 'us',
      function: '1st person plural possessive',
    },
    o: {
      hebrew: 'וֹ',
      transliteration: 'o',
      englishLiteral: 'him',
      englishNatural: 'it',
      function: '3rd person masculine singular object',
    },
    ehu: {
      hebrew: 'ֵהוּ',
      transliteration: 'ehu',
      englishLiteral: 'him',
      englishNatural: 'it',
      function: '3rd person masculine singular object',
    },
    enu: {
      hebrew: 'ֶנּוּ',
      transliteration: 'enu',
      englishLiteral: 'him',
      englishNatural: 'them',
      function: '3rd person masculine singular/plural object',
    },
    // Add other common suffixes
  };