import { getLexiconEntry } from '@/data/pipeline/getLexiconEntryFromFile';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { key, language } = await request.json();

    if (!key || !language) {
      // UI didn't provide needed params
      return NextResponse.json(
        {
          error:
            'A word/key-phrase + language is required to fetch an entry, eg. { key: "tohu-vaVohu", language: "hebrew" }',
        },
        { status: 400 }
      );
    }

    // All good, fetch the entry
    const lexiconEntry = await getLexiconEntry({
      key,
      language,
    });

    // Check if we got an error object back
    if (
      lexiconEntry &&
      typeof lexiconEntry === 'object' &&
      'errorMessage' in lexiconEntry
    ) {
      return NextResponse.json(
        { error: lexiconEntry.errorMessage },
        { status: 404 }
      );
    }

    return NextResponse.json({ lexiconEntry });
  } catch (err) {
    // Failed on the API side
    console.error('Error fetching entry:', err);

    return NextResponse.json(
      { error: 'API failed to fetch entry' },
      {
        status: 500,
      }
    );
  }
}
