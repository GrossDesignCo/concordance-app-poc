import styles from './ScriptureHeatMap.module.css';
import cx from 'classnames';

export type ScriptureStructure = {
  books: {
    [bookKey: string]: {
      bookName: string;
      progress: number;
      chapters: {
        [chapterKey: string]: {
          chapterNumber: number;
          verses: {
            [verseKey: string]: {
              [key: string]: unknown;
            };
          };
        };
      };
    };
  };
};

export interface ScriptureHeatMapProps {
  scripture: ScriptureStructure;
  mode: 'full-page' | 'minimal';
}

export async function ScriptureHeatMap({
  scripture,
  mode,
}: ScriptureHeatMapProps) {
  if (!scripture) {
    return null;
  }

  return (
    <div className={cx(styles.scriptureHeatMap, styles[mode])}>
      <div className={styles.books}>
        {Object.entries(scripture.books).map(([bookKey, book]) => {
          const isInProgress = book.progress > 0.01 && book.progress < 99.99;
          const isComplete = book.progress === 100;

          return (
            <div
              key={bookKey}
              className={cx(styles.book, { [styles.complete]: isComplete })}
            >
              <h4 className={styles.bookName}>
                {book.bookName} {/* If measuring progress */}
                {isInProgress && mode === 'full-page' && (
                  <span className={styles.bookProgress}>
                    {book.progress.toFixed(2)}%
                  </span>
                )}
              </h4>

              <div className={styles.chapters}>
                {Object.entries(book.chapters).map(([chapterKey, chapter]) => (
                  <div key={chapterKey} className={styles.chapter}>
                    {mode === 'full-page' && (
                      <span className={styles.chapterNumber}>
                        {chapter.chapterNumber}
                      </span>
                    )}

                    <div className={styles.verses}>
                      {Object.entries(chapter.verses).map(
                        ([verseKey, verse]) => (
                          <div
                            key={verseKey}
                            className={cx(styles.verse, {
                              [styles.filled]: verse,
                            })}
                          />
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
