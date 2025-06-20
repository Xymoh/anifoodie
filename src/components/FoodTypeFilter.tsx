import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { colors, spacing, typography } from "../styles";

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
            <Text
              style={[
                styles.typeText,
                selectedType === type && styles.selectedTypeText,
              ]}
            >
              {type}
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
