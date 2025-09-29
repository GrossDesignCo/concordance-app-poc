import { Book } from '@/types';
import jonah_1 from './jonah-1';
import jonah_2 from './jonah-2';
import jonah_3 from './jonah-3';

export const jonah: Book = {
  meta: {
    name: 'Jonah',
    translationChain: 'יונה (Yonah/Dove) → Ἰωνᾶς (Ionas/Dove) → Jonah',
  },
  chapters: [jonah_1, jonah_2, jonah_3],
};
