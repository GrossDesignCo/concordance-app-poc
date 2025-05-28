import { TranslationProgressMeter } from '@/components/TranslationProgressMeter';
import Content from './content.mdx';
import './page.css';

import translationProgress from '@/../public/meta/translation-progress.json';
import scriptureMetadata from '@/../public/meta/scripture-metadata.json';

export default function TranslationProgressPage() {
  return (
    <div className="translation-progress-layout">
      <div className="markdown-text">
        <Content />
      </div>

      <div>
        <TranslationProgressMeter
          progress={translationProgress}
          metadata={scriptureMetadata}
        />
      </div>
    </div>
  );
}
