import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { colors, spacing, typography } from "../styles";

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
    marginVertical: spacing.sm,
  },
  scrollContent: {
    paddingHorizontal: spacing.md,
  },
  categoryButton: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: spacing.radiusRound,
    marginRight: spacing.sm,
    backgroundColor: colors.gray200,
  },
  selectedCategory: {
    backgroundColor: colors.primary,
  },
  categoryText: {
    fontSize: typography.fontSize.medium,
    fontWeight: typography.fontWeight.medium as "500",
    color: colors.textPrimary,
  },
  selectedCategoryText: {
    color: colors.white,
  },
});

export default AnimalCategoryFilter;
