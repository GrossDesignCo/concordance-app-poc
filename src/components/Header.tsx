import React from 'react';
// import { ClearSelectionControl } from './ClearSelectionControl';
import { ShowLexiconControl } from './ShowLexiconControl';
import { ShowSettingsControl } from './ShowSettingsControl';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.appTitle}>LexiChi</h1>

        <div className={styles.controls}>
          {/* <ClearSelectionControl /> */}
          <ShowLexiconControl />
          <ShowSettingsControl />
        </div>
      </div>
    </header>
  );
};
