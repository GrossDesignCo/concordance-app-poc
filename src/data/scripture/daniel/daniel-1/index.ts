import { Chapter } from '@/types';
import { daniel_1_1 } from './daniel-1-1';
import { daniel_1_2 } from './daniel-1-2';
import { daniel_1_20 } from './daniel-1-20';
import { daniel_1_21 } from './daniel-1-21';

const chapter: Chapter = {
  meta: {
    book: 'Daniel',
    chapter: 1,
  },
  verses: [daniel_1_1, daniel_1_2, daniel_1_20, daniel_1_21],
};

export default chapter;

