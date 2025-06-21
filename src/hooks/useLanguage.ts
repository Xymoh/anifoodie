import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Supported languages
export type Language = 'en' | 'es' | 'fr' | 'de' | 'it' | 'ru';

// Language context type
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => Promise<void>;
  isLoading: boolean;
};

// Default language context
const defaultLanguageContext: LanguageContextType = {
  language: 'en',
  setLanguage: async () => {},
  isLoading: true,
};

// AsyncStorage key
const LANGUAGE_STORAGE_KEY = 'app_language';

// Create the context
const LanguageContext = createContext<LanguageContextType>(defaultLanguageContext);

// Language provider props
type LanguageProviderProps = {
  children: ReactNode;
};

// Language provider component
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [isLoading, setIsLoading] = useState(true);

  // Load language preference on mount
  useEffect(() => {
    const loadLanguage = async () => {
      try {
        const storedLanguage = await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);
        if (storedLanguage && isValidLanguage(storedLanguage)) {
          setLanguageState(storedLanguage as Language);
        }
      } catch (error) {
        console.error('Error loading language preference:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadLanguage();
  }, []);

  // Check if language is valid
  const isValidLanguage = (lang: string): lang is Language => {
    return ['en', 'es', 'fr', 'de', 'it', 'ru'].includes(lang);
  };

  // Set language
  const setLanguage = async (newLanguage: Language) => {
    try {
      await AsyncStorage.setItem(LANGUAGE_STORAGE_KEY, newLanguage);
      setLanguageState(newLanguage);
    } catch (error) {
      console.error('Error saving language preference:', error);
    }
  };

  return React.createElement(
    LanguageContext.Provider,
    { value: { language, setLanguage, isLoading } },
    children
  );
};

// Hook to use language context
export const useLanguage = () => useContext(LanguageContext);
