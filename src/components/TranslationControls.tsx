'use client';
import { useState } from 'react';
import { useTranslation } from '@/context/TranslationContext';
import { Dialog, DialogTitle, DialogClose, Button } from '@/design-system';
import { Gear, X } from '@phosphor-icons/react';
import styles from './TranslationControls.module.css';

const TranslationControls = () => {
  const [open, setOpen] = useState(false);
  const {
    showHebrew,
    setShowHebrew,
    showTransliteration,
    setShowTransliteration,
    wordOrder,
    setWordOrder,
  } = useTranslation();

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
          <label>
            <input
              type="checkbox"
              checked={showHebrew}
              onChange={() => setShowHebrew(!showHebrew)}
            />
            Show Hebrew
          </label>
          <label>
            <input
              type="checkbox"
              checked={showTransliteration}
              onChange={() => setShowTransliteration(!showTransliteration)}
            />
            Show Transliteration
          </label>
          <div className={styles.wordOrderControl}>
            <span>Word Order:</span>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="wordOrder"
                  value="english"
                  checked={wordOrder === 'english'}
                  onChange={(e) =>
                    setWordOrder(e.target.value as 'english' | 'hebrew')
                  }
                />
                English
              </label>
              <label>
                <input
                  type="radio"
                  name="wordOrder"
                  value="hebrew"
                  checked={wordOrder === 'hebrew'}
                  onChange={(e) =>
                    setWordOrder(e.target.value as 'english' | 'hebrew')
                  }
                />
                Hebrew
              </label>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default TranslationControls;
