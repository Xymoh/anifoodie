import React from "react";
import { StyleSheet, TouchableOpacity, View, ScrollView } from "react-native";

import { colors, spacing, typography } from "../styles";
import { useLanguage } from "../hooks/useLanguage";
import { useTranslations } from "../i18n/translations";
import TranslatedText from "./TranslatedText";

export type FoodType =
  | "All"
  | "Vegetable"
  | "Fruit"
  | "Grain"
  | "Protein"
  | "Dairy"
  | "Meat"
  | "Nut";

interface FoodTypeFilterProps {
  selectedType: FoodType;
  onSelectType: (type: FoodType) => void;
  availableTypes: string[];
}

const FoodTypeFilter = ({
  selectedType,
  onSelectType,
  availableTypes,
}: FoodTypeFilterProps) => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);

  // Convert all available food types to proper format for the filter
  const types: FoodType[] = [
    "All",
    ...availableTypes.filter((type) =>
      [
        "Vegetable",
        "Fruit",
        "Grain",
        "Protein",
        "Dairy",
        "Meat",
        "Nut",
      ].includes(type)
    ),
  ] as FoodType[];

  // Helper function to get translation key for food type
  const getFoodTypeTranslationKey = (type: FoodType): string => {
    if (type === "All") return "allFoods";
    if (type === "Fruit") return "fruits";
    if (type === "Vegetable") return "vegetables";
    if (type === "Dairy") return "dairy";
    if (type === "Grain") return "grains";
    if (type === "Meat") return "meat";
    if (type === "Nut") return "nuts";
    return type.toLowerCase(); // Fallback
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {types.map((type) => (
          <TouchableOpacity
            key={type}
            style={[
              styles.typeButton,
              selectedType === type && styles.selectedType,
            ]}
            onPress={() => onSelectType(type)}
          >
            <TranslatedText
              style={[
                styles.typeText,
                selectedType === type && styles.selectedTypeText,
              ]}
              translationKey={getFoodTypeTranslationKey(type) as any}
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
  typeButton: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: spacing.radiusRound,
    marginRight: spacing.sm,
    backgroundColor: colors.gray200,
  },
  selectedType: {
    backgroundColor: colors.primary,
  },
  typeText: {
    fontSize: typography.fontSize.medium,
    fontWeight: typography.fontWeight.medium as "500",
    color: colors.textPrimary,
  },
  selectedTypeText: {
    color: colors.white,
  },
});

export default FoodTypeFilter;
