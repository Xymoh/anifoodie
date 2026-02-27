import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  TextInput,
  Switch,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { usePurchases } from "../context/PurchaseContext";
import {
  PremiumOverride,
  DevFeatures,
  processSecretCode,
  DevActions,
  SECRET_CODES,
  ENABLE_DEV_FEATURES,
} from "../utils/devFeatures";
import { AppConfig } from "../config/appConfig";
import { colors, spacing, typography } from "../styles";

// Storage key for test ads setting
const TEST_ADS_KEY = "@anifoodie_use_test_ads";

/**
 * Developer Menu
 * Only accessible in development builds (__DEV__ = true)
 *
 * Features:
 * - Toggle premium access without purchase
 * - Enter secret codes
 * - View subscription state
 * - Clear app storage
 */
export default function DeveloperMenu() {
  const { isSubscribed, isPro, isLoading, offerings } = usePurchases();
  const [premiumOverride, setPremiumOverride] = useState(false);
  const [useTestAds, setUseTestAds] = useState(AppConfig.adMob.useTestAds);
  const [secretCode, setSecretCode] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    loadOverrideState();
    loadTestAdsState();
  }, []);

  const loadOverrideState = async () => {
    const isEnabled = await PremiumOverride.isEnabled();
    setPremiumOverride(isEnabled);
  };

  const loadTestAdsState = async () => {
    try {
      const value = await AsyncStorage.getItem(TEST_ADS_KEY);
      if (value !== null) {
        setUseTestAds(value === "true");
      }
    } catch (error) {
      console.error("Failed to load test ads setting:", error);
    }
  };

  const handleToggleTestAds = async () => {
    const newValue = !useTestAds;
    setUseTestAds(newValue);

    try {
      await AsyncStorage.setItem(TEST_ADS_KEY, String(newValue));

      Alert.alert(
        newValue ? "🧪 Test Ads Enabled" : "📱 Real Ads Enabled",
        newValue
          ? "Using Google's test ad units. Ads will show immediately on all devices including emulators."
          : "Using your real ad unit IDs. Ads may take 24-48 hours to activate and won't show on emulators.",
        [{ text: "OK" }],
      );
    } catch (error) {
      console.error("Failed to save test ads setting:", error);
      Alert.alert("Error", "Failed to save test ads setting");
    }
  };

  const handleTogglePremium = async () => {
    const newState = await PremiumOverride.toggle();
    setPremiumOverride(newState);

    Alert.alert(
      newState ? "🔓 Premium Enabled" : "🔒 Premium Disabled",
      newState
        ? "Premium features are now unlocked. Restart the app to see changes."
        : "Premium override removed. Subscription state will reflect actual purchases.",
      [
        {
          text: "OK",
          onPress: () => setRefreshKey((prev) => prev + 1),
        },
      ],
    );
  };

  const handleSecretCode = async () => {
    if (!secretCode.trim()) {
      Alert.alert("Enter Code", "Please enter a secret code");
      return;
    }

    const result = await processSecretCode(secretCode);

    Alert.alert(result.success ? "Success!" : "Invalid Code", result.message, [
      {
        text: "OK",
        onPress: () => {
          if (result.success) {
            setSecretCode("");
            loadOverrideState();
            setRefreshKey((prev) => prev + 1);
          }
        },
      },
    ]);
  };

  const handleClearStorage = () => {
    Alert.alert(
      "Clear All Storage?",
      "This will reset all app data including dev overrides. The app will restart fresh.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Clear",
          style: "destructive",
          onPress: async () => {
            await DevActions.clearAllStorage();
            setPremiumOverride(false);
            Alert.alert("Cleared", "All storage cleared. Restart the app.");
          },
        },
      ],
    );
  };

  const handleDebugStorage = async () => {
    await DevActions.debugStorage();
    Alert.alert("Debug", "Check console for storage contents");
  };

  if (!ENABLE_DEV_FEATURES) {
    return (
      <View style={styles.container}>
        <Text style={styles.disabledText}>
          Developer features are disabled in production builds.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} key={refreshKey}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>🛠️ Developer Menu</Text>
        <Text style={styles.subtitle}>Testing & Debug Tools</Text>
      </View>

      {/* Current State */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Current State</Text>

        <View style={styles.stateRow}>
          <Text style={styles.label}>Environment:</Text>
          <Text style={[styles.value, styles.dev]}>
            {__DEV__ ? "🟢 Development" : "🔴 Production"}
          </Text>
        </View>

        <View style={styles.stateRow}>
          <Text style={styles.label}>Premium Override:</Text>
          <Text
            style={[
              styles.value,
              premiumOverride ? styles.success : styles.error,
            ]}
          >
            {premiumOverride ? "🔓 ACTIVE" : "🔒 Disabled"}
          </Text>
        </View>

        <View style={styles.stateRow}>
          <Text style={styles.label}>Subscription Status:</Text>
          <Text
            style={[styles.value, isSubscribed ? styles.success : styles.error]}
          >
            {isSubscribed ? "✅ Premium" : "❌ Free"}
          </Text>
        </View>

        <View style={styles.stateRow}>
          <Text style={styles.label}>Pro Access:</Text>
          <Text style={[styles.value, isPro ? styles.success : styles.error]}>
            {isPro ? "✅ YES" : "❌ NO"}
          </Text>
        </View>

        <View style={styles.stateRow}>
          <Text style={styles.label}>Offerings:</Text>
          <Text
            style={[styles.value, offerings ? styles.success : styles.error]}
          >
            {offerings
              ? `✅ ${offerings.availablePackages.length} package(s)`
              : "❌ None"}
          </Text>
        </View>
      </View>

      {/* Premium Override Toggle */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Premium Override</Text>
        <Text style={styles.description}>
          Bypass payment system and enable premium features for testing.
          Persists across app restarts.
        </Text>

        <View style={styles.toggleRow}>
          <View style={styles.toggleLabel}>
            <Text style={styles.label}>Enable Premium</Text>
            <Text style={styles.hint}>No purchase required</Text>
          </View>
          <Switch
            value={premiumOverride}
            onValueChange={handleTogglePremium}
            trackColor={{ false: colors.gray400, true: colors.primary }}
            thumbColor={premiumOverride ? colors.white : colors.gray200}
          />
        </View>

        {premiumOverride && (
          <View style={styles.warningBox}>
            <Text style={styles.warningText}>
              ⚠️ Premium override is active. You're in premium mode without a
              real purchase.
            </Text>
          </View>
        )}
      </View>

      {/* AdMob Test Ads Toggle */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>AdMob Test Ads</Text>
        <Text style={styles.description}>
          Toggle between Google's test ad units (instant ads for testing) and
          your real ad unit IDs (production ads).
        </Text>

        <View style={styles.toggleRow}>
          <View style={styles.toggleLabel}>
            <Text style={styles.label}>Use Test Ads</Text>
            <Text style={styles.hint}>
              {useTestAds
                ? "Google test ads (instant)"
                : "Real ads (24-48h to activate)"}
            </Text>
          </View>
          <Switch
            value={useTestAds}
            onValueChange={handleToggleTestAds}
            trackColor={{ false: colors.gray400, true: "#10b981" }}
            thumbColor={useTestAds ? colors.white : colors.gray200}
          />
        </View>

        {useTestAds && (
          <View style={[styles.warningBox, { backgroundColor: "#10b98120" }]}>
            <Text style={[styles.warningText, { color: "#10b981" }]}>
              🧪 Test ads enabled. Shows Google's sample ads immediately on any
              device.
            </Text>
          </View>
        )}

        <View style={styles.hintBox}>
          <Text style={styles.hintTitle}>Current Ad Unit IDs:</Text>
          <Text style={styles.hintText}>
            • iOS:{" "}
            {useTestAds
              ? AppConfig.adMob.testAdUnits.ios.banner.slice(-10)
              : AppConfig.adMob.productionAdUnits.ios.banner.slice(-10)}
          </Text>
          <Text style={styles.hintText}>
            • Android:{" "}
            {useTestAds
              ? AppConfig.adMob.testAdUnits.android.banner.slice(-10)
              : AppConfig.adMob.productionAdUnits.android.banner.slice(-10)}
          </Text>
        </View>
      </View>

      {/* Secret Code Entry */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Secret Code</Text>
        <Text style={styles.description}>
          Enter a special code to unlock features or perform actions.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter secret code..."
          placeholderTextColor={colors.gray500}
          value={secretCode}
          onChangeText={setSecretCode}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TouchableOpacity style={styles.button} onPress={handleSecretCode}>
          <Text style={styles.buttonText}>Submit Code</Text>
        </TouchableOpacity>

        <View style={styles.hintBox}>
          <Text style={styles.hintTitle}>Available Codes:</Text>
          <Text style={styles.hintText}>
            • <Text style={styles.code}>{SECRET_CODES.UNLOCK_PREMIUM}</Text> -
            Unlock premium
          </Text>
          <Text style={styles.hintText}>
            • <Text style={styles.code}>{SECRET_CODES.RESET_ALL}</Text> - Reset
            all overrides
          </Text>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>

        <TouchableOpacity
          style={[styles.button, styles.buttonSecondary]}
          onPress={handleDebugStorage}
        >
          <Text style={styles.buttonSecondaryText}>📦 Debug Storage</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.buttonDanger]}
          onPress={handleClearStorage}
        >
          <Text style={styles.buttonText}>🗑️ Clear All Storage</Text>
        </TouchableOpacity>
      </View>

      {/* Instructions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>How to Use</Text>

        <View style={styles.instructionBox}>
          <Text style={styles.instructionTitle}>
            1. Toggle Premium Override
          </Text>
          <Text style={styles.instructionText}>
            Use the switch above to instantly enable premium features without
            making a purchase. Perfect for testing the premium UI flow.
          </Text>
        </View>

        <View style={styles.instructionBox}>
          <Text style={styles.instructionTitle}>2. Use Secret Codes</Text>
          <Text style={styles.instructionText}>
            Enter secret codes for quick actions. Share codes with testers to
            let them unlock premium remotely.
          </Text>
        </View>

        <View style={styles.instructionBox}>
          <Text style={styles.instructionTitle}>3. Test Real Purchases</Text>
          <Text style={styles.instructionText}>
            Turn OFF the override to test actual payment flows with sandbox/test
            accounts.
          </Text>
        </View>
      </View>

      {/* Warning */}
      <View style={styles.section}>
        <View style={styles.dangerBox}>
          <Text style={styles.dangerTitle}>⚠️ Production Warning</Text>
          <Text style={styles.dangerText}>
            These developer features are automatically disabled in production
            builds. Never ship with ENABLE_DEV_FEATURES = true!
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Developer tools for testing only</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: spacing.containerPadding,
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.bold as "700",
    color: colors.white,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: typography.fontSize.medium,
    color: colors.white,
    opacity: 0.9,
  },
  section: {
    padding: spacing.containerPadding,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray300,
  },
  sectionTitle: {
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.semiBold as "600",
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  description: {
    fontSize: typography.fontSize.small,
    color: colors.gray600,
    marginBottom: spacing.md,
    lineHeight: 20,
  },
  stateRow: {
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
    color: "#10b981",
  },
  error: {
    color: "#ef4444",
  },
  dev: {
    color: "#8b5cf6",
  },
  toggleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: spacing.sm,
    backgroundColor: colors.gray100,
    paddingHorizontal: spacing.md,
    borderRadius: 8,
  },
  toggleLabel: {
    flex: 1,
  },
  hint: {
    fontSize: typography.fontSize.tiny,
    color: colors.gray500,
    marginTop: 2,
  },
  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray400,
    borderRadius: 8,
    padding: spacing.md,
    fontSize: typography.fontSize.medium,
    color: colors.textPrimary,
    marginBottom: spacing.md,
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
  buttonSecondary: {
    backgroundColor: colors.gray700,
  },
  buttonSecondaryText: {
    fontSize: typography.fontSize.medium,
    fontWeight: typography.fontWeight.semiBold as "600",
    color: colors.white,
  },
  buttonDanger: {
    backgroundColor: "#dc2626",
  },
  warningBox: {
    backgroundColor: "#fef3c7",
    padding: spacing.md,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#f59e0b",
    marginTop: spacing.md,
  },
  warningText: {
    fontSize: typography.fontSize.small,
    color: "#92400e",
  },
  hintBox: {
    backgroundColor: colors.gray100,
    padding: spacing.md,
    borderRadius: 8,
    marginTop: spacing.md,
  },
  hintTitle: {
    fontSize: typography.fontSize.small,
    fontWeight: typography.fontWeight.semiBold as "600",
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  hintText: {
    fontSize: typography.fontSize.small,
    color: colors.gray700,
    marginBottom: 4,
  },
  code: {
    fontFamily: "monospace",
    backgroundColor: colors.gray200,
    paddingHorizontal: 4,
    borderRadius: 4,
  },
  instructionBox: {
    marginBottom: spacing.md,
  },
  instructionTitle: {
    fontSize: typography.fontSize.medium,
    fontWeight: typography.fontWeight.semiBold as "600",
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  instructionText: {
    fontSize: typography.fontSize.small,
    color: colors.gray600,
    lineHeight: 20,
  },
  dangerBox: {
    backgroundColor: "#fef2f2",
    padding: spacing.md,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#dc2626",
  },
  dangerTitle: {
    fontSize: typography.fontSize.medium,
    fontWeight: typography.fontWeight.bold as "700",
    color: "#991b1b",
    marginBottom: spacing.xs,
  },
  dangerText: {
    fontSize: typography.fontSize.small,
    color: "#7f1d1d",
    lineHeight: 20,
  },
  footer: {
    padding: spacing.containerPadding,
    alignItems: "center",
  },
  footerText: {
    fontSize: typography.fontSize.small,
    color: colors.gray500,
  },
  disabledText: {
    fontSize: typography.fontSize.medium,
    color: colors.gray600,
    textAlign: "center",
    padding: spacing.containerPadding,
  },
});
