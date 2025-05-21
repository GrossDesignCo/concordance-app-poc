import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

/**
 * Serve the pre-generated translation progress data from the public directory
 * @returns a `TranslationProgress` object
 */
export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'meta', 'translation-progress.json');
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const translationProgress = JSON.parse(fileContents);

    return NextResponse.json(translationProgress, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error reading translation progress:', error);
    return NextResponse.json(
      { error: 'Failed to fetch translation progress' },
      { status: 500 }
    );
  }
}
