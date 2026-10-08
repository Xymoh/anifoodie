import React, { useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SectionList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

import { useFavorites } from "../context/FavoritesContext";
import { RootStackParamList } from "../navigation/types";
import { parseCSVData } from "../data/data-utils";
import { FoodItem, AnimalName } from "../types";
import { colors, spacing, typography, shadow } from "../styles";
import { useLanguage } from "../hooks/useLanguage";
import { useTranslations } from "../i18n/index";
import {
  getAnimalTranslation,
  getFoodTranslation,
  getCategoryTranslation,
} from "../i18n/index";

import AnimalIcon from "../components/AnimalIcon";
import FoodIcon from "../components/FoodIcon";
import LoadingIndicator from "../components/LoadingIndicator";
import TranslatedText from "../components/TranslatedText";
import FavoriteButton from "../components/FavoriteButton";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Main">;

interface Section {
  title: string;
  data: any[];
  type: "animal" | "food";
}

const FavoritesScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const {
    favoriteAnimals,
    favoriteFoods,
    isLoading,
    toggleFavoriteAnimal,
    toggleFavoriteFood,
    isAnimalFavorite,
    isFoodFavorite,
  } = useFavorites();
  const allFoods = parseCSVData();
  const { language } = useLanguage();
  const { t } = useTranslations(language);

  // Import functions to work with the composite IDs
  const {
    createFoodId,
    getFoodNameFromId,
    getCategoryFromId,
  } = require("../context/FavoritesContext");

  // Get full food objects for favorite foods
  const favoriteFoodItems = useMemo(() => {
    return allFoods.filter((food) => {
      const foodId = createFoodId(food.category, food.item);
      return favoriteFoods.includes(foodId);
    });
  }, [allFoods, favoriteFoods]);

  const sections: Section[] = useMemo(
    () => [
      { title: t("favoriteAnimals"), data: favoriteAnimals, type: "animal" },
      { title: t("favoriteFoods"), data: favoriteFoodItems, type: "food" },
    ],
    [t, favoriteAnimals, favoriteFoodItems]
  );

  const handleAnimalPress = (animalName: AnimalName) => {
    navigation.navigate("AnimalDetail", { animalName });
  };

  const handleFoodPress = (foodName: string, category?: string) => {
    navigation.navigate("FoodDetail", { foodName, category });
  };

  const renderSectionHeader = ({ section }: { section: Section }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{section.title}</Text>
    </View>
  );

  const renderItem = ({ item, section }: { item: any; section: Section }) => {
    if (section.type === "animal") {
      const handleToggleFavorite = () => {
        toggleFavoriteAnimal(item);
      };

      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() => handleAnimalPress(item)}
        >
          <View style={styles.contentContainer}>
            <AnimalIcon animal={item} size={28} />
            <View style={styles.animalTextContainer}>
              <Text
                style={styles.itemName}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {getAnimalTranslation(item, language)}
              </Text>
            </View>
          </View>
          <View style={styles.favoriteContainer}>
            <FavoriteButton
              isFavorite={isAnimalFavorite(item)}
              onToggle={handleToggleFavorite}
              size={20}
            />
          </View>
        </TouchableOpacity>
      );
    } else {
      const foodItem = item as FoodItem;
      const handleToggleFavorite = () => {
        toggleFavoriteFood(foodItem);
      };

      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() => handleFoodPress(foodItem.item, foodItem.category)}
        >
          <View style={styles.contentContainer}>
            <FoodIcon
              category={foodItem.category}
              itemKey={foodItem.icon}
              size={28}
            />
            <View style={styles.foodTextContainer}>
              <Text
                style={styles.itemName}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {getFoodTranslation(foodItem.item, language)}
              </Text>
              <Text
                style={styles.categoryName}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {getCategoryTranslation(foodItem.category, language)}
              </Text>
            </View>
          </View>
          <View style={styles.favoriteContainer}>
            <FavoriteButton
              isFavorite={isFoodFavorite(foodItem)}
              onToggle={handleToggleFavorite}
              size={20}
            />
          </View>
        </TouchableOpacity>
      );
    }
  };

  const renderEmptyList = () => (
    <View style={styles.emptyContainer}>
      <TranslatedText style={styles.emptyText} translationKey="noFavorites" />
      <TranslatedText
        style={styles.emptySubtext}
        translationKey="addFavorites"
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <TranslatedText style={styles.title} translationKey="favorites" />

      {isLoading ? (
        <LoadingIndicator message="Loading your favorites..." />
      ) : (
        <SectionList
          sections={sections}
          keyExtractor={(item, index) => {
            if (typeof item === "string") {
              return `animal-${item}-${index}`;
            } else {
              return `food-${item.category}-${item.item}-${index}`;
            }
          }}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={renderEmptyList}
          stickySectionHeadersEnabled
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: typography.fontSize.title,
    fontWeight: typography.fontWeight.bold as "700",
    textAlign: "center",
    marginVertical: spacing.sectionMargin,
    color: colors.textPrimary,
  },
  listContent: {
    padding: spacing.md,
    flexGrow: 1,
  },
  sectionHeader: {
    backgroundColor: colors.gray200,
    padding: spacing.sm + 2,
    borderRadius: spacing.radiusMedium,
    marginBottom: spacing.xs + 4,
  },
  sectionTitle: {
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.bold as "700",
    color: colors.textPrimary,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.card,
    padding: spacing.md,
    borderRadius: spacing.radiusMedium,
    marginBottom: spacing.itemMargin,
    marginLeft: spacing.xs + 4,
    ...shadow.small,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: spacing.sm,
    minWidth: 0,
  },
  animalTextContainer: {
    marginLeft: spacing.sm,
    flex: 1,
    minWidth: 0,
  },
  itemName: {
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.medium as "500",
    color: colors.textPrimary,
  },
  foodTextContainer: {
    marginLeft: spacing.sm + 4,
    flex: 1,
    minWidth: 0,
  },
  categoryName: {
    fontSize: typography.fontSize.medium,
    color: colors.textSecondary,
    marginTop: spacing.tiny,
  },
  favoriteContainer: {
    marginLeft: spacing.xs,
    flexShrink: 0,
    minWidth: 44,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.md + 4,
  },
  emptyText: {
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.medium as "500",
    color: colors.textSecondary,
    marginBottom: spacing.sm + 2,
    textAlign: "center",
  },
  emptySubtext: {
    fontSize: typography.fontSize.regular,
    color: colors.textMuted,
    textAlign: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
