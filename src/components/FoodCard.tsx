import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { FoodItem } from "../types";
import FoodIcon from "./FoodIcon";
import CompatibilityIndicator from "./CompatibilityIndicator";
import FavoriteButton from "./FavoriteButton";
import { RootStackParamList } from "../navigation/types";
import { useFavorites } from "../hooks/useFavorites";

interface FoodCardProps {
  food: FoodItem;
  animalName: string;
}

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "AnimalDetail"
>;

const FoodCard = ({ food, animalName }: FoodCardProps) => {
  const navigation = useNavigation<NavigationProp>();
  const { isFoodFavorite, toggleFavoriteFood } = useFavorites();

  const handlePress = () => {
    navigation.navigate("FoodDetail", { foodName: food.item });
  };

  const handleToggleFavorite = () => {
    toggleFavoriteFood(food.item);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.topRow}>
        <View style={styles.nameContainer}>
          <FoodIcon category={food.category} size={28} />
          <View style={styles.textContainer}>
            <Text style={styles.foodName}>{food.item}</Text>
            <Text style={styles.categoryName}>{food.category}</Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <FavoriteButton
            isFavorite={isFoodFavorite(food.item)}
            onToggle={handleToggleFavorite}
            size={20}
          />
          <View style={styles.spacer} />
          <CompatibilityIndicator status={food.compatibility[animalName]} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
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
    height: 8,
  },
  textContainer: {
    marginLeft: 12,
    flex: 1,
  },
  foodName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2c3e50",
  },
  categoryName: {
    fontSize: 14,
    color: "#7f8c8d",
    marginTop: 2,
  },
});

export default FoodCard;
