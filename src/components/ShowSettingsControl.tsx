import { Button } from '@/design-system';
import { Gear } from '@phosphor-icons/react';
import { useViewPanels } from '@/context/ViewPanelsContext';

export const ShowSettingsControl = () => {
  const { secondaryPanel, setSecondaryPanel } = useViewPanels();

  return (
    <Button
      aria-label="Show Settings"
      variant={secondaryPanel === 'settings' ? 'secondary' : 'ghost'}
      onClick={() => setSecondaryPanel('settings')}
    >
      <Gear size={20} weight="regular" />
    </Button>
  );
};
