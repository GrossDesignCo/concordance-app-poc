import cx from 'classnames';
import styles from './Entry.module.css';
import { useState } from 'react';
import { useSelection } from '@/context/SelectionContext';
import Word from '../text/Word';
import { Button } from '@/design-system';

export default function NoEntryPrompt({}) {
  const { selectedWord } = useSelection();

  const [entryText, setEntryText] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

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
      {loading ? (
        <p>Loading Entry...</p>
      ) : (
        <>
          <p>
            Break down {'"'}
            <Word word={selectedWord} />
            {'"'}
          </p>
          <Button onClick={() => generateNewEntry()}>Generate Entry</Button>
        </>
      )}

      {error && <p className={styles.error}>{error}</p>}

      {/* Once markdown is received from the server render a preview of it for now */}
      {entryText && (
        <pre>
          <code>{entryText}</code>
        </pre>
      )}
    </div>
  );
}
