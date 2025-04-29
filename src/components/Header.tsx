import React from 'react';
import Settings from '@/components/Settings';

import styles from './Header.module.css';
import { ClearSelectionControl } from './ClearSelectionControl';
import { ShowLexiconControl } from './ShowLexiconControl';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.appTitle}>LexiChi</h1>

        <div className={styles.controls}>
          <ShowLexiconControl />
          <ClearSelectionControl />
          <Settings />
        </div>
      </div>
    </header>
  );
};
