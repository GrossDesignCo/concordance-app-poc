'use client';
import cx from 'classnames';
import styles from './page.module.css';
import { Button, ToggleGroup } from '@/design-system';
import {
  Asclepius,
  FlagBannerFold,
  ListMagnifyingGlass,
  Scribble,
  SplitVertical,
  Sun,
} from '@phosphor-icons/react';
import { useState } from 'react';

export default function DesignSystemThemes() {
  const [theme, setTheme] = useState<string[]>(['light']);
  const [translation, setTranslation] = useState<string[]>(['hebrew']);
  const [font, setFont] = useState<string>('sans');

  const handleThemeChange = (value: string | string[]) => {
    setTheme(Array.isArray(value) ? value : [value]);
  };

  const handleTranslationChange = (value: string | string[]) => {
    setTranslation(Array.isArray(value) ? value : [value]);
  };

  const handleFontChange = (value: string | string[]) => {
    setFont(Array.isArray(value) ? value[0] : value);
  };

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

  const themeOptions = [
    {
      value: 'light',
      label: 'Light',
      preview: <div className={cx(styles.themePreview, 'theme-light')}>Aa</div>,
    },
    {
      value: 'dark',
      label: 'Dark',
      preview: <div className={cx(styles.themePreview, 'theme-dark')}>Aa</div>,
    },
  ];

  const translationOptions = [
    {
      value: 'hebrew',
      label: 'Hebrew',
      preview: <div className={styles.translationPreview}>אֱלֹהִים</div>,
    },
    {
      value: 'translit',
      label: 'Translit',
      preview: <div className={styles.translationPreview}>Elohim</div>,
    },
    {
      value: 'english-literal',
      label: 'Literal',
      preview: <div className={styles.translationPreview}>Gods</div>,
    },
    {
      value: 'english-natural',
      label: 'Natural',
      preview: <div className={styles.translationPreview}>God</div>,
    },
  ];

  const fontOptions = [
    {
      value: 'sans',
      label: 'Sans',
      preview: <div className={styles.fontPreview}>Aa</div>,
    },
    {
      value: 'serif',
      label: 'Serif',
      preview: (
        <div className={styles.fontPreview} style={{ fontFamily: 'serif' }}>
          Aa
        </div>
      ),
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <code>DS / Themes</code>
      </div>

      <div className={styles.settings}>
        <div className={styles.setting}>
          <h3>Theme</h3>
          <ToggleGroup
            options={themeOptions}
            value={theme}
            onChange={handleThemeChange}
            name="theme"
            type="checkbox"
          />
        </div>

        <div className={styles.setting}>
          <h3>Translation</h3>
          <ToggleGroup
            options={translationOptions}
            value={translation}
            onChange={handleTranslationChange}
            name="translation"
            type="checkbox"
          />
        </div>

        <div className={styles.setting}>
          <h3>Font</h3>
          <ToggleGroup
            options={fontOptions}
            value={font}
            onChange={handleFontChange}
            name="font"
          />
        </div>
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
