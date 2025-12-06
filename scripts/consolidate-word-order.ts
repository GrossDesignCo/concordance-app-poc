import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

/**
 * Generated script to consolidate word order in the scripture files.
 * from `{ hebrew: number, english: number }` to just `number` when values match.
 */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SCRIPTURE_DIR = path.join(__dirname, '../src/data/scripture');

// Recursively find all .ts files in the scripture directory
function findVerseFiles(dir: string): string[] {
  const files: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findVerseFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.ts')) {
      files.push(fullPath);
    }
  }

  return files;
}

// Process a single file
function processFile(filePath: string): {
  modified: boolean;
  wordCount: number;
  consolidatedCount: number;
} {
  const content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;
  let wordCount = 0;
  let consolidatedCount = 0;

  // Use regex to find order properties in the file
  // This looks for patterns like: order: { hebrew: 1, english: 1 }
  const orderRegex = /order:\s*\{([^}]+)\}/g;

  let newContent = content;
  let match;

  // Reset regex state
  orderRegex.lastIndex = 0;

  while ((match = orderRegex.exec(content)) !== null) {
    wordCount++;
    const fullMatch = match[0];
    const objectContent = match[1];

    // Parse the object to check if values are all the same
    try {
      // Extract key-value pairs
      const pairs = objectContent.split(',').map((p) => p.trim());
      const values: number[] = [];

      for (const pair of pairs) {
        const [, value] = pair.split(':').map((s) => s.trim());
        const numValue = parseInt(value, 10);
        if (!isNaN(numValue)) {
          values.push(numValue);
        }
      }

      if (values.length > 0) {
        const firstValue = values[0];
        const allSame = values.every((v) => v === firstValue);

        if (allSame) {
          // Replace the object with just the number
          const replacement = `order: ${firstValue}`;
          newContent = newContent.replace(fullMatch, replacement);
          consolidatedCount++;
          modified = true;
        }
      }
    } catch (error) {
      console.error(`Error parsing order in ${filePath}:`, error);
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
  }

  return { modified, wordCount, consolidatedCount };
}

// Main execution
function main() {
  console.log('Finding verse files...');
  const verseFiles = findVerseFiles(SCRIPTURE_DIR);
  console.log(`Found ${verseFiles.length} verse files\n`);

  let totalFiles = 0;
  let modifiedFiles = 0;
  let totalWords = 0;
  let totalConsolidated = 0;

  for (const file of verseFiles) {
    const result = processFile(file);
    totalFiles++;
    totalWords += result.wordCount;

    if (result.modified) {
      modifiedFiles++;
      totalConsolidated += result.consolidatedCount;
      const relativePath = path.relative(process.cwd(), file);
      console.log(
        `✓ ${relativePath}: consolidated ${result.consolidatedCount} words`
      );
    }
  }

  console.log('\n--- Summary ---');
  console.log(`Total files processed: ${totalFiles}`);
  console.log(`Files modified: ${modifiedFiles}`);
  console.log(`Total words with order: ${totalWords}`);
  console.log(`Total consolidated: ${totalConsolidated}`);
}

main();
