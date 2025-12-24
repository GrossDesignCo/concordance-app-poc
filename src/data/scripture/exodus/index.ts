import { Book } from '@/types';
import exodus_2 from './exodus-2';
import exodus_3 from './exodus-3';
import exodus_4 from './exodus-4';
import exodus_5 from './exodus-5';
import exodus_34 from './exodus-34';

export const exodus: Book = {
  meta: {
    name: 'Exodus',
    translationChain:
      'שְׁמוֹת (Shemot/Names) → Ἔξοδος (Exodus/Going-Out) → Exodus',
  },
  chapters: [exodus_2, exodus_3, exodus_4, exodus_5, exodus_34],
};
