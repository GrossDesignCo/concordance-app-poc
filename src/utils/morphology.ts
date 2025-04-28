import { WordGender, WordNumber } from '@/types';

const morphologyMap: Record<WordGender | WordNumber, string> = {
  masculine: 'm',
  feminine: 'f',
  neuter: 'n',
  common: 'c',
  plural: 'p',
  singular: 's',
  dual: 'd',
};

interface Morphology {
  gender?: WordGender;
  number?: WordNumber;
}

export function formatMorphology(morphology?: Morphology): string | null {
  if (!morphology) return null;

  const parts: string[] = [];
  
  if (morphology.gender) {
    parts.push(morphologyMap[morphology.gender]);
  }
  
  if (morphology.number) {
    parts.push(morphologyMap[morphology.number]);
  }

  return parts.length > 0 ? `(${parts.join(',')})` : null;
}