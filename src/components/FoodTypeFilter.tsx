import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";

export type FoodType =
  | "All"
  | "Vegetable"
  | "Fruit"
  | "Grain"
  | "Protein"
  | "Dairy";

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
      ["Vegetable", "Fruit", "Grain", "Protein", "Dairy"].includes(type)
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
    marginVertical: 8,
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  typeButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: "#f0f0f0",
  },
  selectedType: {
    backgroundColor: "#3498db",
  },
  typeText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#34495e",
  },
  selectedTypeText: {
    color: "#ffffff",
  },
});

export default FoodTypeFilter;
