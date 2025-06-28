import React, { useMemo, useState } from "react";
import {
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  getFoodCategories,
  parseCSVData,
  getFoodCategoriesGroupedByCategory,
  getSimplifiedFoodName,
  getDisplayCategory,
  getTranslatedFoodItems,
} from "../data/data-utils";
import { RootStackParamList } from "../navigation/types";
import { FoodItem } from "../types";
import { useFavorites } from "../context/FavoritesContext";
import { colors, spacing, typography, shadow } from "../styles";
import { useLanguage } from "../hooks/useLanguage";
import { useTranslations } from "../i18n/index";
import { useDynamicTranslations } from "../hooks/useDynamicTranslations";
import TranslatedText from "../components/TranslatedText";
import SearchBar from "../components/SearchBar";
import FoodIcon from "../components/FoodIcon";
import FavoriteButton from "../components/FavoriteButton";
import FoodTypeFilter, { FoodType } from "../components/FoodTypeFilter";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Main">;

interface SectionData {
  title: string;
  subTitle?: string;
  data: FoodItem[];
}

const FoodsScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const allFoods = parseCSVData();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<FoodType>("All");
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  const { isFoodFavorite, toggleFavoriteFood } = useFavorites();
  const { translateCategory, translateFood } = useDynamicTranslations();

  // Cache translated foods outside of the search logic
  const translatedFoods = useMemo(
    () => getTranslatedFoodItems(language),
    [language]
  );

  // Create translation map once
  const foodTranslationMap = useMemo(() => {
    const map = new Map<string, string>();
    translatedFoods.forEach((food) => {
      if (food.translatedItem && food.translatedItem !== food.item) {
        map.set(food.item, food.translatedItem);
      }
    });
    return map;
  }, [translatedFoods]);

  // Get all available food types
  const availableFoodTypes = useMemo(() => {
    const types = new Set<string>();
    allFoods.forEach((food) => types.add(food.type));
    return Array.from(types);
  }, [allFoods]);

  const sections: SectionData[] = useMemo(() => {
    const foodCategories = getFoodCategories();
    const categoryGroups = getFoodCategoriesGroupedByCategory();

    // First check if the search query matches a food type (case insensitive)
    const isSearchingForType = searchQuery.trim()
      ? availableFoodTypes.some(
          (type) => type.toLowerCase() === searchQuery.toLowerCase()
        )
      : false;

    let filteredFoods = allFoods;

    // If searching for a type like "Meat", group by categories within that type
    if (isSearchingForType) {
      const searchedType = availableFoodTypes.find(
        (type) => type.toLowerCase() === searchQuery.toLowerCase()
      );
      filteredFoods = allFoods.filter((food) => food.type === searchedType);

      // Group by category (e.g., Chicken, Turkey, Beef for Meat)
      const foodsByCategory: Record<string, FoodItem[]> = {};
      filteredFoods.forEach((food) => {
        const displayCategory = getDisplayCategory(food);
        if (!foodsByCategory[displayCategory]) {
          foodsByCategory[displayCategory] = [];
        }
        foodsByCategory[displayCategory].push(food);
      });

      return Object.entries(foodsByCategory).map(([category, foods]) => ({
        title: category,
        data: foods,
      }));
    }
    // Otherwise apply normal item name search
    else if (searchQuery.trim()) {
      filteredFoods = allFoods.filter((food) => {
        const translatedName = foodTranslationMap.get(food.item);

        return (
          food.item.toLowerCase().includes(searchQuery.toLowerCase()) ||
          food.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
          food.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (translatedName &&
            translatedName.toLowerCase().includes(searchQuery.toLowerCase()))
        );
      });
    }

    // Filter by food type if not "All"
    const typedFoods =
      selectedType !== "All"
        ? filteredFoods.filter((food) => food.type === selectedType)
        : filteredFoods;

    // If we're searching or filtering by type, organize by food category
    if (searchQuery.trim() || selectedType !== "All") {
      // Group the filtered foods by their display category
      const foodsByCategory: Record<string, FoodItem[]> = {};
      typedFoods.forEach((food) => {
        const displayCategory = getDisplayCategory(food);
        if (!foodsByCategory[displayCategory]) {
          foodsByCategory[displayCategory] = [];
        }
        foodsByCategory[displayCategory].push(food);
      });

      // Convert the grouped foods into sections
      return Object.entries(foodsByCategory).map(([category, foods]) => ({
        title: category,
        data: foods,
      }));
    }

    // For the default view, group by category instead of type
    return categoryGroups.map(({ category, items }) => ({
      title: category,
      data: items,
    }));
  }, [
    allFoods,
    searchQuery,
    selectedType,
    availableFoodTypes,
    foodTranslationMap,
  ]);

  const handleFoodPress = (foodName: string) => {
    navigation.navigate("FoodDetail", { foodName });
  };

  const renderSectionHeader = React.useCallback(
    ({ section }: { section: SectionData }) => (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          {translateCategory(section.title)}
        </Text>
        {section.subTitle && (
          <Text style={styles.sectionSubtitle}>{section.subTitle}</Text>
        )}
      </View>
    ),
    [translateCategory]
  );

  const renderFoodItem = React.useCallback(
    ({ item }: { item: FoodItem }) => {
      const handleToggleFavorite = () => {
        // prevent event propagation to not trigger navigation
        toggleFavoriteFood(item);
      };

      return (
        <TouchableOpacity
          style={styles.foodItem}
          onPress={() => handleFoodPress(item.item)}
        >
          <View style={styles.foodRow}>
            <FoodIcon category={item.category} itemKey={item.icon} size={28} />
            <Text
              style={styles.foodName}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {translateFood(getSimplifiedFoodName(item))}
            </Text>
            <View style={styles.favoriteContainer}>
              <FavoriteButton
                isFavorite={isFoodFavorite(item)}
                onToggle={handleToggleFavorite}
                size={20}
              />
            </View>
          </View>
        </TouchableOpacity>
      );
    },
    [isFoodFavorite, toggleFavoriteFood, translateFood]
  );

  const keyExtractor = React.useCallback(
    (item: FoodItem, index: number) =>
      `food-${item.category}-${item.item}-${index}`,
    []
  );

  const getItemLayout = React.useCallback((data: any, index: number) => {
    const ITEM_HEIGHT = 80; // Approximate height including margins
    return {
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    };
  }, []);

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <TranslatedText style={styles.title} translationKey="selectAFood" />
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder={t("searchFoodsOrTypes")}
      />
      <FoodTypeFilter
        selectedType={selectedType}
        onSelectType={setSelectedType}
        availableTypes={availableFoodTypes}
      />
      <SectionList
        sections={sections}
        renderItem={renderFoodItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        contentContainerStyle={styles.listContent}
        stickySectionHeadersEnabled
        removeClippedSubviews={true}
        maxToRenderPerBatch={8}
        updateCellsBatchingPeriod={50}
        initialNumToRender={8}
        windowSize={8}
        legacyImplementation={false}
        disableVirtualization={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <TranslatedText
              style={styles.emptyText}
              translationKey="noFoodsFound"
            />
          </View>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
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
  },
  sectionHeader: {
    backgroundColor: colors.gray200,
    padding: spacing.sm + 2,
    borderRadius: spacing.radiusMedium,
    marginBottom: spacing.sm,
  },
  sectionTitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold as "700",
    color: colors.textPrimary,
  },
  sectionSubtitle: {
    fontSize: typography.fontSize.regular,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  foodItem: {
    backgroundColor: colors.card,
    padding: spacing.md,
    borderRadius: spacing.radiusMedium,
    marginBottom: spacing.itemMargin,
    marginLeft: spacing.sm,
    ...shadow.small,
  },
  foodRow: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  foodName: {
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.medium as "500",
    color: colors.textPrimary,
    marginLeft: spacing.sm + 4,
    flex: 1,
    marginRight: spacing.sm,
    minWidth: 0,
  },
  favoriteContainer: {
    flexShrink: 0,
    minWidth: 44,
  },
  emptyContainer: {
    padding: spacing.lg,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontSize: typography.fontSize.regular,
    color: colors.textSecondary,
    textAlign: "center",
  },
});

export default FoodsScreen;
