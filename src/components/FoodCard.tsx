import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { FoodItem } from "../types";
import { RootStackParamList } from "../navigation/types";
import { useFavorites } from "../context/FavoritesContext";
import { colors, spacing, typography, shadow } from "../styles";
import { getSimplifiedFoodName, getDisplayCategory } from "../data/data-utils";

import FoodIcon from "./FoodIcon";
import CompatibilityIndicator from "./CompatibilityIndicator";
import FavoriteButton from "./FavoriteButton";

interface FoodCardProps {
  food: FoodItem;
  animalName: string;
}

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "AnimalDetail"
>;

const FoodCard = React.memo(({ food, animalName }: FoodCardProps) => {
  const navigation = useNavigation<NavigationProp>();
  const { isFoodFavorite, toggleFavoriteFood } = useFavorites();

  const handlePress = () => {
    navigation.navigate("FoodDetail", { foodName: food.item });
  };

  const handleToggleFavorite = (e: boolean) => {
    // Stop event propagation to prevent card navigation
    toggleFavoriteFood(food);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.topRow}>
        <View style={styles.nameContainer}>
          <FoodIcon category={food.category} itemKey={food.icon} size={28} />
          <View style={styles.textContainer}>
            <Text style={styles.foodName}>{getSimplifiedFoodName(food)}</Text>
            <Text style={styles.categoryName}>{getDisplayCategory(food)}</Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <FavoriteButton
            isFavorite={isFoodFavorite(food)}
            onToggle={handleToggleFavorite}
            size={20}
          />
          <View style={styles.spacer} />
          <CompatibilityIndicator status={food.compatibility[animalName]} />
        </View>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    borderRadius: spacing.radiusLarge,
    padding: spacing.md,
    marginBottom: spacing.itemMargin,
    ...shadow.medium,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  rightContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  spacer: {
    height: spacing.xs,
  },
  textContainer: {
    marginLeft: spacing.sm,
    flex: 1,
  },
  foodName: {
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.semiBold as "600",
    color: colors.textPrimary,
  },
  categoryName: {
    fontSize: typography.fontSize.medium,
    color: colors.textSecondary,
    marginTop: spacing.tiny,
  },
});

export default FoodCard;
