// External dependencies
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SectionList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

// Internal dependencies
import { useFavorites } from "../hooks/useFavorites";
import { RootStackParamList } from "../navigation/types";
import { parseCSVData } from "../data/data-utils";
import { FoodItem, AnimalName } from "../types";
import { colors, spacing, typography, shadow } from "../styles";

// Components
import AnimalIcon from "../components/AnimalIcon";
import FoodIcon from "../components/FoodIcon";
import LoadingIndicator from "../components/LoadingIndicator";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Main">;

interface Section {
  title: string;
  data: any[];
  type: "animal" | "food";
}

const FavoritesScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { favoriteAnimals, favoriteFoods, isLoading } = useFavorites();
  const allFoods = parseCSVData();

  // Get full food objects for favorite foods
  const favoriteFoodItems = allFoods.filter((food) =>
    favoriteFoods.includes(food.item)
  );

  const sections: Section[] = [
    { title: "Favorite Animals", data: favoriteAnimals, type: "animal" },
    { title: "Favorite Foods", data: favoriteFoodItems, type: "food" },
  ];

  const handleAnimalPress = (animalName: AnimalName) => {
    navigation.navigate("AnimalDetail", { animalName });
  };

  const handleFoodPress = (foodName: string) => {
    navigation.navigate("FoodDetail", { foodName });
  };

  const renderSectionHeader = ({ section }: { section: Section }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{section.title}</Text>
    </View>
  );

  const renderItem = ({ item, section }: { item: any; section: Section }) => {
    if (section.type === "animal") {
      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() => handleAnimalPress(item)}
        >
          <AnimalIcon animal={item} size={28} />
          <Text style={styles.itemName}>{item}</Text>
        </TouchableOpacity>
      );
    } else {
      const foodItem = item as FoodItem;
      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() => handleFoodPress(foodItem.item)}
        >
          <FoodIcon category={foodItem.category} size={28} />
          <View style={styles.foodTextContainer}>
            <Text style={styles.itemName}>{foodItem.item}</Text>
            <Text style={styles.categoryName}>{foodItem.category}</Text>
          </View>
        </TouchableOpacity>
      );
    }
  };

  const renderEmptyList = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>You haven't added any favorites yet.</Text>
      <Text style={styles.emptySubtext}>
        Tap the star icon on any animal or food to add it to your favorites.
      </Text>
    </View>
  );

  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Text style={styles.title}>Your Favorites</Text>

      {isLoading ? (
        <LoadingIndicator message="Loading your favorites..." />
      ) : (
        <SectionList
          sections={sections}
          keyExtractor={(item, index) =>
            `${typeof item === "string" ? item : item.item}-${index}`
          }
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
    backgroundColor: colors.card,
    padding: spacing.md,
    borderRadius: spacing.radiusMedium,
    marginBottom: spacing.itemMargin,
    marginLeft: spacing.xs + 4,
    ...shadow.small,
  },
  itemName: {
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.medium as "500",
    color: colors.textPrimary,
    marginLeft: spacing.sm + 4,
  },
  foodTextContainer: {
    marginLeft: spacing.sm + 4,
  },
  categoryName: {
    fontSize: typography.fontSize.medium,
    color: colors.textSecondary,
    marginTop: spacing.tiny,
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
