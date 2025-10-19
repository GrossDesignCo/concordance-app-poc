/**
 * Generates individual JSON files for each root word in the dictionary
 *
 * Creates `public/roots/hebrew/[rootKey].json` and `public/roots/greek/[rootKey].json`
 *
 * Run with:
 *
 * ```bash
 * npm run build:data-root-files
 * ```
 *
 */
import { mkdir, writeFile } from 'fs/promises';
import fs from 'fs';
import path from 'path';
import { roots as hebrewRoots } from '@/data/dictionary/hebrew/roots';
import { roots as greekRoots } from '@/data/dictionary/greek/roots';
import { Verse, TranslationWord } from '@/types';

// Ensures that the given directory exists
async function ensureDirectoryExists(dirPath: string): Promise<void> {
  try {
    await mkdir(dirPath, { recursive: true });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== 'EEXIST') {
      throw error;
    }
  }
}

// Collects all word instances for each root from scripture
async function collectWordInstancesByRoot(): Promise<
  Record<string, TranslationWord[]>
> {
  const wordsByRoot: Record<string, TranslationWord[]> = {};

  const scriptureDir = path.join(process.cwd(), 'src/data/scripture');
  const books = fs
    .readdirSync(scriptureDir)
    .filter(
      (file) =>
        fs.statSync(path.join(scriptureDir, file)).isDirectory() &&
        file !== 'index.ts'
    );

  // Process each book
  for (const book of books) {
    const bookDir = path.join(scriptureDir, book);
    const chapters = fs
      .readdirSync(bookDir)
      .filter(
        (file) =>
          fs.statSync(path.join(bookDir, file)).isDirectory() &&
          file !== 'index.ts'
      );

    // Process each chapter
    for (const chapterDir of chapters) {
      const chapterPath = path.join(bookDir, chapterDir);

      // Import and process each verse
      const verseFiles = fs
        .readdirSync(chapterPath)
        .filter((file) => file.endsWith('.ts') && file !== 'index.ts');

      for (const verseFile of verseFiles) {
        const versePath = path.join(chapterPath, verseFile);
        const verseModule = await import(versePath);
        const verse: Verse = verseModule[Object.keys(verseModule)[0]];

        // Process each word in the verse
        for (const word of verse.words) {
          if (word.root) {
            if (!wordsByRoot[word.root]) {
              wordsByRoot[word.root] = [];
            }
            // Add the word instance with verse metadata
            wordsByRoot[word.root].push({
              ...word,
              // Add verse context for reference
              verseContext: {
                book: verse.meta.book,
                chapter: verse.meta.chapter,
                verse: verse.meta.verse,
              },
            } as TranslationWord & { verseContext: { book: string; chapter: number; verse: number } });
          }
        }
      }
    }
  }

  return wordsByRoot;
}

// Generates root files for the given language
async function generateRootFiles(
  language: 'hebrew' | 'greek',
  wordsByRoot: Record<string, TranslationWord[]>
): Promise<void> {
  try {
    console.log(`Generating root files for ${language}...`);

    // Get the appropriate roots dictionary
    const roots = language === 'hebrew' ? hebrewRoots : greekRoots;

    // Ensure the output directory exists
    const outputDir = path.join(process.cwd(), `public/roots/${language}`);
    await ensureDirectoryExists(outputDir);

    // Generate a file for each root
    let fileCount = 0;
    for (const [rootKey, rootData] of Object.entries(roots)) {
      // Get all word instances for this root
      const wordInstances = wordsByRoot[rootKey] || [];

      const rootFileContent = {
        key: rootKey,
        ...rootData,
        // Populated with actual word instances
        wordInstances: wordInstances,
        // Placeholder for future data
        usage: {},
        verses: {},
        chapters: {},
        books: [],
        translationConnections:
          rootData.translatedFrom || rootData.translatedTo || [],
      };

      const outputPath = path.join(outputDir, `${rootKey}.json`);
      await writeFile(outputPath, JSON.stringify(rootFileContent, null, 2));
      fileCount++;
    }

    console.log(
      `Successfully generated ${fileCount} root files for ${language}`
    );
    console.log(`Files written to: ${outputDir}`);
  } catch (error) {
    console.error(`Error generating root files for ${language}:`, error);
    throw error;
  }
}

// Main execution function
export async function generateAllRootFiles(): Promise<void> {
  try {
    console.log('Starting root file generation...');

    // Ensure the main roots directory exists
    const rootsDir = path.join(process.cwd(), 'public/roots');
    await ensureDirectoryExists(rootsDir);

    // Collect all word instances by root from scripture
    console.log('Collecting word instances from scripture...');
    const wordsByRoot = await collectWordInstancesByRoot();
    console.log(
      `Found word instances for ${Object.keys(wordsByRoot).length} roots`
    );

    // Generate files for both languages
    await generateRootFiles('hebrew', wordsByRoot);
    await generateRootFiles('greek', wordsByRoot);

    console.log('Successfully generated all root files');
  } catch (error) {
    console.error('Failed to generate root files:', error);
    throw error;
  }
}

// Run the script if called directly
generateAllRootFiles().catch(console.error);
