import { Chapter } from '@/types';
import { jonah_2_1 } from './jonah-2-1';
import { jonah_2_10 } from './jonah-2-10';

export default {
  meta: {
    book: 'Jonah',
    chapter: 2,
  },
  verses: [jonah_2_1, jonah_2_10],
} as Chapter;
