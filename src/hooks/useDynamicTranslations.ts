import { useCallback } from 'react';

import { useLanguage } from './useLanguage';
import { statusTranslations, animalTranslations } from '../i18n/food-translations';
import { getTranslatedFoodItems } from '../data/data-utils';

/**
 * Custom hook for translating dynamic content like animal names, food names, food categories, etc.
 * This is useful for content that comes from data sources and isn't part of UI components.
 */
export const useDynamicTranslations = () => {
  const { language } = useLanguage();
  const translatedItems = getTranslatedFoodItems(language);
  
  /**
   * Translates an animal name to the current language using the centralized translations from food-translations.ts
   */
  const translateAnimal = useCallback((animalName: string): string => {
    const langTranslations = animalTranslations[language] || animalTranslations.en;
    return langTranslations[animalName] || animalName;
  }, [language]);
  
  /**
   * Translates a food name to the current language using the pre-processed translated items
   */
  const translateFood = useCallback((foodName: string): string => {
    const food = translatedItems.find(item => item.item === foodName);
    return food?.translatedItem || foodName;
  }, [translatedItems]);
  
  /**
   * Translates a food category to the current language using the pre-processed translated items
   */
  const translateCategory = useCallback((categoryName: string): string => {
    const item = translatedItems.find(item => item.category === categoryName);
    return item?.translatedCategory || categoryName;
  }, [translatedItems]);
  
  /**
   * Translates a compatibility status to the current language
   */
  const translateStatus = useCallback((status: string): string => {
    const langTranslations = statusTranslations[language] || statusTranslations.en;
    return langTranslations[status] || status;
  }, [language]);
  
  /**
   * Translates a food type to the current language
   */
  const translateType = useCallback((type: string): string => {
    const item = translatedItems.find(item => item.type === type);
    return item?.translatedType || type;
  }, [translatedItems]);
  
  return {
    translateAnimal,
    translateFood,
    translateCategory,
    translateStatus,
    translateType
  };
};

export default useDynamicTranslations;
