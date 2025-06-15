import { Book } from '@/types';
import psalms_1 from './psalms-1';
import psalms_117 from './psalms-117';

export const psalms: Book = {
  meta: {
    name: 'Psalms',
    translationChain:
      'תְּהִלִּים (tehillim/Praises/Songs of Praise) → Ψαλμοί (Psalmoi/Psalms/Songs with Harps) → Psalmi (Psalms/Hymns) → Psalms',
  },
  chapters: [psalms_1, psalms_117],
}; 