import { Chapter } from '@/types';
import { exodus_2_1 } from './exodus-2-1';
import { exodus_2_2 } from './exodus-2-2';
import { exodus_2_3 } from './exodus-2-3';
import { exodus_2_4 } from './exodus-2-4';

const chapter: Chapter = {
  meta: {
    book: 'Exodus',
    chapter: 2,
  },
  verses: [exodus_2_1, exodus_2_2, exodus_2_3, exodus_2_4],
};

export default chapter;

