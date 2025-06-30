import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { RouteProp } from "@react-navigation/native";

import { RootStackParamList } from "../navigation/types";
import { colors, spacing, typography, shadow } from "../styles";
import { useOnboarding } from "../hooks/useOnboarding";
import { useLanguage } from "../hooks/useLanguage";
import { useTranslations } from "../i18n/index";
import TranslatedText from "../components/TranslatedText";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Welcome">;
type WelcomeScreenRouteProp = RouteProp<RootStackParamList, "Welcome">;

const WelcomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<WelcomeScreenRouteProp>();
  const { setWelcomeScreenAsViewed } = useOnboarding();
  const { language } = useLanguage();
  const { t } = useTranslations(language);

  // Check if this is the initial welcome screen or navigated from settings
  const isFromSettings = route.params?.fromSettings;

  const handleUnderstand = () => {
    if (isFromSettings) {
      navigation.goBack();
    } else {
      setWelcomeScreenAsViewed();
      navigation.navigate("Main");
    }
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      {isFromSettings && (
        <View style={styles.backButtonContainer}>
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
        </View>
      )}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TranslatedText style={styles.title} translationKey="welcomeTitle" />
          <TranslatedText
            style={styles.subtitle}
            translationKey="welcomeDescription"
          />
        </View>

        <View style={styles.section}>
          <TranslatedText
            style={styles.sectionTitle}
            translationKey="howItWorks"
          />
          <TranslatedText
            style={styles.text}
            translationKey="welcomeExplanation"
          />
        </View>

        <View style={styles.featureSection}>
          <View style={styles.feature}>
            <Image
              source={require("../../assets/animals/dog.png")}
              style={styles.featureImage}
              resizeMode="contain"
            />
            <TranslatedText
              style={styles.featureTitle}
              translationKey="searchByAnimal"
            />
            <TranslatedText
              style={styles.featureText}
              translationKey="searchByAnimalDescription"
            />
          </View>

          <View style={styles.feature}>
            <Text style={styles.emoji}>🍎</Text>
            <TranslatedText
              style={styles.featureTitle}
              translationKey="searchByFood"
            />
            <TranslatedText
              style={styles.featureText}
              translationKey="searchByFoodDescription"
            />
          </View>
        </View>

        <View style={styles.section}>
          <TranslatedText
            style={styles.sectionTitle}
            translationKey="colorKey"
          />
          <View style={styles.colorKey}>
            <View
              style={[
                styles.colorIndicator,
                { backgroundColor: colors.success },
              ]}
            />
            <TranslatedText
              style={styles.colorKeyText}
              translationKey="safeToEat"
            />
          </View>
          <View style={styles.colorKey}>
            <View
              style={[
                styles.colorIndicator,
                { backgroundColor: colors.statusAcceptable },
              ]}
            />
            <TranslatedText
              style={styles.colorKeyText}
              translationKey="acceptableInSmallQuantities"
            />
          </View>
          <View style={styles.colorKey}>
            <View
              style={[
                styles.colorIndicator,
                { backgroundColor: colors.statusNotAllowed },
              ]}
            />
            <TranslatedText
              style={styles.colorKeyText}
              translationKey="notAllowedUnsafe"
            />
          </View>
        </View>

        <View style={styles.section}>
          <TranslatedText
            style={styles.sectionTitle}
            translationKey="boiledIconTitle"
          />
          <View style={styles.boiledIconContainer}>
            <View style={styles.boiledIconExample}>
              <View style={styles.foodIconContainer}>
                <Text style={styles.foodIconText}>🥔</Text>
                <View style={styles.boilIconOverlay}>
                  <Image
                    source={require("../../assets/icons/boil.png")}
                    style={styles.boilIcon}
                    resizeMode="contain"
                  />
                </View>
              </View>
            </View>
            <TranslatedText
              style={styles.boiledIconText}
              translationKey="boiledIconDescription"
            />
          </View>
        </View>

        <View style={styles.disclaimer}>
          <TranslatedText
            style={styles.disclaimerTitle}
            translationKey="disclaimer"
          />
          <TranslatedText
            style={styles.disclaimerText}
            translationKey="disclaimerText"
          />
        </View>
      </ScrollView>

      <Pressable style={styles.button} onPress={handleUnderstand}>
        <TranslatedText
          style={styles.buttonText}
          translationKey="iUnderstand"
        />
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    padding: spacing.md,
  },
  header: {
    alignItems: "center",
    marginBottom: spacing.lg + 6,
    marginTop: spacing.md,
  },
  title: {
    fontSize: typography.fontSize.huge,
    fontWeight: typography.fontWeight.bold as "700",
    color: colors.primary,
    marginBottom: spacing.sm + 2,
    textShadowColor: "rgba(0, 165, 255, 0.3)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 6,
  },
  subtitle: {
    fontSize: typography.fontSize.xl,
    color: colors.textSecondary,
    textAlign: "center",
  },
  section: {
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold as "700",
    color: colors.primaryLight,
    marginBottom: spacing.sm + 2,
  },
  text: {
    fontSize: typography.fontSize.regular,
    color: colors.textPrimary,
    lineHeight: typography.lineHeight.normal * typography.fontSize.regular,
  },
  featureSection: {
    flexDirection: "column",
    marginBottom: spacing.lg,
  },
  feature: {
    backgroundColor: colors.card,
    borderRadius: spacing.radiusMedium,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
    ...shadow.medium,
  },
  emoji: {
    fontSize: typography.fontSize.huge + 8,
    marginBottom: spacing.sm + 2,
  },
  featureImage: {
    width: 80,
    height: 60,
    alignSelf: "flex-start",
    marginBottom: spacing.sm + 2,
  },
  featureTitle: {
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.bold as "700",
    color: colors.primaryLight,
    marginBottom: spacing.xs + 1,
  },
  featureText: {
    fontSize: typography.fontSize.medium,
    color: colors.textPrimary,
    lineHeight: typography.lineHeight.normal * typography.fontSize.medium,
  },
  colorKey: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.sm + 2,
  },
  colorIndicator: {
    width: spacing.md + 4,
    height: spacing.md + 4,
    borderRadius: spacing.radiusSmall,
    marginRight: spacing.sm + 2,
  },
  colorKeyText: {
    fontSize: typography.fontSize.regular,
    color: colors.textPrimary,
  },
  disclaimer: {
    backgroundColor: `${colors.gray300}55`,
    padding: spacing.md,
    borderRadius: spacing.radiusMedium,
    marginBottom: spacing.xl + 28,
    borderWidth: 1,
    borderColor: colors.gray400,
  },
  disclaimerTitle: {
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.bold as "700",
    color: colors.warning,
    marginBottom: spacing.xs + 4,
  },
  disclaimerText: {
    fontSize: typography.fontSize.medium,
    color: colors.textPrimary,
    lineHeight: typography.lineHeight.normal * typography.fontSize.medium,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    borderRadius: spacing.radiusMedium,
    marginHorizontal: spacing.md,
    marginBottom: spacing.lg + 6,
    alignItems: "center",
    ...shadow.primary,
  },
  buttonText: {
    color: colors.white,
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.bold as "700",
  },
  boiledIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    padding: spacing.md,
    borderRadius: spacing.radiusMedium,
    borderLeftWidth: 4,
    borderLeftColor: colors.warning,
    ...shadow.small,
  },
  boiledIconExample: {
    marginRight: spacing.md,
    position: "relative",
  },
  foodIconContainer: {
    width: 60,
    height: 60,
    backgroundColor: `${colors.parrotGreen}CC`,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.15)",
    position: "relative",
  },
  foodIconText: {
    fontSize: 32,
  },
  boilIconOverlay: {
    position: "absolute",
    bottom: -4,
    right: -4,
    backgroundColor: colors.white,
    borderRadius: spacing.radiusSmall,
    padding: 2,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  boilIcon: {
    width: 16,
    height: 16,
  },
  boiledIconText: {
    fontSize: typography.fontSize.medium,
    color: colors.textPrimary,
    lineHeight: typography.lineHeight.normal * typography.fontSize.medium,
    flex: 1,
  },
  backButtonContainer: {
    position: "absolute",
    top: spacing.xl + spacing.lg,
    left: spacing.md,
    zIndex: 10,
  },
  backButton: {
    padding: spacing.sm,
  },
  backButtonText: {
    fontSize: 24,
    color: colors.textPrimary,
  },
});

export default WelcomeScreen;
