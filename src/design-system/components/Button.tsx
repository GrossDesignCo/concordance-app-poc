import { ButtonHTMLAttributes, forwardRef } from 'react';
import cx from 'classnames';
import styles from './Button.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  introType?: 'down';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = '', variant, size, introType, ...props }, ref) => {
    const classes = cx(
      styles['ds-button'],
      {
        [styles[`ds-button-${variant}`]]: variant,
        [styles[`ds-button-${size}`]]: size,
        [styles[`ds-button-intro-${introType}`]]: introType,
      },
      className
    );

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
