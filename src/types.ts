import {
  roots as hebrewRoots,
  prefixes,
  suffixes,
} from '@/data/dictionary/hebrew';
import { roots as greekRoots } from '@/data/dictionary/greek';

// Hebrew Dictionary
export type HebrewRoot = keyof typeof hebrewRoots;
export type HebrewPrefix = keyof typeof prefixes;
export type HebrewSuffix = keyof typeof suffixes;

// Greek Dictionary
export type GreekRoot = keyof typeof greekRoots;

// Word Keys
export type LanguageKey =
  | 'original'
  | 'transliteration'
  | 'englishLiteral'
  | 'englishNatural';
export type ResolvedLanguageKey =
  | 'hebrew'
  | 'greek'
  | 'transliteration'
  | 'englishLiteral'
  | 'englishNatural';
export type WordOrderKey = 'hebrew' | 'greek' | 'english';

/**
 * Grammatical gender of the word
 * - masculine: Used for male beings and some inanimate objects
 * - feminine: Used for female beings and some inanimate objects
 * - neuter: Rare, mainly in borrowed words
 * - common: Only used in Greek
 */
export type WordGender = 'masculine' | 'feminine' | 'neuter' | 'common';

/**
 * Grammatical number indicating quantity
 * - singular: One item/person
 * - plural: Multiple items/people
 * Note: Hebrew also has dual number for pairs, which we might want to add
 */
export type WordNumber = 'singular' | 'plural';

/**
 * Person indicates the participant in the discourse
 * - 1st: The speaker ("I" or "we")
 * - 2nd: The one spoken to ("you")
 * - 3rd: The one spoken about ("he", "she", "it", "they")
 * Primarily used with verbs and pronouns
 */
export type WordPerson = '1st' | '2nd' | '3rd';

// Types for the translation data structure
export interface HebrewWordMorphology {
  gender?: WordGender;
  number?: WordNumber;
  person?: WordPerson;

  /**
   * The part of speech of the word
   * Hebrew has distinct grammatical categories with unique properties
   */
  type?:
    | 'noun'
    | 'verb'
    | 'adjective'
    | 'adverb'
    | 'pronoun'
    | 'particle'
    | 'preposition'
    | 'conjunction'
    | 'interjection'
    | 'numeral'
    | 'definite article'
    | 'interrogative'
    | 'demonstrative'
    | 'relative';

  /**
   * Verbal tense/aspect
   * Hebrew verbs indicate aspect (type of action) more than time
   * - perfect/qatal: Completed action (often past)
   * - imperfect/yiqtol: Incomplete action (often future or ongoing)
   * - sequential perfect/wayyiqtol: Narrative past continuing action
   * - sequential imperfect/weqatal: Future or result continuing action
   * - participle: Verbal adjective showing continuous action
   * - infinitive construct: Verbal noun often with prepositions
   * - infinitive absolute: Verbal noun often for emphasis
   * - imperative: Commands
   * - jussive: Indirect commands or wishes (3rd person)
   * - cohortative: Expression of will/intention (1st person)
   */
  tense?:
    | 'perfect'
    | 'imperfect'
    | 'sequential_perfect'
    | 'sequential_imperfect'
    | 'participle'
    | 'infinitive_construct'
    | 'infinitive_absolute'
    | 'imperative'
    | 'jussive'
    | 'cohortative';

  /**
   * Verbal stem indicating type of action
   * - qal: Simple active ("he wrote")
   * - niphal: Simple passive or reflexive ("was written" or "wrote himself")
   * - piel: Intensive active ("wrote repeatedly" or "shattered" vs "broke")
   * - pual: Intensive passive ("was written repeatedly")
   * - hiphil: Causative active ("caused to write")
   * - hophal: Causative passive ("was caused to write")
   * - hithpael: Reflexive/reciprocal ("wrote for oneself" or "wrote to each other")
   * - polel: Variant intensive form
   * - polal: Passive of polel
   * - hithpolel: Reflexive of polel
   * - poel: Another variant intensive form
   * - poal: Passive of poel
   * - hithpoel: Reflexive of poel
   * - pilpel: Intensive from duplicated final root letter
   * - polpal: Passive of pilpel
   * - hithpalpal: Reflexive of pilpel
   * - tiphil: Rare causative stem
   * - hishtaphel: Rare reflexive stem
   */
  stem?:
    | 'qal'
    | 'niphal'
    | 'piel'
    | 'pual'
    | 'hiphil'
    | 'hophal'
    | 'hithpael'
    | 'polel'
    | 'polal'
    | 'hithpolel'
    | 'poel'
    | 'poal'
    | 'hithpoel'
    | 'pilpel'
    | 'polpal'
    | 'hithpalpal'
    | 'tiphil'
    | 'hishtaphel';

  /**
   * Direction/volition indicators (primarily with verbs)
   * - directive: Movement toward (often with ה suffix, he locale)
   * - volitional: Expresses will, desire or purpose
   * - non-volitional: Simple statement without volition
   */
  direction?: 'directive' | 'volitional' | 'non-volitional';

  /**
   * State indicates whether a noun is bound to a following noun
   * - construct: Bound to following noun (e.g., "king-of" in "king-of Israel")
   * - absolute: Standing alone (e.g., "king" by itself)
   * - neither: For words where state doesn't apply (e.g., verbs)
   * - determined: With definite article or in construct with determined noun
   * - emphatic: Special emphasized form in some contexts
   * Note: This primarily applies to nouns and adjectives
   */
  state?: 'construct' | 'absolute' | 'neither' | 'determined' | 'emphatic';
}

// Types for Greek morphology
export interface GreekWordMorphology {
  gender?: WordGender;
  number?: WordNumber;
  person?: WordPerson;

  /**
   * The part of speech of the word
   * - noun: Names a person, place, thing, or idea
   * - verb: Expresses an action or state of being
   * - adjective: Modifies a noun
   * - adverb: Modifies a verb, adjective, or other adverb
   * - pronoun: Substitutes for a noun
   * - article: Indicates definiteness (e.g., "the")
   * - preposition: Shows relationship between nouns/pronouns and other words
   * - conjunction: Connects words, phrases, or clauses
   * - particle: Small, uninflected word with grammatical function
   * - interjection: Expresses emotion or exclamation
   * - numeral: Represents a number
   */
  type?:
    | 'noun'
    | 'verb'
    | 'adjective'
    | 'adverb'
    | 'pronoun'
    | 'article'
    | 'preposition'
    | 'conjunction'
    | 'particle'
    | 'interjection'
    | 'numeral';

  /**
   * Case indicates the syntactic function of nouns, adjectives, articles, pronouns
   * - nominative: Subject or predicate nominativ   * - genitive: Possession, source, or description
   * - dative: Indirect object, means, location, or time
   * - accusative: Direct object or object of certain prepositions
   * - vocative: Direct address
   */
  case?: 'nominative' | 'genitive' | 'dative' | 'accusative' | 'vocative';

  /**
   * Tense in Greek indicates both time and aspect of action
   * - present: Ongoing action in present time
   * - imperfect: Ongoing action in past time
   * - aorist: Simple or completed action (often past)
   * - perfect: Completed action with ongoing results
   * - pluperfect: Completed action in past with results in past
   * - future: Action in future time
   * - future perfect: Action completed in future with results continuing
   */
  tense?:
    | 'present'
    | 'imperfect'
    | 'aorist'
    | 'perfect'
    | 'pluperfect'
    | 'future'
    | 'future perfect';

  /**
   * Voice indicates relationship between subject and action
   * - active: Subject performs action
   * - middle: Subject acts on/for itself or is more involved
   * - passive: Subject receives action
   * - middle-passive: Form could be either middle or passive
   * - deponent: Passive form with active meaning
   */
  voice?: 'active' | 'middle' | 'passive' | 'middle-passive' | 'deponent';

  /**
   * Mood indicates the speaker's conception of the action
   * - indicative: Statements of fact or reality
   * - subjunctive: Possibility, exhortation, purpose
   * - optative: Wish or potential
   * - imperative: Command or entreaty
   * - infinitive: Verbal noun
   * - participle: Verbal adjective
   */
  mood?:
    | 'indicative'
    | 'subjunctive'
    | 'optative'
    | 'imperative'
    | 'infinitive'
    | 'participle';

  /**
   * State indicates definiteness and articulation
   * - arthrous: With the definite article
   * - anarthrous: Without the definite article
   * - definite: Word is definite (with article or by nature)
   * - indefinite: Word is indefinite
   * - pronominal: Functions like a pronoun
   * This is particularly significant in Greek theological interpretation
   */
  state?: 'arthrous' | 'anarthrous' | 'definite' | 'indefinite' | 'pronominal';

  /**
   * Comparison degree for adjectives and adverbs
   * - positive: Basic form
   * - comparative: Comparing two items
   * - superlative: Highest degree
   */
  degree?: 'positive' | 'comparative' | 'superlative';

  /**
   * For participles, which function as verbal adjectives
   * - attributive: Modifies a noun like an adjective
   * - predicative: Functions in predicate
   * - substantive: Functions as a noun
   * - adverbial: Functions as an adverb
   * - periphrastic: Forms compound tense with auxiliary verb
   */
  participleUse?:
    | 'attributive'
    | 'predicative'
    | 'substantive'
    | 'adverbial'
    | 'periphrastic';

  /**
   * Specific functions of the cases, especially for exegesis
   * This extends the basic case system with more detailed syntactic functions
   */
  caseFunction?: {
    // Nominative case functions
    nominative?:
      | 'subject'
      | 'predicate'
      | 'apposition'
      | 'address'
      | 'exclamation'
      | 'absolute';

    // Genitive case functions
    genitive?:
      | 'possession'
      | 'relationship'
      | 'partitive'
      | 'subjective'
      | 'objective'
      | 'apposition'
      | 'quality'
      | 'price'
      | 'time'
      | 'comparison'
      | 'separation'
      | 'direct object'
      | 'material'
      | 'content';

    // Dative case functions
    dative?:
      | 'indirect object'
      | 'interest'
      | 'reference'
      | 'advantage'
      | 'disadvantage'
      | 'possession'
      | 'association'
      | 'manner'
      | 'means'
      | 'instrument'
      | 'agency'
      | 'cause'
      | 'time'
      | 'location'
      | 'sphere'
      | 'standard';

    // Accusative case functions
    accusative?:
      | 'direct object'
      | 'subject of infinitive'
      | 'object of preposition'
      | 'extent'
      | 'manner'
      | 'reference'
      | 'adverbial'
      | 'cognate'
      | 'double'
      | 'respect'
      | 'time'
      | 'duration';
  };

  /**
   * Indicates how a verb functions in subordinate clauses
   * Especially important for exegesis
   */
  clauseFunction?:
    | 'purpose'
    | 'result'
    | 'causal'
    | 'conditional'
    | 'concessive'
    | 'temporal'
    | 'comparative'
    | 'relative'
    | 'substantive'
    | 'indirect discourse';
}

export interface TranslationWord {
  hebrew?: string;
  greek?: string;
  transliteration: string;
  englishLiteral: string; // Our hyper-literal translation
  englishNatural?: string; // More natural English rendering
  morphology?: HebrewWordMorphology | GreekWordMorphology; // Detailed grammatical info
  root?: HebrewRoot | GreekRoot; // Hebrew root if known
  prefixes?: HebrewPrefix[]; // Separable prefixes
  suffixes?: HebrewSuffix[]; // Separable suffixes
  rootAppearance?: {
    hebrew: string;
    conjugation: string;
  }; // For special conjugated forms of the root

  // number of line breaks to render between this word and the next block (usually for paragraphs)
  lineBreaksAfter?: {
    greek?: number; // Position (optional) in original Greek text
    hebrew?: number; // Position (optional) in original Hebrew text
    english?: number; // Optional position (optional) for English rendering
  };
  // number of line breaks to render between this word and the previous block (usually for poetry)
  lineBreaksBefore?: {
    greek?: number; // Position (optional) in original Greek text
    hebrew?: number; // Position (optional) in original Hebrew text
    english?: number; // Optional position (optional) for English rendering
  };

  /**
   * Word order key for a given language
   */
  order?: {
    greek?: number; // Position in original Greek text
    hebrew?: number; // Position in original Hebrew text
    english?: number; // Optional position for English rendering
  };

  // Grammatical elements like commas/periods
  grammarSuffix?: Grammar;
  grammarPrefix?: Grammar;
}

export interface VerseMeta {
  chapter: number;
  number: number;
  paragraphBreak?: boolean;
  poetryLine?: boolean;
  indent?: number; // For poetry formatting
}

export interface Verse {
  meta: VerseMeta;
  words: TranslationWord[];
  // Different renderings of the complete verse for test/validation purposes
  translations?: {
    hebrew?: string; // full hebrew string, should follow hebrew word order
    transliteration?: string; // full transliteration of the hebrew string, should follow hebrew word order
    englishLiteral: string; // Our hyper-literal translation, should follow hebrew/greek word order
    englishNatural?: string; // More natural English, should follow english word order
    greek?: string; // Following Greek syntax, should follow greek word order
  };
}

export interface Grammar {
  englishLiteral?: string;
  englishNatural?: string;
}

export interface Chapter {
  number: number;
  verses: Verse[];
}

export interface Book {
  meta: {
    name: string;
    translationChain: string;
  };
  chapters: Chapter[];
}
