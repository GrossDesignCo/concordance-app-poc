import { LexiconReference } from '@/types';
import fs from 'fs/promises';
import path from 'path';

export async function getLexiconEntry({ key, language }: LexiconReference) {
  try {
    const filePath = path.join(
      process.cwd(),
      `src/data/lexicon/${language ?? 'hebrew'}/${key}.mdx`
    );
    const content = await fs.readFile(filePath, 'utf-8');

    // Return the raw MDX content as a string
    return content;
  } catch (err) {
    console.warn(`Could not find a lexicon entry for ${key}`);

    return { errorMessage: `No Lexicon entry found for "${key}"`, err };
  }
}
