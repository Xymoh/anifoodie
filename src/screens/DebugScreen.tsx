import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { usePurchases } from "../context/PurchaseContext";
import { colors, spacing, typography } from "../styles";

/**
 * DEBUG SCREEN - Use this to test subscription state
 *
 * Add this to your navigator temporarily to debug:
 * <Stack.Screen name="Debug" component={DebugScreen} />
 *
 * Then navigate to it from Settings or add a button
 */
export default function DebugScreen() {
  const { isSubscribed, isPro, isLoading, offerings, customerInfo } =
    usePurchases();

  const showCustomerInfo = () => {
    if (!customerInfo) {
      Alert.alert("No Customer Info", "Customer info is not loaded yet");
      return;
    }

    const activeEntitlements = Object.keys(customerInfo.entitlements.active);
    const allEntitlements = Object.keys(customerInfo.entitlements.all);

    Alert.alert(
      "Customer Info",
      `Active Entitlements: ${activeEntitlements.length > 0 ? activeEntitlements.join(", ") : "None"}\n\n` +
        `All Entitlements: ${allEntitlements.length > 0 ? allEntitlements.join(", ") : "None"}\n\n` +
        `Original App User ID: ${customerInfo.originalAppUserId}`,
    );
  };

  const showOfferings = () => {
    if (!offerings) {
      Alert.alert("No Offerings", "Offerings not loaded yet");
      return;
    }

    const packageNames = offerings.availablePackages
      .map((pkg) => `${pkg.product.title} - ${pkg.product.priceString}`)
      .join("\n");

    Alert.alert("Available Packages", packageNames || "No packages available");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>🐛 RevenueCat Debug Screen</Text>
        <Text style={styles.subtitle}>
          Use this to verify your subscription state
        </Text>
      </View>

      {/* Current State */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Current State</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Loading:</Text>
          <Text
            style={[styles.value, isLoading ? styles.warning : styles.success]}
          >
            {isLoading ? "⏳ Loading..." : "✅ Loaded"}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Subscribed:</Text>
          <Text
            style={[styles.value, isSubscribed ? styles.success : styles.error]}
          >
            {isSubscribed ? "✅ YES" : "❌ NO"}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Pro Access:</Text>
          <Text style={[styles.value, isPro ? styles.success : styles.error]}>
            {isPro ? "✅ YES" : "❌ NO"}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Offerings Loaded:</Text>
          <Text
            style={[styles.value, offerings ? styles.success : styles.error]}
          >
            {offerings
              ? `✅ ${offerings.availablePackages.length} package(s)`
              : "❌ None"}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Customer Info:</Text>
          <Text
            style={[styles.value, customerInfo ? styles.success : styles.error]}
          >
            {customerInfo ? "✅ Loaded" : "❌ Not loaded"}
          </Text>
        </View>
      </View>

      {/* Expected State */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Expected Behavior</Text>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Free User (No Purchase):</Text>
          <Text style={styles.infoText}>• Subscribed: ❌ NO</Text>
          <Text style={styles.infoText}>• Pro Access: ❌ NO</Text>
          <Text style={styles.infoText}>• Ads: 👁️ Visible</Text>
          <Text style={styles.infoText}>• Settings: "Remove Ads" button</Text>
        </View>

        <View style={[styles.infoBox, { marginTop: spacing.md }]}>
          <Text style={styles.infoTitle}>Premium User (After Purchase):</Text>
          <Text style={styles.infoText}>• Subscribed: ✅ YES</Text>
          <Text style={styles.infoText}>• Pro Access: ✅ YES</Text>
          <Text style={styles.infoText}>• Ads: 🚫 Hidden</Text>
          <Text style={styles.infoText}>
            • Settings: "Premium Active ✓" badge
          </Text>
        </View>
      </View>

      {/* Actions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Debug Actions</Text>

        <TouchableOpacity style={styles.button} onPress={showCustomerInfo}>
          <Text style={styles.buttonText}>View Customer Info</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={showOfferings}>
          <Text style={styles.buttonText}>View Offerings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            Alert.alert(
              "Console Logs",
              "Check your Metro bundler terminal for detailed logs:\n\n" +
                "• ✅ RevenueCat SDK configured\n" +
                "• ✅ Offerings loaded\n" +
                "• ✅ User has Pro access\n" +
                "• 🛒 Attempting to purchase\n" +
                "• 🔄 Restoring purchases",
            )
          }
        >
          <Text style={styles.buttonText}>View Expected Logs</Text>
        </TouchableOpacity>
      </View>

      {/* Troubleshooting */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Troubleshooting</Text>

        {!offerings && (
          <View style={styles.errorBox}>
            <Text style={styles.errorTitle}>⚠️ No Offerings</Text>
            <Text style={styles.errorText}>
              1. Check RevenueCat dashboard{"\n"}
              2. Verify offering is "Current"{"\n"}
              3. Check API key is correct{"\n"}
              4. Verify internet connection
            </Text>
          </View>
        )}

        {!customerInfo && (
          <View style={styles.errorBox}>
            <Text style={styles.errorTitle}>⚠️ No Customer Info</Text>
            <Text style={styles.errorText}>
              1. Check internet connection{"\n"}
              2. Verify RevenueCat SDK initialized{"\n"}
              3. Check console for errors
            </Text>
          </View>
        )}

        {customerInfo && !isSubscribed && offerings && (
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>ℹ️ Free Tier</Text>
            <Text style={styles.infoText}>
              Everything looks good!{"\n"}
              Ready to test purchase flow.
            </Text>
          </View>
        )}

        {isSubscribed && (
          <View style={styles.successBox}>
            <Text style={styles.successTitle}>✅ Premium Active</Text>
            <Text style={styles.successText}>
              Subscription is working correctly!{"\n"}
              Ads should be hidden.
            </Text>
          </View>
        )}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Check console logs for detailed debugging information
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  section: {
    padding: spacing.containerPadding,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray300,
  },
  title: {
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.bold as "700",
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: typography.fontSize.medium,
    color: colors.gray600,
  },
  sectionTitle: {
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.semiBold as "600",
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray200,
  },
  label: {
    fontSize: typography.fontSize.medium,
    color: colors.gray700,
    fontWeight: typography.fontWeight.medium as "500",
  },
  value: {
    fontSize: typography.fontSize.medium,
    fontWeight: typography.fontWeight.semiBold as "600",
  },
  success: {
    color: "#10b981", // green
  },
  error: {
    color: "#ef4444", // red
  },
  warning: {
    color: "#f59e0b", // amber
  },
  infoBox: {
    backgroundColor: colors.gray100,
    padding: spacing.md,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  infoTitle: {
    fontSize: typography.fontSize.medium,
    fontWeight: typography.fontWeight.semiBold as "600",
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  infoText: {
    fontSize: typography.fontSize.small,
    color: colors.gray700,
    lineHeight: 20,
  },
  errorBox: {
    backgroundColor: "#fef2f2",
    padding: spacing.md,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#ef4444",
    marginBottom: spacing.md,
  },
  errorTitle: {
    fontSize: typography.fontSize.medium,
    fontWeight: typography.fontWeight.semiBold as "600",
    color: "#991b1b",
    marginBottom: spacing.xs,
  },
  errorText: {
    fontSize: typography.fontSize.small,
    color: "#7f1d1d",
    lineHeight: 20,
  },
  successBox: {
    backgroundColor: "#f0fdf4",
    padding: spacing.md,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#10b981",
  },
  successTitle: {
    fontSize: typography.fontSize.medium,
    fontWeight: typography.fontWeight.semiBold as "600",
    color: "#065f46",
    marginBottom: spacing.xs,
  },
  successText: {
    fontSize: typography.fontSize.small,
    color: "#064e3b",
    lineHeight: 20,
  },
  button: {
    backgroundColor: colors.primary,
    padding: spacing.md,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: spacing.sm,
  },
  buttonText: {
    fontSize: typography.fontSize.medium,
    fontWeight: typography.fontWeight.semiBold as "600",
    color: colors.white,
  },
  footer: {
    padding: spacing.containerPadding,
    alignItems: "center",
  },
  footerText: {
    fontSize: typography.fontSize.small,
    color: colors.gray500,
    textAlign: "center",
  },
});
