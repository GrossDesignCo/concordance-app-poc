'use client';
import { Link } from '@/design-system';
import styles from './NavLink.module.css';
import { usePathname } from 'next/navigation';
import cx from 'classnames';

type Link = {
  href: string;
  label: string | React.ReactNode;
  target?: '_blank';
};

interface NavLinksProps {
  links: Link[];
}

export const NavLinks = ({ links }: NavLinksProps) => {
  const pathname = usePathname();

  return (
    <>
      {links.map(({ label, href, ...rest }) => {
        const active = pathname === href;

        return (
          <Link
            href={href}
            key={href}
            className={cx(styles.NavLink, { [styles.active]: active })}
            {...rest}
          >
            {label}
          </Link>
        );
      })}
    </>
  );
};
