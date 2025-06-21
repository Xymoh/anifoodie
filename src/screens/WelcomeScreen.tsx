import React from "react";
import { View, StyleSheet, ScrollView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

import { RootStackParamList } from "../navigation/types";
import { colors, spacing, typography, shadow } from "../styles";
import { useOnboarding } from "../hooks/useOnboarding";
import { useLanguage } from "../hooks/useLanguage";
import { useTranslations } from "../i18n/translations";
import TranslatedText from "../components/TranslatedText";
import { Text } from "react-native";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Welcome">;

const WelcomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { setWelcomeScreenAsViewed } = useOnboarding();
  const { language } = useLanguage();
  const { t } = useTranslations(language);

  const handleUnderstand = () => {
    setWelcomeScreenAsViewed();
    navigation.navigate("Main");
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TranslatedText style={styles.title} translationKey="welcomeTitle" />
          <TranslatedText
            style={styles.subtitle}
            translationKey="welcomeDescription"
          />
        </View>

        <View style={styles.section}>
          <TranslatedText
            style={styles.sectionTitle}
            translationKey="howItWorks"
          />
          <TranslatedText
            style={styles.text}
            translationKey="welcomeExplanation"
          />
        </View>

        <View style={styles.featureSection}>
          <View style={styles.feature}>
            <Text style={styles.emoji}>🐶</Text>
            <TranslatedText
              style={styles.featureTitle}
              translationKey="searchByAnimal"
            />
            <TranslatedText
              style={styles.featureText}
              translationKey="searchByAnimalDescription"
            />
          </View>

          <View style={styles.feature}>
            <Text style={styles.emoji}>🍎</Text>
            <TranslatedText
              style={styles.featureTitle}
              translationKey="searchByFood"
            />
            <TranslatedText
              style={styles.featureText}
              translationKey="searchByFoodDescription"
            />
          </View>
        </View>

        <View style={styles.section}>
          <TranslatedText
            style={styles.sectionTitle}
            translationKey="colorKey"
          />
          <View style={styles.colorKey}>
            <View
              style={[
                styles.colorIndicator,
                { backgroundColor: colors.success },
              ]}
            />
            <TranslatedText
              style={styles.colorKeyText}
              translationKey="safeToEat"
            />
          </View>
          <View style={styles.colorKey}>
            <View
              style={[
                styles.colorIndicator,
                { backgroundColor: colors.statusAcceptable },
              ]}
            />
            <TranslatedText
              style={styles.colorKeyText}
              translationKey="acceptableInSmallQuantities"
            />
          </View>
          <View style={styles.colorKey}>
            <View
              style={[
                styles.colorIndicator,
                { backgroundColor: colors.statusNotAllowed },
              ]}
            />
            <TranslatedText
              style={styles.colorKeyText}
              translationKey="notAllowedUnsafe"
            />
          </View>
        </View>

        <View style={styles.disclaimer}>
          <TranslatedText
            style={styles.disclaimerTitle}
            translationKey="disclaimer"
          />
          <TranslatedText
            style={styles.disclaimerText}
            translationKey="disclaimerText"
          />
        </View>
      </ScrollView>

      <Pressable style={styles.button} onPress={handleUnderstand}>
        <TranslatedText
          style={styles.buttonText}
          translationKey="iUnderstand"
        />
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    padding: spacing.md,
  },
  header: {
    alignItems: "center",
    marginBottom: spacing.lg + 6,
    marginTop: spacing.md,
  },
  title: {
    fontSize: typography.fontSize.huge,
    fontWeight: typography.fontWeight.bold as "700",
    color: colors.textPrimary,
    marginBottom: spacing.sm + 2,
  },
  subtitle: {
    fontSize: typography.fontSize.xl,
    color: colors.textSecondary,
    textAlign: "center",
  },
  section: {
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold as "700",
    color: colors.textPrimary,
    marginBottom: spacing.sm + 2,
  },
  text: {
    fontSize: typography.fontSize.regular,
    color: colors.textPrimary,
    lineHeight: typography.lineHeight.normal * typography.fontSize.regular,
  },
  featureSection: {
    flexDirection: "column",
    marginBottom: spacing.lg,
  },
  feature: {
    backgroundColor: colors.card,
    borderRadius: spacing.radiusMedium,
    padding: spacing.md - 1,
    marginBottom: spacing.md - 1,
    ...shadow.medium,
  },
  emoji: {
    fontSize: typography.fontSize.huge + 8,
    marginBottom: spacing.sm + 2,
  },
  featureTitle: {
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.bold as "700",
    color: colors.textPrimary,
    marginBottom: spacing.xs + 1,
  },
  featureText: {
    fontSize: typography.fontSize.medium,
    color: colors.textPrimary,
    lineHeight: typography.lineHeight.normal * typography.fontSize.medium,
  },
  colorKey: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.sm + 2,
  },
  colorIndicator: {
    width: spacing.md + 4,
    height: spacing.md + 4,
    borderRadius: spacing.radiusSmall,
    marginRight: spacing.sm + 2,
  },
  colorKeyText: {
    fontSize: typography.fontSize.regular,
    color: colors.textPrimary,
  },
  disclaimer: {
    backgroundColor: colors.gray200,
    padding: spacing.md - 1,
    borderRadius: spacing.radiusMedium,
    marginBottom: spacing.xl + 28,
  },
  disclaimerTitle: {
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.bold as "700",
    color: colors.textPrimary,
    marginBottom: spacing.xs + 4,
  },
  disclaimerText: {
    fontSize: typography.fontSize.medium,
    color: colors.textPrimary,
    lineHeight: typography.lineHeight.normal * typography.fontSize.medium,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md - 1,
    borderRadius: spacing.radiusMedium,
    marginHorizontal: spacing.md,
    marginBottom: spacing.lg + 6,
    alignItems: "center",
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: colors.white,
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.bold as "700",
  },
});

export default WelcomeScreen;
