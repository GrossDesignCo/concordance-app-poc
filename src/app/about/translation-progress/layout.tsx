import { TranslationProgressMeter } from '@/components/TranslationProgressMeter';
import './layout.css';

// This ensures the page is statically generated at build time
export const dynamic = 'force-static';
// Revalidate the page every hour
export const revalidate = 3600;

export default function TranslationProgressLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="translation-progress-layout">
      <div className="markdown-text">{children}</div>

      <div>
        <TranslationProgressMeter />
      </div>
    </div>
  );
}
