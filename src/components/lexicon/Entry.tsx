import cx from 'classnames';
import styles from './Entry.module.css';
import { useState, useEffect } from 'react';
import { useSelection } from '@/context/SelectionContext';
import NoEntryPrompt from './NoEntryPrompt';
import { resolveLanguage } from '@/utils/resolveLanguage';
import { SelectWordPrompt } from './SelectWordPrompt';
import { getLexiconEntryKey } from '@/utils/getLexiconEntryKey';

// Define a type for the MDX component
type MDXComponent = React.ComponentType<Record<string, never>>;

export default function LexiconEntry({}) {
  const { selectedWords } = useSelection();

  const [Entry, setEntry] = useState<MDXComponent | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Whenever a new word is selected, see if there's a lexicon entry for it.
  useEffect(() => {
    if (!selectedWords.length) return;

    // Reset state when selection changes
    setEntry(null);
    setError(null);
    setLoading(false);

    const resolvedLanguage = resolveLanguage(selectedWords?.[0], 'original');
    const entryKey = getLexiconEntryKey(selectedWords);

    setLoading(true);

    // Use a try-catch block to handle import errors
    const loadEntry = async () => {
      try {
        const mdxModule = await import(
          `../../data/lexicon/${resolvedLanguage}/${entryKey}.mdx`
        );
        setEntry(() => mdxModule.default);
      } catch (err) {
        console.warn(`Error looking up lexicon entry for ${entryKey}:`, err);
        setError(`No Lexicon entry found for "${entryKey}"`);
      } finally {
        setLoading(false);
      }
    };

    loadEntry();
  }, [selectedWords]);

  if (!selectedWords.length) return <SelectWordPrompt />;
  if (loading) return <p>Loading Entry...</p>;

  return (
    <div className={cx(styles.LexiconEntry, 'markdown-text')}>
      {error && <p className={styles.error}>{error}</p>}
      {Entry ? (
        <Entry />
      ) : (
        <NoEntryPrompt onGenerate={(entry: MDXComponent) => setEntry(entry)} />
      )}
    </div>
  );
}
