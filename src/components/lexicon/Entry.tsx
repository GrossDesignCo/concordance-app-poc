import cx from 'classnames';
import styles from './Entry.module.css';
import { useState, useEffect } from 'react';
import { useWordSelection } from '@/context/WordSelectionContext';
import Word from '../scripture/Word';
import { Button } from '@/design-system';

// Define a type for the MDX component
type MDXComponent = React.ComponentType<Record<string, never>>;

export default function LexiconEntry({}) {
  const { selectedWord } = useWordSelection();

  const [Entry, setEntry] = useState<MDXComponent | null>(null);
  const [entryText, setEntryText] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedWord) return;
    const { transliteration } = selectedWord;

    setLoading(true);
    setError(null);

    // Reset Entry when word changes
    setEntry(null);
    setEntryText(null);

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

  const generateNewEntry = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/lexicon/generate-entry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ word: selectedWord }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate entry');
      }

      // Set the text entry instead of a component
      setEntryText(data.completeEntry);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'An unknown error occurred'
      );
    } finally {
      setLoading(false);
    }
  };

  if (!selectedWord) return null;

  return (
    <div className={cx(styles.LexiconEntry, 'markdown-text')}>
      {loading && <p>Loading Entry...</p>}

      {error && (
        <>
          <p className={styles.error}>{error}</p>
          <p>
            Break down {'"'}
            <Word word={selectedWord} />
            {'"'}
          </p>
          <Button onClick={() => generateNewEntry()}>Generate Entry</Button>
        </>
      )}

      {Entry && <Entry />}
      {entryText && (
        <pre>
          <code>{entryText}</code>
        </pre>
      )}
    </div>
  );
}
