import { useSelection } from '@/context/SelectionContext';
import { Button } from '@/design-system';
import { TextTSlash } from '@phosphor-icons/react';

export const ClearSelectionControl = () => {
  const { selectedWords, clearSelection } = useSelection();

  // Only show the clear button if it would be useful / clear more than just the one word
  if (selectedWords.length <= 1) return null;

  return (
    <Button aria-label="Clear Word Selection" onClick={() => clearSelection()}>
      <TextTSlash size={20} weight="regular" />
    </Button>
  );
};
