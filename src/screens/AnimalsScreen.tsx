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
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { getAllAnimals } from "../data/data-utils";
import { RootStackParamList } from "../navigation/types";
import { AnimalName } from "../types";
import { colors, spacing, typography, shadow } from "../styles";
import { useLanguage } from "../hooks/useLanguage";
import { useTranslations } from "../i18n/translations";
import TranslatedText from "../components/TranslatedText";
import SearchBar from "../components/SearchBar";
import AnimalIcon from "../components/AnimalIcon";
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
      filtered = filtered.filter(
        (animal) =>
          animal.toLowerCase().includes(searchQuery.toLowerCase()) ||
          getAnimalCategory(animal)
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (animal) => getAnimalCategory(animal) === selectedCategory
      );
    }

    return filtered;
  }, [allAnimals, searchQuery, selectedCategory, animalCategories]);

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
    ({ item }: { item: AnimalName }) => (
      <TouchableOpacity
        style={styles.animalItem}
        onPress={() => handleAnimalPress(item)}
      >
        <View style={styles.animalRow}>
          <AnimalIcon animal={item} size={24} />
          <Text style={styles.animalName}>{item}</Text>
        </View>
      </TouchableOpacity>
    ),
    []
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

  const keyExtractor = React.useCallback(
    (item: AnimalName, index: number) => `${item}-${index}`,
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

  const insets = useSafeAreaInsets();

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
  },
  animalName: {
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.medium as "500",
    color: colors.textPrimary,
    marginLeft: spacing.sm,
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
  },
  sectionTitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold as "700",
    color: colors.textPrimary,
  },
});

export default AnimalsScreen;
