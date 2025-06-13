import { Book } from '@/types';
import john_1 from './john-1';
// TODO: John 1b-21a
import john_21 from './john-21';

export const john: Book = {
  meta: {
    name: 'John',
    translationChain: 'Ἰωάννης (Iōannēs/John) → Ioannes (John) → John',
  },
  chapters: [john_1, john_21],
};
