/**
 * Dictionary of Hebrew prefix elements
 */
interface PrefixElement {
    hebrew: string;
    transliteration: string;
    englishLiteral: string;
    englishNatural: string;
  }

// Hebrew prefixes
export const prefixes: Record<string, PrefixElement> = {
    be: {
      hebrew: 'בְּ',
      transliteration: 'be',
      englishLiteral: 'in',
      englishNatural: 'in',
    },
    ve: {
      hebrew: 'וְ',
      transliteration: 've',
      englishLiteral: 'and',
      englishNatural: 'and',
    },
    va: {
      hebrew: 'וַ',
      transliteration: 'va',
      englishLiteral: 'and',
      englishNatural: 'and',
    },
    u: {
      hebrew: 'וּ',
      transliteration: 'u',
      englishLiteral: 'but',
      englishNatural: 'but',
    },
    ha: {
      hebrew: 'הַ',
      transliteration: 'ha',
      englishLiteral: 'the',
      englishNatural: 'the',
    },
    al: {
      hebrew: 'עַל',
      transliteration: 'al',
      englishLiteral: 'on',
      englishNatural: 'over',
    },
    me: {
      hebrew: 'מְ',
      transliteration: 'me',
      englishLiteral: 'was',
      englishNatural: 'was',
    },
    ye: {
      hebrew: 'יְ',
      transliteration: 'ye',
      englishLiteral: '',
      englishNatural: 'let there',
    },
    ne: {
      hebrew: 'נ',
      transliteration: 'ne',
      englishLiteral: 'are',
      englishNatural: 'are',
    },
    ni: {
      hebrew: 'נ',
      transliteration: 'ni',
      englishLiteral: 'himself',
      englishNatural: 'himself',
    },
    mi: {
      hebrew: 'מ',
      transliteration: 'mi',
      englishLiteral: 'from',
      englishNatural: 'from',
    },
    tav: {
      hebrew: 'ת',
      transliteration: 'tav',
      englishLiteral: 'you-shall',
      englishNatural: 'you shall',
    },
    pen: {
      hebrew: 'פֶּן',
      transliteration: 'pen',
      englishLiteral: 'lest',
      englishNatural: 'lest',
    },
    // Numbers 21:6-9 prefixes
    ba: {
      hebrew: 'בַּ',
      transliteration: 'ba',
      englishLiteral: 'in-the',
      englishNatural: 'against',
    },
    yit: {
      hebrew: 'יִתְ',
      transliteration: 'yit',
      englishLiteral: 'he-will-himself',
      englishNatural: '',
    },
    hi: {
      hebrew: 'הִ',
      transliteration: 'hi',
      englishLiteral: 'cause-to',
      englishNatural: '',
    },
    le: {
      hebrew: 'ל',
      transliteration: 'le',
      englishLiteral: 'to',
      englishNatural: 'to',
    },
    hit: {
      hebrew: 'הִתְ',
      transliteration: 'hit',
      englishLiteral: 'self',
      englishNatural: '',
    },
    bi: {
      hebrew: 'ב',
      transliteration: 'bi',
      englishLiteral: 'with',
      englishNatural: 'with',
    },
    ti: {
      hebrew: 'ת',
      transliteration: 'ti',
      englishLiteral: 'you-shall',
      englishNatural: 'you shall',
    },
    // Isaiah prefixes
    // Add other common prefixes
  };