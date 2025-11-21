import { Book } from '@/types';
import ezekiel_1 from './ezekiel-1';
import ezekiel_2 from './ezekiel-2';

export const ezekiel: Book = {
  meta: {
    name: 'Ezekiel',
    translationChain:
      'יְחֶזְקֵאל (Yechezqel/God-Strengthens) → Ἰεζεκιήλ (Iezekiēl) → Ezekiel',
  },
  chapters: [ezekiel_1, ezekiel_2],
};

