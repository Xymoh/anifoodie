import React from "react";
import { StyleSheet, TouchableOpacity, View, ScrollView } from "react-native";

import { colors, spacing, typography } from "../styles";
import TranslatedText from "./TranslatedText";

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

  // Map category to translation key
  const getCategoryTranslationKey = (category: AnimalCategory) => {
    if (category === "All") return "allAnimals";
    return category.toLowerCase() as
      | "mammals"
      | "birds"
      | "reptiles"
      | "amphibians"
      | "fish";
  };

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
            <TranslatedText
              style={[
                styles.categoryText,
                selectedCategory === category && styles.selectedCategoryText,
              ]}
              translationKey={getCategoryTranslationKey(category)}
            />
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
