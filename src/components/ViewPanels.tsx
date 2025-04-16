import cx from 'classnames';
import styles from './ViewPanels.module.css';

interface ViewPanelsProps extends React.PropsWithChildren {
  className?: string;
}

export const ViewPanels = ({ children, className }: ViewPanelsProps) => {
  return <div className={cx(styles.ViewPanels, className)}>{children}</div>;
};

interface ViewPanelProps extends React.PropsWithChildren {
  className?: string;
}

export const ViewPanel = ({ children, className }: ViewPanelProps) => {
  return (
    <div className={cx(styles.ViewPanel, className)}>
      <div className={styles.ViewPanelContent}>{children}</div>
    </div>
  );
};
