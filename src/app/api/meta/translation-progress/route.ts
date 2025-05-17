import { NextResponse } from 'next/server';
import { getTranslationProgress } from '@/data/pipeline/getTranslationProgress';

/**
 * Statically serve data for the translation progress meter/viz
 * @returns a `TranslationProgress` object
 */
export async function GET() {
  try {
    const translationProgress = await getTranslationProgress();

    return NextResponse.json(translationProgress, {
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
