import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../navigation/types";
import { colors, spacing, typography } from "../styles";
import { useLanguage } from "../hooks/useLanguage";
import { useTranslations } from "../i18n/index";
import TranslatedText from "../components/TranslatedText";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type PrivacyPolicyRouteProp = RouteProp<RootStackParamList, "PrivacyPolicy">;

const SectionHeader = ({ title }: { title: string }) => (
  <Text style={styles.sectionTitle}>{title}</Text>
);

const SectionBody = ({ text }: { text: string }) => (
  <Text style={styles.sectionBody}>{text}</Text>
);

const PrivacyPolicyScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<PrivacyPolicyRouteProp>();
  const { language } = useLanguage();
  const { t } = useTranslations(language);

  const initialSection = route.params?.section ?? "privacy";
  const [activeSection, setActiveSection] = useState<"privacy" | "terms">(
    initialSection,
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <TranslatedText
          style={styles.headerTitle}
          translationKey="legalTitle"
        />
        <View style={styles.backButtonPlaceholder} />
      </View>

      {/* Tab Toggle */}
      <View style={styles.tabRow}>
        <TouchableOpacity
          style={[styles.tab, activeSection === "privacy" && styles.activeTab]}
          onPress={() => setActiveSection("privacy")}
        >
          <TranslatedText
            style={[
              styles.tabText,
              activeSection === "privacy" && styles.activeTabText,
            ]}
            translationKey="privacyPolicy"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeSection === "terms" && styles.activeTab]}
          onPress={() => setActiveSection("terms")}
        >
          <TranslatedText
            style={[
              styles.tabText,
              activeSection === "terms" && styles.activeTabText,
            ]}
            translationKey="termsOfService"
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {activeSection === "privacy" ? (
          <>
            <TranslatedText
              style={styles.pageTitle}
              translationKey="privacyPolicyTitle"
            />
            <TranslatedText
              style={styles.lastUpdated}
              translationKey="lastUpdated"
            />
            <Text style={styles.intro}>{t("privacyPolicyIntro")}</Text>

            <SectionHeader title={t("privacyPolicyDataCollection")} />
            <SectionBody text={t("privacyPolicyDataCollectionBody")} />

            <SectionHeader title={t("privacyPolicyAds")} />
            <SectionBody text={t("privacyPolicyAdsBody")} />

            <SectionHeader title={t("privacyPolicyChildren")} />
            <SectionBody text={t("privacyPolicyChildrenBody")} />

            <SectionHeader title={t("privacyPolicyChanges")} />
            <SectionBody text={t("privacyPolicyChangesBody")} />

            <SectionHeader title={t("privacyPolicyContact")} />
            <SectionBody text={t("privacyPolicyContactBody")} />
          </>
        ) : (
          <>
            <TranslatedText
              style={styles.pageTitle}
              translationKey="termsOfServiceTitle"
            />
            <TranslatedText
              style={styles.lastUpdated}
              translationKey="lastUpdated"
            />
            <Text style={styles.intro}>{t("termsOfServiceIntro")}</Text>

            <SectionHeader title={t("termsOfServiceUse")} />
            <SectionBody text={t("termsOfServiceUseBody")} />

            <SectionHeader title={t("termsOfServiceDisclaimer")} />
            <SectionBody text={t("termsOfServiceDisclaimerBody")} />

            <SectionHeader title={t("termsOfServiceLiability")} />
            <SectionBody text={t("termsOfServiceLiabilityBody")} />

            <SectionHeader title={t("termsOfServiceChanges")} />
            <SectionBody text={t("termsOfServiceChangesBody")} />

            <SectionHeader title={t("termsOfServiceContact")} />
            <SectionBody text={t("termsOfServiceContactBody")} />
          </>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.containerPadding,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray300,
    backgroundColor: colors.gray200,
  },
  backButton: {
    padding: spacing.xs,
    minWidth: 40,
  },
  backButtonText: {
    fontSize: 24,
    color: colors.textPrimary,
  },
  backButtonPlaceholder: {
    minWidth: 40,
  },
  headerTitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold as "700",
    color: colors.textPrimary,
    textAlign: "center",
    flex: 1,
  },
  tabRow: {
    flexDirection: "row",
    backgroundColor: colors.gray200,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray300,
  },
  tab: {
    flex: 1,
    paddingVertical: spacing.md,
    alignItems: "center",
    borderBottomWidth: 3,
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomColor: colors.primary,
  },
  tabText: {
    fontSize: typography.fontSize.medium,
    color: colors.textSecondary,
    fontWeight: typography.fontWeight.semiBold as "600",
  },
  activeTabText: {
    color: colors.primary,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing.containerPadding,
    paddingBottom: spacing.xl * 2,
  },
  pageTitle: {
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.bold as "700",
    color: colors.primary,
    marginBottom: spacing.xs,
  },
  lastUpdated: {
    fontSize: typography.fontSize.small,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },
  intro: {
    fontSize: typography.fontSize.regular,
    color: colors.textPrimary,
    lineHeight: typography.lineHeight.normal * typography.fontSize.regular,
    marginBottom: spacing.lg,
    padding: spacing.md,
    backgroundColor: colors.card,
    borderRadius: spacing.radiusMedium,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  sectionTitle: {
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.bold as "700",
    color: colors.primaryLight,
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },
  sectionBody: {
    fontSize: typography.fontSize.regular,
    color: colors.textPrimary,
    lineHeight: typography.lineHeight.normal * typography.fontSize.regular,
  },
});

export default PrivacyPolicyScreen;
