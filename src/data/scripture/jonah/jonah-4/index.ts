import { Chapter } from '@/types';
import { jonah_4_1 } from './jonah-4-1';
import { jonah_4_2 } from './jonah-4-2';
import { jonah_4_3 } from './jonah-4-3';
import { jonah_4_4 } from './jonah-4-4';
import { jonah_4_5 } from './jonah-4-5';

export default {
  meta: {
    book: 'Jonah',
    chapter: 4,
  },
  verses: [jonah_4_1, jonah_4_2, jonah_4_3, jonah_4_4, jonah_4_5],
} as Chapter;
