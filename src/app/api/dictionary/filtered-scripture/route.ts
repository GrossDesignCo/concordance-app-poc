import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface FilteredStructure {
  books: string[];
  chapters: {
    [book: string]: number[];
  };
  verses: {
    [book: string]: {
      [chapter: number]: number[];
    };
  };
}

interface BooksByRoot {
  [root: string]: string[];
}

interface ChaptersByRoot {
  [root: string]: {
    [book: string]: number[];
  };
}

interface VersesByRoot {
  [root: string]: {
    [book: string]: {
      [chapter: string]: number[];
    };
  };
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const roots = searchParams.get('roots')?.split(',') || [];

    if (roots.length === 0) {
      return NextResponse.json(
        { error: 'No roots provided' },
        { status: 400 }
      );
    }

    // Load all three index files
    const indexDir = path.join(process.cwd(), 'public', 'dictionary');
    const [booksByRoot, chaptersByRoot, versesByRoot] = await Promise.all([
      fs.promises.readFile(path.join(indexDir, 'index-books-by-root.json'), 'utf-8'),
      fs.promises.readFile(path.join(indexDir, 'index-chapters-by-root.json'), 'utf-8'),
      fs.promises.readFile(path.join(indexDir, 'index-verses-by-root.json'), 'utf-8')
    ]).then(([books, chapters, verses]) => [
      JSON.parse(books) as BooksByRoot,
      JSON.parse(chapters) as ChaptersByRoot,
      JSON.parse(verses) as VersesByRoot
    ]);

    // Initialize the filtered structure
    const filteredStructure: FilteredStructure = {
      books: [],
      chapters: {},
      verses: {}
    };

    // Process each root
    for (const root of roots) {
      // Add books
      const books = booksByRoot[root] || [];
      filteredStructure.books = [...new Set([...filteredStructure.books, ...books])].sort();

      // Add chapters
      const chapters = chaptersByRoot[root] || {};
      for (const [book, chapterList] of Object.entries(chapters)) {
        if (!filteredStructure.chapters[book]) {
          filteredStructure.chapters[book] = [];
        }
        filteredStructure.chapters[book] = [
          ...new Set([...filteredStructure.chapters[book], ...chapterList])
        ].sort((a, b) => a - b);
      }

      // Add verses
      const verses = versesByRoot[root] || {};
      for (const [book, bookData] of Object.entries(verses)) {
        if (!filteredStructure.verses[book]) {
          filteredStructure.verses[book] = {};
        }
        for (const [chapter, verseList] of Object.entries(bookData)) {
          const chapterNum = parseInt(chapter);
          if (!filteredStructure.verses[book][chapterNum]) {
            filteredStructure.verses[book][chapterNum] = [];
          }
          filteredStructure.verses[book][chapterNum] = [
            ...new Set([...filteredStructure.verses[book][chapterNum], ...verseList])
          ].sort((a, b) => a - b);
        }
      }
    }

    return NextResponse.json(filteredStructure, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error generating filtered structure:', error);
    return NextResponse.json(
      { error: 'Failed to generate filtered structure' },
      { status: 500 }
    );
  }
} 