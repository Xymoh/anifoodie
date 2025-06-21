import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  TouchableOpacity,
} from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { RootStackParamList } from "../navigation/types";
import { getFoodsForAnimal } from "../data/data-utils";
import { FoodItem } from "../types";
import { colors, spacing, typography, shadow } from "../styles";

import CompatibilityIndicator from "../components/CompatibilityIndicator";
import AnimalIcon from "../components/AnimalIcon";
import FoodCard from "../components/FoodCard";
import { useLanguage } from "../hooks/useLanguage";
import { useTranslations } from "../i18n/translations";
import { useDynamicTranslations } from "../hooks/useDynamicTranslations";
import TranslatedText from "../components/TranslatedText";

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
  const navigation = useNavigation();
  const foodData = getFoodsForAnimal(animalName);
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  const { translateAnimal } = useDynamicTranslations();

  const sections: SectionData[] = [
    { title: t("allowedFoods"), data: foodData.allowed, status: "allowed" },
    {
      title: t("acceptableFoods"),
      data: foodData.acceptable,
      status: "acceptable in small quantities",
    },
    {
      title: t("notAllowedFoods"),
      data: foodData.notAllowed,
      status: "not allowed",
    },
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

  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <View style={styles.header}>
          <AnimalIcon animal={animalName} size={32} />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.title}>{translateAnimal(animalName)} </Text>
          </View>
        </View>
      </View>
      <SectionList
        sections={sections}
        renderItem={renderFoodItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item) => item.item}
        contentContainerStyle={styles.listContent}
        stickySectionHeadersEnabled
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerContainer: {
    position: "relative",
    paddingHorizontal: spacing.md,
    marginTop: spacing.md,
  },
  backButton: {
    position: "absolute",
    left: spacing.md,
    top: spacing.sm,
    zIndex: 10,
    padding: spacing.sm,
  },
  backButtonText: {
    fontSize: 24,
    color: colors.textPrimary,
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
