import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AnimalName } from '../types';

const FAVORITE_ANIMALS_KEY = 'favorite_animals';
const FAVORITE_FOODS_KEY = 'favorite_foods';

export const useFavorites = () => {
  const [favoriteAnimals, setFavoriteAnimals] = useState<AnimalName[]>([]);
  const [favoriteFoods, setFavoriteFoods] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load favorites from storage
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const animalsData = await AsyncStorage.getItem(FAVORITE_ANIMALS_KEY);
        const foodsData = await AsyncStorage.getItem(FAVORITE_FOODS_KEY);
        
        if (animalsData) {
          setFavoriteAnimals(JSON.parse(animalsData));
        }
        
        if (foodsData) {
          setFavoriteFoods(JSON.parse(foodsData));
        }
      } catch (error) {
        console.error('Error loading favorites:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadFavorites();
  }, []);

  // Save favorites to storage
  const saveFavoriteAnimals = async (animals: AnimalName[]) => {
    try {
      await AsyncStorage.setItem(FAVORITE_ANIMALS_KEY, JSON.stringify(animals));
      setFavoriteAnimals(animals);
    } catch (error) {
      console.error('Error saving favorite animals:', error);
    }
  };

  const saveFavoriteFoods = async (foods: string[]) => {
    try {
      await AsyncStorage.setItem(FAVORITE_FOODS_KEY, JSON.stringify(foods));
      setFavoriteFoods(foods);
    } catch (error) {
      console.error('Error saving favorite foods:', error);
    }
  };

  // Toggle favorite animal
  const toggleFavoriteAnimal = async (animal: AnimalName) => {
    const exists = favoriteAnimals.includes(animal);
    const newFavorites = exists
      ? favoriteAnimals.filter(a => a !== animal)
      : [...favoriteAnimals, animal];
      
    await saveFavoriteAnimals(newFavorites);
  };

  // Toggle favorite food
  const toggleFavoriteFood = async (food: string) => {
    const exists = favoriteFoods.includes(food);
    const newFavorites = exists
      ? favoriteFoods.filter(f => f !== food)
      : [...favoriteFoods, food];
      
    await saveFavoriteFoods(newFavorites);
  };

  // Check if an animal is a favorite
  const isAnimalFavorite = (animal: AnimalName): boolean => {
    return favoriteAnimals.includes(animal);
  };

  // Check if a food is a favorite
  const isFoodFavorite = (food: string): boolean => {
    return favoriteFoods.includes(food);
  };

  return {
    favoriteAnimals,
    favoriteFoods,
    isLoading,
    toggleFavoriteAnimal,
    toggleFavoriteFood,
    isAnimalFavorite,
    isFoodFavorite,
  };
};
