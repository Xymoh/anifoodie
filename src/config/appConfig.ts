import Constants from "expo-constants";
import { Platform } from "react-native";

/**
 * Centralized App Configuration
 * Reads from environment variables and provides type-safe config access
 *
 * Environment files:
 * - .env - Default (development)
 * - .env.development - Development builds
 * - .env.production - Production builds
 *
 * Usage:
 * import { AppConfig } from '@/config/appConfig';
 * const adUnitId = AppConfig.adMob.getBannerAdUnitId();
 */

// Helper to parse boolean env vars
const parseBoolean = (
  value: string | undefined,
  defaultValue: boolean,
): boolean => {
  if (value === undefined) return defaultValue;
  return value.toLowerCase() === "true";
};

// Environment Variables (from .env files)
const env = {
  useTestAds: parseBoolean(
    process.env.EXPO_PUBLIC_USE_TEST_ADS,
    __DEV__, // Default to test ads in development
  ),
  enableDevFeatures: parseBoolean(
    process.env.EXPO_PUBLIC_ENABLE_DEV_FEATURES,
    __DEV__,
  ),
  enablePremiumOverride: parseBoolean(
    process.env.EXPO_PUBLIC_ENABLE_PREMIUM_OVERRIDE,
    __DEV__,
  ),
  adMob: {
    androidAppId: process.env.EXPO_PUBLIC_ADMOB_ANDROID_APP_ID || "",
    iosAppId: process.env.EXPO_PUBLIC_ADMOB_IOS_APP_ID || "",
    androidBannerId: process.env.EXPO_PUBLIC_ADMOB_ANDROID_BANNER_ID || "",
    iosBannerId: process.env.EXPO_PUBLIC_ADMOB_IOS_BANNER_ID || "",
    testAndroidBanner: process.env.EXPO_PUBLIC_ADMOB_TEST_ANDROID_BANNER || "",
    testIosBanner: process.env.EXPO_PUBLIC_ADMOB_TEST_IOS_BANNER || "",
  },
};

/**
 * App Configuration Object
 */
export const AppConfig = {
  // App Info
  appName: Constants.expoConfig?.name || "PetPlate",
  appVersion: Constants.expoConfig?.version || "1.0.0",
  buildNumber: Platform.select({
    ios: Constants.expoConfig?.ios?.buildNumber || "1",
    android: String(Constants.expoConfig?.android?.versionCode || 1),
  }),

  // Environment
  isDevelopment: __DEV__,
  isProduction: !__DEV__,

  // Developer Features
  devFeatures: {
    enabled: env.enableDevFeatures,
    premiumOverride: env.enablePremiumOverride,
  },

  // AdMob Configuration
  adMob: {
    // Whether to use test ads (can be toggled in Settings)
    useTestAds: env.useTestAds,

    // App IDs
    appId:
      Platform.select({
        ios: env.adMob.iosAppId,
        android: env.adMob.androidAppId,
      }) || "",

    // Production Ad Unit IDs
    productionAdUnits: {
      ios: {
        banner: env.adMob.iosBannerId,
      },
      android: {
        banner: env.adMob.androidBannerId,
      },
    },

    // Test Ad Unit IDs (Google's official test ads)
    testAdUnits: {
      ios: {
        banner: env.adMob.testIosBanner,
      },
      android: {
        banner: env.adMob.testAndroidBanner,
      },
    },

    // Get the current banner ad unit ID based on platform and test mode
    getBannerAdUnitId: (useTestAds?: boolean): string => {
      const shouldUseTestAds = useTestAds ?? env.useTestAds;
      const adUnits = shouldUseTestAds
        ? AppConfig.adMob.testAdUnits
        : AppConfig.adMob.productionAdUnits;

      return Platform.OS === "ios"
        ? adUnits.ios.banner
        : adUnits.android.banner;
    },
  },

  // RevenueCat Configuration
  revenueCat: {
    // API Keys are stored in PurchaseContext (not in env vars for security)
    enabled: true,
  },
};

// Export individual configs for convenience
export const { adMob, devFeatures } = AppConfig;

// Type exports
export type AppConfigType = typeof AppConfig;
