import { Chapter } from '@/types';
import { genesis_3_1 } from './genesis-3-1';
import { genesis_3_2 } from './genesis-3-2';

const chapter: Chapter = {
  meta: {
    book: 'Genesis',
    chapter: 3,
  },
  verses: [genesis_3_1, genesis_3_2],
};

export default chapter;
