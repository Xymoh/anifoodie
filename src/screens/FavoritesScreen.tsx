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
import { useFavorites } from "../hooks/useFavorites";
import { RootStackParamList } from "../navigation/types";
import AnimalIcon from "../components/AnimalIcon";
import FoodIcon from "../components/FoodIcon";
import LoadingIndicator from "../components/LoadingIndicator";
import { parseCSVData } from "../data/data-utils";
import { FoodItem, AnimalName } from "../types";

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

  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#2c3e50",
  },
  listContent: {
    padding: 16,
    flexGrow: 1,
  },
  sectionHeader: {
    backgroundColor: "#ecf0f1",
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    marginLeft: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2c3e50",
    marginLeft: 12,
  },
  foodTextContainer: {
    marginLeft: 12,
  },
  categoryName: {
    fontSize: 14,
    color: "#7f8c8d",
    marginTop: 2,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#7f8c8d",
    marginBottom: 10,
    textAlign: "center",
  },
  emptySubtext: {
    fontSize: 16,
    color: "#95a5a6",
    textAlign: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
