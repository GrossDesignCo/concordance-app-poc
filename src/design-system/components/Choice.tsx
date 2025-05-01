import { InputHTMLAttributes, forwardRef } from 'react';
import styles from './Choice.module.css';

export interface ChoiceProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  type: 'checkbox' | 'radio';
  className?: string;
}

export const Choice = forwardRef<HTMLInputElement, ChoiceProps>(
  ({ label, type, className, id, ...props }, ref) => {
    const inputId = id || `choice-${label}`;

    return (
      <div className={`${styles.choice} ${className || ''}`}>
        <input
          ref={ref}
          type={type}
          id={inputId}
          className={styles.input}
          {...props}
        />
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      </div>
    );
  }
);

Choice.displayName = 'Choice';
