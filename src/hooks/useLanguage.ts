import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Language = 'en' | 'es' | 'fr' | 'de' | 'it' | 'ru';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => Promise<void>;
  isLoading: boolean;
};

const defaultLanguageContext: LanguageContextType = {
  language: 'en',
  setLanguage: async () => {},
  isLoading: true,
};

const LANGUAGE_STORAGE_KEY = 'app_language';

const LanguageContext = createContext<LanguageContextType>(defaultLanguageContext);

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [isLoading, setIsLoading] = useState(true);

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

  const isValidLanguage = (lang: string): lang is Language => {
    return ['en', 'es', 'fr', 'de', 'it', 'ru'].includes(lang);
  };

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

export const useLanguage = () => useContext(LanguageContext);
