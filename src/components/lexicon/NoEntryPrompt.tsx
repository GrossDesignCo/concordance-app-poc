import { useState } from 'react';
import { useSelection } from '@/context/SelectionContext';
import { Button } from '@/design-system';
import styles from './NoEntryPrompt.module.css';
import { resolveLanguage } from '@/utils/resolveLanguage';
import { getLexiconEntryKey } from '@/utils/getLexiconEntryKey';
import { getLexiconEntryPhrase } from '@/utils/getLexiconEntryPhrase';

interface NoEntryPromptProps {
  onGenerate?: (entry: string) => void;
}

export default function NoEntryPrompt({ onGenerate }: NoEntryPromptProps) {
  const { selectedWords } = useSelection();

  const [error, setError] = useState<string | null>(null);
  const [generating, setGenerating] = useState(false);

  const generateNewEntry = async () => {
    setGenerating(true);
    setError(null);

    try {
      const language = resolveLanguage(selectedWords?.[0], 'original');
      const key = getLexiconEntryKey(selectedWords);

      const phrase = getLexiconEntryPhrase(selectedWords);

      const response = await fetch('/api/lexicon/generate-entry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          key,
          language,
          phrase,
          supplementalData: {
            selectedWords,
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate entry');
      }

      if (data.entry) onGenerate?.(data.entry);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'An unknown error occurred'
      );
    } finally {
      setGenerating(false);
    }
  };

  if (error) {
    return (
      <div className={styles.NoEntryPrompt}>
        <div>There was an error generating this entry</div>
        <pre>
          <code>{JSON.stringify({ error }, null, 2)}</code>
        </pre>
      </div>
    );
  }

  return (
    <div className={styles.NoEntryPrompt}>
      {generating ? (
        <p>Generating Entry, this will take a minute.</p>
      ) : (
        <>
          <p>
            You may generate a new Lexicon entry to more deeply explore this
            pattern.
          </p>
          <p>This may take a minute.</p>
          <Button onClick={() => generateNewEntry()}>Generate</Button>
        </>
      )}
    </div>
  );
}
