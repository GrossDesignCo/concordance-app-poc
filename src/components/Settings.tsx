'use client';
import { useState } from 'react';
import { useSettings } from '@/context/SettingsContext';
import {
  Dialog,
  DialogTitle,
  DialogClose,
  Button,
  Checkbox,
  Radio,
} from '@/design-system';
import { Gear, X } from '@phosphor-icons/react';
import styles from './Settings.module.css';

const TranslationControls = () => {
  const [open, setOpen] = useState(false);
  const {
    showHebrew,
    setShowHebrew,
    showTransliteration,
    setShowTransliteration,
    showEnglishLiteral,
    setShowEnglishLiteral,
    showEnglishNatural,
    setShowEnglishNatural,
    wordOrder,
    setWordOrder,
  } = useSettings();

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        aria-label="Open settings"
        variant="ghost"
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
          <div className={styles.wordOrderControl}>
            <span>Word Order:</span>
            <div className={styles.radioGroup}>
              <Radio
                label="English"
                name="wordOrder"
                value="english"
                checked={wordOrder === 'english'}
                onChange={(e) =>
                  setWordOrder(e.target.value as 'english' | 'hebrew')
                }
              />
              <Radio
                label="Hebrew"
                name="wordOrder"
                value="hebrew"
                checked={wordOrder === 'hebrew'}
                onChange={(e) =>
                  setWordOrder(e.target.value as 'english' | 'hebrew')
                }
              />
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default TranslationControls;
