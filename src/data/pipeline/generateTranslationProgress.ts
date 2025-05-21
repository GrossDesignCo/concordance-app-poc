/** Creates a map of books/chapters/verses with their translation status/progress
 * 
 * Generates `public/meta/translation-progress.json`
 * 
 * Run with:
 * 
 * ```bash
 * npm run build:meta-translation-progress
 */
import fs from 'fs';
import path from 'path';
import { getTranslationProgress } from './getTranslationProgress';

// Ensure the public/meta directory exists
const metaDir = path.join(process.cwd(), 'public', 'meta');
if (!fs.existsSync(metaDir)) {
  fs.mkdirSync(metaDir, { recursive: true });
}

// Generate the translation progress data
const progressData = getTranslationProgress();

// Write the data to a JSON file
const outputPath = path.join(metaDir, 'translation-progress.json');
fs.writeFileSync(outputPath, JSON.stringify(progressData, null, 2));

console.log(`Translation progress data written to ${outputPath}`); 