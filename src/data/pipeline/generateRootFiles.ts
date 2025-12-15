/**
 * Generates individual JSON files for each root word in the dictionary
 *
 * Creates `public/roots/hebrew/[rootKey].json`, `public/roots/greek/[rootKey].json`,
 * and `public/roots/aramaic/[rootKey].json`
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
import { roots as aramaicRoots } from '@/data/dictionary/aramaic/roots';
import { Verse } from '@/types';

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

// Collects word indexes for each root from scripture
async function collectWordIndexesByRoot(): Promise<
  Record<string, Record<string, Record<number, Record<number, number[]>>>>
> {
  const wordIndexesByRoot: Record<
    string,
    Record<string, Record<number, Record<number, number[]>>>
  > = {};

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
      const chapterNumber = parseInt(chapterDir.split('-')[1]);

      // Import and process each verse
      const verseFiles = fs
        .readdirSync(chapterPath)
        .filter((file) => file.endsWith('.ts') && file !== 'index.ts');

      for (const verseFile of verseFiles) {
        const versePath = path.join(chapterPath, verseFile);
        const verseModule = await import(versePath);
        const verse: Verse = verseModule[Object.keys(verseModule)[0]];

        // Process each word in the verse with its index
        verse.words.forEach((word, wordIndex) => {
          if (word.root) {
            // Initialize nested structure if needed
            if (!wordIndexesByRoot[word.root]) {
              wordIndexesByRoot[word.root] = {};
            }
            if (!wordIndexesByRoot[word.root][book]) {
              wordIndexesByRoot[word.root][book] = {};
            }
            if (!wordIndexesByRoot[word.root][book][chapterNumber]) {
              wordIndexesByRoot[word.root][book][chapterNumber] = {};
            }
            if (
              !wordIndexesByRoot[word.root][book][chapterNumber][
                verse.meta.verse
              ]
            ) {
              wordIndexesByRoot[word.root][book][chapterNumber][
                verse.meta.verse
              ] = [];
            }

            // Add the word index to the array
            wordIndexesByRoot[word.root][book][chapterNumber][
              verse.meta.verse
            ].push(wordIndex);
          }
        });
      }
    }
  }

  return wordIndexesByRoot;
}

// Generates root files for the given language
async function generateRootFiles(
  language: 'hebrew' | 'greek' | 'aramaic',
  wordIndexesByRoot: Record<
    string,
    Record<string, Record<number, Record<number, number[]>>>
  >
): Promise<void> {
  try {
    console.log(`Generating root files for ${language}...`);

    // Get the appropriate roots dictionary
    const roots =
      language === 'hebrew'
        ? hebrewRoots
        : language === 'greek'
        ? greekRoots
        : aramaicRoots;

    // Ensure the output directory exists
    const outputDir = path.join(process.cwd(), `public/roots/${language}`);
    await ensureDirectoryExists(outputDir);

    // Generate a file for each root
    let fileCount = 0;
    for (const [rootKey, rootData] of Object.entries(roots)) {
      // Get word indexes for this root
      const wordIndexes = wordIndexesByRoot[rootKey] || {};

      const rootFileContent = {
        key: rootKey,
        ...rootData,
        // Word indexes organized by book > chapter > verse > [wordIndex, ...]
        wordIndexes: wordIndexes,
        // Placeholder for future data
        usage: {},
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

    // Collect word indexes by root from scripture
    console.log('Collecting word indexes from scripture...');
    const wordIndexesByRoot = await collectWordIndexesByRoot();
    console.log(
      `Found word indexes for ${Object.keys(wordIndexesByRoot).length} roots`
    );

    // Generate files for all languages
    await generateRootFiles('hebrew', wordIndexesByRoot);
    await generateRootFiles('greek', wordIndexesByRoot);
    await generateRootFiles('aramaic', wordIndexesByRoot);

    console.log('Successfully generated all root files');
  } catch (error) {
    console.error('Failed to generate root files:', error);
    throw error;
  }
}

// Run the script if called directly
generateAllRootFiles().catch(console.error);
