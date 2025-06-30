import React, { useState, useMemo } from "react";
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

import { getAllAnimals, getTranslatedFoodItems } from "../data/data-utils";
import { RootStackParamList } from "../navigation/types";
import { AnimalName } from "../types";
import { colors, spacing, typography, shadow } from "../styles";
import { useLanguage } from "../hooks/useLanguage";
import { useTranslations } from "../i18n/index";
import { useFavorites } from "../context/FavoritesContext";
import { useDynamicTranslations } from "../hooks/useDynamicTranslations";
import TranslatedText from "../components/TranslatedText";
import SearchBar from "../components/SearchBar";
import AnimalIcon from "../components/AnimalIcon";
import FavoriteButton from "../components/FavoriteButton";
import AnimalCategoryFilter, {
  AnimalCategory,
} from "../components/AnimalCategoryFilter";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Main">;

interface AnimalSection {
  title: AnimalCategory;
  data: AnimalName[];
}

const AnimalsScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const allAnimals = getAllAnimals();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<AnimalCategory>("All");
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  const { isAnimalFavorite, toggleFavoriteAnimal } = useFavorites();
  const { translateAnimal } = useDynamicTranslations();

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

  const getAnimalCategory = (animal: AnimalName): AnimalCategory => {
    const mammals = [
      "Dog",
      "Cat",
      "Rabbit",
      "Guinea Pig",
      "Hamster",
      "Gerbil",
      "Ferret",
      "Mouse",
      "Rat",
      "Chinchilla",
      "Hedgehog",
      "Sugar Glider",
    ];
    const birds = [
      "Parakeet",
      "Cockatiel",
      "Parrot",
      "Lovebird",
      "Canary",
      "Finch",
      "Dove",
    ];
    const reptiles = [
      "Turtle",
      "Tortoise",
      "Bearded Dragon",
      "Leopard Gecko",
      "Iguana",
      "Snake",
    ];
    const amphibians = ["Frog", "Toad", "Axolotl", "Newt", "Salamander"];
    const fish = ["Goldfish", "Betta Fish", "Angelfish"];

    if (mammals.includes(animal)) return "Mammals";
    if (birds.includes(animal)) return "Birds";
    if (reptiles.includes(animal)) return "Reptiles";
    if (amphibians.includes(animal)) return "Amphibians";
    if (fish.includes(animal)) return "Fish";

    return "All";
  };

  const animalCategories: AnimalCategory[] = [
    "Mammals",
    "Birds",
    "Reptiles",
    "Amphibians",
    "Fish",
  ];

  const filteredAnimals = useMemo(() => {
    let filtered = allAnimals;

    const isExactCategoryMatch = searchQuery.trim()
      ? animalCategories.some(
          (category) => category.toLowerCase() === searchQuery.toLowerCase()
        )
      : false;

    const isPartialCategoryMatch = searchQuery.trim()
      ? animalCategories.some((category) =>
          category.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : false;

    if (isExactCategoryMatch) {
      const searchedCategory = animalCategories.find(
        (category) => category.toLowerCase() === searchQuery.toLowerCase()
      );
      filtered = filtered.filter(
        (animal) => getAnimalCategory(animal) === searchedCategory
      );
    } else if (isPartialCategoryMatch && searchQuery.trim().length > 2) {
      const matchingCategories = animalCategories.filter((category) =>
        category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      filtered = filtered.filter((animal) =>
        matchingCategories.includes(getAnimalCategory(animal))
      );
    } else if (searchQuery.trim()) {
      filtered = filtered.filter((animal) => {
        const translatedName = animalTranslationMap.get(animal);

        return (
          animal.toLowerCase().includes(searchQuery.toLowerCase()) ||
          getAnimalCategory(animal)
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          (translatedName &&
            translatedName.toLowerCase().includes(searchQuery.toLowerCase()))
        );
      });
    }

    // Apply category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (animal) => getAnimalCategory(animal) === selectedCategory
      );
    }

    return filtered;
  }, [
    allAnimals,
    searchQuery,
    selectedCategory,
    animalCategories,
    animalTranslationMap,
  ]);

  const groupedAnimals = useMemo(() => {
    const animalsByCategory: Record<AnimalCategory, AnimalName[]> = {
      All: [],
      Mammals: [],
      Birds: [],
      Reptiles: [],
      Amphibians: [],
      Fish: [],
    };

    filteredAnimals.forEach((animal) => {
      const category = getAnimalCategory(animal);
      animalsByCategory[category].push(animal);
    });

    return Object.entries(animalsByCategory)
      .filter(([_, animals]) => animals.length > 0)
      .map(([category, animals]) => ({
        title: category as AnimalCategory,
        data: animals,
      }));
  }, [filteredAnimals]);

  const handleAnimalPress = (animalName: AnimalName) => {
    navigation.navigate("AnimalDetail", { animalName });
  };

  const renderAnimalItem = React.useCallback(
    ({ item }: { item: AnimalName }) => {
      const handleToggleFavorite = (e: boolean) => {
        // prevent event propagation to not trigger navigation
        toggleFavoriteAnimal(item);
      };

      return (
        <TouchableOpacity
          style={styles.animalItem}
          onPress={() => handleAnimalPress(item)}
        >
          <View style={styles.animalRow}>
            <AnimalIcon animal={item} size={24} />
            <Text style={styles.animalName}>{translateAnimal(item)}</Text>
            <View style={styles.favoriteContainer}>
              <FavoriteButton
                isFavorite={isAnimalFavorite(item)}
                onToggle={handleToggleFavorite}
                size={20}
              />
            </View>
          </View>
        </TouchableOpacity>
      );
    },
    [isAnimalFavorite, toggleFavoriteAnimal, translateAnimal]
  );

  const renderSectionHeader = React.useCallback(
    ({ section }: { section: AnimalSection }) => (
      <View style={styles.sectionHeader}>
        <TranslatedText
          style={styles.sectionTitle}
          translationKey={
            section.title.toLowerCase() as
              | "mammals"
              | "birds"
              | "reptiles"
              | "amphibians"
              | "fish"
          }
        />
      </View>
    ),
    []
  );

  const renderSectionFooter = React.useCallback(() => null, []);

  const keyExtractor = React.useCallback(
    (item: AnimalName, index: number) => `${item}-${index}`,
    []
  );

  const getItemLayout = React.useCallback(
    (data: any, index: number) => {
      const ITEM_HEIGHT = 80; // Approximate height including margins
      const HEADER_HEIGHT = 50; // Fixed header height

      // Calculate the offset based on the section structure
      let offset = 0;
      let currentIndex = 0;

      for (const section of groupedAnimals) {
        if (currentIndex + section.data.length > index) {
          // Item is in this section
          offset += HEADER_HEIGHT; // Add header height
          offset += (index - currentIndex) * ITEM_HEIGHT;
          break;
        }
        offset += HEADER_HEIGHT + section.data.length * ITEM_HEIGHT;
        currentIndex += section.data.length;
      }

      return {
        length: ITEM_HEIGHT,
        offset,
        index,
      };
    },
    [groupedAnimals]
  );

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <TranslatedText style={styles.title} translationKey="selectAnAnimal" />
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder={t("searchByAnimalOrCategory")}
      />
      <AnimalCategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <SectionList
        sections={groupedAnimals}
        renderItem={renderAnimalItem}
        renderSectionHeader={renderSectionHeader}
        renderSectionFooter={renderSectionFooter}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        contentContainerStyle={styles.listContent}
        stickySectionHeadersEnabled={true}
        removeClippedSubviews={true}
        maxToRenderPerBatch={15}
        updateCellsBatchingPeriod={50}
        initialNumToRender={20}
        windowSize={15}
        legacyImplementation={false}
        disableVirtualization={false}
        onScrollBeginDrag={() => {}}
        onScrollEndDrag={() => {}}
        scrollEventThrottle={16}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <TranslatedText
              style={styles.emptyText}
              translationKey="noAnimalsFound"
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
  animalItem: {
    backgroundColor: colors.card,
    padding: spacing.md,
    borderRadius: spacing.radiusMedium,
    marginBottom: spacing.itemMargin,
    marginLeft: 8,
    ...shadow.small,
  },
  animalRow: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  animalName: {
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.medium as "500",
    color: colors.textPrimary,
    marginLeft: spacing.sm,
    flex: 1,
    marginRight: spacing.sm,
    minWidth: 0,
  },
  emptyContainer: {
    padding: spacing.md + 4,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontSize: typography.fontSize.regular,
    color: colors.textSecondary,
    textAlign: "center",
  },
  sectionHeader: {
    backgroundColor: colors.gray200,
    padding: spacing.sm + 2,
    borderRadius: spacing.radiusMedium,
    marginBottom: spacing.sm,
    height: 50, // Fixed height to prevent jumping
    justifyContent: "center",
  },
  sectionTitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold as "700",
    color: colors.textPrimary,
  },
  favoriteContainer: {
    flexShrink: 0,
    minWidth: 44,
  },
});

export default AnimalsScreen;
