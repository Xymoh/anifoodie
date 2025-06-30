import React, { useState, useMemo } from "react";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  TouchableOpacity,
} from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { RootStackParamList } from "../navigation/types";
import { getFoodsForAnimal, getTranslatedFoodItems } from "../data/data-utils";
import { FoodItem } from "../types";
import { colors, spacing, typography, shadow } from "../styles";

import CompatibilityIndicator from "../components/CompatibilityIndicator";
import AnimalIcon from "../components/AnimalIcon";
import FoodCard from "../components/FoodCard";
import SearchBar from "../components/SearchBar";
import { useLanguage } from "../hooks/useLanguage";
import { useTranslations } from "../i18n/index";
import { useDynamicTranslations } from "../hooks/useDynamicTranslations";

type AnimalDetailScreenProps = {
  route: RouteProp<RootStackParamList, "AnimalDetail">;
};

interface SectionData {
  title: string;
  data: FoodItem[];
  status: string;
}

const AnimalDetailScreen = ({ route }: AnimalDetailScreenProps) => {
  const { animalName } = route.params;
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const foodData = getFoodsForAnimal(animalName);
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  const { translateAnimal } = useDynamicTranslations();

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

  const sections: SectionData[] = useMemo(() => {
    let filteredAllowed = foodData.allowed;
    let filteredAcceptable = foodData.acceptable;
    let filteredNotAllowed = foodData.notAllowed;

    // Apply search filter if query exists
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();

      const filterFood = (food: FoodItem) => {
        const translatedName = foodTranslationMap.get(food.item);

        return (
          food.item.toLowerCase().includes(query) ||
          food.type.toLowerCase().includes(query) ||
          food.category.toLowerCase().includes(query) ||
          (translatedName && translatedName.toLowerCase().includes(query))
        );
      };

      filteredAllowed = foodData.allowed.filter(filterFood);
      filteredAcceptable = foodData.acceptable.filter(filterFood);
      filteredNotAllowed = foodData.notAllowed.filter(filterFood);
    }

    return [
      { title: t("allowedFoods"), data: filteredAllowed, status: "allowed" },
      {
        title: t("acceptableFoods"),
        data: filteredAcceptable,
        status: "acceptable in small quantities",
      },
      {
        title: t("notAllowedFoods"),
        data: filteredNotAllowed,
        status: "not allowed",
      },
    ];
  }, [foodData, searchQuery, t, foodTranslationMap]);

  const renderSectionHeader = React.useCallback(
    ({ section }: { section: SectionData }) => (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{section.title}</Text>
        <CompatibilityIndicator status={section.status} />
      </View>
    ),
    []
  );

  const renderFoodItem = React.useCallback(
    ({ item }: { item: FoodItem }) => (
      <FoodCard food={item} animalName={animalName} />
    ),
    [animalName]
  );

  const keyExtractor = React.useCallback(
    (item: FoodItem, index: number) => `${item.category}:${item.item}:${index}`,
    []
  );

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <AnimalIcon animal={animalName} size={32} />
            <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
              {translateAnimal(animalName)}
            </Text>
          </View>
        </View>
      </View>
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder={t("searchFoodsOrTypes")}
      />
      <SectionList
        sections={sections}
        renderItem={renderFoodItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.listContent}
        stickySectionHeadersEnabled={true}
        removeClippedSubviews={false}
        maxToRenderPerBatch={10}
        updateCellsBatchingPeriod={50}
        initialNumToRender={15}
        windowSize={10}
        legacyImplementation={false}
        disableVirtualization={true}
        ListEmptyComponent={
          searchQuery.trim() ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>{t("noFoodsFound")}</Text>
            </View>
          ) : null
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
  headerContainer: {
    position: "relative",
    paddingHorizontal: spacing.md,
    marginTop: spacing.md,
  },
  backButton: {
    position: "absolute",
    left: spacing.md,
    top: spacing.sm,
    zIndex: 10,
    padding: spacing.sm,
  },
  backButtonText: {
    fontSize: 24,
    color: colors.textPrimary,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: spacing.md + 4,
    paddingLeft: spacing.xl + spacing.md,
    paddingRight: spacing.xl + spacing.md,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: typography.fontSize.title,
    fontWeight: typography.fontWeight.bold as "700",
    textAlign: "center",
    color: colors.textPrimary,
    marginLeft: spacing.sm,
  },
  listContent: {
    padding: spacing.md,
  },
  sectionHeader: {
    backgroundColor: colors.gray200,
    padding: spacing.sm + 2,
    borderRadius: spacing.radiusMedium,
    marginBottom: spacing.xs + 4,
    height: 50,
    justifyContent: "center",
  },
  sectionTitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold as "700",
    color: colors.textPrimary,
  },
  foodItem: {
    backgroundColor: colors.card,
    padding: spacing.md,
    borderRadius: spacing.radiusMedium,
    marginBottom: spacing.itemMargin,
    marginLeft: spacing.xs + 4,
    ...shadow.small,
  },
  foodRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  foodName: {
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.medium as "500",
    color: colors.textPrimary,
  },
  foodCategory: {
    fontSize: typography.fontSize.medium,
    color: colors.textSecondary,
    marginTop: spacing.xs,
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

export default AnimalDetailScreen;
