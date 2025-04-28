import { Verse } from '@/types';

export const genesis_3_1: Verse = {
  meta: {
    chapter: 3,
    number: 1,
  },
  words: [
    {
      hebrew: 'וְהַנָּחָשׁ',
      transliteration: 'veHaNachash',
      englishLiteral: 'And-the-snake',
      englishNatural: 'And the snake',
      root: 'nachash',
      prefixes: ['ve', 'ha'],
      order: {
        hebrew: 1,
        english: 1,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun'
      },
    },
    {
      hebrew: 'הָיָה',
      transliteration: 'hayah',
      englishLiteral: 'was',
      englishNatural: 'was',
      root: 'hayah',
      order: {
        hebrew: 2,
        english: 2,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb'
      },
    },
    {
      hebrew: 'עָרוּם',
      transliteration: 'arum',
      englishLiteral: 'shrewd',
      englishNatural: 'shrewd',
      root: 'arum',
      order: {
        hebrew: 3,
        english: 3,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'absolute',
        type: 'adjective'
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'מִכֹּל',
      transliteration: 'miKol',
      englishLiteral: 'from-all',
      englishNatural: 'more than any',
      root: 'kol',
      prefixes: ['mi'],
      order: {
        hebrew: 4,
        english: 4,
      },
    },
    {
      hebrew: 'חַיַּת',
      transliteration: 'chayat',
      englishLiteral: 'living_thing-of',
      englishNatural: 'living-thing of',
      root: 'chayah',
      suffixes: ['construct_t'],
      order: {
        hebrew: 5,
        english: 5,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        state: 'construct',
        type: 'noun'
      },
    },
    {
      hebrew: 'הַשָּׂדֶה',
      transliteration: 'haSadeh',
      englishLiteral: 'the-field',
      englishNatural: 'the field',
      root: 'sadeh',
      prefixes: ['ha'],
      order: {
        hebrew: 6,
        english: 6,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun'
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'אֲשֶׁר',
      transliteration: 'asher',
      englishLiteral: 'which',
      englishNatural: 'which',
      root: 'asher',
      order: {
        hebrew: 7,
        english: 7,
      },
    },
    {
      hebrew: 'עָשָׂה',
      transliteration: 'asah',
      englishLiteral: 'made',
      englishNatural: 'had made',
      root: 'asah',
      order: {
        hebrew: 8,
        english: 10, // Changes position in English
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb'
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: '.',
      },
    },
    {
      hebrew: 'יְהוָה',
      transliteration: 'YHWH',
      englishLiteral: 'I_AM',
      englishNatural: 'I-AM',
      root: 'yhwh',
      order: {
        hebrew: 9,
        english: 8, // Moves before "made" in English
      },
    },
    {
      hebrew: 'אֱלֹהִים',
      transliteration: 'Elohim',
      englishLiteral: 'Gods',
      englishNatural: 'God',
      root: 'eloah',
      suffixes: ['im'],
      order: {
        hebrew: 10,
        english: 9,
      },
      grammarSuffix: {
        englishLiteral: '.',
      },
    },
    {
      hebrew: 'וַיֹּאמֶר',
      transliteration: 'vaYomer',
      englishLiteral: 'And-said',
      englishNatural: 'And he said',
      root: 'amar',
      prefixes: ['va'],
      order: {
        hebrew: 11,
        english: 11,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb'
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'אֶל',
      transliteration: 'el',
      englishLiteral: 'to',
      englishNatural: 'to',
      root: 'el',
      order: {
        hebrew: 12,
        english: 12,
      },
    },
    {
      hebrew: 'הָאִשָּׁה',
      transliteration: 'haIshah',
      englishLiteral: 'the-woman',
      englishNatural: 'the woman',
      root: 'ishah',
      prefixes: ['ha'],
      order: {
        hebrew: 13,
        english: 13,
      },
      morphology: {
        gender: 'feminine',
        number: 'singular',
        type: 'noun'
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: ',',
      },
    },
    {
      hebrew: 'אַף',
      transliteration: 'af',
      englishLiteral: 'Indeed',
      englishNatural: 'Indeed',
      root: 'af',
      order: {
        hebrew: 14,
        english: 14,
      },
      grammarPrefix: {
        englishLiteral: '"',
        englishNatural: '"',
      },
      grammarSuffix: {
        englishLiteral: ',',
        englishNatural: '?',
      },
    },
    {
      hebrew: 'כִּי',
      transliteration: 'ki',
      englishLiteral: 'that',
      englishNatural: '',
      root: 'ki',
      order: {
        hebrew: 15,
        english: 15,
      },
      grammarSuffix: {
        englishLiteral: '?',
      },
    },
    {
      hebrew: 'אָמַר',
      transliteration: 'amar',
      englishLiteral: 'Said',
      englishNatural: 'said',
      root: 'amar',
      order: {
        hebrew: 16,
        english: 17, // Changes position in English
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        person: '3rd',
        tense: 'perfect',
        stem: 'qal',
        type: 'verb'
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'אֱלֹהִים',
      transliteration: 'Elohim',
      englishLiteral: 'Gods',
      englishNatural: 'Has God',
      root: 'eloah',
      suffixes: ['im'],
      order: {
        hebrew: 17,
        english: 16, // Moves before "said" in English
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        type: 'noun'
      },
      grammarSuffix: {
        englishLiteral: ',',
      },
    },
    {
      hebrew: 'לֹא',
      transliteration: 'lo',
      englishLiteral: 'Not',
      englishNatural: 'not',
      root: 'lo',
      order: {
        hebrew: 18,
        english: 19,
      },
      grammarPrefix: {
        englishLiteral: "'",
      },
    },
    {
      hebrew: 'תֹאכְלוּ',
      transliteration: 'tokhlu',
      englishLiteral: 'you-shall-eat',
      englishNatural: 'You shall eat',
      root: 'akhal',
      suffixes: ['u'],
      order: {
        hebrew: 19,
        english: 18,
      },
      morphology: {
        gender: 'masculine',
        number: 'plural',
        person: '2nd',
        tense: 'imperfect',
        stem: 'qal',
        type: 'verb'
      },
      grammarPrefix: {
        englishNatural: "'",
      },
    },
    {
      hebrew: 'מִכֹּל',
      transliteration: 'miKol',
      englishLiteral: 'from-all',
      englishNatural: 'from any',
      root: 'kol',
      prefixes: ['mi'],
      order: {
        hebrew: 20,
        english: 20,
      },
    },
    {
      hebrew: 'עֵץ',
      transliteration: 'etz',
      englishLiteral: 'tree',
      englishNatural: 'tree',
      root: 'etz',
      order: {
        hebrew: 21,
        english: 21,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        state: 'construct',
        type: 'noun'
      },
    },
    {
      hebrew: 'הַגָּן',
      transliteration: 'haGan',
      englishLiteral: 'the-garden',
      englishNatural: 'of the garden',
      root: 'gan',
      prefixes: ['ha'],
      order: {
        hebrew: 22,
        english: 22,
      },
      morphology: {
        gender: 'masculine',
        number: 'singular',
        type: 'noun'
      },
      grammarSuffix: {
        englishLiteral: '\'?"',
        englishNatural: '\'?"',
      },
    },
  ],
  translations: {
    hebrew:
      'וְהַנָּחָשׁ הָיָה עָרוּם מִכֹּל חַיַּת הַשָּׂדֶה אֲשֶׁר עָשָׂה יְהוָה אֱלֹהִים וַיֹּאמֶר אֶל הָאִשָּׁה אַף כִּי אָמַר אֱלֹהִים לֹא תֹאכְלוּ מִכֹּל עֵץ הַגָּן',
    transliteration:
      'veHaNachash hayah arum miKol chayat haSadeh asher asah YHWH Elohim vaYomer el haIshah af ki amar Elohim lo tokhlu miKol etz haGan',
    englishLiteral:
      'And-the-snake was shrewd, from-all living_thing-of the-field, which made, I_AM Gods. And-said, to the-woman, "Indeed, that? Said, Gods, \'Not you-shall-eat from-all tree the-garden\'?"',
    englishNatural:
      'And the snake was shrewd, more than any living-thing of the field, which I-AM God had made. And he said to the woman, "Indeed? Has God said \'You shall eat not from any tree of the garden\'?"',
  },
};
