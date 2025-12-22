import styles from './CTACard.module.css';
import { Link } from '@/design-system';
import cx from 'classnames';

export interface CTACardProps {
  title: string;
  description: React.ReactNode;
  className?: string;
  link: {
    href: string;
    label: string;
  };
}
export const CTACard = ({
  title,
  description,
  link,
  className,
}: CTACardProps) => {
  return (
    <div className={styles.container}>
      <div className={cx(styles.content, className)}>
        <div className={styles.description}>
          <h3 className={styles.descriptionTitle}>{title}</h3>
          {description}
        </div>

        <Link href={link.href}>{link.label}</Link>
      </div>
    </div>
  );
};
