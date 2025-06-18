import { useSelection } from '@/context/SelectionContext';
import {
  roots as hebrewRoots,
  HebrewRootElement,
} from '@/data/dictionary/hebrew/roots';
import {
  roots as greekRoots,
  GreekRootElement,
} from '@/data/dictionary/greek/roots';
import { HebrewRoot, GreekRoot } from '@/types';
import styles from './LexiconEntryReader.module.css';

const findRoot = (word: string) => {
  return hebrewRoots[word as HebrewRoot] || greekRoots[word as GreekRoot];
};

export default function RootLinks() {
  const { selectedWords } = useSelection();

  if (!selectedWords.length || !selectedWords[0].root) return null;

  return (
    <div className={styles.rootLinks}>
      <div className={styles.rootList}>
        {selectedWords.map((word) => {
          const root = word.root;
          if (!root) return null;

          const rootWord = findRoot(root);
          const relatedRoots = rootWord?.related?.map((r) => findRoot(r));

          return (
            <div key={word.transliteration} className={styles.rootEntries}>
              <div className={styles.rootEntry}>
                <div>Root:</div>
                <DictionaryEntry
                  key={rootWord.transliteration}
                  rootWord={rootWord}
                />
              </div>

              {relatedRoots && (
                <div className={styles.relatedRoots}>
                  <div>Related:</div>
                  <div className={styles.relatedRootsEntries}>
                    {relatedRoots.map((r) => (
                      <DictionaryEntry key={r.transliteration} rootWord={r} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const DictionaryEntry = ({
  rootWord,
}: {
  rootWord: HebrewRootElement | GreekRootElement;
}) => {
  // @ts-expect-error - hebrew and greek have different keys
  const { hebrew, transliteration, englishLiteral, type } = rootWord;

  return (
    <div key={transliteration}>
      {hebrew} → {transliteration} → {englishLiteral} ({type})
    </div>
  );
};
