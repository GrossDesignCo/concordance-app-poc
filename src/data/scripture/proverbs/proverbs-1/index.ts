import { Chapter } from '@/types';
import { proverbs_1_1 } from './proverbs-1-1';
import { proverbs_1_2 } from './proverbs-1-2';
import { proverbs_1_3 } from './proverbs-1-3';
import { proverbs_1_4 } from './proverbs-1-4';
import { proverbs_1_5 } from './proverbs-1-5';
import { proverbs_1_6 } from './proverbs-1-6';
import { proverbs_1_7 } from './proverbs-1-7';

const chapter: Chapter = {
  meta: {
    book: 'Proverbs',
    chapter: 1,
  },
  verses: [proverbs_1_1, proverbs_1_2, proverbs_1_3, proverbs_1_4, proverbs_1_5, proverbs_1_6, proverbs_1_7],
};

export default chapter;
