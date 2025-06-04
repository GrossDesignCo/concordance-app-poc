import fs from 'fs';
import path from 'path';
import { Verse } from '@/types';
import { roots as hebrewRoots } from '@/data/dictionary/hebrew/roots';
import { roots as greekRoots } from '@/data/dictionary/greek/roots';
import { RootIndex } from '@/types';

async function generateRootIndexes() {
  const scriptureDir = path.join(process.cwd(), 'src/data/scripture');
  const books = fs.readdirSync(scriptureDir).filter(file => 
    fs.statSync(path.join(scriptureDir, file)).isDirectory() && 
    file !== 'index.ts'
  );

  // Initialize indexes with all known roots
  const indexes: RootIndex = {
    verses: {},
    chapters: {},
    books: {}
  };

  // Pre-initialize all roots from our dictionaries
  const allRoots = [...Object.keys(hebrewRoots), ...Object.keys(greekRoots)];
  for (const root of allRoots) {
    indexes.verses[root] = {};
    indexes.chapters[root] = {};
    indexes.books[root] = [];
  }

  // Process each book
  for (const book of books) {
    const bookDir = path.join(scriptureDir, book);
    const chapters = fs.readdirSync(bookDir).filter(file => 
      fs.statSync(path.join(bookDir, file)).isDirectory() && 
      file !== 'index.ts'
    );

    // Process each chapter
    for (const chapterDir of chapters) {
      const chapterPath = path.join(bookDir, chapterDir);
      const chapterNumber = parseInt(chapterDir.split('-')[1]);
      
      // Import and process each verse
      const verseFiles = fs.readdirSync(chapterPath)
        .filter(file => file.endsWith('.ts') && file !== 'index.ts');

      for (const verseFile of verseFiles) {
        const versePath = path.join(chapterPath, verseFile);
        const verseModule = await import(versePath);
        const verse: Verse = verseModule[Object.keys(verseModule)[0]];

        // Get unique roots from the verse that are in our dictionary
        const roots = [...new Set(verse.words
          .map(word => word.root)
          .filter((root) => 
            root !== undefined && 
            (root in hebrewRoots || root in greekRoots)
          ))];

        // Update indexes for each root
        for (const root of roots as string[]) {
          // Update verses index
          if (!indexes.verses[root][book]) {
            indexes.verses[root][book] = {};
          }
          if (!indexes.verses[root][book][chapterNumber]) {
            indexes.verses[root][book][chapterNumber] = [];
          }
          indexes.verses[root][book][chapterNumber].push(verse.meta.verse);

          // Update chapters index
          if (!indexes.chapters[root][book]) {
            indexes.chapters[root][book] = [];
          }
          if (!indexes.chapters[root][book].includes(chapterNumber)) {
            indexes.chapters[root][book].push(chapterNumber);
          }

          // Update books index
          if (!indexes.books[root].includes(book)) {
            indexes.books[root].push(book);
          }
        }
      }
    }
  }

  // Clean up empty roots (those that don't appear in any verse)
  for (const root of allRoots) {
    if (indexes.books[root].length === 0) {
      delete indexes.verses[root];
      delete indexes.chapters[root];
      delete indexes.books[root];
    }
  }

  // Sort all arrays for consistency
  for (const root in indexes.verses) {
    for (const book in indexes.verses[root]) {
      for (const chapter in indexes.verses[root][book]) {
        indexes.verses[root][book][chapter].sort((a, b) => a - b);
      }
    }
    for (const book in indexes.chapters[root]) {
      indexes.chapters[root][book].sort((a, b) => a - b);
    }
    indexes.books[root].sort();
  }

  // Ensure the public/dictionary directory exists
  const outputDir = path.join(process.cwd(), 'public/dictionary');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write each index to its own JSON file
  const files = {
    'index-verses-by-root.json': indexes.verses,
    'index-chapters-by-root.json': indexes.chapters,
    'index-books-by-root.json': indexes.books
  };

  for (const [filename, data] of Object.entries(files)) {
    const outputPath = path.join(outputDir, filename);
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
    console.log(`Generated public/dictionary/${filename}`);
  }
}

generateRootIndexes().catch(console.error); 