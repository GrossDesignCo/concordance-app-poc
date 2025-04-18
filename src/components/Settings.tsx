'use client';
import { useState } from 'react';
import { useSettings } from '@/context/SettingsContext';
import { useTheme } from 'next-themes';
import {
  Dialog,
  DialogTitle,
  DialogClose,
  Button,
  Checkbox,
  RadioGroup,
  Radio,
} from '@/design-system';
import { Gear, X } from '@phosphor-icons/react';
import styles from './Settings.module.css';

const TranslationControls = () => {
  const {
    showHebrew,
    setShowHebrew,
    showTransliteration,
    setShowTransliteration,
    showEnglishLiteral,
    setShowEnglishLiteral,
    showEnglishNatural,
    setShowEnglishNatural,
  } = useSettings();

  const { theme, setTheme } = useTheme();

  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setOpen(true)}
        aria-label="Open translation settings"
      >
        <Gear size={20} weight="regular" />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <div className={styles.dialogHeader}>
          <DialogTitle>Translation Settings</DialogTitle>
          <DialogClose asChild>
            <Button aria-label="Close dialog" variant="ghost">
              <X size={20} weight="regular" />
            </Button>
          </DialogClose>
        </div>
        <div className={styles.controls}>
          <Checkbox
            label="Show Hebrew"
            checked={showHebrew}
            onChange={() => setShowHebrew(!showHebrew)}
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
      </Dialog>
    </>
  );
};

export default TranslationControls;
