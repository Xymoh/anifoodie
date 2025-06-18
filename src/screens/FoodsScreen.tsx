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
import { getFoodCategories, parseCSVData } from "../data/data-utils";
import { RootStackParamList } from "../navigation/types";
import { FoodItem } from "../types";
import SearchBar from "../components/SearchBar";
import FoodIcon from "../components/FoodIcon";
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

  // Get all available food types
  const availableFoodTypes = useMemo(() => {
    const types = new Set<string>();
    allFoods.forEach((food) => types.add(food.type));
    return Array.from(types);
  }, [allFoods]);

  const sections: SectionData[] = useMemo(() => {
    const foodCategories = getFoodCategories();
    const filteredFoods = searchQuery.trim()
      ? allFoods.filter((food) =>
          food.item.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : allFoods;

    // Filter by food type if not "All"
    const typedFoods =
      selectedType !== "All"
        ? filteredFoods.filter((food) => food.type === selectedType)
        : filteredFoods;

    // If we're searching or filtering by type, return a simplified list
    if (searchQuery.trim() || selectedType !== "All") {
      return [
        {
          title: searchQuery.trim() ? "Search Results" : selectedType,
          data: typedFoods,
        },
      ];
    }

    // Otherwise return the categorized list
    return foodCategories
      .map(({ type, categories }) => {
        const sectionItems: SectionData[] = categories.map((category) => {
          const items = allFoods.filter(
            (food) => food.type === type && food.category === category
          );

          return {
            title: type,
            subTitle: category,
            data: items,
          };
        });

        return sectionItems;
      })
      .flat();
  }, [allFoods, searchQuery]);

  const handleFoodPress = (foodName: string) => {
    navigation.navigate("FoodDetail", { foodName });
  };

  const renderSectionHeader = ({ section }: { section: SectionData }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{section.title}</Text>
      {section.subTitle && (
        <Text style={styles.sectionSubtitle}>{section.subTitle}</Text>
      )}
    </View>
  );

  const renderFoodItem = ({ item }: { item: FoodItem }) => (
    <TouchableOpacity
      style={styles.foodItem}
      onPress={() => handleFoodPress(item.item)}
    >
      <View style={styles.foodRow}>
        <FoodIcon category={item.category} size={24} />
        <Text style={styles.foodName}>{item.item}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Food</Text>
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search foods..."
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
        keyExtractor={(item) => item.item}
        contentContainerStyle={styles.listContent}
        stickySectionHeadersEnabled
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No foods found</Text>
          </View>
        }
      />
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
  },
  sectionHeader: {
    backgroundColor: "#ecf0f1",
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  sectionSubtitle: {
    fontSize: 16,
    color: "#7f8c8d",
    marginTop: 4,
  },
  foodItem: {
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
  foodRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  foodName: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2c3e50",
    marginLeft: 12,
  },
  emptyContainer: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#7f8c8d",
    textAlign: "center",
  },
});

export default FoodsScreen;
