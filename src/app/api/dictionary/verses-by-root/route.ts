import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

/**
 * Serve the pre-generated verses-by-root index from the public directory
 * @returns a mapping of roots to the verses that contain them
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const root = searchParams.get('root');
    const book = searchParams.get('book');
    const chapter = searchParams.get('chapter');

    const filePath = path.join(process.cwd(), 'public', 'dictionary', 'index-verses-by-root.json');
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const versesByRoot = JSON.parse(fileContents);

    // If a specific root, book, and chapter are requested, return just that root's verses in that chapter
    if (root && book && chapter) {
      const chapterNum = parseInt(chapter);
      const verses = versesByRoot[root]?.[book]?.[chapterNum] || [];
      return NextResponse.json(
        { [root]: { [book]: { [chapterNum]: verses } } },
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        }
      );
    }

    // If a specific root and book are requested, return all verses for that root in that book
    if (root && book) {
      return NextResponse.json(
        { [root]: { [book]: versesByRoot[root]?.[book] || {} } },
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        }
      );
    }

    // If only a root is requested, return all verses for that root
    if (root) {
      return NextResponse.json(
        { [root]: versesByRoot[root] || {} },
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        }
      );
    }

    // Otherwise return the full index
    return NextResponse.json(versesByRoot, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error reading verses-by-root index:', error);
    return NextResponse.json(
      { error: 'Failed to fetch verses-by-root index' },
      { status: 500 }
    );
  }
} 