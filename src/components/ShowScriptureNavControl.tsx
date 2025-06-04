import { Button, Tooltip } from '@/design-system';
// import { TextT } from '@phosphor-icons/react';
import { useViewPanels } from '@/context/ViewPanelsContext';

export const ShowScriptureNavControl = () => {
  const { secondaryPanel, setSecondaryPanel } = useViewPanels();

  return (
    <Tooltip label="Navigate to Chapter">
      <Button
        aria-label="Navigate to Chapter"
        variant={secondaryPanel === 'scriptureNav' ? 'primary' : 'ghost'}
        onClick={() => setSecondaryPanel('scriptureNav')}
      >
        {/* <TextT size={20} weight="regular" /> */}
        Nav
      </Button>
    </Tooltip>
  );
};
