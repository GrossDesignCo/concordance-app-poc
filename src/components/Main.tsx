'use client';
// import styles from './Main.module.css';

import { ViewPanel, ViewPanels } from '@/components/ViewPanels';
import { ScriptureReader } from './scripture/ScriptureReader';
import styles from './Main.module.css';
import { LexiconSheet } from './lexicon/LexiconSheet';

export const Main = () => {
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

        <LexiconSheet />
      </ViewPanels>
    </main>
  );
};
