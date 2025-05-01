import { generateLexiconEntry } from '@/data/pipeline/generateLexiconEntryInOneShot';
import { saveEntryToFile } from '@/data/pipeline/saveEntryToFile';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { key, language, supplementalData } = await request.json();

    if (!key || !language) {
      // UI didn't provide needed params
      return NextResponse.json(
        {
          error:
            'A word/key-phrase + language is required to generate an entry, eg. { key: "tohu-vaVohu", language: "hebrew" }',
        },
        { status: 400 }
      );
    }

    // All good, proceed with generation
    const entry = await generateLexiconEntry({
      key,
      supplementalData,
    });

    // Save entry to mdx for future use
    saveEntryToFile(key, language, entry);

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
