import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Constants from "expo-constants";

import { useLanguage, Language } from "../hooks/useLanguage";
import { TranslationKey, useTranslations } from "../i18n/index";
import { TabParamList, RootStackParamList } from "../navigation/types";
import { colors, spacing, typography } from "../styles";
import TranslatedText from "../components/TranslatedText";
import { usePurchases } from "../context/PurchaseContext";
import { DevFeatures } from "../utils/devFeatures";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const SettingsScreen = () => {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslations(language);
  const navigation = useNavigation<NavigationProp>();
  const { isSubscribed, isLoading, restorePurchases } = usePurchases();

  // Get app version from Expo Constants
  const appVersion = Constants.expoConfig?.version || "1.0.0";

  const handleLanguageChange = async (newLanguage: Language) => {
    await setLanguage(newLanguage);
  };

  const handleAboutAppPress = () => {
    navigation.navigate("Welcome", { fromSettings: true });
  };

  const handlePrivacyPolicyPress = () => {
    navigation.navigate("PrivacyPolicy", { section: "privacy" });
  };

  const handleTermsOfServicePress = () => {
    navigation.navigate("PrivacyPolicy", { section: "terms" });
  };

  const handleRemoveAdsPress = () => {
    navigation.navigate("Paywall");
  };

  const handleRestorePurchases = async () => {
    await restorePurchases();
  };

  const languages: { translationKey: TranslationKey; value: Language }[] = [
    { translationKey: "english", value: "en" },
    { translationKey: "spanish", value: "es" },
    { translationKey: "french", value: "fr" },
    { translationKey: "german", value: "de" },
    { translationKey: "italian", value: "it" },
    { translationKey: "russian", value: "ru" },
    { translationKey: "polish", value: "pl" },
  ];

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <StatusBar barStyle="light-content" backgroundColor={colors.gray200} />
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

        {/* Remove Ads Section - Only show if not subscribed */}
        {!isSubscribed && !isLoading && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{t("supportDeveloper")}</Text>
            <TouchableOpacity
              style={styles.removeAdsButton}
              onPress={handleRemoveAdsPress}
            >
              <View style={styles.supportMessageBox}>
                <Text style={styles.removeAdsButtonTitle}>
                  {t("supportPetPlate")}
                </Text>
                <Text style={styles.removeAdsButtonSubtitle}>
                  {t("supportMessage")}
                </Text>
                <Text style={styles.supportBenefits}>
                  {t("supportBenefits")}
                </Text>
              </View>
              <Text style={styles.removeAdsButtonArrow}>›</Text>
            </TouchableOpacity>

            {/* Restore Purchases Link */}
            <TouchableOpacity
              style={styles.restorePurchasesLink}
              onPress={handleRestorePurchases}
            >
              <Text style={styles.restorePurchasesText}>
                {t("alreadyPurchased")}
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Show Premium Status if subscribed */}
        {isSubscribed && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{t("premium")}</Text>
            <View style={styles.premiumBadge}>
              <Text style={styles.premiumBadgeText}>{t("premiumActive")}</Text>
              <Text style={styles.premiumBadgeSubtext}>
                {t("premiumThankYou")}
              </Text>
            </View>
          </View>
        )}

        <View style={styles.section}>
          <TranslatedText
            style={styles.sectionTitle}
            translationKey="aboutTheApp"
          />
          <TouchableOpacity
            style={styles.aboutAppButton}
            onPress={handleAboutAppPress}
          >
            <TranslatedText
              style={styles.aboutAppButtonText}
              translationKey="howToUseApp"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <TranslatedText style={styles.sectionTitle} translationKey="about" />
          <View style={styles.aboutContainer}>
            <Text style={styles.aboutText}>PetPlate</Text>
            <View style={styles.versionContainer}>
              <TranslatedText
                style={styles.versionText}
                translationKey="version"
              />
              <Text style={styles.versionText}>: {appVersion}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <TranslatedText
            style={styles.sectionTitle}
            translationKey="legalTitle"
          />
          <TouchableOpacity
            style={styles.legalButton}
            onPress={handlePrivacyPolicyPress}
          >
            <TranslatedText
              style={styles.legalButtonText}
              translationKey="privacyPolicy"
            />
            <Text style={styles.legalButtonArrow}>›</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.legalButton, styles.legalButtonLast]}
            onPress={handleTermsOfServicePress}
          >
            <TranslatedText
              style={styles.legalButtonText}
              translationKey="termsOfService"
            />
            <Text style={styles.legalButtonArrow}>›</Text>
          </TouchableOpacity>
        </View>

        {/* Developer Menu - Only in development builds */}
        {DevFeatures.SHOW_DEV_MENU && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🛠️ Developer Tools</Text>
            <TouchableOpacity
              style={styles.devMenuButton}
              onPress={() => navigation.navigate("DeveloperMenu")}
            >
              <View>
                <Text style={styles.devMenuButtonText}>Developer Menu</Text>
                <Text style={styles.devMenuButtonSubtext}>
                  Premium override, secret codes, debug tools
                </Text>
              </View>
              <Text style={styles.legalButtonArrow}>›</Text>
            </TouchableOpacity>
            <Text style={styles.devWarning}>
              ⚠️ Development build only - Auto-hidden in production
            </Text>
          </View>
        )}
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
  aboutAppButton: {
    padding: spacing.md,
    borderRadius: spacing.radiusRound,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.primary,
  },
  aboutAppButtonText: {
    color: colors.white,
    fontSize: typography.fontSize.medium,
    fontWeight: typography.fontWeight.bold as "700",
  },
  legalButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.gray400,
    backgroundColor: colors.gray200,
  },
  legalButtonLast: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray400,
  },
  legalButtonText: {
    fontSize: typography.fontSize.medium,
    color: colors.gray800,
    fontWeight: typography.fontWeight.medium as "500",
  },
  legalButtonArrow: {
    fontSize: typography.fontSize.xl,
    color: colors.primary,
    fontWeight: typography.fontWeight.bold as "700",
  },
  removeAdsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: spacing.md,
    borderRadius: spacing.radiusMedium,
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderColor: colors.primaryDark,
  },
  supportMessageBox: {
    flex: 1,
  },
  removeAdsButtonTitle: {
    fontSize: typography.fontSize.medium,
    color: colors.white,
    fontWeight: typography.fontWeight.bold as "700",
    marginBottom: 6,
  },
  removeAdsButtonSubtitle: {
    fontSize: typography.fontSize.small,
    color: colors.white,
    lineHeight: 18,
    marginBottom: 8,
    opacity: 0.95,
  },
  supportBenefits: {
    fontSize: typography.fontSize.tiny,
    color: colors.white,
    opacity: 0.85,
  },
  removeAdsButtonArrow: {
    fontSize: typography.fontSize.xxl,
    color: colors.white,
    fontWeight: typography.fontWeight.bold as "700",
    marginLeft: spacing.sm,
  },
  restorePurchasesLink: {
    marginTop: spacing.md,
    padding: spacing.sm,
    alignItems: "center",
  },
  restorePurchasesText: {
    fontSize: typography.fontSize.small,
    color: colors.primary,
    textDecorationLine: "underline",
  },
  premiumBadge: {
    padding: spacing.md,
    borderRadius: spacing.radiusMedium,
    backgroundColor: colors.success + "20",
    borderWidth: 2,
    borderColor: colors.success,
    alignItems: "center",
  },
  premiumBadgeText: {
    fontSize: typography.fontSize.medium,
    color: colors.gray900,
    fontWeight: typography.fontWeight.bold as "700",
    marginBottom: 4,
  },
  premiumBadgeSubtext: {
    fontSize: typography.fontSize.small,
    color: colors.gray700,
  },
  devMenuButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: spacing.md,
    borderRadius: spacing.radiusMedium,
    backgroundColor: colors.warning + "20",
    borderWidth: 2,
    borderColor: colors.warning,
  },
  devMenuButtonText: {
    fontSize: typography.fontSize.medium,
    color: colors.gray900,
    fontWeight: typography.fontWeight.bold as "700",
    marginBottom: 4,
  },
  devMenuButtonSubtext: {
    fontSize: typography.fontSize.small,
    color: colors.gray700,
  },
  devWarning: {
    fontSize: typography.fontSize.small,
    color: colors.textSecondary,
    marginTop: spacing.sm,
    fontStyle: "italic",
  },
});

export default SettingsScreen;
