import { Book } from '@/types';
import genesis_1 from './genesis-1';
import genesis_2 from './genesis-2';
import genesis_3 from './genesis-3';
import genesis_4 from './genesis-4';

export const genesis: Book = {
  meta: {
    name: 'Genesis',
    translationChain:
      'בְּרֵאשִׁית (beReshit/in-Heading) → Γένεσις (Genesis/Origin) → Genesis',
  },
  chapters: [genesis_1, genesis_2, genesis_3, genesis_4],
};
