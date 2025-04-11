'use client';
import { useTranslation } from '@/context/TranslationContext';

const TranslationControls = () => {
  const {
    showHebrew,
    setShowHebrew,
    showTransliteration,
    setShowTransliteration,
  } = useTranslation();

  return (
    <div className="mb-4">
      <label className="mr-4">
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
    </div>
  );
};

export default TranslationControls;
