import styles from './TranslationProgressMeter.module.css';
import cx from 'classnames';
import type {
  TranslationProgressData,
  ScriptureMetadata,
} from '@/data/pipeline/getTranslationProgress';

export async function TranslationProgressMeter({
  progress,
  metadata,
}: {
  progress: TranslationProgressData;
  metadata: ScriptureMetadata;
}) {
  if (!progress) {
    return null;
  }

  return (
    <div className={styles.translationProgress}>
      <h3 className={styles.overallProgress}>
        Overall{' '}
        <span className={styles.progressText}>
          {progress.totalProgress.toFixed(2)}%
        </span>
      </h3>

      <div className={styles.metrics}>
        <span className={styles.metric}>
          <strong>{metadata.translated.books}</strong> / {metadata.total.books}{' '}
          Books
        </span>
        <span className={styles.metric}>
          <strong>{metadata.translated.chapters.toLocaleString()}</strong> /{' '}
          {metadata.total.chapters.toLocaleString()} Chapters
        </span>
        <span className={styles.metric}>
          <strong>{metadata.translated.verses.toLocaleString()}</strong> /{' '}
          {metadata.total.verses.toLocaleString()} Verses
        </span>
      </div>

      <div className={styles.booksProgress}>
        {Object.entries(progress.books).map(([bookKey, book]) => {
          const isInProgress = book.progress > 0.01 && book.progress < 99.99;

          return (
            <div key={bookKey}>
              <h4 className={styles.bookProgress}>
                {book.bookName}{' '}
                {isInProgress && (
                  <span className={styles.bookProgressText}>
                    {book.progress.toFixed(2)}%
                  </span>
                )}
              </h4>

              <div className={styles.chaptersProgress}>
                {Object.entries(book.chapters).map(([chapterKey, chapter]) => (
                  <div key={chapterKey}>
                    <span className={styles.chapterNumber}>
                      {chapter.chapterNumber}
                    </span>

                    <div className={styles.versesProgress}>
                      {Object.entries(chapter.verses).map(
                        ([verseKey, verse]) => (
                          <div
                            key={verseKey}
                            className={cx(styles.progressIndicator, {
                              [styles.completed]: verse,
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
