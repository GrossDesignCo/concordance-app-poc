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
    // Isaiah suffixes
    ayim: {
      hebrew: 'ים',
      transliteration: 'ayim',
      englishLiteral: 's',
      englishNatural: '',
      function: 'dual',
    },
    o: {
      hebrew: 'ו',
      transliteration: 'o',
      englishLiteral: 'his',
      englishNatural: 'his',
      function: '3rd person masculine singular possessive',
    },
    nu: {
      hebrew: 'נו',
      transliteration: 'nu',
      englishLiteral: 'our',
      englishNatural: 'our',
      function: '1st person plural possessive',
    },
    kha: {
      hebrew: 'ך',
      transliteration: 'kha',
      englishLiteral: 'your',
      englishNatural: 'your',
      function: '2nd person masculine singular possessive',
    },
    ehu: {
      hebrew: 'הו',
      transliteration: 'ehu',
      englishLiteral: 'him',
      englishNatural: 'him',
      function: '3rd person masculine singular object',
    },
    enu: {
      hebrew: 'נו',
      transliteration: 'enu',
      englishLiteral: 'us',
      englishNatural: 'us',
      function: '1st person plural object',
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
    // Add other common suffixes
  };