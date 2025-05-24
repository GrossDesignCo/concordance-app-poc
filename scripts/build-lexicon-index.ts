#!/usr/bin/env node

import { generateAllLexiconIndices } from '../src/data/pipeline/generateLexiconIndex';

// Run the index generation
generateAllLexiconIndices()
  .then(() => {
    console.log('Successfully completed lexicon index generation');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Failed to generate lexicon indices:', error);
    process.exit(1);
  }); 