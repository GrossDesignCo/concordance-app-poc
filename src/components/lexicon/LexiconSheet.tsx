'use client';
import LexiconEntry from '@/components/lexicon/Entry';
import { useSelection } from '@/context/SelectionContext';
import { Sheet } from '@/design-system';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { LanguageKey } from '@/types';
import { formatWord } from '@/utils/formatWord';
import { sortWords } from '@/utils/sortWords';
import { useLexicon } from '@/context/LexiconContext';

const languages: LanguageKey[] = [
  'original',
  'transliteration',
  'englishLiteral',
  'englishNatural',
];

export const LexiconSheet = () => {
  const { selectedWords } = useSelection();
  const { lexiconOpen, setLexiconOpen } = useLexicon();
  const isDesktop = useMediaQuery('(min-width: 720px)');
  const isLandscape = useMediaQuery('(orientation: landscape)');
  const isLargeDesktop = useMediaQuery('(min-width: 150ch)');

  const sheetTitle =
    selectedWords.length > 0
      ? languages
          .map((language) => {
            const sortedWords = sortWords(selectedWords, language);

            return sortedWords
              .map((word) => {
                const { formattedWordText } = formatWord(word, language);
                return formattedWordText;
              })
              .join(' ');
          })
          .join(' → ')
      : 'Lexicon';

  return (
    <Sheet
      open={lexiconOpen}
      title={sheetTitle || 'Word Details'}
      position={
        (isDesktop && isLandscape) || isLargeDesktop ? 'right' : 'bottom'
      }
      pushContent={isDesktop}
      borderless={isLargeDesktop}
      onOpenChange={(open) => {
        setLexiconOpen(open);
      }}
    >
      <LexiconEntry />
    </Sheet>
  );
};
