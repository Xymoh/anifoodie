import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";

import { colors, shadow, spacing, typography } from "../styles";
import { getBannerAdUnitId } from "../utils/adMobConfig";

// Conditionally import AdMob components
let BannerAd: any = null;
let BannerAdSize: any = null;
let TestIds: any = null;

try {
  const adMobModule = require("react-native-google-mobile-ads");
  BannerAd = adMobModule.BannerAd;
  BannerAdSize = adMobModule.BannerAdSize;
  TestIds = adMobModule.TestIds;
} catch (error) {
  console.log("Google Mobile Ads not available");
}

interface AdMobBannerProps {
  height?: number;
  backgroundColor?: string;
  adUnitId?: string;
  size?: any; // Using any since BannerAdSize might not be available
}

const AdMobBanner: React.FC<AdMobBannerProps> = ({
  height = 50,
  backgroundColor = colors.gray200,
  adUnitId,
  size,
}) => {
  const screenWidth = Dimensions.get("window").width;

  // Use test ad unit IDs for development
  const getAdUnitId = () => {
    if (adUnitId) return adUnitId;
    return getBannerAdUnitId();
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
