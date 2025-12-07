import { Chapter } from '@/types';
import { genesis_12_1 } from './genesis-12-1';
import { genesis_12_2 } from './genesis-12-2';
import { genesis_12_3 } from './genesis-12-3';

const chapter: Chapter = {
  meta: {
    book: 'Genesis',
    chapter: 12,
  },
  verses: [genesis_12_1, genesis_12_2, genesis_12_3],
};

export default chapter;

