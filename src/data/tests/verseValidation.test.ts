import { Verse } from '@/types';
import { buildVerseText } from '@/data/utils/buildVerseText';
import { scripture } from '@/data/scripture';

describe('Verse Translation Validation Tests: Ensure data + grammar matches expected translation strings', () => {
  const testVerseHebrew = (verse: Verse) => {
    const { expectedTranslations } = verse;

    if (!expectedTranslations) {
      fail('Verse is missing expectedTranslations object');
    }

    // Test Hebrew text generation using Hebrew word order
    if (expectedTranslations.hebrew) {
      const generatedHebrew = buildVerseText(verse, 'hebrew', 'hebrew');
      // Only test if there are Hebrew words (ignore for greek verses)
      if (verse.words.some((word) => word.hebrew)) {
        expect(generatedHebrew).toBeTruthy();
        expect(generatedHebrew).toMatch(expectedTranslations.hebrew); // Strings should match exactly
      }
    }
  };

  const testVerseTransliteration = (verse: Verse) => {
    const { expectedTranslations } = verse;

    if (!expectedTranslations) {
      fail('Verse is missing expectedTranslations object');
    }

    // Test transliteration using Hebrew/Greek word order
    if (expectedTranslations.transliteration) {
      const generatedTransliteration = buildVerseText(
        verse,
        'transliteration',
        expectedTranslations.hebrew ? 'hebrew' : 'greek'
      );
      expect(generatedTransliteration).toBeTruthy();
      expect(generatedTransliteration).toMatch(expectedTranslations.transliteration); // Strings should match exactly
    } else {
      fail('Verse is missing transliteration translation');
    }
  };

  const testVerseEnglishLiteral = (verse: Verse) => {
    const { expectedTranslations } = verse;

    if (!expectedTranslations) {
      fail('Verse is missing expectedTranslations object');
    }

    // Test literal translation using Hebrew/Greek word order
    if (expectedTranslations.englishLiteral) {
      const generatedEnglishLiteral = buildVerseText(
        verse,
        'englishLiteral',
        expectedTranslations.hebrew ? 'hebrew' : 'greek'
      );
      expect(generatedEnglishLiteral).toBeTruthy();
      expect(generatedEnglishLiteral).toMatch(expectedTranslations.englishLiteral); // Strings should match exactly
    } else {
      fail('Verse is missing englishLiteral translation');
    }
  };

  const testVerseEnglishNatural = (verse: Verse) => {
    const { expectedTranslations } = verse;

    if (!expectedTranslations) {
      fail('Verse is missing expectedTranslations object');
    }

    // Test natural translation using English word order
    if (expectedTranslations.englishNatural) {
      const generatedEnglishNatural = buildVerseText(
        verse,
        'englishNatural',
        'english'
      );
      expect(generatedEnglishNatural).toBeTruthy();
      expect(generatedEnglishNatural).toMatch(expectedTranslations.englishNatural); // Strings should match exactly
    } else {
      fail('Verse is missing englishNatural translation');
    }
  };

  // Test all verses in scripture
  // Iterate through all books
  scripture.books.forEach((book) => {
    describe(`${book.name}`, () => {
      // Iterate through all chapters in the book
      book.chapters.forEach((chapter) => {
        describe(`Chapter ${chapter.number}`, () => {
          // Iterate through all verses in the chapter
          chapter.verses.forEach((verse) => {
            const reference = `${book.name} ${chapter.number}:${verse.meta.verse}`;

            test(`${reference} hebrew translation matches data`, () => {
              testVerseHebrew(verse);
            });

            test(`${reference} transliteration matches data`, () => {
              testVerseTransliteration(verse);
            });

            test(`${reference} literal translation matches data`, () => {
              testVerseEnglishLiteral(verse);
            });

            test(`${reference} natural translation matches data`, () => {
              testVerseEnglishNatural(verse);
            });
          });
        });
      });
    });
  });
});
