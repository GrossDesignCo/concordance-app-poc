import cx from 'classnames';
import styles from './Entry.module.css';
import { useState, useEffect } from 'react';
import { useSelection } from '@/context/SelectionContext';
import NoEntryPrompt from './NoEntryPrompt';

// Define a type for the MDX component
type MDXComponent = React.ComponentType<Record<string, never>>;

export default function LexiconEntry({}) {
  const { selectedWord } = useSelection();

  const [Entry, setEntry] = useState<MDXComponent | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedWord) return;
    const { transliteration } = selectedWord;

    setLoading(true);
    setError(null);

    // Reset Entry when word changes
    setEntry(null);

    // Use a try-catch block to handle import errors
    const loadEntry = async () => {
      try {
        const mdxModule = await import(
          `../../data/lexicon/hebrew/${transliteration}.mdx`
        );
        setEntry(() => mdxModule.default);
      } catch (err) {
        console.warn(
          `Error looking up lexicon entry for ${transliteration}: ${err}`
        );
        setError(`No entry found for "${transliteration}"`);
      } finally {
        setLoading(false);
      }
    };

    loadEntry();
  }, [selectedWord]);

  if (!selectedWord) return null;

  return (
    <div className={cx(styles.LexiconEntry, 'markdown-text')}>
      {loading && <p>Loading Entry...</p>}

      {error && <p className={styles.error}>{error}</p>}

      {Entry ? <Entry /> : <NoEntryPrompt />}
    </div>
  );
}
