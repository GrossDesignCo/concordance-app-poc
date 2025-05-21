import fs from 'fs';
import path from 'path';
import { buildChapterText } from '../utils/buildChapterText';
import { Chapter, LANGUAGE_KEYS } from '@/types';

const SCRIPTURE_DIR = path.join(process.cwd(), 'src/data/scripture');
const PUBLIC_SCRIPTURE_DIR = path.join(process.cwd(), 'public/scripture');

export function writeChapterMarkdown(chapterPath: string, language: string, markdown: string): void {
  // Extract book and chapter from the source path
  const relativePath = path.relative(SCRIPTURE_DIR, path.dirname(chapterPath));
  const [book, chapterDir] = relativePath.split(path.sep);
  const chapterNumber = chapterDir.split('-')[1]; // Extract chapter number from dir name (e.g., "genesis-1" -> "1")
  
  const targetDir = path.join(PUBLIC_SCRIPTURE_DIR, relativePath);
  
  // Ensure the target directory exists
  fs.mkdirSync(targetDir, { recursive: true });
  
  const markdownPath = path.join(targetDir, `${book}-${chapterNumber}.${language}.md`);
  fs.writeFileSync(markdownPath, markdown);
}

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