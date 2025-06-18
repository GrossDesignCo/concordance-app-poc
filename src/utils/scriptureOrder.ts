import structure from '../../public/meta/current-structure.json';

// Define the type for our structure
type ChapterStructure = {
  [book: string]: {
    name: string;
    chapters: {
      [chapter: string]: number[];
    };
  };
};

// Cache the book order for better performance
const bookOrder = Object.keys(structure as ChapterStructure);

/**
 * Parses a verse ID into its components
 * @param verseId Format: "BOOK-CHAPTER-VERSE" (e.g., "GENESIS-1-1")
 */
const parseVerseId = (verseId: string) => {
  const [book, chapter, verse] = verseId.split('-');
  return { book, chapter, verse };
};

/**
 * Gets the numerical position of a book in scripture
 */
const getBookPosition = (book: string): number => {
  return bookOrder.indexOf(book);
};

/**
 * Compares two verse IDs for sorting
 * @returns negative if a comes before b, positive if b comes before a, 0 if equal
 */
export const compareVerseIds = (a: string, b: string): number => {
  const verseA = parseVerseId(a);
  const verseB = parseVerseId(b);

  // First compare by book
  const bookComparison = getBookPosition(verseA.book) - getBookPosition(verseB.book);
  if (bookComparison !== 0) return bookComparison;

  // Then by chapter
  if (verseA.chapter !== verseB.chapter) {
    return parseInt(verseA.chapter) - parseInt(verseB.chapter);
  }

  // Finally by verse
  return parseInt(verseA.verse) - parseInt(verseB.verse);
};

/**
 * Sorts an array of verse IDs according to their order in scripture
 */
export const sortVerseIds = (verseIds: string[]): string[] => {
  return [...verseIds].sort(compareVerseIds);
};

/**
 * Validates if a verse ID exists in the current structure
 */
export const isValidVerseId = (verseId: string): boolean => {
  try {
    const { book, chapter, verse } = parseVerseId(verseId);
    const bookStructure = (structure as ChapterStructure)[book];
    
    if (!bookStructure) return false;
    
    const chapterVerses = bookStructure.chapters[chapter];
    if (!chapterVerses) return false;
    
    return chapterVerses.includes(parseInt(verse));
  } catch {
    return false;
  }
}; 