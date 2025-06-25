import { Platform } from "react-native";

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
        testDeviceIdentifiers: ['EMULATOR'],
      });
    }
    
    console.log("AdMob initialized successfully");
  } catch (error) {
    console.error("Failed to initialize AdMob:", error);
  }
};

// Ad Unit IDs
export const AD_UNIT_IDS = {
  ios: {
    banner: "ca-app-pub-5706076003529829/7260810204",
  },
  android: {
    banner: "ca-app-pub-5706076003529829/3536622969",
  },
};

export const getBannerAdUnitId = () => {
  return Platform.OS === "ios" ? AD_UNIT_IDS.ios.banner : AD_UNIT_IDS.android.banner;
};
