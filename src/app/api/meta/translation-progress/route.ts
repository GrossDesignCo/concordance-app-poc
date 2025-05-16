import progress from '@/data/meta/translation-progress.json';
import { NextResponse } from 'next/server';

/**
 * Statically serve data for the translation progress meter/viz
 * @returns a `TranslationProgress` object
 */
export async function GET() {
  try {
    return NextResponse.json(progress, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        // 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error fetching translation progress:', error);
    return NextResponse.json(
      { error: 'Failed to fetch translation progress' },
      { status: 500 }
    );
  }
}
