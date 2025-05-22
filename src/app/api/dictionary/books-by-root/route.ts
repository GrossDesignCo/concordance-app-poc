import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

/**
 * Serve the pre-generated books-by-root index from the public directory
 * @returns a mapping of roots to the books that contain them
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const root = searchParams.get('root');

    const filePath = path.join(process.cwd(), 'public', 'dictionary', 'index-books-by-root.json');
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const booksByRoot = JSON.parse(fileContents);

    // If a specific root is requested, return just that root's books
    if (root) {
      return NextResponse.json(
        { [root]: booksByRoot[root] || [] },
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
    return NextResponse.json(booksByRoot, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error reading books-by-root index:', error);
    return NextResponse.json(
      { error: 'Failed to fetch books-by-root index' },
      { status: 500 }
    );
  }
} 