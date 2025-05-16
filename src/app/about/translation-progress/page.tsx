import { TranslationProgressMeter } from '@/components/TranslationProgressMeter';
import Content from './content.mdx';
import './page.css';
import fs from 'fs';
import path from 'path';

export default function TranslationProgressPage() {
  // Read translation progress statically from JSON file during build
  const PROGRESS_PATH = path.join(
    process.cwd(),
    'src/data/meta/translation-progress.json'
  );
  const file = fs.readFileSync(PROGRESS_PATH, 'utf-8');
  const progress = JSON.parse(file);

  // Vercel url doesn't include protocol
  // const vercelUrl = process.env.VERCEL_URL
  //   ? `https://${process.env.VERCEL_URL}`
  //   : undefined;
  // const localUrl = process.env.URL;
  // const baseUrl = (vercelUrl || localUrl) ?? '';

  // const progressData = await fetch(baseUrl + '/api/meta/translation-progress');
  // const progress = await progressData.json();

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
