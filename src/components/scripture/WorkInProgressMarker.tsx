import { DotsThree } from '@phosphor-icons/react';
import styles from './WorkInProgressMarker.module.css';

export const WorkInProgressMarker = () => {
  return (
    <div className={styles.workInProgressMarker}>
      <DotsThree size={40} weight="bold" />
    </div>
  );
};
