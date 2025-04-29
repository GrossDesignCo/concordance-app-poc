import { generateLexiconEntry } from '@/data/pipeline/generateLexiconEntryInOneShot';
import { saveEntryToFile } from '@/data/pipeline/saveEntryToFile';
import { WordOrWordArray } from '@/types';
import { getLexiconEntryKey } from '@/utils/getLexiconEntryKey';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { word, wordArray, language } = await request.json();

    if (!word && !wordArray) {
      // UI didn't provide needed params
      return NextResponse.json(
        { error: 'A word/key-phrase is required to generate an entry' },
        { status: 400 }
      );
    }

    // All good, proceed with generation
    const entry = await generateLexiconEntry({
      word,
      wordArray,
    } as WordOrWordArray);

    const lexiconKey = getLexiconEntryKey(word ? [word] : wordArray);

    // Save entry to mdx for future use
    saveEntryToFile(lexiconKey, language, entry);

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
