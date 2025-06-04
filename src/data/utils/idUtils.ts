// Utility functions for generating unique, consistent string IDs for scripture references

import { ScriptureBookNameKey, SCRIPTURE_BOOK_NAMES } from '../constants';

export function getVerseId(meta: { book: ScriptureBookNameKey; chapter: number; verse: number }): string {
  // Example: GENESIS-1-2
  return `${meta.book}-${meta.chapter}-${meta.verse}`;
}

export function getChapterId(meta: { book: ScriptureBookNameKey; chapter: number }): string {
  // Example: GENESIS-1
  return `${meta.book}-${meta.chapter}`;
}

export function getBookNameKey(bookName: string): ScriptureBookNameKey {
  const key = Object.entries(SCRIPTURE_BOOK_NAMES).find(([, value]) => value.name === bookName)?.[0];
  if (!key) {
    throw new Error(`No book name key found for "${bookName}"`);
  }
  return key as ScriptureBookNameKey;
} 