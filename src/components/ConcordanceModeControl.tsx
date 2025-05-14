import { useSelection } from '@/context/SelectionContext';
import { Button } from '@/design-system';
import {
  ArrowsInLineVertical,
  ArrowsOutLineVertical,
} from '@phosphor-icons/react';

export const ConcordanceModeControl = () => {
  const { filterVerses, setFilterVerses, selectedWords } = useSelection();
  // Only show the filter button if there are words to filter by
  if (!selectedWords.length) return null;

  return (
    <Button
      onClick={() => {
        setFilterVerses(!filterVerses);
      }}
      variant={filterVerses ? 'primary' : 'secondary'}
    >
      {filterVerses ? (
        <ArrowsOutLineVertical size={20} />
      ) : (
        <ArrowsInLineVertical size={20} />
      )}
    </Button>
  );
};
