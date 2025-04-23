# Verse Data Testing

This directory contains tests to validate the structure and consistency of verse data in the application.

## Testing Approach

The tests focus on the following aspects:

1. **Verse Structure Validation**: Ensuring that verses follow the expected data structure.
2. **Translation Consistency**: Verifying that the translations match the word-by-word structure of the verses.
3. **Word Order**: Confirming that words are correctly ordered in both Hebrew and English sequences.
4. **Utility Functions**: Testing the utility functions that manipulate verse data.

## Running Tests

To run the tests, use the following command:

```bash
npm test
```

## Test Files

- `verseValidation.test.ts`: Tests for validating verse structures and translations

## Adding New Tests

When adding new verses to the application, consider adding corresponding tests to ensure data quality. Use the existing tests as a template for new test cases. 