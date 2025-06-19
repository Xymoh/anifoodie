import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";

export type AnimalCategory =
  | "All"
  | "Mammals"
  | "Birds"
  | "Reptiles"
  | "Amphibians"
  | "Fish";

interface AnimalCategoryFilterProps {
  selectedCategory: AnimalCategory;
  onSelectCategory: (category: AnimalCategory) => void;
}

const AnimalCategoryFilter = ({
  selectedCategory,
  onSelectCategory,
}: AnimalCategoryFilterProps) => {
  const categories: AnimalCategory[] = [
    "All",
    "Mammals",
    "Birds",
    "Reptiles",
    "Amphibians",
    "Fish",
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategory,
            ]}
            onPress={() => onSelectCategory(category)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.selectedCategoryText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: "#f0f0f0",
  },
  selectedCategory: {
    backgroundColor: "#3498db",
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#34495e",
  },
  selectedCategoryText: {
    color: "#ffffff",
  },
});

export default AnimalCategoryFilter;
