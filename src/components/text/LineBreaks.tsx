import styles from './LineBreaks.module.css';

export const LineBreaks = ({ numberOfBreaks }: { numberOfBreaks?: number }) => {
  switch (numberOfBreaks) {
    case undefined:
      return null;
    case 1:
      return <br />;
    case 2:
      // Special rendering so we can adjust the spacing for single and double breaks
      return <span className={styles.doubleBreak} />;
  }
};
