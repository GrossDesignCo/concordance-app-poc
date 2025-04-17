import { generateLexiconEntry } from '@/data/pipeline/generateLexiconEntryInOneShot';
import { saveEntryToFile } from '@/data/pipeline/saveEntryToFile';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { word } = await request.json();

    if (!word) {
      // UI didn't provide needed params
      return NextResponse.json(
        { error: 'A word/key-phrase is required to generate an entry' },
        { status: 400 }
      );
    }

    // All good, proceed with generation
    const entry = await generateLexiconEntry(word);

    // Save entry to mdx for future use
    await saveEntryToFile(word.transliteration, entry);

    // Return entry to UI
    return NextResponse.json({
      entry,
    });
  } catch (err) {
    // Failed on the API side
    console.error('Error generating entry:', err);
    return NextResponse.json(
      {
        error: 'API failed to generate entry',
      },
      { status: 500 }
    );
  }
}
