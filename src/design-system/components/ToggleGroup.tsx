import { ReactNode } from 'react';
import cx from 'classnames';
import styles from './ToggleGroup.module.css';

export interface ToggleOption {
  value: string;
  label: string;
  preview: ReactNode;
}

interface ToggleGroupProps {
  options: ToggleOption[];
  value: string | string[];
  onChange: (value: string | string[]) => void;
  name: string;
  type?: 'radio' | 'checkbox';
  className?: string;
}

export function ToggleGroup({
  options,
  value,
  onChange,
  name,
  type = 'radio',
  className,
}: ToggleGroupProps) {
  const isChecked = (optionValue: string) => {
    if (type === 'checkbox') {
      return Array.isArray(value) && value.includes(optionValue);
    }
    return value === optionValue;
  };

  const handleChange = (optionValue: string) => {
    if (type === 'checkbox') {
      const currentValues = Array.isArray(value) ? value : [];
      const newValues = currentValues.includes(optionValue)
        ? currentValues.filter((v) => v !== optionValue)
        : [...currentValues, optionValue];
      onChange(newValues);
    } else {
      onChange(optionValue);
    }
  };

  return (
    <div
      className={cx(styles.toggleGroup, className)}
      role="group"
      aria-label={name}
    >
      {options.map((option) => (
        <label
          key={option.value}
          className={cx(styles.toggleOption, {
            [styles.selected]: isChecked(option.value),
          })}
        >
          <input
            type={type}
            name={name}
            value={option.value}
            checked={isChecked(option.value)}
            onChange={() => handleChange(option.value)}
            className={styles.input}
          />
          <div className={styles.preview}>{option.preview}</div>
          <span className={styles.label}>{option.label}</span>
        </label>
      ))}
    </div>
  );
}
