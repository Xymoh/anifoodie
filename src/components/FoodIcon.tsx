import React from "react";
import { Text, StyleSheet, View } from "react-native";

import { colors } from "../styles";

interface FoodIconProps {
  category: string;
  size?: number;
  tintColor?: string;
  noBackground?: boolean;
}

const FoodIcon = ({
  category,
  size = 24,
  tintColor,
  noBackground = false,
}: FoodIconProps) => {
  const getBackgroundColor = (): string => {
    const lowerCategory = category.toLowerCase();

    if (
      lowerCategory.includes("fruit") ||
      lowerCategory.includes("berry") ||
      lowerCategory.includes("citrus") ||
      lowerCategory.includes("melon") ||
      lowerCategory.includes("tropical")
    ) {
      return `${colors.primary}44`;
    }

    if (
      lowerCategory.includes("vegetable") ||
      lowerCategory.includes("leafy green") ||
      lowerCategory.includes("root") ||
      lowerCategory.includes("cruciferous") ||
      lowerCategory.includes("allium") ||
      lowerCategory.includes("squash") ||
      lowerCategory.includes("gourd")
    ) {
      return `${colors.parrotGreen}44`;
    }

    if (
      lowerCategory.includes("nut") ||
      lowerCategory.includes("seed") ||
      lowerCategory.includes("grain") ||
      lowerCategory.includes("legume")
    ) {
      return `${colors.dogBrown}44`;
    }

    if (lowerCategory.includes("dairy") || lowerCategory.includes("egg")) {
      return `${colors.secondary}44`;
    }

    if (lowerCategory.includes("meat") || lowerCategory.includes("fish")) {
      return `${colors.rabbitPink}44`;
    }

    return `${colors.gray500}44`;
  };

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
    <View
      style={[
        styles.container,
        {
          width: size + 24,
          height: size + 24,
          backgroundColor: noBackground ? "transparent" : getBackgroundColor(),
          borderRadius: (size + 24) / 2,
          borderWidth: noBackground ? 0 : 2,
        },
      ]}
    >
      <Text style={[styles.icon, { fontSize: size, color: tintColor }]}>
        {getIconForCategory()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "rgba(255,255,255,0.15)",
  },
  icon: {
    marginRight: 0,
  },
});

export default FoodIcon;
