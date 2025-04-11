import { TranslationWord } from '@/types';
import { useTranslation } from '@/context/TranslationContext';

interface TranslationWordViewProps {
  word: TranslationWord;
  onSelect: (word: TranslationWord) => void;
  isSelected: boolean;
}

export default function TranslationWordView({
  word,
  onSelect,
  isSelected,
}: TranslationWordViewProps) {
  const { showHebrew, showTransliteration } = useTranslation();

  return (
    <span className="relative inline-block" onClick={() => onSelect(word)}>
      <span
        className={`cursor-pointer hover:bg-blue-50 rounded px-1 py-0.5 transition-colors
          ${isSelected ? 'bg-blue-100 hover:bg-blue-100' : ''}`}
      >
        {showHebrew && (
          <span className="text-gray-600 text-sm font-hebrew mr-1">
            {word.hebrew}
          </span>
        )}
        {showTransliteration && (
          <span className="text-gray-500 text-sm mr-1">
            ({word.transliteration})
          </span>
        )}
        <span className="text-black">{word.englishLiteral}</span>
      </span>
    </span>
  );
}
