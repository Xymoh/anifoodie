import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors, spacing, typography } from "../styles";

interface SplashScreenProps {
  onFinish?: () => void;
  duration?: number;
}

const SplashScreen: React.FC<SplashScreenProps> = ({
  onFinish,
  duration = 2500,
}) => {
  const fadeInLogo = useRef(new Animated.Value(0)).current;
  const fadeInText = useRef(new Animated.Value(0)).current;
  const slideUpSubtext = useRef(new Animated.Value(50)).current;
  const fadeInSubtext = useRef(new Animated.Value(0)).current;
  const scaleAnimation = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    const startAnimations = () => {
      // Logo fade in and scale
      Animated.parallel([
        Animated.timing(fadeInLogo, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnimation, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ]).start();

      // App name fade in (delayed)
      setTimeout(() => {
        Animated.timing(fadeInText, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }).start();
      }, 400);

      // Subtitle slide up and fade in (more delayed)
      setTimeout(() => {
        Animated.parallel([
          Animated.timing(slideUpSubtext, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(fadeInSubtext, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ]).start();
      }, 800);

      // Finish splash screen
      setTimeout(() => {
        if (onFinish) {
          onFinish();
        }
      }, duration);
    };

    startAnimations();
  }, [
    fadeInLogo,
    fadeInText,
    slideUpSubtext,
    fadeInSubtext,
    scaleAnimation,
    duration,
    onFinish,
  ]);

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <View style={styles.content}>
        {/* Animated Logo */}
        <Animated.View
          style={[
            styles.logoContainer,
            {
              opacity: fadeInLogo,
              transform: [{ scale: scaleAnimation }],
            },
          ]}
        >
          <Image
            source={require("../../assets/icons/icon.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </Animated.View>

        {/* App Name */}
        <Animated.View
          style={[
            styles.textContainer,
            {
              opacity: fadeInText,
            },
          ]}
        >
          <Text style={styles.appName}>PetPlate</Text>
        </Animated.View>

        {/* Subtitle */}
        <Animated.View
          style={[
            styles.subtitleContainer,
            {
              opacity: fadeInSubtext,
              transform: [{ translateY: slideUpSubtext }],
            },
          ]}
        >
          <Text style={styles.subtitle}>Smart Pet Nutrition Guide</Text>
          <Text style={styles.tagline}>Keep your pets safe & healthy</Text>
        </Animated.View>

        {/* Loading Animation */}
        <Animated.View
          style={[
            styles.loadingContainer,
            {
              opacity: fadeInSubtext,
            },
          ]}
        >
          <View style={styles.loadingDots}>
            <LoadingDot delay={0} />
            <LoadingDot delay={200} />
            <LoadingDot delay={400} />
          </View>
        </Animated.View>
      </View>

      {/* Brand Footer */}
      <Animated.View
        style={[
          styles.footer,
          {
            opacity: fadeInSubtext,
          },
        ]}
      >
        <Text style={styles.footerText}>Powered by Pet Lovers</Text>
      </Animated.View>
    </SafeAreaView>
  );
};

// Loading dot component with staggered animation
const LoadingDot: React.FC<{ delay: number }> = ({ delay }) => {
  const opacity = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    const animate = () => {
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 400,
          useNativeDriver: true,
        }),
      ]).start(() => animate());
    };

    setTimeout(() => animate(), delay);
  }, [opacity, delay]);

  return <Animated.View style={[styles.dot, { opacity }]} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
  },
  logoContainer: {
    marginBottom: spacing.xl,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  logo: {
    width: 120,
    height: 120,
  },
  textContainer: {
    alignItems: "center",
    marginBottom: spacing.lg,
  },
  appName: {
    fontSize: typography.fontSize.huge + 8,
    fontWeight: typography.fontWeight.bold as "700",
    color: colors.primary,
    textAlign: "center",
    letterSpacing: 1,
    textShadowColor: "rgba(0, 165, 255, 0.3)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  subtitleContainer: {
    alignItems: "center",
    marginBottom: spacing.xl + spacing.lg,
  },
  subtitle: {
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.semiBold as "600",
    color: colors.textPrimary,
    textAlign: "center",
    marginBottom: spacing.xs,
  },
  tagline: {
    fontSize: typography.fontSize.medium,
    color: colors.textSecondary,
    textAlign: "center",
    fontStyle: "italic",
  },
  loadingContainer: {
    alignItems: "center",
  },
  loadingDots: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
    marginHorizontal: spacing.xs,
  },
  footer: {
    alignItems: "center",
    paddingBottom: spacing.lg,
  },
  footerText: {
    fontSize: typography.fontSize.small,
    color: colors.textMuted,
    textAlign: "center",
  },
});

export default SplashScreen;
