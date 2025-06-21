/**
 * Translation Management Helper Script
 * 
 * This script provides utilities for managing translations in the app.
 * It can be used to:
 * 1. Check for missing translation keys
 * 2. Find untranslated strings in the codebase
 * 3. Generate template files for new languages
 */

import fs from 'fs';

import { Language } from '../hooks/useLanguage';
import { TranslationKey, getTranslation } from './translations';

// Check if all keys are present in all languages
export const checkMissingTranslations = () => {
  const languages: Language[] = ['en', 'es', 'fr', 'de'];
  const allKeys = Object.keys(require('./translations').translations.en) as TranslationKey[];
  
  const missing: Record<Language, TranslationKey[]> = {
    en: [],
    es: [],
    fr: [],
    de: []
  };

  for (const lang of languages) {
    for (const key of allKeys) {
      try {
        const translation = getTranslation(key, lang);
        if (!translation || translation === '') {
          missing[lang].push(key);
        }
      } catch (error) {
        missing[lang].push(key);
      }
    }
  }
  
  return missing;
};

// Create a new language template
export const createLanguageTemplate = (targetLang: string) => {
  if (!targetLang || targetLang.length !== 2) {
    console.error('Invalid language code. Please use a 2-letter ISO code (e.g., "it" for Italian)');
    return;
  }
  
  const allKeys = Object.keys(require('./translations').translations.en) as TranslationKey[];
  const template: Record<string, string> = {};
  
  for (const key of allKeys) {
    template[key] = '';
  }
  
  return template;
};

// Find untranslated hardcoded strings in a file
export const findHardcodedStrings = (filePath: string) => {
  // This is a simplified approach - would need more complex parsing for production
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Look for potential hardcoded strings in JSX/TSX
  const jsxTextRegex = /<Text[^>]*>\s*([^{][^<>]+?)[^{]\s*<\/Text>/g;
  const placeholderRegex = /placeholder=['"]([^'"]+)['"]/g;
  const labelRegex = /label=['"]([^'"]+)['"]/g;
  
  const matches: string[] = [];
  let match;
  
  while ((match = jsxTextRegex.exec(content)) !== null) {
    matches.push(match[1].trim());
  }
  
  while ((match = placeholderRegex.exec(content)) !== null) {
    matches.push(match[1].trim());
  }
  
  while ((match = labelRegex.exec(content)) !== null) {
    matches.push(match[1].trim());
  }
  
  return matches;
};

// For Node.js usage only - not for runtime in the app
if (require.main === module) {
  console.log('Translation management script running...');
  // Example usage:
  // console.log(checkMissingTranslations());
}

export default {
  checkMissingTranslations,
  createLanguageTemplate,
  findHardcodedStrings
};
