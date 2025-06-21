import { Language } from '../hooks/useLanguage';

// Define our translation keys
export type TranslationKey = 
  // Tab navigation
  | 'animals'
  | 'foods'
  | 'favorites'
  | 'settings'
  
  // Settings screen
  | 'settingsTitle'
  | 'languagePreference'
  | 'english'
  | 'spanish'
  | 'french'
  | 'german'
  | 'darkTheme'
  | 'about'
  | 'version'
  
  // Welcome screen
  | 'welcomeTitle'
  | 'welcomeDescription'
  | 'iUnderstand'
  
  // Common
  | 'save'
  | 'cancel';

// Translation dictionaries
const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    // Tab navigation
    animals: 'Animals',
    foods: 'Foods',
    favorites: 'Favorites',
    settings: 'Settings',
    
    // Settings screen
    settingsTitle: 'Settings',
    languagePreference: 'Language',
    english: 'English',
    spanish: 'Spanish',
    french: 'French',
    german: 'German',
    darkTheme: 'Dark Theme',
    about: 'About',
    version: 'Version',
    
    // Welcome screen
    welcomeTitle: 'Welcome to AniFoodie',
    welcomeDescription: 'Discover what foods are safe for your pets',
    iUnderstand: 'I Understand',
    
    // Common
    save: 'Save',
    cancel: 'Cancel'
  },
  es: {
    // Tab navigation
    animals: 'Animales',
    foods: 'Alimentos',
    favorites: 'Favoritos',
    settings: 'Ajustes',
    
    // Settings screen
    settingsTitle: 'Ajustes',
    languagePreference: 'Idioma',
    english: 'Inglés',
    spanish: 'Español',
    french: 'Francés',
    german: 'Alemán',
    darkTheme: 'Tema Oscuro',
    about: 'Acerca de',
    version: 'Versión',
    
    // Welcome screen
    welcomeTitle: 'Bienvenido a AniFoodie',
    welcomeDescription: 'Descubre qué alimentos son seguros para tus mascotas',
    iUnderstand: 'Entiendo',
    
    // Common
    save: 'Guardar',
    cancel: 'Cancelar'
  },
  fr: {
    // Tab navigation
    animals: 'Animaux',
    foods: 'Aliments',
    favorites: 'Favoris',
    settings: 'Paramètres',
    
    // Settings screen
    settingsTitle: 'Paramètres',
    languagePreference: 'Langue',
    english: 'Anglais',
    spanish: 'Espagnol',
    french: 'Français',
    german: 'Allemand',
    darkTheme: 'Thème Sombre',
    about: 'À propos',
    version: 'Version',
    
    // Welcome screen
    welcomeTitle: 'Bienvenue sur AniFoodie',
    welcomeDescription: 'Découvrez quels aliments sont sûrs pour vos animaux',
    iUnderstand: 'Je Comprends',
    
    // Common
    save: 'Enregistrer',
    cancel: 'Annuler'
  },
  de: {
    // Tab navigation
    animals: 'Tiere',
    foods: 'Lebensmittel',
    favorites: 'Favoriten',
    settings: 'Einstellungen',
    
    // Settings screen
    settingsTitle: 'Einstellungen',
    languagePreference: 'Sprache',
    english: 'Englisch',
    spanish: 'Spanisch',
    french: 'Französisch',
    german: 'Deutsch',
    darkTheme: 'Dunkles Thema',
    about: 'Über',
    version: 'Version',
    
    // Welcome screen
    welcomeTitle: 'Willkommen bei AniFoodie',
    welcomeDescription: 'Entdecken Sie, welche Lebensmittel für Ihre Haustiere sicher sind',
    iUnderstand: 'Ich verstehe',
    
    // Common
    save: 'Speichern',
    cancel: 'Abbrechen'
  }
};

// Function to get translation based on key and language
export const getTranslation = (key: TranslationKey, language: Language): string => {
  return translations[language][key] || translations.en[key];
};

// Hook to get translations
export const useTranslations = (language: Language) => {
  return {
    t: (key: TranslationKey) => getTranslation(key, language)
  };
};
