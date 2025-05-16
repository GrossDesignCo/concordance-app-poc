import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const PROGRESS_PATH = path.join(process.cwd(), 'src/data/meta/translation-progress.json');

export async function GET() {
  try {
    const file = fs.readFileSync(PROGRESS_PATH, 'utf-8');
    const progress = JSON.parse(file);
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
