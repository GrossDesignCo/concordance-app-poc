import React from 'react';
// import { ClearSelectionControl } from './ClearSelectionControl';
import { ShowLexiconControl } from './ShowLexiconControl';
import { ShowSettingsControl } from './ShowSettingsControl';
import styles from './Header.module.css';
import Link from 'next/link';
import { Info } from '@phosphor-icons/react';
import { Button, Tooltip } from '@/design-system';
import { ConcordanceModeControl } from './ConcordanceModeControl';
import { ShowScriptureNavControl } from './ShowScriptureNavControl';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.appTitleContainer}>
          <h1 className={styles.appTitle}>Roots</h1>

          <Tooltip label="About">
            <Link href="/about">
              <Button variant="ghost" size="sm">
                <Info size={20} weight="regular" />
              </Button>
            </Link>
          </Tooltip>
        </div>

        <div className={styles.controls}>
          {/* <ClearSelectionControl /> */}

          <ConcordanceModeControl />
          <ShowLexiconControl />
          <ShowScriptureNavControl />
          <ShowSettingsControl />
        </div>
      </div>
    </header>
  );
};
