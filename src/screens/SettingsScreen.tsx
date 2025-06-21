import React, { useState } from "react";
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
import { useTranslations } from "../i18n/translations";
import { colors } from "../styles";

const SettingsScreen = () => {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslations(language);

  // App version from package.json
  const appVersion = "1.0.0";

  // Handle language selection
  const handleLanguageChange = async (newLanguage: Language) => {
    await setLanguage(newLanguage);
  };

  // Language options
  const languages: { label: string; value: Language }[] = [
    { label: t("english"), value: "en" },
    { label: t("spanish"), value: "es" },
    { label: t("french"), value: "fr" },
    { label: t("german"), value: "de" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{t("settingsTitle")}</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t("languagePreference")}</Text>
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
                <Text
                  style={[
                    styles.languageText,
                    language === option.value && styles.selectedLanguageText,
                  ]}
                >
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t("about")}</Text>
          <View style={styles.aboutContainer}>
            <Text style={styles.aboutText}>AniFoodie</Text>
            <Text style={styles.versionText}>
              {t("version")}: {appVersion}
            </Text>
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
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray300,
    backgroundColor: colors.gray200,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray300,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.textPrimary,
    marginBottom: 16,
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  languageOption: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
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
    shadowRadius: 6,
    elevation: 4,
  },
  languageText: {
    color: colors.textPrimary,
    fontSize: 14,
  },
  selectedLanguageText: {
    color: colors.white,
    fontWeight: "bold",
  },
  aboutContainer: {
    alignItems: "center",
    padding: 20,
  },
  aboutText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.textPrimary,
    marginBottom: 8,
  },
  versionText: {
    fontSize: 14,
    color: colors.textSecondary,
  },
});

export default SettingsScreen;
