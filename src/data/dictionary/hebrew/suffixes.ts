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
      englishLiteral: 'plural',
      englishNatural: 'plural',
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
      englishLiteral: 'feminine singular',
      englishNatural: 'feminine singular',
      function: 'feminine singular participle',
    },
    ey: {
      hebrew: 'י',
      transliteration: 'ey',
      englishLiteral: 'construct plural',
      englishNatural: 'construct plural',
      function: 'construct state',
    },
    u: {
      hebrew: 'וּ',
      transliteration: 'u',
      englishLiteral: 'and',
      englishNatural: 'and',
      function: 'plural verb marker',
    },
    construct_t: {
      hebrew: 'ת',
      transliteration: '',
      englishLiteral: 'of',
      englishNatural: 'of',
      function: 'feminine construct marker',
    },
    construct_y: {
      hebrew: 'י',
      transliteration: 'y',
      englishLiteral: 'of',
      englishNatural: 'of',
      function: 'masculine construct marker',
    },
    plural_verb_u: {
      hebrew: 'ו',
      transliteration: '',
      englishLiteral: '',
      englishNatural: '',
      function: 'plural verb marker',
    },
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
    ayim: {
      hebrew: 'ים',
      transliteration: 'ayim',
      englishLiteral: 's',
      englishNatural: '',
      function: 'dual',
    },
    av: {
      hebrew: 'יו',
      transliteration: 'av',
      englishLiteral: 'his',
      englishNatural: 'his',
      function: '3rd person masculine singular possessive',
    },
    ai: {
      hebrew: 'י',
      transliteration: 'ai',
      englishLiteral: 'to me',
      englishNatural: 'to me',
      function: '1st person singular directional',
    },
    i: {
      hebrew: 'י',
      transliteration: 'i',
      englishLiteral: 'you',
      englishNatural: 'you',
      function: '2nd person feminine singular',
    },
    ekh: {
      hebrew: 'ךְ',
      transliteration: 'ekh',
      englishLiteral: 'you',
      englishNatural: 'you',
      function: '2nd person feminine singular',
    },
    un: {
      hebrew: 'וּן',
      transliteration: 'un',
      englishLiteral: 'you',
      englishNatural: 'you',
      function: '2nd person plural imperfect',
    },
    hu: {
      hebrew: 'וֹ',
      transliteration: 'hu',
      englishLiteral: 'its',
      englishNatural: 'its',
      function: '3rd person masculine singular possessive',
    },
    construct_i: {
      hebrew: 'י',
      transliteration: 'i',
      englishLiteral: 'of',
      englishNatural: 'of',
      function: 'construct state',
    },
  };