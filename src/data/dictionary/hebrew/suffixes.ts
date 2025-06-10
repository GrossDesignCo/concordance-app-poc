/**
 * Dictionary of Hebrew suffixes
 */

const SUFFIXES = {
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
  ot: {
    hebrew: 'ות',
    transliteration: 'ot',
    englishLiteral: 'plural',
    englishNatural: 'plural',
    function: 'feminine plural',
  },
  am: {
    hebrew: 'ם',
    transliteration: 'am',
    englishLiteral: 'them',
    englishNatural: 'them',
    function: '3rd person masculine plural object',
  },
  hem: {
    hebrew: 'ם',
    transliteration: 'hem',
    englishLiteral: 'their',
    englishNatural: 'their',
    function: '3rd person masculine plural possessive',
  },
  ah: {
    hebrew: 'ה',
    transliteration: 'ah',
    englishLiteral: 'feminine singular',
    englishNatural: 'feminine singular',
    function: 'feminine singular marker or abstract noun formation',
  },
  ti: {
    hebrew: 'תִּ',
    transliteration: 'ti',
    englishLiteral: 'you',
    englishNatural: 'you',
    function: '2nd person feminine singular',
  },
  ekha: {
    hebrew: 'ֶיךָ',
    transliteration: 'ekha',
    englishLiteral: 'your',
    englishNatural: 'your',
    function: '2nd person masculine singular possessive',
  },
  at: {
    hebrew: 'אַת',
    transliteration: 'at',
    englishLiteral: 'feminine marker',
    englishNatural: 'feminine marker',
    function: 'feminine noun formation',
  },
  chem: {
    hebrew: 'כֶם',
    transliteration: 'chem',
    englishLiteral: 'your',
    englishNatural: 'your',
    function: '2nd person masculine plural possessive',
  },
  tem: {
    hebrew: 'תֶם',
    transliteration: 'tem',
    englishLiteral: 'you',
    englishNatural: 'you',
    function: '2nd person masculine plural',
  },
  // Genesis 3:7 addition - feminine plural verb ending
  nah: {
    hebrew: 'נה',
    transliteration: 'nah',
    englishLiteral: '-',
    englishNatural: '',
    function: 'feminine plural verb ending',
  },
  // Added for Genesis 3:11
  ta: {
    hebrew: 'ת',
    transliteration: 'ta',
    englishLiteral: 'you',
    englishNatural: '',
    function: '2nd person masculine singular perfect verb ending',
  },
  // Added for Genesis 3:12
  adi: {
    hebrew: 'די',
    transliteration: 'adi',
    englishLiteral: 'me',
    englishNatural: 'me',
    function: '1st person singular with preposition',
  },
  li: {
    hebrew: 'י',
    transliteration: 'i',
    englishLiteral: 'me',
    englishNatural: 'me',
    function: '1st person singular object',
  },
  // Added for Genesis 3:13
  ani: {
    hebrew: 'ני',
    transliteration: 'ani',
    englishLiteral: 'me',
    englishNatural: 'me',
    function: '1st person singular object suffix',
  },
  it_verb: {
    hebrew: 'ית',
    transliteration: 'it',
    englishLiteral: 'you',
    englishNatural: 'you',
    function: '2nd person feminine singular perfect verb ending',
  },
  // Added for Genesis 3:15
  nu_object: {
    hebrew: 'נו',
    transliteration: 'nu',
    englishLiteral: 'him',
    englishNatural: 'him',
    function: '3rd person masculine singular object',
  },
} as const;

type SuffixKey = keyof typeof SUFFIXES;

interface SuffixElement {
  hebrew: string;
  transliteration: string;
  englishLiteral: string;
  englishNatural: string;
  function?: string;
}

// Type-safe export for Hebrew Dictionary
export const suffixes: Record<SuffixKey, SuffixElement> = SUFFIXES;
