import fs from 'fs';
import path from 'path';
import { buildChapterText, writeChapterMarkdown } from './buildChapterText';
import { Chapter, LANGUAGE_KEYS } from '@/types';

const SCRIPTURE_DIR = path.join(process.cwd(), 'src/data/scripture');

async function processChapter(chapterDir: string) {
  const indexPath = path.join(chapterDir, 'index.ts');
  if (!fs.existsSync(indexPath)) return;

  try {
    // Import the chapter data directly as default export
    const chapterData = (await import(indexPath)).default as Chapter;

    LANGUAGE_KEYS.forEach(language => {
      const markdown = buildChapterText({ chapterData, language });
      writeChapterMarkdown(indexPath, language, markdown);
    });
    console.log(`Built markdown for ${path.basename(chapterDir)}`);
  } catch (error) {
    console.error(`Error processing ${chapterDir}:`, error);
  }
}

function processBook(bookDir: string) {
  const items = fs.readdirSync(bookDir);
  const chapterDirs = items
    .map(item => path.join(bookDir, item))
    .filter(itemPath => fs.statSync(itemPath).isDirectory());
  
  chapterDirs.forEach(dir => processChapter(dir));
}

function buildAllChapters() {
  const books = fs.readdirSync(SCRIPTURE_DIR);
  const bookDirs = books
    .map(book => path.join(SCRIPTURE_DIR, book))
    .filter(bookPath => fs.statSync(bookPath).isDirectory());
  
  bookDirs.forEach(dir => processBook(dir));
}

buildAllChapters(); 