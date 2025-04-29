import cx from 'classnames';
import styles from './Entry.module.css';
import { useState, useEffect } from 'react';
import { useSelection } from '@/context/SelectionContext';
import NoEntryPrompt from './NoEntryPrompt';
import { sortWords } from '@/utils/sortWords';
import { formatWord } from '@/utils/formatWord';

// Define a type for the MDX component
type MDXComponent = React.ComponentType<Record<string, never>>;

export default function LexiconEntry({}) {
  const { selectedWords } = useSelection();

  const [Entry, setEntry] = useState<MDXComponent | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('Selection changed:', selectedWords);

    // Reset state when selection changes
    setEntry(null);
    setError(null);
    setLoading(false);

    if (!selectedWords.length) {
      return;
    }

    const sortedWords = sortWords(selectedWords, 'transliteration');
    const entryKey = sortedWords
      .map((word) => {
        const { wordText } = formatWord(word, 'transliteration');
        return wordText;
      })
      .join('-');

    console.log('Loading entry for:', entryKey);
    setLoading(true);

    // Use a try-catch block to handle import errors
    const loadEntry = async () => {
      try {
        const mdxModule = await import(
          `../../data/lexicon/hebrew/${entryKey}.mdx`
        );
        setEntry(() => mdxModule.default);
      } catch (err) {
        console.warn(`Error looking up lexicon entry for ${entryKey}:`, err);
        setError(`No entry found for "${entryKey}"`);
      } finally {
        setLoading(false);
      }
    };

    loadEntry();
  }, [selectedWords]);

  if (!selectedWords) return null;

  return (
    <div className={cx(styles.LexiconEntry, 'markdown-text')}>
      {loading && <p>Loading Entry...</p>}

      {error && <p className={styles.error}>{error}</p>}

      {Entry ? <Entry /> : <NoEntryPrompt />}
    </div>
  );
}
