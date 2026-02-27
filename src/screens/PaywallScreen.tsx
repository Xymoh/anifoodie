import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { PurchasesPackage } from "react-native-purchases";

import { usePurchases } from "../context/PurchaseContext";
import { colors, spacing, typography } from "../styles";

const PaywallScreen = () => {
  const navigation = useNavigation();
  const { offerings, purchasePackage, restorePurchases, isLoading } =
    usePurchases();

  const handlePurchase = async (packageToPurchase: PurchasesPackage) => {
    const success = await purchasePackage(packageToPurchase);
    if (success) {
      navigation.goBack();
    }
  };

  const handleRestore = async () => {
    const success = await restorePurchases();
    // Navigation will stay on screen regardless to let user see the alert
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color={colors.primary} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.closeButton}
        >
          <Text style={styles.closeButtonText}>✕</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Text style={styles.title}>Support PetPlate 💚</Text>
          <Text style={styles.subtitle}>
            Help me develop this app further and many more to come
          </Text>
        </View>

        {/* Support Message */}
        <View style={styles.supportMessageContainer}>
          <Text style={styles.supportMessage}>
            PetPlate is a passion project created to help pet owners make
            informed decisions about their pets' nutrition. Your support means
            the world and helps me continue improving this app and creating new
            ones! 🙏
          </Text>
        </View>

        {/* Features */}
        <View style={styles.featuresContainer}>
          <FeatureItem
            icon="✨"
            title="Ad-Free Experience"
            description="Browse without banner ads"
          />
          <FeatureItem
            icon="🚀"
            title="Support Development"
            description="Help create more amazing features"
          />
          <FeatureItem
            icon="💝"
            title="Future Apps"
            description="Enable development of new pet care tools"
          />
        </View>

        {/* Pricing Options */}
        {offerings && offerings.availablePackages.length > 0 ? (
          <View style={styles.pricingContainer}>
            {offerings.availablePackages.map((pkg) => (
              <TouchableOpacity
                key={pkg.identifier}
                style={styles.packageCard}
                onPress={() => handlePurchase(pkg)}
              >
                <View style={styles.packageHeader}>
                  <Text style={styles.packageTitle}>{pkg.product.title}</Text>
                  {pkg.packageType === "LIFETIME" && (
                    <View style={styles.bestValueBadge}>
                      <Text style={styles.bestValueText}>BEST VALUE</Text>
                    </View>
                  )}
                </View>
                <Text style={styles.packageDescription}>
                  {pkg.product.description}
                </Text>
                <View style={styles.packagePricing}>
                  <Text style={styles.packagePrice}>
                    {pkg.product.priceString}
                  </Text>
                  {pkg.packageType === "LIFETIME" && (
                    <Text style={styles.packageSubtext}>One-time payment</Text>
                  )}
                  {pkg.packageType === "MONTHLY" && (
                    <Text style={styles.packageSubtext}>per month</Text>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <View style={styles.noOffersContainer}>
            <Text style={styles.noOffersText}>
              No purchase options available at the moment.
            </Text>
          </View>
        )}

        {/* Restore Button */}
        <TouchableOpacity style={styles.restoreButton} onPress={handleRestore}>
          <Text style={styles.restoreButtonText}>Restore Purchases</Text>
        </TouchableOpacity>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            • Subscription auto-renews unless cancelled
          </Text>
          <Text style={styles.footerText}>
            • Cancel anytime from your device settings
          </Text>
          <Text style={styles.footerText}>
            • Payment charged to your App Store account
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const FeatureItem = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <View style={styles.featureItem}>
    <Text style={styles.featureIcon}>{icon}</Text>
    <View style={styles.featureContent}>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDescription}>{description}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: spacing.md,
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.gray300,
    alignItems: "center",
    justifyContent: "center",
  },
  closeButtonText: {
    fontSize: typography.fontSize.xl,
    color: colors.gray800,
    fontWeight: typography.fontWeight.bold as "700",
  },
  scrollView: {
    flex: 1,
  },
  heroSection: {
    alignItems: "center",
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.containerPadding,
  },
  title: {
    fontSize: typography.fontSize.xxl + 4,
    fontWeight: typography.fontWeight.bold as "700",
    color: colors.primary,
    marginBottom: spacing.sm,
    textAlign: "center",
  },
  subtitle: {
    fontSize: typography.fontSize.large,
    color: colors.gray700,
    textAlign: "center",
  },
  supportMessageContainer: {
    paddingHorizontal: spacing.containerPadding,
    paddingVertical: spacing.md,
    marginBottom: spacing.md,
  },
  supportMessage: {
    fontSize: typography.fontSize.medium,
    color: colors.gray800,
    textAlign: "center",
    lineHeight: 22,
    fontStyle: "italic",
  },
  featuresContainer: {
    padding: spacing.containerPadding,
    gap: spacing.md,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.gray200,
    padding: spacing.md,
    borderRadius: spacing.radiusMedium,
    borderWidth: 1,
    borderColor: colors.gray300,
  },
  featureIcon: {
    fontSize: 32,
    marginRight: spacing.md,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: typography.fontSize.medium,
    fontWeight: typography.fontWeight.bold as "700",
    color: colors.gray900,
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: typography.fontSize.small,
    color: colors.gray700,
  },
  pricingContainer: {
    padding: spacing.containerPadding,
    gap: spacing.md,
  },
  packageCard: {
    backgroundColor: colors.gray200,
    borderRadius: spacing.radiusMedium,
    borderWidth: 2,
    borderColor: colors.primary,
    padding: spacing.lg,
  },
  packageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.sm,
  },
  packageTitle: {
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.bold as "700",
    color: colors.gray900,
  },
  bestValueBadge: {
    backgroundColor: colors.success,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: spacing.radiusSmall,
  },
  bestValueText: {
    fontSize: typography.fontSize.tiny,
    fontWeight: typography.fontWeight.bold as "700",
    color: colors.white,
  },
  packageDescription: {
    fontSize: typography.fontSize.small,
    color: colors.gray700,
    marginBottom: spacing.md,
  },
  packagePricing: {
    alignItems: "center",
  },
  packagePrice: {
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.bold as "700",
    color: colors.primary,
  },
  packageSubtext: {
    fontSize: typography.fontSize.small,
    color: colors.gray600,
    marginTop: 4,
  },
  noOffersContainer: {
    padding: spacing.containerPadding,
    alignItems: "center",
  },
  noOffersText: {
    fontSize: typography.fontSize.medium,
    color: colors.gray700,
    textAlign: "center",
  },
  restoreButton: {
    alignSelf: "center",
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    marginVertical: spacing.lg,
  },
  restoreButtonText: {
    fontSize: typography.fontSize.medium,
    color: colors.primary,
    fontWeight: typography.fontWeight.semiBold as "600",
  },
  footer: {
    padding: spacing.containerPadding,
    paddingBottom: spacing.xl,
  },
  footerText: {
    fontSize: typography.fontSize.tiny,
    color: colors.gray600,
    textAlign: "center",
    marginBottom: spacing.xs,
  },
});

export default PaywallScreen;
