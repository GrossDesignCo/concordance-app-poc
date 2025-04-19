import { Book } from '@/types';
import { genesis_1 } from './genesis-1';
// Genesis 2 to come
import { genesis_3 } from './genesis-3';

export const genesis: Book = {
  name: 'Genesis',
  chapters: [genesis_1, genesis_3],
};
