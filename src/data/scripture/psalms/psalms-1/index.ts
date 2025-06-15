import { Chapter } from '@/types';
import { psalms_1_1 } from './psalms-1-1';
import { psalms_1_2 } from './psalms-1-2';
import { psalms_1_3 } from './psalms-1-3';
import { psalms_1_4 } from './psalms-1-4';
import { psalms_1_5 } from './psalms-1-5';
import { psalms_1_6 } from './psalms-1-6';

const chapter: Chapter = {
  meta: {
    book: 'Psalms',
    chapter: 1,
  },
  verses: [psalms_1_1, psalms_1_2, psalms_1_3, psalms_1_4, psalms_1_5, psalms_1_6],
};

export default chapter; 