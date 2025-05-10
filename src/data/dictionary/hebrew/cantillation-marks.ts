/**
 * Dictionary of Hebrew cantillation marks and their English punctuation equivalents
 */
interface CantillationMark {
  hebrew: string;
  name: string;
  englishPunctuation: string;
  description: string;
  example: string;
}

export const cantillationMarks: Record<string, CantillationMark> = {
  // Disjunctive marks (major breaks)
  sof_pasuq: {
    hebrew: '׃',
    name: 'Sof Pasuq',
    englishPunctuation: '.',
    description: 'End of verse, strongest disjunctive accent',
    example: 'בְּרֵאשִׁית בָּרָא אֱלֹהִים׃',
  },
  atnach: {
    hebrew: '֑',
    name: 'Atnach',
    englishPunctuation: ';',
    description: 'Major disjunctive, often marks the middle of a verse',
    example: 'בְּרֵאשִׁית֑ בָּרָא אֱלֹהִים',
  },
  segol: {
    hebrew: '֒',
    name: 'Segol',
    englishPunctuation: ',',
    description: 'Medium disjunctive, often marks a clause boundary',
    example: 'וַיֹּאמֶר֒ יְהִי אוֹר',
  },
  shalshelet: {
    hebrew: '֓',
    name: 'Shalshelet',
    englishPunctuation: ';',
    description: 'Rare disjunctive, often marks a pause for emphasis',
    example: 'וַיְהִי֓ כֵן',
  },
  zaqef_qatan: {
    hebrew: '֔',
    name: 'Zaqef Qatan',
    englishPunctuation: ',',
    description: 'Medium disjunctive, often marks a phrase boundary',
    example: 'וַיַּרְא֔ אֱלֹהִים',
  },
  zaqef_gadol: {
    hebrew: '֕',
    name: 'Zaqef Gadol',
    englishPunctuation: ';',
    description: 'Strong disjunctive, often marks a major phrase boundary',
    example: 'וַיַּרְא֕ אֱלֹהִים',
  },
  tifcha: {
    hebrew: '֖',
    name: 'Tifcha',
    englishPunctuation: ',',
    description: 'Medium disjunctive, often marks a phrase boundary',
    example: 'וַיֹּאמֶר֖ אֱלֹהִים',
  },
  revia: {
    hebrew: '֗',
    name: 'Revia',
    englishPunctuation: ',',
    description: 'Medium disjunctive, often marks a phrase boundary',
    example: 'וַיְהִי֗ כֵן',
  },
  zarqa: {
    hebrew: '֘',
    name: 'Zarqa',
    englishPunctuation: ',',
    description: 'Medium disjunctive, often marks a phrase boundary',
    example: 'וַיַּרְא֘ אֱלֹהִים',
  },
  pashta: {
    hebrew: '֙',
    name: 'Pashta',
    englishPunctuation: ',',
    description: 'Medium disjunctive, often marks a phrase boundary',
    example: 'וַיֹּאמֶר֙ אֱלֹהִים',
  },
  yetiv: {
    hebrew: '֚',
    name: 'Yetiv',
    englishPunctuation: ',',
    description: 'Medium disjunctive, often marks a phrase boundary',
    example: 'וַיְהִי֚ כֵן',
  },
  tevir: {
    hebrew: '֛',
    name: 'Tevir',
    englishPunctuation: ',',
    description: 'Medium disjunctive, often marks a phrase boundary',
    example: 'וַיַּרְא֛ אֱלֹהִים',
  },
  geresh: {
    hebrew: '֜',
    name: 'Geresh',
    englishPunctuation: ',',
    description: 'Medium disjunctive, often marks a phrase boundary',
    example: 'וַיֹּאמֶר֜ אֱלֹהִים',
  },
  geresh_muqdam: {
    hebrew: '֝',
    name: 'Geresh Muqdam',
    englishPunctuation: ',',
    description: 'Medium disjunctive, often marks a phrase boundary',
    example: 'וַיְהִי֝ כֵן',
  },
  gershayim: {
    hebrew: '֞',
    name: 'Gershayim',
    englishPunctuation: ',',
    description: 'Medium disjunctive, often marks a phrase boundary',
    example: 'וַיַּרְא֞ אֱלֹהִים',
  },
  karne_parah: {
    hebrew: '֟',
    name: 'Karne Parah',
    englishPunctuation: ',',
    description: 'Medium disjunctive, often marks a phrase boundary',
    example: 'וַיֹּאמֶר֟ אֱלֹהִים',
  },

  // Conjunctive marks (minor breaks)
  munach: {
    hebrew: '֣',
    name: 'Munach',
    englishPunctuation: ' ',
    description: 'Conjunctive, often marks a word connection',
    example: 'בְּרֵאשִׁית֣ בָּרָא',
  },
  mahpach: {
    hebrew: '֤',
    name: 'Mahpach',
    englishPunctuation: ' ',
    description: 'Conjunctive, often marks a word connection',
    example: 'בָּרָא֤ אֱלֹהִים',
  },
  merkha: {
    hebrew: '֥',
    name: 'Merkha',
    englishPunctuation: ' ',
    description: 'Conjunctive, often marks a word connection',
    example: 'אֱלֹהִים֥ אֵת',
  },
  merkha_kefula: {
    hebrew: '֦',
    name: 'Merkha Kefula',
    englishPunctuation: ' ',
    description: 'Conjunctive, often marks a word connection',
    example: 'אֵת֦ הַשָּׁמַיִם',
  },
  darga: {
    hebrew: '֧',
    name: 'Darga',
    englishPunctuation: ' ',
    description: 'Conjunctive, often marks a word connection',
    example: 'הַשָּׁמַיִם֧ וְאֵת',
  },
  qadma: {
    hebrew: '֨',
    name: 'Qadma',
    englishPunctuation: ' ',
    description: 'Conjunctive, often marks a word connection',
    example: 'וְאֵת֨ הָאָרֶץ',
  },
  telisha_gedola: {
    hebrew: '֩',
    name: 'Telisha Gedola',
    englishPunctuation: ' ',
    description: 'Conjunctive, often marks a word connection',
    example: 'הָאָרֶץ֩ הָיְתָה',
  },
  telisha_qetana: {
    hebrew: '֪',
    name: 'Telisha Qetana',
    englishPunctuation: ' ',
    description: 'Conjunctive, often marks a word connection',
    example: 'הָיְתָה֪ תֹהוּ',
  },
  yerah_ben_yomo: {
    hebrew: '֫',
    name: 'Yerah Ben Yomo',
    englishPunctuation: ' ',
    description: 'Conjunctive, often marks a word connection',
    example: 'תֹהוּ֫ וָבֹהוּ',
  },
  ole: {
    hebrew: '֬',
    name: 'Ole',
    englishPunctuation: ' ',
    description: 'Conjunctive, often marks a word connection',
    example: 'וָבֹהוּ֬ וְחֹשֶׁךְ',
  },
  iluy: {
    hebrew: '֭',
    name: 'Iluy',
    englishPunctuation: ' ',
    description: 'Conjunctive, often marks a word connection',
    example: 'וְחֹשֶׁךְ֭ עַל',
  },
  dechi: {
    hebrew: '֮',
    name: 'Dechi',
    englishPunctuation: ' ',
    description: 'Conjunctive, often marks a word connection',
    example: 'עַל֮ פְּנֵי',
  },
  zinor: {
    hebrew: '֯',
    name: 'Zinor',
    englishPunctuation: ' ',
    description: 'Conjunctive, often marks a word connection',
    example: 'פְּנֵי֯ תְהוֹם',
  },
}; 