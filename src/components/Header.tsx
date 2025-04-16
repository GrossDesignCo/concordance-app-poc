import React from 'react';
import TranslationControls from '@/components/Settings';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.appTitle}>Concordance/Lexicon PoC | UI</h1>
      <TranslationControls />
    </header>
  );
};
