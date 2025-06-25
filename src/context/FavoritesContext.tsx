import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AnimalName, FoodItem } from "../types";

const FAVORITE_ANIMALS_KEY = "favorite_animals";
const FAVORITE_FOODS_KEY = "favorite_foods";

// Create a composite ID for food items to prevent duplicates with the same name
export const createFoodId = (category: string, itemName: string): string => {
  return `${category}:${itemName}`;
};

// Extract the original food name from a composite ID
export const getFoodNameFromId = (id: string): string => {
  const parts = id.split(":");
  return parts.length > 1 ? parts[1] : id;
};

// Extract the category from a composite ID
export const getCategoryFromId = (id: string): string => {
  const parts = id.split(":");
  return parts.length > 1 ? parts[0] : "";
};

interface FavoritesContextType {
  favoriteAnimals: AnimalName[];
  favoriteFoods: string[]; // These are composite IDs in the format "category:itemName"
  isLoading: boolean;
  toggleFavoriteAnimal: (animal: AnimalName) => Promise<void>;
  toggleFavoriteFood: (
    food: FoodItem | string,
    category?: string
  ) => Promise<void>;
  isAnimalFavorite: (animal: AnimalName) => boolean;
  isFoodFavorite: (food: FoodItem | string, category?: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
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
          const parsedFoods = JSON.parse(foodsData);

          // Check if we need to migrate old format (string only) to new format (composite IDs)
          const needsMigration = parsedFoods.some(
            (food: string) => !food.includes(":")
          );

          if (needsMigration) {
            console.log("Migrating favorite foods to composite ID format");
            // We'll need to load the food items to get their categories
            // This is a best-effort migration - some foods may be lost if they can't be found
            const { parseCSVData } = require("../data/data-utils");
            const allFoods = parseCSVData();

            const migratedFoods = parsedFoods.map((food: string) => {
              if (food.includes(":")) return food;

              const foodItem = allFoods.find((f: any) => f.item === food);
              if (foodItem) {
                return createFoodId(foodItem.category, food);
              }
              return food; // Keep as is if we can't find it
            });

            // Save migrated foods
            await AsyncStorage.setItem(
              FAVORITE_FOODS_KEY,
              JSON.stringify(migratedFoods)
            );
            setFavoriteFoods(migratedFoods);
          } else {
            setFavoriteFoods(parsedFoods);
          }
        }
      } catch (error) {
        console.error("Error loading favorites:", error);
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
      console.error("Error saving favorite animals:", error);
    }
  };

  const saveFavoriteFoods = async (foods: string[]) => {
    try {
      await AsyncStorage.setItem(FAVORITE_FOODS_KEY, JSON.stringify(foods));
      setFavoriteFoods(foods);
    } catch (error) {
      console.error("Error saving favorite foods:", error);
    }
  };

  // Toggle favorite animal
  const toggleFavoriteAnimal = async (animal: AnimalName) => {
    const exists = favoriteAnimals.includes(animal);
    const newFavorites = exists
      ? favoriteAnimals.filter((a) => a !== animal)
      : [...favoriteAnimals, animal];

    await saveFavoriteAnimals(newFavorites);
  };

  // Toggle favorite food
  const toggleFavoriteFood = async (
    food: FoodItem | string,
    category?: string
  ) => {
    let foodId: string;

    if (typeof food === "string") {
      // If food is just a string (legacy format or already a composite ID)
      if (food.includes(":")) {
        // Already a composite ID
        foodId = food;
      } else if (category) {
        // We have a food name and category separately
        foodId = createFoodId(category, food);
      } else {
        // Legacy case, just use the name as ID (should be avoided)
        foodId = food;
      }
    } else {
      // If food is a FoodItem object
      foodId = createFoodId(food.category, food.item);
    }

    const exists = favoriteFoods.includes(foodId);
    const newFavorites = exists
      ? favoriteFoods.filter((f) => f !== foodId)
      : [...favoriteFoods, foodId];

    await saveFavoriteFoods(newFavorites);
  };

  // Check if an animal is a favorite
  const isAnimalFavorite = (animal: AnimalName): boolean => {
    return favoriteAnimals.includes(animal);
  };

  // Check if a food is a favorite
  const isFoodFavorite = (
    food: FoodItem | string,
    category?: string
  ): boolean => {
    let foodId: string;

    if (typeof food === "string") {
      // If food is just a string (legacy format or already a composite ID)
      if (food.includes(":")) {
        // Already a composite ID
        foodId = food;
      } else if (category) {
        // We have a food name and category separately
        foodId = createFoodId(category, food);
      } else {
        // Legacy case, just use the name as ID (should be avoided)
        foodId = food;
      }
    } else {
      // If food is a FoodItem object
      foodId = createFoodId(food.category, food.item);
    }

    return favoriteFoods.includes(foodId);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favoriteAnimals,
        favoriteFoods,
        isLoading,
        toggleFavoriteAnimal,
        toggleFavoriteFood,
        isAnimalFavorite,
        isFoodFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);

  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }

  return context;
};
