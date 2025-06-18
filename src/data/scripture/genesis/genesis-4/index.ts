import { Chapter } from '@/types';
import { genesis_4_1 } from './genesis-4-1';
import { genesis_4_2 } from './genesis-4-2';
import { genesis_4_3 } from './genesis-4-3';
import { genesis_4_4 } from './genesis-4-4';
import { genesis_4_5 } from './genesis-4-5';
import { genesis_4_6 } from './genesis-4-6';
import { genesis_4_7 } from './genesis-4-7';

const chapter: Chapter = {
  meta: {
    book: 'Genesis',
    chapter: 4,
  },
  verses: [genesis_4_1, genesis_4_2, genesis_4_3, genesis_4_4, genesis_4_5, genesis_4_6, genesis_4_7],
};

export default chapter;
