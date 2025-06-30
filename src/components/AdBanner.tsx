import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Dimensions,
  Animated,
} from "react-native";

import { colors, spacing, typography, shadow } from "../styles";
import { useAd } from "../context/AdContext";

interface AdBannerProps {
  onPress?: () => void;
  adText?: string;
  backgroundColor?: string;
  textColor?: string;
  height?: number;
  isVisible?: boolean;
  showCloseButton?: boolean;
}

const AdBanner: React.FC<AdBannerProps> = ({
  onPress,
  adText = "Support AniFood - Premium Features Available! 🐾",
  backgroundColor = colors.primary,
  textColor = colors.white,
  height = 50,
  isVisible = true,
  showCloseButton = true,
}) => {
  const screenWidth = Dimensions.get("window").width;
  const { hideAd } = useAd();
  const fadeAnim = React.useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      // Default action - could link to app store, website, etc.
      Linking.openURL("https://example.com/anifood-premium");
    }
  };

  const handleClose = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      hideAd();
    });
  };

  React.useEffect(() => {
    if (isVisible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible, fadeAnim]);

  if (!isVisible) {
    return null;
  }

  return (
    <Animated.View style={{ opacity: fadeAnim }}>
      <TouchableOpacity
        style={[
          styles.container,
          {
            backgroundColor,
            height,
            width: screenWidth,
          },
        ]}
        onPress={handlePress}
        activeOpacity={0.8}
      >
        <View style={styles.content}>
          <View style={styles.adLabel}>
            <Text style={styles.adLabelText}>Ad</Text>
          </View>
          <Text
            style={[styles.adText, { color: textColor }]}
            numberOfLines={2}
            adjustsFontSizeToFit
          >
            {adText}
          </Text>
          <Text style={[styles.chevron, { color: textColor }]}>›</Text>
        </View>
        {showCloseButton && (
          <TouchableOpacity
            style={styles.closeButton}
            onPress={handleClose}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Text style={[styles.closeText, { color: textColor }]}>×</Text>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: spacing.md,
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.2)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
    ...shadow.small,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 400,
  },
  adLabel: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: spacing.xs + 2,
    paddingVertical: spacing.xs - 2,
    borderRadius: 4,
    marginRight: spacing.sm,
  },
  adLabelText: {
    fontSize: 10,
    fontWeight: typography.fontWeight.bold as "700",
    color: "rgba(255,255,255,0.8)",
    textTransform: "uppercase",
  },
  adText: {
    fontSize: typography.fontSize.medium,
    fontWeight: typography.fontWeight.medium as "500",
    textAlign: "center",
    flex: 1,
    marginRight: spacing.sm,
  },
  chevron: {
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.bold as "700",
    opacity: 0.8,
  },
  closeButton: {
    position: "absolute",
    top: 4,
    right: 8,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 12,
  },
  closeText: {
    fontSize: typography.fontSize.large,
    fontWeight: "bold",
    lineHeight: typography.lineHeight.normal,
  },
});

export default AdBanner;
