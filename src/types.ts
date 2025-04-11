// Types for the translation data structure
export interface WordMorphology {
  /**
   * Grammatical gender of the word
   * - masculine: Used for male beings and some inanimate objects
   * - feminine: Used for female beings and some inanimate objects
   * - neuter: Rare, mainly in borrowed words
   */
  gender?: 'masculine' | 'feminine' | 'neuter';

  /**
   * Grammatical number indicating quantity
   * - singular: One item/person
   * - plural: Multiple items/people
   * Note: Hebrew also has dual number for pairs, which we might want to add
   */
  number?: 'singular' | 'plural';

  /**
   * Person indicates the participant in the discourse
   * - 1st: The speaker ("I" or "we")
   * - 2nd: The one spoken to ("you")
   * - 3rd: The one spoken about ("he", "she", "it", "they")
   * Primarily used with verbs and pronouns
   */
  person?: '1st' | '2nd' | '3rd';

  /**
   * Verbal tense/aspect
   * - perfect: Completed action (often past)
   * - imperfect: Incomplete action (often future or ongoing)
   * - participle: Verbal adjective showing continuous action
   * - imperative: Commands
   * Note: Hebrew tenses indicate aspect (complete/incomplete) more than time
   */
  tense?: 'perfect' | 'imperfect' | 'participle' | 'imperative';

  /**
   * Verbal stem indicating type of action
   * - qal: Simple active ("he wrote")
   * - niphal: Simple passive ("was written")
   * - piel: Intensive active ("wrote repeatedly")
   * - pual: Intensive passive ("was written repeatedly")
   * - hiphil: Causative active ("caused to write")
   * - hophal: Causative passive ("was caused to write")
   * - hithpael: Reflexive ("wrote for oneself")
   */
  stem?: 'qal' | 'niphal' | 'piel' | 'pual' | 'hiphil' | 'hophal' | 'hithpael';

  /**
   * State indicates whether a noun is bound to a following noun
   * - construct: Bound to following noun (e.g., "king-of" in "king-of Israel")
   * - absolute: Standing alone (e.g., "king" by itself)
   * - neither: For words where state doesn't apply (e.g., verbs)
   * Note: This primarily applies to nouns and adjectives
   */
  state?: 'construct' | 'absolute' | 'neither';
}

export interface TranslationWord {
  hebrew: string;
  transliteration: string;
  englishLiteral: string; // Our hyper-literal translation
  englishNatural?: string; // More natural English rendering
  strongsNumber?: string; // For linking to lexicons
  morphology?: WordMorphology; // Detailed grammatical info
  prefixes?: string[]; // Separable prefixes
  suffixes?: string[]; // Separable suffixes
  root?: string; // Hebrew root if known
  joinToNext?: boolean; // For handling construct chains and compounds
  /**
   * Represents word order in different arrangements
   * Used for maintaining correct order in different display modes
   */
  order: {
    hebrew: number; // Position in original Hebrew text
    english?: number; // Optional position for English rendering
  };
}

export interface VerseMeta {
  chapter: number;
  verse: number;
  paragraphBreak?: boolean;
  poetryLine?: boolean;
  indent?: number; // For poetry formatting
}

export interface Verse {
  meta: VerseMeta;
  words: TranslationWord[];
  // Different renderings of the complete verse
  translations?: {
    literal: string; // Our hyper-literal translation
    natural?: string; // More natural English
    hebrewWordOrder?: string; // Following Hebrew syntax
    // Could add others like 'formal equivalent', 'dynamic equivalent', etc.
  };
}

export interface Chapter {
  number: number;
  verses: Verse[];
}

export interface Book {
  name: string;
  chapters: Chapter[];
}
