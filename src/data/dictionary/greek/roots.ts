import { GreekWordMorphology } from "@/types";

/**
 * Dictionary of Greek linguistic elements
 */
interface RootElement {
  greek: string;
  transliteration: string;
  englishLiteral: string;
  englishNatural: string;
  type?: GreekWordMorphology['type'];
}

// Constant version of Greek roots
const ROOTS = {
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
  ophis: {
    greek: 'ὄφις',
    transliteration: 'ophis',
    englishLiteral: 'snake',
    englishNatural: 'snake',
  },
  archaios: {
    greek: 'ἀρχαῖος',
    transliteration: 'archaios',
    englishLiteral: 'ancient',
    englishNatural: 'ancient',
  },
  hos: {
    greek: 'ὡς',
    transliteration: 'hos',
    englishLiteral: 'as',
    englishNatural: 'as',
  },
  diabolos: {
    greek: 'Διάβολος',
    transliteration: 'diabolos',
    englishLiteral: 'Accuser',
    englishNatural: 'Accuser',
  },
  satanas: {
    greek: 'Σατανᾶς',
    transliteration: 'satanas',
    englishLiteral: 'Adversary',
    englishNatural: 'Adversary',
  },
  autos: {
    greek: 'αὐτός',
    transliteration: 'autos',
    englishLiteral: 'him',
    englishNatural: 'him',
  },
  chilioi: {
    greek: 'χίλιοι',
    transliteration: 'chilioi',
    englishLiteral: 'thousand',
    englishNatural: 'thousand',
  },
  krateo: {
    greek: 'κρατέω',
    transliteration: 'krateo',
    englishLiteral: 'seize',
    englishNatural: 'seize',
  },
  drakon: {
    greek: 'δράκων',
    transliteration: 'drakon',
    englishLiteral: 'dragon',
    englishNatural: 'dragon',
  },
  deo: {
    greek: 'δέω',
    transliteration: 'deo',
    englishLiteral: 'bind',
    englishNatural: 'bind',
  },
  etos: {
    greek: 'ἔτος',
    transliteration: 'etos',
    englishLiteral: 'year',
    englishNatural: 'year',
  },
  katabaino: {
    greek: 'καταβαίνω',
    transliteration: 'katabaino',
    englishLiteral: 'descend',
    englishNatural: 'descend',
  },
  kleis: {
    greek: 'κλείς',
    transliteration: 'kleis',
    englishLiteral: 'key',
    englishNatural: 'key',
  },
  abussos: {
    greek: 'ἄβυσσος',
    transliteration: 'abussos',
    englishLiteral: 'abyss',
    englishNatural: 'abyss',
  },
  halusis: {
    greek: 'ἅλυσις',
    transliteration: 'halusis',
    englishLiteral: 'chain',
    englishNatural: 'chain',
  },
  megas: {
    greek: 'μέγας',
    transliteration: 'megas',
    englishLiteral: 'great',
    englishNatural: 'great',
  },
  cheir: {
    greek: 'χείρ',
    transliteration: 'cheir',
    englishLiteral: 'hand',
    englishNatural: 'hand',
  },
  angelos: {
    greek: 'ἄγγελος',
    transliteration: 'angelos',
    englishLiteral: 'messenger',
    englishNatural: 'messenger',
  },
  pas: {
    greek: 'πᾶς',
    transliteration: 'pas',
    englishLiteral: 'all',
    englishNatural: 'all',
  },
  katathema: {
    greek: 'κατάθεμα',
    transliteration: 'katathema',
    englishLiteral: 'curse',
    englishNatural: 'curse',
  },
  ou: {
    greek: 'οὐ',
    transliteration: 'ou',
    englishLiteral: 'not',
    englishNatural: 'not',
  },
  eti: {
    greek: 'ἔτι',
    transliteration: 'eti',
    englishLiteral: 'still',
    englishNatural: 'still',
  },
  thronos: {
    greek: 'θρόνος',
    transliteration: 'thronos',
    englishLiteral: 'throne',
    englishNatural: 'throne',
  },
  arnion: {
    greek: 'ἀρνίον',
    transliteration: 'arnion',
    englishLiteral: 'lamb',
    englishNatural: 'lamb',
  },
  doulos: {
    greek: 'δοῦλος',
    transliteration: 'doulos',
    englishLiteral: 'servant',
    englishNatural: 'servant',
  },
  latreuo: {
    greek: 'λατρεύω',
    transliteration: 'latreuo',
    englishLiteral: 'serve',
    englishNatural: 'serve',
  },
  eido: {
    greek: 'εἶδον',
    transliteration: 'eidon',
    englishLiteral: 'I-saw',
    englishNatural: 'I saw',
  },
  ek: {
    greek: 'ἐκ',
    transliteration: 'ek',
    englishLiteral: 'out-of',
    englishNatural: 'from',
  },
  ouranos: {
    greek: 'οὐρανός',
    transliteration: 'ouranos',
    englishLiteral: 'heaven',
    englishNatural: 'heaven',
  },
  echo: {
    greek: 'ἔχω',
    transliteration: 'echo',
    englishLiteral: 'have',
    englishNatural: 'have',
  },
  epi: {
    greek: 'ἐπί',
    transliteration: 'epi',
    englishLiteral: 'upon',
    englishNatural: 'in',
  },
  idou: {
    greek: 'Ἰδοὺ',
    transliteration: 'idou',
    englishLiteral: 'behold',
    englishNatural: 'behold',
  },
  ego: {
    greek: 'ἐγὼ',
    transliteration: 'ego',
    englishLiteral: 'I',
    englishNatural: 'I',
  },
  apostello: {
    greek: 'ἀποστέλλω',
    transliteration: 'apostello',
    englishLiteral: 'send',
    englishNatural: 'send',
  },
  su: {
    greek: 'ὑμᾶς',
    transliteration: 'humas',
    englishLiteral: 'you',
    englishNatural: 'you',
  },
  probaton: {
    greek: 'πρόβατα',
    transliteration: 'probata',
    englishLiteral: 'sheep',
    englishNatural: 'sheep',
  },
  mesos: {
    greek: 'μέσῳ',
    transliteration: 'meso',
    englishLiteral: 'middle',
    englishNatural: 'middle',
  },
  lukos: {
    greek: 'λύκων',
    transliteration: 'lukon',
    englishLiteral: 'wolf',
    englishNatural: 'wolf',
  },
  ginomai: {
    greek: 'γίνεσθε',
    transliteration: 'ginesthe',
    englishLiteral: 'become',
    englishNatural: 'become',
  },
  oun: {
    greek: 'οὖν',
    transliteration: 'oun',
    englishLiteral: 'therefore',
    englishNatural: 'therefore',
  },
  phronimos: {
    greek: 'φρόνιμοι',
    transliteration: 'phronimoi',
    englishLiteral: 'shrewd',
    englishNatural: 'shrewd',
  },
  akeraios: {
    greek: 'ἀκέραιοι',
    transliteration: 'akeraioi',
    englishLiteral: 'innocent',
    englishNatural: 'innocent',
  },
  peristera: {
    greek: 'περιστεραί',
    transliteration: 'peristerai',
    englishLiteral: 'doves',
    englishNatural: 'doves',
  },
} as const;

// Type-safe export of the roots
export const roots: Record<keyof typeof ROOTS, RootElement> =
  ROOTS;
