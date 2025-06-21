import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";

import { useLanguage, Language } from "../hooks/useLanguage";
import { TranslationKey } from "../i18n/translations";
import { colors, spacing, typography } from "../styles";
import TranslatedText from "../components/TranslatedText";

const SettingsScreen = () => {
  const { language, setLanguage } = useLanguage();

  // App version from package.json
  const appVersion = "1.0.0";

  const handleLanguageChange = async (newLanguage: Language) => {
    await setLanguage(newLanguage);
  };

  const languages: { translationKey: TranslationKey; value: Language }[] = [
    { translationKey: "english", value: "en" },
    { translationKey: "spanish", value: "es" },
    { translationKey: "french", value: "fr" },
    { translationKey: "german", value: "de" },
    { translationKey: "italian", value: "it" },
    { translationKey: "russian", value: "ru" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <TranslatedText
          style={styles.headerTitle}
          translationKey="settingsTitle"
        />
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.section}>
          <TranslatedText
            style={styles.sectionTitle}
            translationKey="languagePreference"
          />
          <View style={styles.optionsContainer}>
            {languages.map((option) => (
              <TouchableOpacity
                key={option.value}
                style={[
                  styles.languageOption,
                  language === option.value && styles.selectedLanguage,
                ]}
                onPress={() => handleLanguageChange(option.value)}
              >
                <TranslatedText
                  style={[
                    styles.languageText,
                    language === option.value && styles.selectedLanguageText,
                  ]}
                  translationKey={option.translationKey}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <TranslatedText style={styles.sectionTitle} translationKey="about" />
          <View style={styles.aboutContainer}>
            <Text style={styles.aboutText}>AniFoodie</Text>
            <View style={styles.versionContainer}>
              <TranslatedText
                style={styles.versionText}
                translationKey="version"
              />
              <Text style={styles.versionText}>: {appVersion}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.containerPadding,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray300,
    backgroundColor: colors.gray200,
  },
  headerTitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold as "700",
    color: colors.textPrimary,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    padding: spacing.containerPadding,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray300,
  },
  sectionTitle: {
    fontSize: typography.fontSize.regular,
    fontWeight: typography.fontWeight.semiBold as "600",
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm + 2,
  },
  languageOption: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: spacing.radiusRound,
    borderWidth: 1,
    borderColor: colors.gray400,
    backgroundColor: colors.gray300,
  },
  selectedLanguage: {
    backgroundColor: colors.primary,
    borderColor: colors.primaryDark,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: spacing.radiusMedium - 2,
    elevation: 4,
  },
  languageText: {
    color: colors.textPrimary,
    fontSize: typography.fontSize.medium,
  },
  selectedLanguageText: {
    color: colors.white,
    fontWeight: typography.fontWeight.bold as "700",
  },
  aboutContainer: {
    alignItems: "center",
    padding: spacing.containerPadding,
  },
  aboutText: {
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.bold as "700",
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  versionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  versionText: {
    fontSize: typography.fontSize.medium,
    color: colors.textSecondary,
  },
});

export default SettingsScreen;
