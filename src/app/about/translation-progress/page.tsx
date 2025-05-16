import { TranslationProgressMeter } from '@/components/TranslationProgressMeter';
import Content from './content.mdx';
import './page.css';

export default async function TranslationProgressPage({}) {
  const baseUrl = (process.env.URL || process.env.VERCEL_URL) ?? '';
  const progressData = await fetch(baseUrl + '/api/meta/translation-progress');
  const progress = await progressData.json();

  return (
    <div className="translation-progress-layout">
      <div className="markdown-text">
        <Content />
      </div>

      <div>
        <TranslationProgressMeter progress={progress} />
      </div>
    </div>
  );
}
