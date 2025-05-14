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
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
  name: string;
  type?: 'radio' | 'checkbox';
  className?: string;
  label?: string;
}

export function ToggleGroup({
  options,
  value,
  onChange,
  name,
  type,
  className,
  label,
}: ToggleGroupProps) {
  const realType = type ?? Array.isArray(value) ? 'checkbox' : 'radio';

  const isChecked = (val: string) => {
    return Array.isArray(value) ? value.includes(val) : value === val;
  };

  const handleChange = (val: string) => {
    if (Array.isArray(value)) {
      const newValues = value.includes(val)
        ? value.filter((v) => v !== val)
        : [...value, val];

      onChange?.(newValues);
    } else {
      onChange?.(val);
    }
  };

  return (
    <fieldset
      className={cx(styles.toggleGroup, className)}
      role="group"
      aria-label={name}
      name={name}
    >
      <legend className={styles.toggleGroupLabel}>{label}</legend>

      {options.map(({ ...option }) => {
        const checked = isChecked(option.value);

        return (
          <label
            key={option.value}
            className={cx(styles.toggleOption, {
              [styles.selected]: checked,
            })}
            {...option}
          >
            <input
              type={realType}
              value={option.value}
              checked={checked}
              onChange={() => handleChange(option.value)}
              className={styles.input}
            />

            <div className={styles.preview}>{option.preview}</div>
            <span className={styles.label}>{option.label}</span>
          </label>
        );
      })}
    </fieldset>
  );
}
