'use client';

import { Link } from '@/design-system';

type Link = {
  href: string;
  label: string | React.ReactNode;
  target?: '_blank';
};

interface NavLinksProps {
  links: Link[];
}

export const NavLinks = ({ links }: NavLinksProps) => {
  return (
    <>
      {links.map((link) => {
        return (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        );
      })}
    </>
  );
};
