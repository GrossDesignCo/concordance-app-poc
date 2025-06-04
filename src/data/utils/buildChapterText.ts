import { LanguageKey, Chapter } from '@/types';
import { buildVerseText } from './buildVerseText';

interface ChapterData {
  chapterData: Chapter;
  language: LanguageKey;
}

export function buildChapterText({chapterData, language}: ChapterData): string {
  // Get the first (and should be only) key in the chapterData object
  const chapter = chapterData;
  
  // Sort verses by their number
  const verses = chapter.verses.sort((a, b) => a.meta.verse - b.meta.verse);
  
  let markdown = '';
  verses.forEach(verse => {
    // Build the English literal text using buildVerseText
    const text = buildVerseText(verse, language);
    markdown += `${text}`;
  });
  
  return markdown;
}

