/** Creates a map of books/chapters/verses with their translation status/progress
 * 
 * Generates four files in `public/meta/`:
 * - `final-structure.json`: Complete representation of the Bible structure
 * - `current-structure.json`: Representation of currently translated verses
 * - `translation-progress.json`: Progress data comparing final vs current structure
 * - `scripture-metadata.json`: Overall statistics about the Bible structure
 * 
 * Run with:
 * 
 * ```bash
 * npm run build:meta-translation-progress
 */
import fs from 'fs';
import path from 'path';
import { getTranslationProgress, ScriptureStructure, TranslationProgressData, ScriptureMetadata } from './getTranslationProgress';

// Ensure the public/meta directory exists
const metaDir = path.join(process.cwd(), 'public', 'meta');
if (!fs.existsSync(metaDir)) {
  fs.mkdirSync(metaDir, { recursive: true });
}

// Generate the translation progress data
const { finalStructure, currentStructure, progress, metadata } = getTranslationProgress();

// Write the data to JSON files
const writeJsonFile = (filename: string, data: ScriptureStructure | TranslationProgressData | ScriptureMetadata) => {
  const outputPath = path.join(metaDir, filename);
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
  console.log(`Data written to ${outputPath}`);
};

writeJsonFile('final-structure.json', finalStructure);
writeJsonFile('current-structure.json', currentStructure);
writeJsonFile('translation-progress.json', progress);
writeJsonFile('scripture-metadata.json', metadata); 