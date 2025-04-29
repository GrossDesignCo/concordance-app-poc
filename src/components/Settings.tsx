'use client';
import { useState } from 'react';
import { useSettings } from '@/context/SettingsContext';
import { useTheme } from 'next-themes';
import { Sheet, Button, Checkbox, RadioGroup, Radio } from '@/design-system';
import { Gear } from '@phosphor-icons/react';
import styles from './Settings.module.css';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const Settings = () => {
  const {
    showOriginal,
    setShowOriginal,
    showTransliteration,
    setShowTransliteration,
    showEnglishLiteral,
    setShowEnglishLiteral,
    showEnglishNatural,
    setShowEnglishNatural,
  } = useSettings();

  const { theme, setTheme } = useTheme();
  const isDesktop = useMediaQuery('(min-width: 720px)');
  const isLandscape = useMediaQuery('(orientation: landscape)');
  const isLargeDesktop = useMediaQuery('(min-width: 150ch)');

  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant={open ? 'secondary' : 'ghost'}
        size="sm"
        onClick={() => setOpen(!open)}
        aria-label="Open translation settings"
      >
        <Gear size={20} weight="regular" />
      </Button>

      <Sheet
        open={open}
        onOpenChange={setOpen}
        title="Translation Settings"
        expanded
        maxWidth={isDesktop ? '28ch' : undefined}
        position={
          (isDesktop && isLandscape) || isLargeDesktop ? 'right' : 'bottom'
        }
        pushContent={isDesktop}
        borderless={isLargeDesktop}
      >
        <div className={styles.controls}>
          <Checkbox
            label="Show Original"
            checked={showOriginal}
            onChange={() => setShowOriginal(!showOriginal)}
          />
          <Checkbox
            label="Show Transliteration"
            checked={showTransliteration}
            onChange={() => setShowTransliteration(!showTransliteration)}
          />
          <Checkbox
            label="Show English Literal"
            checked={showEnglishLiteral}
            onChange={() => setShowEnglishLiteral(!showEnglishLiteral)}
          />
          <Checkbox
            label="Show English Natural"
            checked={showEnglishNatural}
            onChange={() => setShowEnglishNatural(!showEnglishNatural)}
          />
          <RadioGroup label="Theme">
            <Radio
              label="Light"
              value="light"
              checked={theme === 'light'}
              onChange={() => setTheme('light')}
            />
            <Radio
              label="Dark"
              value="dark"
              checked={theme === 'dark'}
              onChange={() => setTheme('dark')}
            />
            <Radio
              label="System"
              value="system"
              checked={theme === 'system'}
              onChange={() => setTheme('system')}
            />
          </RadioGroup>
        </div>
      </Sheet>
    </>
  );
};

export default Settings;
