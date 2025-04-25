'use client';
import LexiconEntry from '@/components/lexicon/Entry';
// import styles from './Main.module.css';

import { ViewPanel, ViewPanels } from '@/components/ViewPanels';
import { useSelection } from '@/context/SelectionContext';
import { ScriptureReader } from './scripture/ScriptureReader';
import { Sheet } from '@/design-system';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export const Main = () => {
  const { selectedWord, setSelectedWord } = useSelection();
  const isDesktop = useMediaQuery('(min-width: 720px)');

  return (
    <main>
      <ViewPanels>
        <ViewPanel>
          <ScriptureReader />
        </ViewPanel>

        {/* Alt for testing: Render Lexicon entry side by side */}
        {/* <ViewPanel>
          <LexiconEntry />
        </ViewPanel> */}

        <Sheet
          open={Boolean(selectedWord)}
          onOpenChange={() => setSelectedWord(null)}
          title={
            selectedWord
              ? `${selectedWord.hebrew} (${selectedWord.transliteration}, ${selectedWord.englishLiteral})`
              : 'Word Details'
          }
          position={isDesktop ? 'right' : 'bottom'}
          maxWidth={isDesktop ? '40ch' : undefined}
          pushContent={isDesktop}
        >
          <LexiconEntry />
        </Sheet>
      </ViewPanels>
    </main>
  );
};
