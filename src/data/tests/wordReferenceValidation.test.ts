import { Verse, Book, TranslationWord } from '@/types';
import { scripture } from '@/data/scripture';
import { roots as hebrewRoots } from '@/data/dictionary/hebrew/roots';
import { prefixes as hebrewPrefixes } from '@/data/dictionary/hebrew/prefixes';
import { suffixes as hebrewSuffixes } from '@/data/dictionary/hebrew/suffixes';
import { roots as greekRoots } from '@/data/dictionary/greek/roots';

describe('Word Reference Validation Tests: Ensure all string references exist in dictionaries', () => {
  // Validate that a word's root string exists in the appropriate roots dictionary
  const validateWordRoot = (word: TranslationWord, bookName: string, chapterNum: number, verseNum: number) => {
    if (word.root && typeof word.root === 'string') {
      // Check if the root exists in Hebrew roots
      const isHebrewRoot = word.root in hebrewRoots;
      
      // If not found in Hebrew and the word has Greek content, check Greek roots
      const isGreekRoot = !isHebrewRoot && word.greek && word.root in greekRoots;
      
      // Report if root reference is not found in any dictionary
      if (!isHebrewRoot && !isGreekRoot) {
        console.log(`${bookName} ${chapterNum}:${verseNum} - Word "${word.hebrew || word.greek || word.transliteration}" references a root "${word.root}" that doesn't exist in any roots dictionary`);
        return false;
      }
    }
    return true;
  };

  // Validate that a word's prefix strings exist in the prefixes dictionary
  const validateWordPrefixes = (word: TranslationWord, bookName: string, chapterNum: number, verseNum: number) => {
    if (word.prefixes && Array.isArray(word.prefixes)) {
      for (const prefix of word.prefixes) {
        if (typeof prefix === 'string' && !(prefix in hebrewPrefixes)) {
          console.log(`${bookName} ${chapterNum}:${verseNum} - Word "${word.hebrew || word.greek || word.transliteration}" references a prefix "${prefix}" that doesn't exist in the prefixes dictionary`);
          return false;
        }
      }
    }
    return true;
  };

  // Validate that a word's suffix strings exist in the suffixes dictionary
  const validateWordSuffixes = (word: TranslationWord, bookName: string, chapterNum: number, verseNum: number) => {
    if (word.suffixes && Array.isArray(word.suffixes)) {
      for (const suffix of word.suffixes) {
        if (typeof suffix === 'string' && !(suffix in hebrewSuffixes)) {
          console.log(`${bookName} ${chapterNum}:${verseNum} - Word "${word.hebrew || word.greek || word.transliteration}" references a suffix "${suffix}" that doesn't exist in the suffixes dictionary`);
          return false;
        }
      }
    }
    return true;
  };

  // Test all words in a verse
  const validateVerse = (verse: Verse, bookName: string, chapterNum: number, verseNum: number) => {
    verse.words.forEach(word => {
      test(`${bookName} ${chapterNum}:${verseNum} word "${word.hebrew || word.greek || word.transliteration}" has valid root reference`, () => {
        expect(validateWordRoot(word, bookName, chapterNum, verseNum)).toBe(true);
      });

      test(`${bookName} ${chapterNum}:${verseNum} word "${word.hebrew || word.greek || word.transliteration}" has valid prefix references`, () => {
        expect(validateWordPrefixes(word, bookName, chapterNum, verseNum)).toBe(true);
      });

      test(`${bookName} ${chapterNum}:${verseNum} word "${word.hebrew || word.greek || word.transliteration}" has valid suffix references`, () => {
        expect(validateWordSuffixes(word, bookName, chapterNum, verseNum)).toBe(true);
      });
    });
  };

  // Iterate through all books in scripture
  scripture.books.forEach((book: Book) => {
    describe(`${book.meta.name}`, () => {
      // Iterate through all chapters in the book
      book.chapters.forEach((chapter) => {
        describe(`Chapter ${chapter.number}`, () => {
          // Iterate through all verses in the chapter
          chapter.verses.forEach((verse) => {
            const reference = `${book.meta.name} ${chapter.number}:${verse.meta.verse}`;
            
            describe(`${reference}`, () => {
              validateVerse(verse, book.meta.name, chapter.number, verse.meta.verse);
            });
          });
        });
      });
    });
  });
}); 