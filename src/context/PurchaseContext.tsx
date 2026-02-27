import React, { createContext, useContext, useState, useEffect } from "react";
import Purchases, {
  CustomerInfo,
  PurchasesOffering,
  PurchasesPackage,
  LOG_LEVEL,
} from "react-native-purchases";
import RevenueCatUI, { PAYWALL_RESULT } from "react-native-purchases-ui";
import { Platform, Alert } from "react-native";
import { PremiumOverride, DevFeatures } from "../utils/devFeatures";

// RevenueCat API Keys - Platform-specific
// TODO: Replace with your production keys from RevenueCat dashboard
const REVENUECAT_API_KEY =
  Platform.select({
    // Android: Get from RevenueCat Dashboard → API Keys → "Public Google Play API Key"
    android: "goog_YOUR_GOOGLE_PLAY_KEY_HERE",

    // iOS: Get from RevenueCat Dashboard → API Keys → "Public Apple App Store API Key"
    // (Add later when ready for iOS deployment)
    ios: "appl_YOUR_IOS_KEY_HERE",
  }) || "test_QJUpHXTpVwJSzukmkOodsMgVdjQ"; // Fallback test key

// Entitlement identifier - must match RevenueCat dashboard (same for both platforms)
const ENTITLEMENT_ID = "PetPlate Pro";

interface PurchaseContextType {
  isSubscribed: boolean;
  isPro: boolean; // Explicit pro status
  isLoading: boolean;
  offerings: PurchasesOffering | null;
  customerInfo: CustomerInfo | null;
  purchasePackage: (packageToPurchase: PurchasesPackage) => Promise<boolean>;
  restorePurchases: () => Promise<boolean>;
  showPaywall: () => Promise<boolean>;
  showPaywallIfNeeded: () => Promise<boolean>;
  showCustomerCenter: () => void;
}

const PurchaseContext = createContext<PurchaseContextType>({
  isSubscribed: false,
  isPro: false,
  isLoading: true,
  offerings: null,
  customerInfo: null,
  purchasePackage: async () => false,
  restorePurchases: async () => false,
  showPaywall: async () => false,
  showPaywallIfNeeded: async () => false,
  showCustomerCenter: () => {},
});

export const usePurchases = () => useContext(PurchaseContext);

interface PurchaseProviderProps {
  children: React.ReactNode;
}

export const PurchaseProvider: React.FC<PurchaseProviderProps> = ({
  children,
}) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isPro, setIsPro] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [offerings, setOfferings] = useState<PurchasesOffering | null>(null);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);

  useEffect(() => {
    initializePurchases();
  }, []);

  const initializePurchases = async () => {
    try {
      // 🔓 DEV: Check for premium override first
      if (DevFeatures.ALLOW_PREMIUM_OVERRIDE) {
        const hasOverride = await PremiumOverride.isEnabled();
        if (hasOverride) {
          console.log(
            "🔓 DEV: Premium override is ACTIVE - bypassing RevenueCat",
          );
          setIsSubscribed(true);
          setIsPro(true);
          setIsLoading(false);
          return; // Skip RevenueCat initialization
        }
      }

      // Enable debug logs for testing (disable in production)
      if (__DEV__) {
        Purchases.setLogLevel(LOG_LEVEL.DEBUG);
      }

      // Skip RevenueCat if testing offline
      if (DevFeatures.SKIP_REVENUECAT_INIT) {
        console.log(
          "⚠️ DEV: Skipping RevenueCat initialization (offline mode)",
        );
        setIsLoading(false);
        return;
      }

      // Configure Purchases SDK
      await Purchases.configure({
        apiKey: REVENUECAT_API_KEY,
      });

      console.log("✅ RevenueCat SDK configured successfully");

      // Get current customer info
      const info = await Purchases.getCustomerInfo();
      updateCustomerInformation(info);

      // Fetch available offerings
      const fetchedOfferings = await Purchases.getOfferings();
      if (
        fetchedOfferings.current !== null &&
        fetchedOfferings.current.availablePackages.length !== 0
      ) {
        setOfferings(fetchedOfferings.current);
        console.log(
          "✅ Offerings loaded:",
          fetchedOfferings.current.availablePackages.length,
          "package(s)",
        );
      } else {
        console.warn("⚠️ No offerings available");
      }

      setIsLoading(false);
    } catch (error) {
      console.error("❌ Error initializing RevenueCat:", error);
      setIsLoading(false);
    }
  };

  const updateCustomerInformation = async (info: CustomerInfo) => {
    setCustomerInfo(info);

    // 🔓 DEV: Check for premium override first
    let hasProAccess = false;

    if (DevFeatures.ALLOW_PREMIUM_OVERRIDE) {
      const hasOverride = await PremiumOverride.isEnabled();
      if (hasOverride) {
        console.log("🔓 DEV: Premium override active");
        hasProAccess = true;
      }
    }

    // If no override, check real entitlement
    if (!hasProAccess) {
      hasProAccess =
        typeof info.entitlements.active[ENTITLEMENT_ID] !== "undefined";
    }

    setIsSubscribed(hasProAccess);
    setIsPro(hasProAccess);

    if (hasProAccess) {
      console.log("✅ User has Pro access");
    } else {
      console.log("ℹ️ User is on free tier");
    }
  };

  const purchasePackage = async (
    packageToPurchase: PurchasesPackage,
  ): Promise<boolean> => {
    try {
      console.log("🛒 Attempting to purchase:", packageToPurchase.identifier);

      const { customerInfo: info } =
        await Purchases.purchasePackage(packageToPurchase);

      updateCustomerInformation(info);

      // Check if purchase was successful
      if (typeof info.entitlements.active[ENTITLEMENT_ID] !== "undefined") {
        console.log("✅ Purchase successful!");
        Alert.alert(
          "Success! 🎉",
          "Welcome to PetPlate Pro! You're now enjoying an ad-free experience.",
          [{ text: "Awesome!", style: "default" }],
        );
        return true;
      }

      return false;
    } catch (error: any) {
      // Handle user cancellation gracefully
      if (error.userCancelled) {
        console.log("ℹ️ User cancelled purchase");
        return false;
      }

      // Handle other errors
      console.error("❌ Purchase error:", error);
      Alert.alert(
        "Purchase Failed",
        error.message || "Something went wrong. Please try again.",
        [{ text: "OK", style: "default" }],
      );
      return false;
    }
  };

  const restorePurchases = async (): Promise<boolean> => {
    try {
      console.log("🔄 Restoring purchases...");

      const info = await Purchases.restorePurchases();
      updateCustomerInformation(info);

      if (typeof info.entitlements.active[ENTITLEMENT_ID] !== "undefined") {
        Alert.alert(
          "Restore Successful 🎉",
          "Your PetPlate Pro subscription has been restored!",
          [{ text: "OK", style: "default" }],
        );
        return true;
      } else {
        Alert.alert(
          "No Purchases Found",
          "We couldn't find any previous purchases to restore for this account.",
          [{ text: "OK", style: "default" }],
        );
        return false;
      }
    } catch (error: any) {
      console.error("❌ Restore error:", error);
      Alert.alert(
        "Restore Failed",
        error.message || "Failed to restore purchases. Please try again.",
        [{ text: "OK", style: "default" }],
      );
      return false;
    }
  };

  // Show RevenueCat UI Paywall
  const showPaywall = async (): Promise<boolean> => {
    try {
      console.log("📱 Presenting RevenueCat UI paywall...");

      const paywallResult: PAYWALL_RESULT = await RevenueCatUI.presentPaywall({
        offering: offerings || undefined, // Use current offering or default
      });

      console.log("📱 Paywall result:", paywallResult);

      switch (paywallResult) {
        case PAYWALL_RESULT.PURCHASED:
          console.log("✅ Purchase completed via RevenueCat UI");
          // Refresh customer info
          const info = await Purchases.getCustomerInfo();
          updateCustomerInformation(info);
          return true;

        case PAYWALL_RESULT.RESTORED:
          console.log("✅ Purchases restored via RevenueCat UI");
          // Refresh customer info
          const restoredInfo = await Purchases.getCustomerInfo();
          updateCustomerInformation(restoredInfo);
          return true;

        case PAYWALL_RESULT.CANCELLED:
          console.log("ℹ️ User cancelled paywall");
          return false;

        case PAYWALL_RESULT.NOT_PRESENTED:
          console.log("⚠️ Paywall not presented");
          Alert.alert(
            "Paywall Unavailable",
            "Unable to show purchase options at this time. Please try again later.",
          );
          return false;

        case PAYWALL_RESULT.ERROR:
          console.log("❌ Paywall error");
          Alert.alert("Error", "Something went wrong. Please try again later.");
          return false;

        default:
          return false;
      }
    } catch (error: any) {
      console.error("❌ Error showing paywall:", error);
      Alert.alert(
        "Error",
        error.message || "Failed to show purchase options. Please try again.",
      );
      return false;
    }
  };

  // Show RevenueCat UI Paywall only if needed (user not subscribed)
  const showPaywallIfNeeded = async (): Promise<boolean> => {
    try {
      console.log("📱 Checking if paywall needed...");

      const paywallResult: PAYWALL_RESULT =
        await RevenueCatUI.presentPaywallIfNeeded({
          requiredEntitlementIdentifier: ENTITLEMENT_ID,
        });

      console.log("📱 Paywall if needed result:", paywallResult);

      if (
        paywallResult === PAYWALL_RESULT.PURCHASED ||
        paywallResult === PAYWALL_RESULT.RESTORED
      ) {
        const info = await Purchases.getCustomerInfo();
        updateCustomerInformation(info);
        return true;
      }

      return false;
    } catch (error: any) {
      console.error("❌ Error showing paywall if needed:", error);
      return false;
    }
  };

  // Placeholder for showing customer center (will implement later)
  const showCustomerCenter = () => {
    console.log("🏪 Show customer center requested");
    // This will be implemented using RevenueCat Customer Center
  };

  return (
    <PurchaseContext.Provider
      value={{
        isSubscribed,
        isPro,
        isLoading,
        offerings,
        customerInfo,
        purchasePackage,
        restorePurchases,
        showPaywall,
        showPaywallIfNeeded,
        showCustomerCenter,
      }}
    >
      {children}
    </PurchaseContext.Provider>
  );
};
