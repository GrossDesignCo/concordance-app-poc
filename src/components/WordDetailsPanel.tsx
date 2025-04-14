import { TranslationWord } from "@/types";
import cx from "classnames";
import styles from "./WordDetailsPanel.module.css";
import { useState, useEffect } from "react";

interface WordDetailsPanelProps {
  word: TranslationWord | null;
  onClose: () => void;
}

// Define a type for the MDX component
type MDXComponent = React.ComponentType<Record<string, never>>;

export default function WordDetailsPanel({
  word,
}: // onClose,
WordDetailsPanelProps) {
  const [Entry, setEntry] = useState<MDXComponent | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!word) return;

    setIsLoading(true);
    setError(null);

    // Reset Entry when word changes
    setEntry(null);

    // Use a try-catch block to handle import errors
    const loadEntry = async () => {
      try {
        const mdxModule = await import(
          `../data/concordance/hebrew/${word.transliteration}.mdx`
        );
        setEntry(() => mdxModule.default);
      } catch (err) {
        console.warn(
          `Error looking up concordance entry for ${word.transliteration}: ${err}`
        );
        setError(`No entry found for "${word.transliteration}"`);
      } finally {
        setIsLoading(false);
      }
    };

    loadEntry();
  }, [word]);

  if (!word) return null;

  return (
    <div className={cx(styles.WordDetailsPanel, "rich-text")}>
      {isLoading && <p>Loading Entry...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {Entry && <Entry />}
    </div>
  );
}
