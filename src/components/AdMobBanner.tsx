import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { colors, shadow, spacing, typography } from "../styles";
import { getBannerAdUnitId } from "../utils/adMobConfig";

// Storage key for test ads setting (same as DeveloperMenu)
const TEST_ADS_KEY = "@anifoodie_use_test_ads";

// Conditionally import AdMob components
let BannerAd: any = null;
let BannerAdSize: any = null;

try {
  const adMobModule = require("react-native-google-mobile-ads");
  BannerAd = adMobModule.BannerAd;
  BannerAdSize = adMobModule.BannerAdSize;
} catch (error) {
  console.log("Google Mobile Ads not available");
}

interface AdMobBannerProps {
  height?: number;
  backgroundColor?: string;
  adUnitId?: string;
  size?: any;
}

const AdMobBanner: React.FC<AdMobBannerProps> = ({
  height = 50,
  backgroundColor = colors.gray200,
  adUnitId,
  size,
}) => {
  const screenWidth = Dimensions.get("window").width;
  const [useTestAds, setUseTestAds] = useState<boolean | null>(null);

  useEffect(() => {
    loadTestAdsPreference();
  }, []);

  const loadTestAdsPreference = async () => {
    try {
      const value = await AsyncStorage.getItem(TEST_ADS_KEY);
      // If setting exists in storage, use it; otherwise use default from config
      if (value !== null) {
        setUseTestAds(value === "true");
      } else {
        setUseTestAds(null); // Will use default from AppConfig
      }
    } catch (error) {
      console.error("Failed to load test ads preference:", error);
      setUseTestAds(null); // Will use default from AppConfig
    }
  };

  const getAdUnitId = () => {
    if (adUnitId) return adUnitId;
    // Pass the test ads preference to getBannerAdUnitId
    // If null, it will use the default from .env
    return getBannerAdUnitId(useTestAds ?? undefined);
  };

  // If AdMob is not available, show a placeholder
  if (!BannerAd || !BannerAdSize) {
    return (
      <View
        style={[
          styles.container,
          { backgroundColor, height, width: screenWidth },
        ]}
      >
        <View style={styles.placeholderContainer}>
          <Text style={styles.placeholderText}>Ad Space</Text>
          <Text style={styles.placeholderSubtext}>
            AdMob not available in development
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View
      style={[
        styles.container,
        { backgroundColor, height, width: screenWidth },
      ]}
    >
      <BannerAd
        unitId={getAdUnitId()}
        size={size || BannerAdSize.BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: false,
        }}
        onAdLoaded={() => {
          console.log("AdMob Banner loaded");
        }}
        onAdFailedToLoad={(error: any) => {
          console.log("AdMob Banner failed to load:", error);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "rgba(0,0,0,0.1)",
    ...shadow.small,
  },
  placeholderContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: spacing.sm,
  },
  placeholderText: {
    fontSize: typography.fontSize.small,
    fontWeight: typography.fontWeight.bold as "700",
    color: colors.textSecondary,
    textAlign: "center",
  },
  placeholderSubtext: {
    fontSize: typography.fontSize.tiny,
    color: colors.textSecondary,
    textAlign: "center",
    marginTop: spacing.xs / 2,
  },
});

export default AdMobBanner;
