import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

/**
 * Serve the pre-generated chapters-by-root index from the public directory
 * @returns a mapping of roots to the chapters that contain them
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const root = searchParams.get('root');
    const book = searchParams.get('book');

    const filePath = path.join(process.cwd(), 'public', 'dictionary', 'index-chapters-by-root.json');
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const chaptersByRoot = JSON.parse(fileContents);

    // If a specific root and book are requested, return just that root's chapters in that book
    if (root && book) {
      const chapters = chaptersByRoot[root]?.[book] || [];
      return NextResponse.json(
        { [root]: { [book]: chapters } },
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        }
      );
    }

    // If only a root is requested, return all chapters for that root
    if (root) {
      return NextResponse.json(
        { [root]: chaptersByRoot[root] || {} },
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
    return NextResponse.json(chaptersByRoot, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error reading chapters-by-root index:', error);
    return NextResponse.json(
      { error: 'Failed to fetch chapters-by-root index' },
      { status: 500 }
    );
  }
} 