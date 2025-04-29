'use client';
import LexiconEntry from '@/components/lexicon/Entry';
// import styles from './Main.module.css';

import { ViewPanel, ViewPanels } from '@/components/ViewPanels';
import { useSelection } from '@/context/SelectionContext';
import { ScriptureReader } from './scripture/ScriptureReader';
import { Sheet } from '@/design-system';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import styles from './Main.module.css';
import { LanguageKey } from '@/types';
import { formatWord } from '@/utils/formatWord';
import { sortWords } from '@/utils/sortWords';

const languages: LanguageKey[] = [
  'original',
  'transliteration',
  'englishLiteral',
];

export const Main = () => {
  const { selectedWords, clearSelection } = useSelection();
  const isDesktop = useMediaQuery('(min-width: 720px)');
  const isLandscape = useMediaQuery('(orientation: landscape)');
  const isLargeDesktop = useMediaQuery('(min-width: 150ch)');

  const sheetTitle = languages
    .map((language) => {
      const sortedWords = sortWords(selectedWords, language);

      return sortedWords
        .map((word) => {
          const { formattedWordText } = formatWord(word, language);
          return formattedWordText;
        })
        .join(' ');
    })
    .join(', ');

  return (
    <main className={styles.main}>
      <ViewPanels>
        <ViewPanel>
          <ScriptureReader />
        </ViewPanel>

        {/* Alt for testing: Render Lexicon entry side by side */}
        {/* <ViewPanel>
          <LexiconEntry />
        </ViewPanel> */}

        <Sheet
          open={selectedWords.length > 0}
          title={sheetTitle || 'Word Details'}
          position={
            (isDesktop && isLandscape) || isLargeDesktop ? 'right' : 'bottom'
          }
          pushContent={isDesktop}
          borderless={isLargeDesktop}
          onOpenChange={(open) => {
            if (!open) clearSelection();
          }}
        >
          <LexiconEntry />
        </Sheet>
      </ViewPanels>
    </main>
  );
};
