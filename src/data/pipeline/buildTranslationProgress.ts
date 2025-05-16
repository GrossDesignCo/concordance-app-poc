import fs from 'fs';
import path from 'path';
import { getTranslationProgress } from './getTranslationProgress';

const META_DIR = path.join(process.cwd(), 'src/data/meta');
const OUTPUT_PATH = path.join(META_DIR, 'translation-progress.json');

function buildTranslationProgress() {
  try {
    // Ensure meta directory exists
    if (!fs.existsSync(META_DIR)) {
      fs.mkdirSync(META_DIR, { recursive: true });
    }
    // Generate progress data
    const progress = getTranslationProgress();
    // Write to JSON file
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(progress, null, 2), 'utf-8');
    console.log(`Translation progress written to ${OUTPUT_PATH}`);
  } catch (error) {
    console.error('Error building translation progress:', error);
    process.exit(1);
  }
}

buildTranslationProgress(); 