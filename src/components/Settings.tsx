'use client';
import { useSettings } from '@/context/SettingsContext';
import { useTheme } from 'next-themes';
import { Checkbox, RadioGroup, Radio } from '@/design-system';
import styles from './Settings.module.css';

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
    font,
    setFont,
  } = useSettings();

  const { theme, setTheme } = useTheme();

  return (
    <div className={styles.settings}>
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
      <RadioGroup label="Font">
        <Radio
          label="Sans"
          value="sans"
          checked={font === 'sans'}
          onChange={() => setFont('sans')}
        />
        <Radio
          label="Serif"
          value="serif"
          checked={font === 'serif'}
          onChange={() => setFont('serif')}
        />
      </RadioGroup>
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
  );
};

export default Settings;
