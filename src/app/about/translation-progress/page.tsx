import { TranslationProgressMeter } from '@/components/TranslationProgressMeter';
import Content from './content.mdx';
import './page.css';

export default async function TranslationProgressPage({}) {
  // Vercel url doesn't include protocol
  const vercelUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : undefined;
  const localUrl = process.env.URL;
  const baseUrl = (vercelUrl || localUrl) ?? '';

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
