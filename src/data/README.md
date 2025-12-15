# Concordance: Scripture Translation & Lexical Data

This repository contains a structured framework for working with Biblical texts in their original languages alongside literal English translations. The project emphasizes faithful word-for-word translation that preserves the unique linguistic patterns of the source texts.

## Project Overview

Concordance provides:

1. **Scripture Data**: Original language texts (Hebrew, Aramaic, and Greek) with corresponding word-by-word English translations that follow strict translation principles.

2. **Lexical Resources**: Comprehensive dictionaries of Biblical Hebrew, Aramaic, and Greek terms, including their semantic ranges, root forms, and contextual usages.

3. **Translation Pipeline**: Tools for applying consistent translation principles across texts, ensuring coherence in the English renderings.

4. **Data Validation**: Robust testing framework that ensures data integrity and translation consistency.

## Directory Structure

- `/scripture/`: Contains verse data organized by book (Genesis, Numbers, Proverbs, John)
- `/lexicon/`: Word dictionaries with detailed linguistic information
- `/dictionary/`: Supplementary reference materials for understanding Biblical terms
- `/utils/`: Helper functions for working with and displaying verse data
- `/pipeline/`: Processing tools for translation workflows
- `/tests/`: Validation tests ensuring data quality and consistency

## Translation Philosophy

This project uses a distinctive approach to translation that prioritizes:

- 1:1 Hebrew/Aramaic/Greek to English word mapping where possible
- Preservation of original word order and sentence structure
- Consistent translation of terms across the entire corpus
- Minimal interpretive additions to the text
- Clear marking of direct objects and grammatical features

For complete details, see [translation-principles.md](./translation-principles.md).

## Translation Review System

### LastReviewed Field
Each verse file includes a `lastReviewed` field in its `expectedTranslations` object:
```typescript
expectedTranslations: {
  // ... translations ...
  lastReviewed: {
    name: 'Reviewer Name', // from git config user.name
    date: '2024-04-28'    // ISO date format
  }
}
```

This field is automatically updated via a pre-commit hook when verse files are modified.

### Automated Review System
- Uses Husky and lint-staged for pre-commit hooks
- Script: `scripts/update-last-reviewed.js`
- Triggers on any changes to files matching `src/data/scripture/**/*.ts`
- Updates `lastReviewed` with the current git user and date

### Purpose
The review system ensures that:
1. All translation changes are tracked
2. Human oversight is documented
3. Changes by AI assistants are properly reviewed and validated

## Getting Started

To work with this data:

```bash
# Install dependencies
npm install

# Run validation tests
npm test
```

## Contributing

Contributions are welcome! When adding new scripture texts or lexical entries:

1. Follow the established data structures
2. Apply the translation principles consistently
3. Add corresponding tests to validate your additions
4. Submit a pull request with a clear description of your changes

## Future Development

As this project evolves into a standalone resource, we aim to:

1. Expand coverage to include all Biblical books
2. Enhance the lexical resources with additional linguistic insights
3. Develop interactive tools for scripture study and word analysis
4. Create APIs for integrating this data with other applications
5. Build a community of contributors dedicated to faithful translation work
