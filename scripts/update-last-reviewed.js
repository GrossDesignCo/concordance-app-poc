#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get git user name and current date
const gitUser = execSync('git config user.name').toString().trim();
const currentDate = new Date().toISOString().split('T')[0];

// Get the file path from command line arguments
const filePath = process.argv[2];

if (!filePath) {
  console.error('No file path provided');
  process.exit(1);
}

try {
  // Read the file content
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if the file has a translations object
  if (content.includes('translations:')) {
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
        /(translations: \{)([^}]*)(\})/,
        `$1$2  lastReviewed: { name: '${gitUser}', date: '${currentDate}' },\n$3`
      );
    }
    
    // Write the updated content back to the file
    fs.writeFileSync(filePath, content);
    console.log(`Updated lastReviewed in ${filePath}`);
  }
} catch (error) {
  console.error(`Error processing ${filePath}:`, error);
  process.exit(1);
} 