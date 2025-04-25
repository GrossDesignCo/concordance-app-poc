import { Book } from '@/types';
import { proverbs_22 } from './proverbs-22';

export const proverbs: Book = {
  meta: {
    name: 'Proverbs',
    translationChain:
      'מִשְׁלֵי (Mishlei/Proverbs) → Παροιμίαι (Paroimiai/Proverbs) → Proverbia (Proverbs) → Proverbs',
  },
  chapters: [proverbs_22],
};
