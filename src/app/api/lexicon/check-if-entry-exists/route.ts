import { NextResponse } from 'next/server';
import { readdir } from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { words } = await request.json();
    
    if (!Array.isArray(words)) {
      return NextResponse.json(
        { error: 'Words must be an array' },
        { status: 400 }
      );
    }

    // Get list of all lexicon entries
    const lexiconDir = path.join(process.cwd(), 'src/data/lexicon/hebrew');
    const files = await readdir(lexiconDir);
    const entries = new Set(
      files
        .filter(file => file.endsWith('.mdx'))
        .map(file => file.replace('.mdx', ''))
    );

    // Check each word against the entries
    const results = words.map(word => entries.has(word));

    return NextResponse.json({ results });
  } catch (error) {
    console.error('Error checking lexicon entries:', error);
    return NextResponse.json(
      { error: 'Failed to check lexicon entries' },
      { status: 500 }
    );
  }
} 