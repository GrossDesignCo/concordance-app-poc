import { Book } from '@/types';
import john_1 from './john-1';
import john_8 from './john-8';
// TODO: John 1b-21a
import john_21 from './john-21';

export const john: Book = {
  meta: {
    name: 'John',
    translationChain: 'Ἰωάννης (Iōannēs/John) → Ioannes (John) → John',
  },
  chapters: [john_1, john_8, john_21],
};
