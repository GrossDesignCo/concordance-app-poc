import { Chapter } from '@/types';
import { genesis_6_1 } from './genesis-6-1';
import { genesis_6_2 } from './genesis-6-2';
import { genesis_6_3 } from './genesis-6-3';
import { genesis_6_4 } from './genesis-6-4';

const chapter: Chapter = {
  meta: {
    book: 'Genesis',
    chapter: 6,
  },
  verses: [genesis_6_1, genesis_6_2, genesis_6_3, genesis_6_4],
};

export default chapter;
