import NextLink from 'next/link';
import cx from 'classnames';
import { ComponentProps } from 'react';
import styles from './Link.module.css';

interface LinkProps extends ComponentProps<typeof NextLink> {
  className?: string;
  variant?: 'ds-link' | 'ds-link-primitive';
}

export const Link = ({
  className,
  variant = 'ds-link',
  href,
  ...rest
}: LinkProps) => {
  const target = href.toString().includes('http') ? '_blank' : undefined;

  return (
    <NextLink
      href={href}
      target={target}
      className={cx(styles[variant], className)}
      {...rest}
    />
  );
};
