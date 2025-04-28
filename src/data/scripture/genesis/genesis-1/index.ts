import { Chapter } from '@/types';
import { genesis_1_1 } from './genesis-1-1';
import { genesis_1_2 } from './genesis-1-2';
import { genesis_1_3 } from './genesis-1-3';
import { genesis_1_4 } from './genesis-1-4';

export const genesis_1: Chapter = {
  number: 1,
  verses: [genesis_1_1, genesis_1_2, genesis_1_3, genesis_1_4],
};
