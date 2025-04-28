#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';

// Get git user name and current date
const gitUser = execSync('git config user.name').toString().trim();
const currentDate = new Date().toISOString().split('T')[0];

// Get all file paths from command line arguments
const filePaths = process.argv.slice(2);

if (filePaths.length === 0) {
  console.error('No file paths provided');
  process.exit(1);
}

// Function to update lastReviewed in a translations object
const updateTranslations = (content, translationsKey) => {
  if (content.includes(`${translationsKey}:`)) {
    // Check if lastReviewed already exists
    if (content.includes('lastReviewed:')) {
      // Update existing lastReviewed
      content = content.replace(
        /lastReviewed: \{([^}]*)\}/,
        `lastReviewed: { name: '${gitUser}', date: '${currentDate}' }`
      );
    } else {
      // Add lastReviewed before the closing brace of translations
      content = content.replace(
        new RegExp(`(${translationsKey}: \\{)([^}]*)(\\})`),
        `$1$2  lastReviewed: { name: '${gitUser}', date: '${currentDate}' },\n$3`
      );
    }
  }
  return content;
};

// Process each file
for (const filePath of filePaths) {
  try {
    // Read the file content
    let content = readFileSync(filePath, 'utf8');
    
    // Try both translations and expectedTranslations
    content = updateTranslations(content, 'translations');
    content = updateTranslations(content, 'expectedTranslations');
    
    // Write the updated content back to the file
    writeFileSync(filePath, content);
    console.log(`Updated lastReviewed in ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
    // Continue processing other files even if one fails
    continue;
  }
} 