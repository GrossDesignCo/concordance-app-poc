import { Button } from '@/design-system';
import { TextT } from '@phosphor-icons/react';
import { useViewPanels } from '@/context/ViewPanelsContext';

export const ShowLexiconControl = () => {
  const { secondaryPanel, setSecondaryPanel } = useViewPanels();

  return (
    <Button
      aria-label="Show Lexicon"
      variant={secondaryPanel === 'lexicon' ? 'secondary' : 'ghost'}
      onClick={() => setSecondaryPanel('lexicon')}
    >
      <TextT size={20} weight="regular" />
    </Button>
  );
};
