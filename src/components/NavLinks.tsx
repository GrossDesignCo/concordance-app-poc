'use client';

import Link from 'next/link';

type Link = {
  href: string;
  label: string | React.ReactNode;
  target?: '_blank';
};

interface NavLinks {
  links: Link[];
}

export const NavLinks = ({ links }: NavLinks) => {
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
