/**
 * Indexes lexicon entries by each unique word in scripture
 * 
 * Generates `public/lexicon/[language]/index-by-word.json`
 * 
 * Run with:
 * 
 * ```bash
 * npm run build:data-lexicon-index-by-word
 * ```
 * 
 */
import { readdir, writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { scripture } from '../scripture';

interface LexiconIndex {
  [key: string]: boolean;
}

// Builds a set of all words in the scripture that match the given language
async function getAllWordsFromScripture(language: string): Promise<Set<string>> {
  const words = new Set<string>();
  
  // Iterate through all books
  for (const book of scripture.books) {
    // Iterate through all chapters
    for (const chapter of book.chapters) {
      // Iterate through all verses
      for (const verse of chapter.verses) {
        // Add each word's transliteration to the set
        verse.words.forEach(word => {
          // Only index if the word matches the given language
          const isGreek = language === 'greek' && word.greek;
          const isHebrew = language === 'hebrew' && word.hebrew;

          if ((isGreek || isHebrew) && word.transliteration) {
            words.add(word.transliteration.toLowerCase());
          }
        });
      }
    }
  }
  
  return words;
}

// Builds a set of all existing lexicon entries for the given language
async function getExistingLexiconEntries(language: string): Promise<Set<string>> {
  const lexiconDir = path.join(process.cwd(), `src/data/lexicon/${language}`);
  try {
    const files = await readdir(lexiconDir);
    return new Set(
      files
        .filter(file => file.endsWith('.mdx'))
        .map(file => file.replace('.mdx', '').toLowerCase())
    );
  } catch (error) {
    console.warn(`No lexicon directory found for ${language}, creating empty index`, error);
    return new Set();
  }
}

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

// Generates a lexicon index-by-word for the given language
async function generateLexiconIndex(language: string): Promise<void> {
  try {
    console.log(`Generating lexicon index-by-word for ${language}...`);
    
    // Get all unique words from scripture
    const allWords = await getAllWordsFromScripture(language);
    console.log(`Found ${allWords.size} unique words in scripture`);
    
    // Get all existing lexicon entries
    const existingEntries = await getExistingLexiconEntries(language);
    console.log(`Found ${existingEntries.size} existing lexicon entries for ${language}`);
    
    // Create the index
    const index: LexiconIndex = {};
    allWords.forEach(word => {
      index[word] = existingEntries.has(word);
    });
    
    // Ensure the output directory exists
    const outputDir = path.join(process.cwd(), `public/lexicon/${language}`);
    await ensureDirectoryExists(outputDir);
    
    // Write the index to a file
    const outputPath = path.join(outputDir, 'index-by-word.json');
    await writeFile(outputPath, JSON.stringify(index, null, 2));
    
    console.log(`Successfully generated ${language} lexicon index-by-word with ${Object.keys(index).length} words`);
    console.log(`Index written to: ${outputPath}`);
  } catch (error) {
    console.error(`Error generating lexicon index-by-word for ${language}:`, error);
    throw error;
  }
}

// Main execution function with timeout
async function main() {
  const TIMEOUT_MS = 30000; // 30 second timeout per language
  
  try {
    // Process languages sequentially instead of in parallel
    for (const language of ['hebrew', 'greek']) {
      console.log(`Starting index generation for ${language}...`);
      
      // Create a promise that rejects after timeout
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error(`Timeout generating index for ${language}`)), TIMEOUT_MS);
      });
      
      // Race between the actual work and the timeout
      await Promise.race([
        generateLexiconIndex(language),
        timeoutPromise
      ]);
      
      console.log(`Completed index generation for ${language}`);
    }
    
    console.log('Successfully generated lexicon indices-by-word for all languages');
    process.exit(0);
  } catch (error) {
    console.error('Failed to generate lexicon indices-by-word:', error);
    process.exit(1);
  }
}

// Run the main function
main();
