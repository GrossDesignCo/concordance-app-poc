'use client';

import cx from 'classnames';
import styles from './Entry.module.css';
import { useState, useEffect } from 'react';
import { useSelection } from '@/context/SelectionContext';
import NoEntryPrompt from './NoEntryPrompt';
import { resolveLanguage } from '@/utils/resolveLanguage';
import { SelectWordPrompt } from './SelectWordPrompt';
import { getLexiconEntryKey } from '@/utils/getLexiconEntryKey';
import ReactMarkdown from 'react-markdown';

export default function LexiconEntryReader({}) {
  const { selectedWords } = useSelection();

  const [entryContent, setEntryContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Whenever a new word is selected, see if there's a lexicon entry for it.
  useEffect(() => {
    if (!selectedWords.length) return;

    // Reset state when selection changes
    setEntryContent(null);
    setError(null);
    setLoading(false);

    const resolvedOGLanguage = resolveLanguage(selectedWords?.[0], 'original');
    const entryKey = getLexiconEntryKey(selectedWords);

    setLoading(true);

    // Use a try-catch block to handle import errors
    const loadEntry = async () => {
      try {
        const response = await fetch('/api/lexicon/get-entry', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            key: entryKey,
            language: resolvedOGLanguage,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to fetch entry');
        }

        if (data.lexiconEntry) {
          setEntryContent(data.lexiconEntry);
        }
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

      {entryContent ? (
        <ReactMarkdown>{entryContent}</ReactMarkdown>
      ) : (
        <NoEntryPrompt
          onGenerate={(entry: string) => {
            setEntryContent(entry);
            setError(null);
          }}
        />
      )}
    </div>
  );
}
