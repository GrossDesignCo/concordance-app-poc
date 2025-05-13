import NextLink from 'next/link';
import cx from 'classnames';
import { ComponentProps } from 'react';
import styles from './Link.module.css';

interface LinkProps extends ComponentProps<typeof NextLink> {
  className?: string;
}

export const Link = ({ className, ...rest }: LinkProps) => {
  return <NextLink className={cx(styles['ds-link'], className)} {...rest} />;
};
