import { ResolvedLanguageKey } from '@/types';
import fs from 'fs/promises';
import path from 'path';

/**
 * saveEntryToFile
 * - Save the completed entry as a markdown file to our "database", just a folder of files for now
 * @param fileName
 * @param entry
 */
export async function saveEntryToFile(
  key: string,
  language: ResolvedLanguageKey,
  entry: string
) {
  try {
    // Create the directory if it doesn't exist
    const dirPath = path.join(process.cwd(), `src/data/lexicon/${language}`);
    await fs.mkdir(dirPath, { recursive: true });

    // Sanitize the filename
    const sanitized =
      key?.replace(/[^a-zA-Z0-9'`]/g, '') ||
      `New-Entry-from-${new Date().toISOString()}`;
    const fileName = `${sanitized}.mdx`;
    const filePath = path.join(dirPath, fileName);

    // Write entry to file
    await fs.writeFile(filePath, entry, 'utf-8');

    console.info('Wrote entry to:', filePath);
    return { success: true, path: filePath };
  } catch (err) {
    console.error('Error saving entry file:', err);
    return { success: false, error: err };
  }
}
