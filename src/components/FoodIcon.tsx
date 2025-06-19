// External dependencies
import React from "react";
import { Text, StyleSheet } from "react-native";

// Internal dependencies
import { spacing } from "../styles";

interface FoodIconProps {
  category: string;
  size?: number;
}

const FoodIcon = ({ category, size = 24 }: FoodIconProps) => {
  const getIconForCategory = (): string => {
    const lowerCategory = category.toLowerCase();

    if (lowerCategory.includes("leafy green")) return "🥬";
    if (lowerCategory.includes("root")) return "🥕";
    if (lowerCategory.includes("cruciferous")) return "🥦";
    if (lowerCategory.includes("allium")) return "🧅";
    if (lowerCategory.includes("squash") || lowerCategory.includes("gourd"))
      return "🎃";
    if (lowerCategory.includes("legume")) return "🫘";
    if (lowerCategory.includes("fruit")) return "🍎";
    if (lowerCategory.includes("berry")) return "🍓";
    if (lowerCategory.includes("citrus")) return "🍊";
    if (lowerCategory.includes("melon")) return "🍈";
    if (lowerCategory.includes("tropical")) return "🍍";
    if (lowerCategory.includes("nut")) return "🥜";
    if (lowerCategory.includes("seed")) return "🌱";
    if (lowerCategory.includes("grain")) return "🌾";
    if (lowerCategory.includes("dairy")) return "🥛";
    if (lowerCategory.includes("meat")) return "🥩";
    if (lowerCategory.includes("fish")) return "🐟";
    if (lowerCategory.includes("egg")) return "🥚";

    // Default icon for other categories
    return "🍽️";
  };

  return (
    <Text style={[styles.icon, { fontSize: size }]}>
      {getIconForCategory()}
    </Text>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: spacing.sm,
  },
});

export default FoodIcon;
