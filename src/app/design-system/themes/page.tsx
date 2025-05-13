'use client';
import cx from 'classnames';
import styles from './page.module.css';
import { Button } from '@/design-system';
import {
  Asclepius,
  FlagBannerFold,
  ListMagnifyingGlass,
  Scribble,
  SplitVertical,
  Sun,
} from '@phosphor-icons/react';

export default function DesignSystemThemes() {
  const themes = ['light', 'dark'];
  const tokens = {
    bg: [
      'high-contrast',
      'default',
      'low-contrast',
      'container',
      'container-low-contrast',
      'overlay',
    ],
    fg: ['high-contrast', 'default', 'low-contrast'],
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <code>DS / Themes</code>
      </div>

      {themes.map((theme) => (
        <div
          className={cx(styles.themeContainer, `theme-${theme}`)}
          key={theme}
        >
          <h2>
            <code>{theme}</code> Theme
          </h2>

          <p>This is a paragraph of text</p>

          <div className={styles.icons}>
            <ListMagnifyingGlass size={20} />
            <Asclepius size={20} />
            <FlagBannerFold size={20} />
            <Scribble size={20} />
            <SplitVertical size={20} />
          </div>

          <div>
            <h3>Backgrounds</h3>
            <div className={styles.cards}>
              {tokens.bg.map((token) => (
                <div
                  className={cx(styles.card)}
                  style={{ background: `var(--ds-bg-${token})` }}
                  key={token}
                >
                  {token}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3>Foregrounds</h3>
            <div className={styles.cards}>
              {tokens.fg.map((token) => (
                <div
                  className={cx(styles.card)}
                  style={{ color: `var(--ds-fg-${token})` }}
                  key={token}
                >
                  <div>{token}</div>
                  <div>
                    <strong>{token}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.buttons}>
            <Button variant="primary">
              <span>Button with icon</span> <Sun />
            </Button>
            <Button variant="secondary">
              <span>Button with icon</span> <Sun />
            </Button>
            <Button variant="ghost">
              <span>Button with icon</span> <Sun />
            </Button>
            <Button variant="secondary">Button with text</Button>

            <Button variant="secondary">
              <Sun />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
