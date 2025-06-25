import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  TouchableOpacity,
} from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { RootStackParamList } from "../navigation/types";
import { getAnimalsForFood, getFoodItemByName } from "../data/data-utils";
import { AnimalName, CompatibilityStatus } from "../types";
import { colors, spacing, typography, shadow } from "../styles";

import CompatibilityIndicator from "../components/CompatibilityIndicator";
import FoodIcon from "../components/FoodIcon";
import AnimalCard from "../components/AnimalCard";
import { useLanguage } from "../hooks/useLanguage";
import { useTranslations } from "../i18n/translations";
import { useDynamicTranslations } from "../hooks/useDynamicTranslations";
import TranslatedText from "../components/TranslatedText";

type FoodDetailScreenProps = {
  route: RouteProp<RootStackParamList, "FoodDetail">;
};

interface SectionData {
  title: string;
  data: AnimalName[];
  status: CompatibilityStatus;
}

const FoodDetailScreen = ({ route }: FoodDetailScreenProps) => {
  const { foodName } = route.params;
  const navigation = useNavigation();
  const animalData = getAnimalsForFood(foodName);
  const foodItem = getFoodItemByName(foodName);
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  const { translateFood } = useDynamicTranslations();

  const sections: SectionData[] = [
    {
      title: t("animalsThatCanEat"),
      data: animalData["allowed"],
      status: "allowed",
    },
    {
      title: t("animalsThatCanEatSmallQuantities"),
      data: [
        ...animalData["acceptable in small quantities"],
        ...animalData["acceptable in small quantities (boiled)"],
      ],
      status: "acceptable in small quantities",
    },
    {
      title: t("animalsThatCannotEat"),
      data: animalData["not allowed"],
      status: "not allowed",
    },
  ];

  const renderSectionHeader = React.useCallback(
    ({ section }: { section: SectionData }) => (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{section.title}</Text>
        <CompatibilityIndicator status={section.status} />
      </View>
    ),
    []
  );

  const renderAnimalItem = React.useCallback(
    ({ item, section }: { item: AnimalName; section: SectionData }) => (
      <AnimalCard animal={item} status={section.status} />
    ),
    []
  );

  const keyExtractor = React.useCallback(
    (item: AnimalName, index: number) => `animal-${item}-${index}`,
    []
  );

  const getItemLayout = React.useCallback((data: any, index: number) => {
    const ITEM_HEIGHT = 120; // Approximate height of AnimalCard including margins
    return {
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    };
  }, []);

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
          <FoodIcon
            category={foodItem?.category || foodName}
            itemKey={foodItem?.icon}
            size={36}
          />
          <Text style={styles.title}>{translateFood(foodName)}</Text>
        </View>
      </View>
      <SectionList
        sections={sections}
        renderItem={renderAnimalItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.listContent}
        stickySectionHeadersEnabled
        renderSectionFooter={({ section }) =>
          section.data.length === 0 ? (
            <View style={styles.emptySection}>
              <TranslatedText
                style={styles.emptyText}
                translationKey="noAnimalsInCategory"
              />
            </View>
          ) : null
        }
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
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.bold as "700",
    color: colors.textPrimary,
  },
  animalItem: {
    backgroundColor: colors.card,
    padding: spacing.md,
    borderRadius: spacing.radiusMedium,
    marginBottom: spacing.itemMargin,
    marginLeft: spacing.xs + 4,
    ...shadow.small,
  },
  animalRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  animalName: {
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.medium as "500",
    color: colors.textPrimary,
    marginLeft: spacing.sm + 4,
  },
  emptySection: {
    padding: spacing.md,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.md + 4,
  },
  emptyText: {
    fontSize: typography.fontSize.regular,
    color: colors.textSecondary,
    fontStyle: "italic",
  },
});

export default FoodDetailScreen;
