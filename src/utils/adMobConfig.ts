import { AppConfig } from "../config/appConfig";

let mobileAds: any = null;
let MaxAdContentRating: any = null;

// Dynamically import AdMob only when available
try {
  const adMobModule = require("react-native-google-mobile-ads");
  mobileAds = adMobModule.default;
  MaxAdContentRating = adMobModule.MaxAdContentRating;
} catch (error) {
  console.log("Google Mobile Ads not available in this environment");
}

export const initializeAdMob = async () => {
  // Only initialize if AdMob is available
  if (!mobileAds) {
    console.log("AdMob not available - skipping initialization");
    return;
  }

  try {
    // Check if initialize method exists
    if (typeof mobileAds.initialize !== "function") {
      console.log(
        "AdMob initialize method not available - SDK may not be properly linked",
      );
      return;
    }

    await mobileAds.initialize();

    // Configure global ad settings
    if (MaxAdContentRating) {
      await mobileAds.setRequestConfiguration({
        // Update all future requests suitable for parental guidance
        maxAdContentRating: MaxAdContentRating.PG,

        // Indicates that you want your content treated as child-directed for purposes of COPPA.
        tagForChildDirectedTreatment: true,

        // Indicates that you want the ad request to be handled in a
        // manner suitable for users under the age of consent.
        tagForUnderAgeOfConsent: true,

        // An array of test device IDs to allow.
        testDeviceIdentifiers: ["EMULATOR"],
      });
    }

    console.log("AdMob initialized successfully");
  } catch (error) {
    console.error("Failed to initialize AdMob:", error);
  }
};

/**
 * Get Banner Ad Unit ID
 * Uses centralized AppConfig which reads from environment variables
 *
 * @param useTestAds - Optional override. If not provided, uses value from .env file
 * @returns The appropriate ad unit ID for the current platform
 */
export const getBannerAdUnitId = (useTestAds?: boolean): string => {
  return AppConfig.adMob.getBannerAdUnitId(useTestAds);
};

/**
 * Legacy export for backward compatibility
 * @deprecated Use AppConfig.adMob directly or getBannerAdUnitId()
 */
export const AD_UNIT_IDS = {
  get ios() {
    return {
      banner: AppConfig.adMob.productionAdUnits.ios.banner,
      testBanner: AppConfig.adMob.testAdUnits.ios.banner,
    };
  },
  get android() {
    return {
      banner: AppConfig.adMob.productionAdUnits.android.banner,
      testBanner: AppConfig.adMob.testAdUnits.android.banner,
    };
  },
};
