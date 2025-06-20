import { parse } from 'papaparse';

import { csvData } from './csv-data';
import { AnimalName, CompatibilityStatus, FoodItem, FilteredResults } from '../types';

export const parseCSVData = (): FoodItem[] => {
  try {
    const result = parse(csvData, {
      header: true,
      skipEmptyLines: true,
    });

    if (result.errors.length > 0) {
      console.error('CSV Parse Errors:', result.errors);
    }

    return result.data.map((row: any) => {
      const { Type, 'Category/Source': Category, Item, ...animals } = row;
      
      return {
        type: Type,
        category: Category,
        item: Item,
        compatibility: animals,
      };
    });
  } catch (error) {
    console.error('Failed to parse CSV data:', error);
    return [];
  }
};

export const getAllAnimals = (): AnimalName[] => {
  const data = parseCSVData();
  if (data.length === 0) return [];

  const animalNames = Object.keys(data[0].compatibility) as AnimalName[];
  return animalNames;
};

export const getFoodCategories = (): { type: string; categories: string[] }[] => {
  const data = parseCSVData();
  const typeCategories: Record<string, Set<string>> = {};
  
  data.forEach(item => {
    if (!typeCategories[item.type]) {
      typeCategories[item.type] = new Set();
    }
    typeCategories[item.type].add(item.category);
  });
  
  return Object.entries(typeCategories).map(([type, categoriesSet]) => ({
    type,
    categories: Array.from(categoriesSet),
  }));
};

export const getFoodsForAnimal = (animalName: AnimalName): FilteredResults => {
  const data = parseCSVData();
  const filtered: FilteredResults = {
    allowed: [],
    notAllowed: [],
    acceptable: [],
  };
  
  data.forEach(item => {
    const status = item.compatibility[animalName] as CompatibilityStatus;
    
    if (status === 'allowed') {
      filtered.allowed.push(item);
    } else if (status === 'not allowed') {
      filtered.notAllowed.push(item);
    } else if (status.includes('acceptable')) {
      filtered.acceptable.push(item);
    }
  });
  
  return filtered;
};

export const getAnimalsForFood = (foodItem: string): Record<CompatibilityStatus, AnimalName[]> => {
  const data = parseCSVData();
  const result: Record<CompatibilityStatus, AnimalName[]> = {
    'allowed': [],
    'not allowed': [],
    'acceptable in small quantities': [],
    'acceptable in small quantities (boiled)': [],
  };
  
  const foodData = data.find(item => item.item === foodItem);
  if (!foodData) return result;
  
  Object.entries(foodData.compatibility).forEach(([animal, status]) => {
    if (status === 'allowed') {
      result['allowed'].push(animal as AnimalName);
    } else if (status === 'not allowed') {
      result['not allowed'].push(animal as AnimalName);
    } else if (status === 'acceptable in small quantities') {
      result['acceptable in small quantities'].push(animal as AnimalName);
    } else if (status === 'acceptable in small quantities (boiled)') {
      result['acceptable in small quantities (boiled)'].push(animal as AnimalName);
    }
  });
  
  return result;
};
