import { Button, Tooltip } from '@/design-system';
import { Gear } from '@phosphor-icons/react';
import { useViewPanels } from '@/context/ViewPanelsContext';

export const ShowSettingsControl = () => {
  const { secondaryPanel, setSecondaryPanel } = useViewPanels();

  return (
    <Tooltip label="Show Settings">
      <Button
        aria-label="Show Settings"
        variant={secondaryPanel === 'settings' ? 'primary' : 'ghost'}
        onClick={() => setSecondaryPanel('settings')}
      >
        <Gear size={20} weight="regular" />
      </Button>
    </Tooltip>
  );
};
