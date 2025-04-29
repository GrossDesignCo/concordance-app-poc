import { Button } from '@/design-system';
import { TextT } from '@phosphor-icons/react';
import { useLexicon } from '@/context/LexiconContext';

export const ShowLexiconControl = () => {
  const { lexiconOpen, setLexiconOpen } = useLexicon();

  return (
    <Button
      aria-label="Show Lexicon"
      variant={lexiconOpen ? 'secondary' : 'ghost'}
      onClick={() => setLexiconOpen(!lexiconOpen)}
    >
      <TextT size={20} weight="regular" />
    </Button>
  );
};
