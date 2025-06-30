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
import {
  getAnimalsForFood,
  getFoodItemByName,
  getTranslatedFoodItems,
} from "../data/data-utils";
import { AnimalName, CompatibilityStatus } from "../types";
import { colors, spacing, typography, shadow } from "../styles";

import CompatibilityIndicator from "../components/CompatibilityIndicator";
import FoodIcon from "../components/FoodIcon";
import AnimalCard from "../components/AnimalCard";
import SearchBar from "../components/SearchBar";
import { useLanguage } from "../hooks/useLanguage";
import { useTranslations } from "../i18n/index";
import { useDynamicTranslations } from "../hooks/useDynamicTranslations";
import TranslatedText from "../components/TranslatedText";

type FoodDetailScreenProps = {
  route: RouteProp<RootStackParamList, "FoodDetail">;
};

interface SectionData {
  title: string;
  data: AnimalName[];
  status: CompatibilityStatus;
}

const FoodDetailScreen = ({ route }: FoodDetailScreenProps) => {
  const { foodName } = route.params;
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const animalData = getAnimalsForFood(foodName);
  const foodItem = getFoodItemByName(foodName);
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  const { translateFood } = useDynamicTranslations();

  // Cache translated foods outside of the search logic
  const translatedFoods = useMemo(
    () => getTranslatedFoodItems(language),
    [language]
  );

  // Create animal translation map once
  const animalTranslationMap = useMemo(() => {
    const map = new Map<string, string>();
    translatedFoods.forEach((food) => {
      Object.entries(food.translatedAnimalNames || {}).forEach(
        ([originalAnimal, translatedAnimal]) => {
          if (translatedAnimal && translatedAnimal !== originalAnimal) {
            map.set(originalAnimal, translatedAnimal);
          }
        }
      );
    });
    return map;
  }, [translatedFoods]);

  const sections: SectionData[] = useMemo(() => {
    let filteredAllowed = [
      ...animalData["allowed"],
      ...animalData["allowed (boiled)"],
    ];
    let filteredAcceptable = [
      ...animalData["acceptable in small quantities"],
      ...animalData["acceptable in small quantities (boiled)"],
      ...animalData["acceptable in small quantities (ripe only)"],
      ...animalData["acceptable in small quantities (cooked)"],
    ];
    let filteredNotAllowed = animalData["not allowed"];

    // Apply search filter if query exists
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();

      const filterAnimal = (animal: AnimalName) => {
        const translatedName = animalTranslationMap.get(animal);

        return (
          animal.toLowerCase().includes(query) ||
          (translatedName && translatedName.toLowerCase().includes(query))
        );
      };

      filteredAllowed = filteredAllowed.filter(filterAnimal);
      filteredAcceptable = filteredAcceptable.filter(filterAnimal);
      filteredNotAllowed = filteredNotAllowed.filter(filterAnimal);
    }

    return [
      {
        title: t("animalsThatCanEat"),
        data: filteredAllowed,
        status: "allowed",
      },
      {
        title: t("animalsThatCanEatSmallQuantities"),
        data: filteredAcceptable,
        status: "acceptable in small quantities",
      },
      {
        title: t("animalsThatCannotEat"),
        data: filteredNotAllowed,
        status: "not allowed",
      },
    ];
  }, [animalData, searchQuery, t, animalTranslationMap]);

  const renderSectionHeader = React.useCallback(
    ({ section }: { section: SectionData }) => (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{section.title}</Text>
        <CompatibilityIndicator status={section.status} />
      </View>
    ),
    []
  );

  const renderAnimalItem = React.useCallback(
    ({ item, section }: { item: AnimalName; section: SectionData }) => (
      <AnimalCard animal={item} status={section.status} />
    ),
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
            <FoodIcon
              category={foodItem?.category || foodName}
              itemKey={foodItem?.icon}
              size={32}
            />
            <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
              {translateFood(foodName)}
            </Text>
          </View>
        </View>
      </View>
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder={t("searchByAnimalOrCategory")}
      />
      <SectionList
        sections={sections}
        renderItem={renderAnimalItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.listContent}
        stickySectionHeadersEnabled={false}
        renderSectionFooter={({ section }) =>
          section.data.length === 0 ? (
            <View style={styles.emptySection}>
              <TranslatedText
                style={styles.emptyText}
                translationKey="noAnimalsInCategory"
              />
            </View>
          ) : null
        }
        ListEmptyComponent={
          searchQuery.trim() ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>{t("noAnimalsFound")}</Text>
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
    flexWrap: "wrap",
  },
  listContent: {
    padding: spacing.md,
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
  animalItem: {
    backgroundColor: colors.card,
    padding: spacing.md,
    borderRadius: spacing.radiusMedium,
    marginBottom: spacing.itemMargin,
    marginLeft: spacing.xs + 4,
    ...shadow.small,
  },
  animalRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  animalName: {
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.medium as "500",
    color: colors.textPrimary,
    marginLeft: spacing.sm + 4,
  },
  emptySection: {
    padding: spacing.md,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.md + 4,
  },
  emptyText: {
    fontSize: typography.fontSize.regular,
    color: colors.textSecondary,
    fontStyle: "italic",
  },
  emptyContainer: {
    padding: spacing.lg,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FoodDetailScreen;
