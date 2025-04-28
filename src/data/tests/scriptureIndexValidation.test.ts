import { readdirSync } from 'fs';
import { join } from 'path';
import { scripture } from '../scripture';
import { Book, Chapter, Verse } from '@/types';

describe('Scripture Index Validation Tests: Ensure all files are properly indexed', () => {
  // Helper function to get all verse files in a chapter directory
  const getVerseFiles = (chapterPath: string): string[] => {
    try {
      return readdirSync(chapterPath)
        .filter(file => file.endsWith('.ts'))
        .filter(file => !file.startsWith('index'))
        .map(file => file.replace('.ts', ''));
    } catch (error) {
      console.warn(`Failed to read verse files from ${chapterPath}:`, error);
      return [];
    }
  };

  // Helper function to get all chapter directories in a book directory
  const getChapterDirs = (bookPath: string): string[] => {
    try {
      return readdirSync(bookPath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .filter(dirent => !dirent.name.startsWith('.'))
        .map(dirent => dirent.name);
    } catch (error) {
      console.warn(`Failed to read chapter directories from ${bookPath}:`, error);
      return [];
    }
  };

  // Helper function to get all book directories in the scripture directory
  const getBookDirs = (scripturePath: string): string[] => {
    try {
      return readdirSync(scripturePath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .filter(dirent => !dirent.name.startsWith('.'))
        .map(dirent => dirent.name);
    } catch (error) {
      console.warn(`Failed to read book directories from ${scripturePath}:`, error);
      return [];
    }
  };

  // Test for missing verses in chapter indexes
  test('All verse files are included in their chapter index', () => {
    scripture.books.forEach((book: Book) => {
      const bookPath = join(__dirname, '..', 'scripture', book.meta.name.toLowerCase());
      
      book.chapters.forEach((chapter: Chapter) => {
        const chapterPath = join(bookPath, `${book.meta.name.toLowerCase()}-${chapter.number}`);
        const verseFiles = getVerseFiles(chapterPath);
        
        // Get the verse numbers from the files
        const verseNumbersFromFiles = verseFiles.map(file => {
          const match = file.match(new RegExp(`${book.meta.name.toLowerCase()}-${chapter.number}-(\\d+)`));
          return match ? parseInt(match[1]) : null;
        }).filter((num): num is number => num !== null);

        // Get the verse numbers from the chapter index
        const verseNumbersFromIndex = chapter.verses.map((verse: Verse) => verse.meta.number);

        // Check for verses that exist as files but are not in the index
        verseNumbersFromFiles.forEach(verseNumber => {
          if (!verseNumbersFromIndex.includes(verseNumber)) {
            console.error(`Missing verse in index: ${book.meta.name} ${chapter.number}:${verseNumber}`);
          }
          expect(verseNumbersFromIndex).toContain(verseNumber);
        });

        // Check for verses that are in the index but don't exist as files
        verseNumbersFromIndex.forEach(verseNumber => {
          if (!verseNumbersFromFiles.includes(verseNumber)) {
            console.error(`Missing verse file: ${book.meta.name} ${chapter.number}:${verseNumber}`);
          }
          expect(verseNumbersFromFiles).toContain(verseNumber);
        });
      });
    });
  });

  // Test for missing chapters in book indexes
  test('All chapter directories are included in their book index', () => {
    scripture.books.forEach((book: Book) => {
      const bookPath = join(__dirname, '..', 'scripture', book.meta.name.toLowerCase());
      const chapterDirs = getChapterDirs(bookPath);
      
      // Get the chapter numbers from the directories
      const chapterNumbersFromDirs = chapterDirs.map(dir => {
        const match = dir.match(new RegExp(`${book.meta.name.toLowerCase()}-([\\d]+)`));
        return match ? parseInt(match[1]) : null;
      }).filter((num): num is number => num !== null);

      // Get the chapter numbers from the book index
      const chapterNumbersFromIndex = book.chapters.map(chapter => chapter.number);

      // Check for chapters that exist as directories but are not in the index
      chapterNumbersFromDirs.forEach(chapterNumber => {
        if (!chapterNumbersFromIndex.includes(chapterNumber)) {
          console.error(`Missing chapter in index: ${book.meta.name} ${chapterNumber}`);
        }
        expect(chapterNumbersFromIndex).toContain(chapterNumber);
      });

      // Check for chapters that are in the index but don't exist as directories
      chapterNumbersFromIndex.forEach(chapterNumber => {
        if (!chapterNumbersFromDirs.includes(chapterNumber)) {
          console.error(`Missing chapter directory: ${book.meta.name} ${chapterNumber}`);
        }
        expect(chapterNumbersFromDirs).toContain(chapterNumber);
      });
    });
  });

  // Test for missing books in scripture index
  test('All book directories are included in the scripture index', () => {
    const scripturePath = join(__dirname, '..', 'scripture');
    const bookDirs = getBookDirs(scripturePath);
    
    // Get the book names from the directories (lowercase)
    const bookNamesFromDirs = bookDirs.map(dir => dir.toLowerCase());

    // Get the book names from the scripture index (lowercase)
    const bookNamesFromIndex = scripture.books.map(book => book.meta.name.toLowerCase());

    // Check for books that exist as directories but are not in the index
    bookNamesFromDirs.forEach(bookName => {
      if (!bookNamesFromIndex.includes(bookName)) {
        console.error(`Missing book in index: ${bookName}`);
      }
      expect(bookNamesFromIndex).toContain(bookName);
    });

    // Check for books that are in the index but don't exist as directories
    bookNamesFromIndex.forEach(bookName => {
      if (!bookNamesFromDirs.includes(bookName)) {
        console.error(`Missing book directory: ${bookName}`);
      }
      expect(bookNamesFromDirs).toContain(bookName);
    });
  });
}); 