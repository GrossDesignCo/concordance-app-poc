// utils/lexiconLoader.js
import fs from 'fs/promises';
import path from 'path';

/**
 * Loads example entries from the lexicon directory
 * @returns {Promise<Array<{word: string, content: string}>>}
 */
export async function loadLexiconExamples() {
  try {
    const lexiconDir = path.join(
      process.cwd(),
      'src/data/lexicon/hebrew/model-reference-entries'
    );
    const files = await fs.readdir(lexiconDir);
    const mdxFiles = files.filter((file) => file.endsWith('.mdx'));

    const examples = await Promise.all(
      mdxFiles.map(async (file) => {
        const filePath = path.join(lexiconDir, file);
        const content = await fs.readFile(filePath, 'utf-8');

        // Extract the word from the filename or from the content
        // Assuming filenames are like "beReshit.mdx" or content has a title like "# בְּרֵאשִׁ֖ית (beReshit, in-heading)"
        const wordMatch =
          file.replace('.mdx', '') ||
          content.match(/# \*\*(.*?) \((.*?),/)?.[2] ||
          'unknown';

        return {
          word: wordMatch,
          content: content,
        };
      })
    );

    return examples;
  } catch (error) {
    console.error('Error loading lexicon examples:', error);
    return [];
  }
}
