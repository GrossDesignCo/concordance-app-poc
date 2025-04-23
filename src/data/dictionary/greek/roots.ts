/**
 * Dictionary of Greek linguistic elements
 */
interface RootElement {
  greek: string;
  transliteration: string;
  englishLiteral: string;
  englishNatural: string;
}

// Greek roots
export const roots: Record<string, RootElement> = {
  en: {
    greek: 'ἐν',
    transliteration: 'en',
    englishLiteral: 'in',
    englishNatural: 'in',
  },
  arche: {
    greek: 'ἀρχή',
    transliteration: 'archē',
    englishLiteral: 'first',
    englishNatural: 'beginning',
  },
  eimi: {
    greek: 'εἰμί',
    transliteration: 'eimi',
    englishLiteral: 'to be',
    englishNatural: 'to be',
  },
  ho: {
    greek: 'ὁ',
    transliteration: 'ho',
    englishLiteral: 'the',
    englishNatural: 'the',
  },
  logos: {
    greek: 'λόγος',
    transliteration: 'logos',
    englishLiteral: 'word',
    englishNatural: 'word',
  },
  kai: {
    greek: 'καί',
    transliteration: 'kai',
    englishLiteral: 'and',
    englishNatural: 'and',
  },
  pros: {
    greek: 'πρός',
    transliteration: 'pros',
    englishLiteral: 'toward/with',
    englishNatural: 'with',
  },
  theos: {
    greek: 'θεός',
    transliteration: 'theos',
    englishLiteral: 'God',
    englishNatural: 'God',
  },
}; 