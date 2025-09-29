import { Book } from '@/types';
import exodus_3 from './exodus-3';
import exodus_34 from './exodus-34';

export const exodus: Book = {
  meta: {
    name: 'Exodus',
    translationChain:
      'שְׁמוֹת (Shemot/Names) → Ἔξοδος (Exodus/Going-Out) → Exodus',
  },
  chapters: [exodus_3, exodus_34],
};
