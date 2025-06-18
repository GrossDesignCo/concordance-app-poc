import { GreekWordMorphology } from "@/types";
import { HebrewRootKey } from "../hebrew";

/**
 * Dictionary of Greek root words
 */
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
    translatedFrom: ['rosh'],
  },
  eimi: {
    greek: 'εἰμί',
    transliteration: 'eimi',
    englishLiteral: 'to be',
    englishNatural: 'to be',
    translatedFrom: ['hayah'],
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
    translatedFrom: ['eloah'],
  },
  ophis: {
    greek: 'ὄφις',
    transliteration: 'ophis',
    englishLiteral: 'snake',
    englishNatural: 'snake',
    translatedFrom: ['nachash'],
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
    related: ['ophis'],
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
    translatedFrom: ['gadol'],
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
    translatedFrom: ['yhwh'],
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
    translatedFrom: ['arum'],
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
  agapao: {
    greek: 'ἀγαπάω',
    transliteration: 'agapao',
    englishLiteral: 'God_love',
    englishNatural: 'God-love',
  },
  aristao: {
    greek: 'ἀριστάω',
    transliteration: 'aristao',
    englishLiteral: 'dine',
    englishNatural: 'dine',
  },
  bosko: {
    greek: 'βόσκω',
    transliteration: 'bosko',
    englishLiteral: 'feed',
    englishNatural: 'feed',
  },
  iesous: {
    greek: 'Ἰησοῦς',
    transliteration: 'Iesous',
    englishLiteral: 'Savior (Jesus)',
    englishNatural: 'Savior (Jesus)',
    translatedFrom: ['Yeshua'],
  },
  ioannes: {
    greek: 'Ἰωάννης',
    transliteration: 'Ioannes',
    englishLiteral: 'He—is_Gracious (John)',
    englishNatural: 'He—is-Gracious (John)',
    translatedFrom: ['yohanan'],
  },
  kurios: {
    greek: 'κύριος',
    transliteration: 'kurios',
    englishLiteral: 'lord',
    englishNatural: 'lord',
  },
  lego: {
    greek: 'λέγω',
    transliteration: 'lego',
    englishLiteral: 'say',
    englishNatural: 'say',
  },
  me: {
    greek: 'με',
    transliteration: 'me',
    englishLiteral: 'me',
    englishNatural: 'me',
  },
  nai: {
    greek: 'ναί',
    transliteration: 'nai',
    englishLiteral: 'yes',
    englishNatural: 'yes',
  },
  oida: {
    greek: 'οἶδα',
    transliteration: 'oida',
    englishLiteral: 'know',
    englishNatural: 'know',
  },
  ote: {
    greek: 'ὅτε',
    transliteration: 'ote',
    englishLiteral: 'when',
    englishNatural: 'when',
  },
  petros: {
    greek: 'Πέτρος',
    transliteration: 'Petros',
    englishLiteral: 'Stone (Peter)',
    englishNatural: 'Stone (Peter)',
  },
  phileo: {
    greek: 'φιλέω',
    transliteration: 'phileo',
    englishLiteral: 'brother_love',
    englishNatural: 'brother-love',
  },
  pleon: {
    greek: 'πλέον',
    transliteration: 'pleon',
    englishLiteral: 'more',
    englishNatural: 'more',
  },
  se: {
    greek: 'σε',
    transliteration: 'se',
    englishLiteral: 'you',
    englishNatural: 'you',
  },
  simon: {
    greek: 'Σίμων',
    transliteration: 'Simon',
    englishLiteral: 'Hearer (Simon)',
    englishNatural: 'Hearer (Simon)',
    translatedFrom: ['shama'],
  },
  toutos: {
    greek: 'οὗτος',
    transliteration: 'houtos',
    englishLiteral: 'this',
    englishNatural: 'this',
  },
  oti: {
    greek: 'ὅτι',
    transliteration: 'oti',
    englishLiteral: 'that',
    englishNatural: 'that',
  },
  deuteros: {
    greek: 'δεύτερος',
    transliteration: 'deuteros',
    englishLiteral: 'second',
    englishNatural: 'second',
  },
  palin: {
    greek: 'πάλιν',
    transliteration: 'palin',
    englishLiteral: 'again',
    englishNatural: 'again',
  },
  poimaino: {
    greek: 'ποιμαίνω',
    transliteration: 'poimaino',
    englishLiteral: 'shepherd',
    englishNatural: 'shepherd',
  },
  tritos: {
    greek: 'τρίτος',
    transliteration: 'tritos',
    englishLiteral: 'third',
    englishNatural: 'third',
  },
  lupeo: {
    greek: 'λυπέω',
    transliteration: 'lupeo',
    englishLiteral: 'grieve',
    englishNatural: 'grieve',
  },
  ginosko: {
    greek: 'γινώσκω',
    transliteration: 'ginosko',
    englishLiteral: 'know',
    englishNatural: 'know',
  },
  epo: {
    greek: 'εἶπον',
    transliteration: 'eipon',
    englishLiteral: 'say',
    englishNatural: 'say',
  },
  neos: {
    greek: 'νέος',
    transliteration: 'neos',
    englishLiteral: 'young',
    englishNatural: 'young',
  },
  neoteros: {
    greek: 'νεώτερος',
    transliteration: 'neoteros',
    englishLiteral: 'younger',
    englishNatural: 'younger',
  },
  zonnuo: {
    greek: 'ζώννυμι',
    transliteration: 'zonnuo',
    englishLiteral: 'gird',
    englishNatural: 'gird',
  },
  seautou: {
    greek: 'σεαυτοῦ',
    transliteration: 'seautou',
    englishLiteral: 'yourself',
    englishNatural: 'yourself',
  },
  peripateo: {
    greek: 'περιπατέω',
    transliteration: 'peripateo',
    englishLiteral: 'walk',
    englishNatural: 'walk',
  },
  thelo: {
    greek: 'θέλω',
    transliteration: 'thelo',
    englishLiteral: 'will',
    englishNatural: 'will',
  },
  gerao: {
    greek: 'γηράσκω',
    transliteration: 'gerao',
    englishLiteral: 'grow_old',
    englishNatural: 'grow-old',
  },
  ekteino: {
    greek: 'ἐκτείνω',
    transliteration: 'ekteino',
    englishLiteral: 'stretch_out',
    englishNatural: 'stretch-out',
  },
  allos: {
    greek: 'ἄλλος',
    transliteration: 'allos',
    englishLiteral: 'another',
    englishNatural: 'another',
  },
  oiso: {
    greek: 'οἴσω',
    transliteration: 'oiso',
    englishLiteral: 'carry',
    englishNatural: 'carry',
  },
  amen: {
    greek: 'ἀμὴν',
    transliteration: 'amen',
    englishLiteral: 'truly',
    englishNatural: 'truly',
  },
  hopou: {
    greek: 'ὅπου',
    transliteration: 'hopou',
    englishLiteral: 'where',
    englishNatural: 'where',
  },
  hotan: {
    greek: 'ὅταν',
    transliteration: 'hotan',
    englishLiteral: 'when',
    englishNatural: 'when',
  },
  de: {
    greek: 'δέ',
    transliteration: 'de',
    englishLiteral: 'but',
    englishNatural: 'but',
  },
} as const;

export type GreekRootKey = keyof typeof ROOTS;

export interface GreekRootElement {
  greek: string;
  transliteration: string;
  englishLiteral: string;
  englishNatural: string;
  type?: GreekWordMorphology['type'];
  description?: string;
  related?: readonly GreekRootKey[];
  translatedFrom?: readonly HebrewRootKey[];

}

// Type-safe export for Greek Dictionary
export const roots: Record<GreekRootKey, GreekRootElement> = ROOTS;
