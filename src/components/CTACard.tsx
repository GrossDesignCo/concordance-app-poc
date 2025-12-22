import styles from './CTACard.module.css';
import { Link } from '@/design-system';
import cx from 'classnames';
import { useTheme } from 'next-themes';
import { ArrowRight } from '@phosphor-icons/react';

export interface CTACardProps {
  title: string;
  className?: string;
  link: {
    href: string;
    label: string;
  };
}
export const CTACard = ({ title, link, className }: CTACardProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  // Reverse theme for CTAs for high-visibility
  const themeClass = `theme-${isDark ? 'light' : 'dark'}`;

  return (
    <div className={cx(styles.container, themeClass)}>
      <div className={cx(styles.content, className)}>
        <div className={styles.description}>{title}</div>

        <Link
          href={link.href}
          className={styles.ctaLink}
          variant="ds-link-primitive"
        >
          {link.label}
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
};
