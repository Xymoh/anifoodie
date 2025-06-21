import { useCallback } from 'react';
import { useLanguage, Language } from './useLanguage';

type TranslationDictionary = Record<string, string>;

const animalTranslations: Record<Language, TranslationDictionary> = {
  en: {
    'Dog': 'Dog',
    'Cat': 'Cat',
    'Rabbit': 'Rabbit',
  },
  es: {
    'Dog': 'Perro',
    'Cat': 'Gato',
    'Rabbit': 'Conejo',
  },
  fr: {
    'Dog': 'Chien',
    'Cat': 'Chat',
    'Rabbit': 'Lapin',
  },
  de: {
    'Dog': 'Hund',
    'Cat': 'Katze',
    'Rabbit': 'Kaninchen',
  },
  it: {
    'Dog': 'Cane',
    'Cat': 'Gatto',
    'Rabbit': 'Coniglio',
  },
  ru: {
    'Dog': 'Собака',
    'Cat': 'Кошка',
    'Rabbit': 'Кролик',
  },
};

const foodTranslations: Record<Language, TranslationDictionary> = {
  en: {
    'Apple': 'Apple',
    'Banana': 'Banana',
    'Carrot': 'Carrot',
  },
  es: {
    'Apple': 'Manzana',
    'Banana': 'Plátano',
    'Carrot': 'Zanahoria',
  },
  fr: {
    'Apple': 'Pomme',
    'Banana': 'Banane',
    'Carrot': 'Carotte',
  },
  de: {
    'Apple': 'Apfel',
    'Banana': 'Banane',
    'Carrot': 'Karotte',
  },
  it: {
    'Apple': 'Mela',
    'Banana': 'Banana',
    'Carrot': 'Carota',
  },
  ru: {
    'Apple': 'Яблоко',
    'Banana': 'Банан',
    'Carrot': 'Морковь',
  },
};

const categoryTranslations: Record<Language, TranslationDictionary> = {
  en: {
    'Mammals': 'Mammals',
    'Birds': 'Birds',
    'Reptiles': 'Reptiles',
    'Amphibians': 'Amphibians',
    'Fish': 'Fish',
  },
  es: {
    'Mammals': 'Mamíferos',
    'Birds': 'Aves',
    'Reptiles': 'Reptiles',
    'Amphibians': 'Anfibios',
    'Fish': 'Peces',
  },
  fr: {
    'Mammals': 'Mammifères',
    'Birds': 'Oiseaux',
    'Reptiles': 'Reptiles',
    'Amphibians': 'Amphibiens',
    'Fish': 'Poissons',
  },
  de: {
    'Mammals': 'Säugetiere',
    'Birds': 'Vögel',
    'Reptiles': 'Reptilien',
    'Amphibians': 'Amphibien',
    'Fish': 'Fische',
  },
  it: {
    'Mammals': 'Mammiferi',
    'Birds': 'Uccelli',
    'Reptiles': 'Rettili',
    'Amphibians': 'Anfibi',
    'Fish': 'Pesci',
  },
  ru: {
    'Mammals': 'Млекопитающие',
    'Birds': 'Птицы',
    'Reptiles': 'Рептилии',
    'Amphibians': 'Амфибии',
    'Fish': 'Рыбы',
  },
};

/**
 * Custom hook for translating dynamic content like animal names, food names, etc.
 * This is useful for content that comes from data sources and isn't part of UI components.
 */
export const useDynamicTranslations = () => {
  const { language } = useLanguage();
  
  const translateAnimal = useCallback((animalName: string): string => {
    const langTranslations = animalTranslations[language] || animalTranslations.en;
    return langTranslations[animalName as keyof typeof langTranslations] || animalName;
  }, [language]);
  
  const translateFood = useCallback((foodName: string): string => {
    const langTranslations = foodTranslations[language] || foodTranslations.en;
    return langTranslations[foodName as keyof typeof langTranslations] || foodName;
  }, [language]);
  
  const translateCategory = useCallback((categoryName: string): string => {
    const langTranslations = categoryTranslations[language] || categoryTranslations.en;
    return langTranslations[categoryName as keyof typeof langTranslations] || categoryName;
  }, [language]);
  
  return {
    translateAnimal,
    translateFood,
    translateCategory
  };
};

export default useDynamicTranslations;
