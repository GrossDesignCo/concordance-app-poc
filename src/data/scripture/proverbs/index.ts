import { Book } from '@/types';
import proverbs_1 from './proverbs-1';
import proverbs_8 from './proverbs-8';
import proverbs_22 from './proverbs-22';

export const proverbs: Book = {
  meta: {
    name: 'Proverbs',
    translationChain:
      'מִשְׁלֵי (Mishlei/Rules) → Παροιμίαι (Paroimiai/Proverbs) → Proverbia (Proverbs) → Proverbs',
  },
  chapters: [proverbs_1, proverbs_8, proverbs_22],
};
