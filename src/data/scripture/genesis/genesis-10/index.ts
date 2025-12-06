import { Chapter } from '@/types';
import { genesis_10_1 } from './genesis-10-1';
import { genesis_10_8 } from './genesis-10-8';
import { genesis_10_9 } from './genesis-10-9';
import { genesis_10_10 } from './genesis-10-10';
import { genesis_10_11 } from './genesis-10-11';
import { genesis_10_12 } from './genesis-10-12';

const chapter: Chapter = {
  meta: {
    book: 'Genesis',
    chapter: 10,
  },
  verses: [
    genesis_10_1,
    genesis_10_8,
    genesis_10_9,
    genesis_10_10,
    genesis_10_11,
    genesis_10_12,
  ],
};

export default chapter;

