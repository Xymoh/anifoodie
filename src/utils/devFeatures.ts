import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppConfig } from "../config/appConfig";

/**
 * Developer Feature Flags
 *
 * This module provides developer tools to bypass payment systems during development.
 *
 * SECURITY WARNING:
 * - Never ship these flags enabled in production!
 * - Feature flags are automatically disabled in production builds
 * - These should only be accessible in __DEV__ mode
 *
 * Configuration is managed in .env files:
 * - .env.development - Development builds (flags enabled)
 * - .env.production - Production builds (flags disabled)
 */

// Master switch - Read from environment config
export const ENABLE_DEV_FEATURES = AppConfig.devFeatures.enabled;

// Storage key for premium override
const PREMIUM_OVERRIDE_KEY = "@anifoodie_dev_premium_override";

/**
 * Feature Flag Configuration
 * Now managed through AppConfig (from .env files)
 */
export const DevFeatures = {
  // Enable developer menu in Settings
  SHOW_DEV_MENU: ENABLE_DEV_FEATURES,

  // Allow manual premium toggle
  ALLOW_PREMIUM_OVERRIDE: AppConfig.devFeatures.premiumOverride,

  // Show debug screen in navigation
  SHOW_DEBUG_SCREEN: ENABLE_DEV_FEATURES,

  // Enable verbose logging
  VERBOSE_LOGGING: ENABLE_DEV_FEATURES,

  // Skip RevenueCat initialization (offline testing)
  SKIP_REVENUECAT_INIT: false, // Set to true to test UI without RevenueCat
};

/**
 * Special Access Codes
 * Add tester emails here - they'll get automatic premium access
 */
export const TESTER_EMAILS = [
  // Add your test accounts here
  // Example: 'tester@example.com',
  // Example: 'qa@yourcompany.com',
];

/**
 * Check if current user is a tester
 */
export const isTesterAccount = async (): Promise<boolean> => {
  if (!ENABLE_DEV_FEATURES) return false;

  try {
    // You could check against user email, device ID, etc.
    // For now, just return false - override manually instead
    return false;
  } catch (error) {
    return false;
  }
};

/**
 * Manual Premium Override
 * Persists across app restarts
 */
export const PremiumOverride = {
  /**
   * Enable premium features without purchase
   */
  async enable(): Promise<void> {
    if (!ENABLE_DEV_FEATURES) {
      console.warn("⚠️ Premium override not available in production");
      return;
    }

    try {
      await AsyncStorage.setItem(PREMIUM_OVERRIDE_KEY, "true");
      console.log("🔓 DEV: Premium override enabled");
    } catch (error) {
      console.error("Failed to enable premium override:", error);
    }
  },

  /**
   * Disable premium override (back to normal behavior)
   */
  async disable(): Promise<void> {
    if (!ENABLE_DEV_FEATURES) return;

    try {
      await AsyncStorage.removeItem(PREMIUM_OVERRIDE_KEY);
      console.log("🔒 DEV: Premium override disabled");
    } catch (error) {
      console.error("Failed to disable premium override:", error);
    }
  },

  /**
   * Check if premium override is active
   */
  async isEnabled(): Promise<boolean> {
    if (!ENABLE_DEV_FEATURES) return false;

    try {
      const value = await AsyncStorage.getItem(PREMIUM_OVERRIDE_KEY);
      return value === "true";
    } catch (error) {
      return false;
    }
  },

  /**
   * Toggle premium override on/off
   */
  async toggle(): Promise<boolean> {
    const currentState = await this.isEnabled();
    if (currentState) {
      await this.disable();
      return false;
    } else {
      await this.enable();
      return true;
    }
  },
};

/**
 * Secret Code System
 * Enter a special code to unlock premium
 */
export const SECRET_CODES = {
  // Secret code to unlock premium (case-insensitive)
  UNLOCK_PREMIUM: "anifoodie2026",

  // Secret code to reset all overrides
  RESET_ALL: "resetdev",
};

/**
 * Process secret code input
 * Returns true if code was valid and action taken
 */
export const processSecretCode = async (
  code: string,
): Promise<{ success: boolean; message: string }> => {
  if (!ENABLE_DEV_FEATURES) {
    return { success: false, message: "Secret codes disabled in production" };
  }

  const normalizedCode = code.trim().toLowerCase();

  switch (normalizedCode) {
    case SECRET_CODES.UNLOCK_PREMIUM.toLowerCase():
      await PremiumOverride.enable();
      return {
        success: true,
        message: "🔓 Premium unlocked! Restart app to see changes.",
      };

    case SECRET_CODES.RESET_ALL.toLowerCase():
      await PremiumOverride.disable();
      return {
        success: true,
        message: "🔄 All dev overrides reset!",
      };

    default:
      return {
        success: false,
        message: "Invalid code",
      };
  }
};

/**
 * Developer Menu Actions
 * Quick actions for common dev tasks
 */
export const DevActions = {
  /**
   * Clear all app storage (useful for testing fresh installs)
   */
  async clearAllStorage(): Promise<void> {
    if (!ENABLE_DEV_FEATURES) return;

    try {
      await AsyncStorage.clear();
      console.log("🗑️ DEV: All storage cleared");
    } catch (error) {
      console.error("Failed to clear storage:", error);
    }
  },

  /**
   * Print current storage state to console
   */
  async debugStorage(): Promise<void> {
    if (!ENABLE_DEV_FEATURES) return;

    try {
      const keys = await AsyncStorage.getAllKeys();
      const stores = await AsyncStorage.multiGet(keys);
      console.log("📦 DEV: Current Storage:", stores);
    } catch (error) {
      console.error("Failed to debug storage:", error);
    }
  },
};

export default {
  ENABLE_DEV_FEATURES,
  DevFeatures,
  PremiumOverride,
  SECRET_CODES,
  processSecretCode,
  isTesterAccount,
  DevActions,
};
