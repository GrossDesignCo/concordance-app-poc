// Dictionary of Hebrew linguistic elements
interface RootElement {
  hebrew: string;
  transliteration: string;
  englishLiteral: string;
  englishNatural: string;
}

// Hebrew roots
export const roots: Record<string, RootElement> = {
  rosh: {
    hebrew: 'ראשׁ',
    transliteration: 'rosh',
    englishLiteral: 'head',
    englishNatural: 'head',
  },
  bara: {
    hebrew: 'ברא',
    transliteration: 'bara',
    englishLiteral: 'create',
    englishNatural: 'create',
  },
  eloah: {
    hebrew: 'אלה',
    transliteration: 'eloah',
    englishLiteral: 'God',
    englishNatural: 'God',
  },
  amar: {
    hebrew: 'אמר',
    transliteration: 'amar',
    englishLiteral: 'say',
    englishNatural: 'say',
  },
  hayah: {
    hebrew: 'היה',
    transliteration: 'hayah',
    englishLiteral: 'be',
    englishNatural: 'be',
  },
  or: {
    hebrew: 'אור',
    transliteration: 'or',
    englishLiteral: 'light',
    englishNatural: 'light',
  },
  eretz: {
    hebrew: 'ארץ',
    transliteration: 'eretz',
    englishLiteral: 'land',
    englishNatural: 'land',
  },
  tohu: {
    hebrew: 'תהו',
    transliteration: 'tohu',
    englishLiteral: 'waste',
    englishNatural: 'waste',
  },
  vohu: {
    hebrew: 'בהו',
    transliteration: 'vohu',
    englishLiteral: 'void',
    englishNatural: 'void',
  },
  choshekh: {
    hebrew: 'חשך',
    transliteration: 'choshekh',
    englishLiteral: 'darkness',
    englishNatural: 'darkness',
  },
  panah: {
    hebrew: 'פנה',
    transliteration: 'panah',
    englishLiteral: 'face',
    englishNatural: 'face',
  },
  tehom: {
    hebrew: 'תהום',
    transliteration: 'tehom',
    englishLiteral: 'deep',
    englishNatural: 'deep',
  },
  ruach: {
    hebrew: 'רוח',
    transliteration: 'ruach',
    englishLiteral: 'Wind',
    englishNatural: 'Wind',
  },
  rachaf: {
    hebrew: 'רחף',
    transliteration: 'rachaf',
    englishLiteral: 'stir',
    englishNatural: 'stir',
  },
  mayim: {
    hebrew: 'מים',
    transliteration: 'mayim',
    englishLiteral: 'waters',
    englishNatural: 'waters',
  },
  shamayim: {
    hebrew: 'שמים',
    transliteration: 'shamayim',
    englishLiteral: 'heavens',
    englishNatural: 'heavens',
  },
  // Proverbs roots
  arum: {
    hebrew: 'ערם',
    transliteration: 'arum',
    englishLiteral: 'shrewd',
    englishNatural: 'shrewd',
  },
  raah_see: {
    hebrew: 'ראה',
    transliteration: "ra'ah",
    englishLiteral: 'see',
    englishNatural: 'see',
  },
  raah_bad: {
    hebrew: 'רעה',
    transliteration: "ra'ah",
    englishLiteral: 'bad',
    englishNatural: 'bad',
  },
  satar: {
    hebrew: 'סתר',
    transliteration: 'satar',
    englishLiteral: 'hide',
    englishNatural: 'hide',
  },
  peti: {
    hebrew: 'פתי',
    transliteration: 'peti',
    englishLiteral: 'simple-one',
    englishNatural: 'simple',
  },
  avar: {
    hebrew: 'עבר',
    transliteration: 'avar',
    englishLiteral: 'pass',
    englishNatural: 'keep going',
  },
  anash: {
    hebrew: 'ענש',
    transliteration: 'anash',
    englishLiteral: 'punish',
    englishNatural: 'punish',
  },
  // Genesis 3 roots
  nachash: {
    hebrew: 'נחשׁ',
    transliteration: 'nachash',
    englishLiteral: 'snake',
    englishNatural: 'snake',
  },
  kol: {
    hebrew: 'כל',
    transliteration: 'kol',
    englishLiteral: 'all',
    englishNatural: 'any',
  },
  chayah: {
    hebrew: 'חיה',
    transliteration: 'chayah',
    englishLiteral: 'living-thing',
    englishNatural: 'lifeform',
  },
  sadeh: {
    hebrew: 'שׂדה',
    transliteration: 'sadeh',
    englishLiteral: 'field',
    englishNatural: 'field',
  },
  asah: {
    hebrew: 'עשׂה',
    transliteration: 'asah',
    englishLiteral: 'do',
    englishNatural: 'make',
  },
  ishah: {
    hebrew: 'אשׁה',
    transliteration: 'ishah',
    englishLiteral: 'woman',
    englishNatural: 'woman',
  },
  akhal: {
    hebrew: 'אכל',
    transliteration: 'akhal',
    englishLiteral: 'eat',
    englishNatural: 'eat',
  },
  gan: {
    hebrew: 'גן',
    transliteration: 'gan',
    englishLiteral: 'garden',
    englishNatural: 'garden',
  },
  etz: {
    hebrew: 'עֵץ',
    transliteration: 'etz',
    englishLiteral: 'tree',
    englishNatural: 'tree',
  },
  asher: {
    hebrew: 'אֲשֶׁר',
    transliteration: 'asher',
    englishLiteral: 'which',
    englishNatural: 'which',
  },
  yhwh: {
    hebrew: 'יְהוָה',
    transliteration: 'YHWH',
    englishLiteral: 'I_AM',
    englishNatural: 'I-AM',
  },
  el: {
    hebrew: 'אֶל',
    transliteration: 'el',
    englishLiteral: 'to',
    englishNatural: 'to',
  },
  af: {
    hebrew: 'אַף',
    transliteration: 'af',
    englishLiteral: 'Indeed',
    englishNatural: 'Indeed',
  },
  ki: {
    hebrew: 'כִּי',
    transliteration: 'ki',
    englishLiteral: 'that',
    englishNatural: '',
  },
  lo: {
    hebrew: 'לֹא',
    transliteration: 'lo',
    englishLiteral: 'not',
    englishNatural: 'not',
  },
  // Numbers 21:6-9 roots
  saraph: {
    hebrew: 'שׂרף',
    transliteration: 'saraph',
    englishLiteral: 'burn',
    englishNatural: 'burning',
  },
  shalach: {
    hebrew: 'שׁלח',
    transliteration: 'shalach',
    englishLiteral: 'send',
    englishNatural: 'send',
  },
  mut: {
    hebrew: 'מות',
    transliteration: 'mut',
    englishLiteral: 'die',
    englishNatural: 'die',
  },
  rav: {
    hebrew: 'רב',
    transliteration: 'rav',
    englishLiteral: 'many',
    englishNatural: 'many',
  },
  am: {
    hebrew: 'עם',
    transliteration: 'am',
    englishLiteral: 'people',
    englishNatural: 'people',
  },
  bo: {
    hebrew: 'בוא',
    transliteration: 'bo',
    englishLiteral: 'come',
    englishNatural: 'come',
  },
  chata: {
    hebrew: 'חטא',
    transliteration: 'chata',
    englishLiteral: 'sin',
    englishNatural: 'sin',
  },
  dabar: {
    hebrew: 'דבר',
    transliteration: 'dabar',
    englishLiteral: 'speak',
    englishNatural: 'speak',
  },
  palal: {
    hebrew: 'פלל',
    transliteration: 'palal',
    englishLiteral: 'pray',
    englishNatural: 'pray',
  },
  sur: {
    hebrew: 'סור',
    transliteration: 'sur',
    englishLiteral: 'turn_aside',
    englishNatural: 'remove',
  },
  ad: {
    hebrew: 'עד',
    transliteration: 'ad',
    englishLiteral: 'until',
    englishNatural: 'behalf',
  },
  moshe: {
    hebrew: 'משׁה',
    transliteration: 'Moshe',
    englishLiteral: 'Moses',
    englishNatural: 'Moses',
  },
  atah: {
    hebrew: 'אתה',
    transliteration: 'atah',
    englishLiteral: 'you',
    englishNatural: 'you',
  },
  nes: {
    hebrew: 'נס',
    transliteration: 'nes',
    englishLiteral: 'standard',
    englishNatural: 'standard',
  },
  nashakh: {
    hebrew: 'נשׁך',
    transliteration: 'nashakh',
    englishLiteral: 'bite',
    englishNatural: 'bite',
  },
  sim: {
    hebrew: 'שׂים',
    transliteration: 'sim',
    englishLiteral: 'place',
    englishNatural: 'set',
  },
  im: {
    hebrew: 'אם',
    transliteration: 'im',
    englishLiteral: 'if',
    englishNatural: 'if',
  },
  nechoshet: {
    hebrew: 'נחשׁת',
    transliteration: 'nechoshet',
    englishLiteral: 'bronze',
    englishNatural: 'bronze',
  },
  ish: {
    hebrew: 'אישׁ',
    transliteration: 'ish',
    englishLiteral: 'man',
    englishNatural: 'man',
  },
  nabat: {
    hebrew: 'נבט',
    transliteration: 'nabat',
    englishLiteral: 'look',
    englishNatural: 'look',
  },
  yisrael: {
    hebrew: 'ישׂראל',
    transliteration: 'yisrael',
    englishLiteral: 'Israel',
    englishNatural: 'Israel',
  },
  min: {
    hebrew: 'מִן',
    transliteration: 'min',
    englishLiteral: 'from',
    englishNatural: 'from',
  },
  // Additional roots from Numbers 21:1-9
  derekh: {
    hebrew: 'דרך',
    transliteration: 'derekh',
    englishLiteral: 'way',
    englishNatural: 'way',
  },
  atar: {
    hebrew: 'אתר',
    transliteration: 'atar',
    englishLiteral: 'spy',
    englishNatural: 'scout',
  },
  lacham: {
    hebrew: 'לחם',
    transliteration: 'lacham',
    englishLiteral: 'fight',
    englishNatural: 'fight',
  },
  shavah: {
    hebrew: 'שׁבה',
    transliteration: 'shavah',
    englishLiteral: 'take_captive',
    englishNatural: 'capture',
  },
  shevi: {
    hebrew: 'שׁבי',
    transliteration: 'shevi',
    englishLiteral: 'captive',
    englishNatural: 'captive',
  },
  // Additional missing roots 
  yashav: {
    hebrew: 'ישׁב',
    transliteration: 'yashav',
    englishLiteral: 'dwell',
    englishNatural: 'dwell',
  },
  negev: {
    hebrew: 'נגב',
    transliteration: 'negev',
    englishLiteral: 'south',
    englishNatural: 'Negev',
  },
};

