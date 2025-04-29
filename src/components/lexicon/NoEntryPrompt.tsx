import { useState } from 'react';
import { useSelection } from '@/context/SelectionContext';
import { Button } from '@/design-system';
import styles from './NoEntryPrompt.module.css';
import { resolveLanguage } from '@/utils/resolveLanguage';

// Define a type for the MDX component
type MDXComponent = React.ComponentType<Record<string, never>>;

interface NoEntryPromptProps {
  onGenerate?: (entry: MDXComponent) => void;
}

export default function NoEntryPrompt({ onGenerate }: NoEntryPromptProps) {
  const { selectedWords } = useSelection();

  const [error, setError] = useState<string | null>(null);
  const [generating, setGenerating] = useState(false);

  const generateNewEntry = async () => {
    setGenerating(true);
    setError(null);
    const resolvedOGLanguage = resolveLanguage(selectedWords?.[0], 'original');

    try {
      const response = await fetch('/api/lexicon/generate-entry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          wordArray: selectedWords,
          language: resolvedOGLanguage,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate entry');
      }

      if (data) onGenerate?.(data);
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
          <code>{JSON.stringify({ error })}</code>
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
