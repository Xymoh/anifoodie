import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { AnimalName, CompatibilityStatus } from "../types";
import { RootStackParamList } from "../navigation/types";
import { useFavorites } from "../context/FavoritesContext";
import { colors, spacing, typography, shadow } from "../styles";
import { useDynamicTranslations } from "../hooks/useDynamicTranslations";

import AnimalIcon from "./AnimalIcon";
import CompatibilityIndicator from "./CompatibilityIndicator";
import FavoriteButton from "./FavoriteButton";

interface AnimalCardProps {
  animal: AnimalName;
  status: CompatibilityStatus;
}

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "FoodDetail"
>;

const AnimalCard = React.memo(({ animal, status }: AnimalCardProps) => {
  const navigation = useNavigation<NavigationProp>();
  const { isAnimalFavorite, toggleFavoriteAnimal } = useFavorites();
  const { translateAnimal } = useDynamicTranslations();

  const handlePress = () => {
    navigation.navigate("AnimalDetail", { animalName: animal });
  };

  const handleToggleFavorite = (e: boolean) => {
    toggleFavoriteAnimal(animal);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.topRow}>
        <View style={styles.nameContainer}>
          <AnimalIcon animal={animal} size={28} />
          <Text
            style={styles.animalName}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {translateAnimal(animal)}
          </Text>
        </View>
        <View style={styles.rightContainer}>
          <FavoriteButton
            isFavorite={isAnimalFavorite(animal)}
            onToggle={handleToggleFavorite}
            size={20}
          />
          <View style={styles.spacer} />
          <CompatibilityIndicator status={status} />
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
    minWidth: 0,
  },
  rightContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
    flexShrink: 0,
    minWidth: 44,
    maxWidth: 50,
    flex: 0,
  },
  spacer: {
    height: spacing.xs,
  },
  animalName: {
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.semiBold as "600",
    color: colors.textPrimary,
    marginLeft: spacing.sm,
    flex: 1,
    minWidth: 0,
  },
});

export default AnimalCard;
