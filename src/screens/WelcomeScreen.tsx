// External dependencies
import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Internal dependencies
import { RootStackParamList } from "../navigation/types";
import { colors, spacing, typography, shadow } from "../styles";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Welcome">;

const WelcomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleGetStarted = () => {
    navigation.navigate("Main");
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome to AniFood</Text>
          <Text style={styles.subtitle}>
            Find out what your pets can and cannot eat
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How it works</Text>
          <Text style={styles.text}>
            AniFood helps you discover which foods are safe for your pets and
            which are potentially harmful.
          </Text>
        </View>

        <View style={styles.featureSection}>
          <View style={styles.feature}>
            <Text style={styles.emoji}>🐶</Text>
            <Text style={styles.featureTitle}>Search by Animal</Text>
            <Text style={styles.featureText}>
              Select an animal to see what foods they can eat, should eat in
              moderation, or should avoid completely.
            </Text>
          </View>

          <View style={styles.feature}>
            <Text style={styles.emoji}>🍎</Text>
            <Text style={styles.featureTitle}>Search by Food</Text>
            <Text style={styles.featureText}>
              Select a food item to discover which animals can safely consume it
              and which should avoid it.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Color Key</Text>
          <View style={styles.colorKey}>
            <View
              style={[styles.colorIndicator, { backgroundColor: "#2ecc71" }]}
            />
            <Text style={styles.colorKeyText}>Safe to eat</Text>
          </View>
          <View style={styles.colorKey}>
            <View
              style={[styles.colorIndicator, { backgroundColor: "#f39c12" }]}
            />
            <Text style={styles.colorKeyText}>
              Acceptable in small quantities
            </Text>
          </View>
          <View style={styles.colorKey}>
            <View
              style={[styles.colorIndicator, { backgroundColor: "#e74c3c" }]}
            />
            <Text style={styles.colorKeyText}>Not allowed - unsafe</Text>
          </View>
        </View>

        <View style={styles.disclaimer}>
          <Text style={styles.disclaimerTitle}>Disclaimer</Text>
          <Text style={styles.disclaimerText}>
            The information provided in this app is for general informational
            purposes only. Always consult with a veterinarian before introducing
            new foods to your pet's diet.
          </Text>
        </View>
      </ScrollView>

      <Pressable style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>
    </View>
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
  },
  buttonText: {
    color: colors.white,
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.bold as "700",
  },
});

export default WelcomeScreen;
