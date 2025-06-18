// External dependencies
import React from "react";
import { StyleSheet, Text, View, SectionList } from "react-native";
import { RouteProp } from "@react-navigation/native";

// Internal dependencies
import { RootStackParamList } from "../navigation/types";
import { getFoodsForAnimal } from "../data/data-utils";
import { FoodItem } from "../types";
import { colors, spacing, typography, shadow } from "../styles";

// Components
import CompatibilityIndicator from "../components/CompatibilityIndicator";
import FoodIcon from "../components/FoodIcon";
import AnimalIcon from "../components/AnimalIcon";
import FoodCard from "../components/FoodCard";

type AnimalDetailScreenProps = {
  route: RouteProp<RootStackParamList, "AnimalDetail">;
};

interface SectionData {
  title: string;
  data: FoodItem[];
  status: string;
}

const AnimalDetailScreen = ({ route }: AnimalDetailScreenProps) => {
  const { animalName } = route.params;
  const foodData = getFoodsForAnimal(animalName);

  const sections: SectionData[] = [
    { title: "Allowed Foods", data: foodData.allowed, status: "allowed" },
    {
      title: "Acceptable in Small Quantities",
      data: foodData.acceptable,
      status: "acceptable in small quantities",
    },
    { title: "Not Allowed", data: foodData.notAllowed, status: "not allowed" },
  ];

  const renderSectionHeader = ({ section }: { section: SectionData }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{section.title}</Text>
      <CompatibilityIndicator status={section.status} />
    </View>
  );

  const renderFoodItem = ({ item }: { item: FoodItem }) => (
    <FoodCard food={item} animalName={animalName} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AnimalIcon animal={animalName} size={32} />
        <Text style={styles.title}>{animalName} Can Eat</Text>
      </View>
      <SectionList
        sections={sections}
        renderItem={renderFoodItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item) => item.item}
        contentContainerStyle={styles.listContent}
        stickySectionHeadersEnabled
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: spacing.md + 4,
  },
  title: {
    fontSize: typography.fontSize.title,
    fontWeight: typography.fontWeight.bold as "700",
    textAlign: "center",
    color: colors.textPrimary,
    marginLeft: spacing.sm + 2,
  },
  listContent: {
    padding: spacing.md,
  },
  sectionHeader: {
    backgroundColor: colors.gray200,
    padding: spacing.sm + 2,
    borderRadius: spacing.radiusMedium,
    marginBottom: spacing.xs + 4,
  },
  sectionTitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold as "700",
    color: colors.textPrimary,
  },
  foodItem: {
    backgroundColor: colors.card,
    padding: spacing.md,
    borderRadius: spacing.radiusMedium,
    marginBottom: spacing.itemMargin,
    marginLeft: spacing.xs + 4,
    ...shadow.small,
  },
  foodRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  foodName: {
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.medium as "500",
    color: colors.textPrimary,
  },
  foodCategory: {
    fontSize: typography.fontSize.medium,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
});

export default AnimalDetailScreen;
