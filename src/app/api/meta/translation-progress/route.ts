import { NextResponse } from 'next/server';
import { getTranslationProgress } from '@/data/pipeline/getTranslationProgress';

const progress = await getTranslationProgress();

export async function GET() {
  try {
    return NextResponse.json(progress, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
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
