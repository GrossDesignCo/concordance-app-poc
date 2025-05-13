import './layout.css';
import { NavLinks } from '@/components/NavLinks';

export default function StaticPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="page-shell">
      <div className="links">
        <NavLinks
          links={[
            {
              href: '/',
              label: 'Back',
            },
            {
              href: '/about',
              label: 'About',
            },
            {
              href: '/about/contribute',
              label: 'Contribute',
            },
          ]}
        />
      </div>

      <main className="main-text markdown-text">{children}</main>
    </div>
  );
}
