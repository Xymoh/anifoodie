import React from "react";
import { Text, ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Stack, Tab, RootStackParamList } from "./types";
import AnimalsScreen from "../screens/AnimalsScreen";
import FoodsScreen from "../screens/FoodsScreen";
import AnimalDetailScreen from "../screens/AnimalDetailScreen";
import FoodDetailScreen from "../screens/FoodDetailScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { colors, shadow, spacing, typography } from "../styles";
import { useOnboarding } from "../hooks/useOnboarding";
import { useLanguage } from "../hooks/useLanguage";
import { useTranslations } from "../i18n/translations";
import AdBanner from "../components/AdBanner";
import { AdProvider, useAd } from "../context/AdContext";

const AnimalsStack = createNativeStackNavigator<RootStackParamList>();
const AnimalsStackScreen = () => (
  <AnimalsStack.Navigator
    screenOptions={{
      headerShadowVisible: false,
      contentStyle: { backgroundColor: colors.background },
    }}
  >
    <AnimalsStack.Screen
      name="Main"
      component={AnimalsScreen}
      options={{ headerShown: false }}
    />
    <AnimalsStack.Screen
      name="AnimalDetail"
      component={AnimalDetailScreen}
      options={{ headerShown: false }}
    />
    <AnimalsStack.Screen
      name="FoodDetail"
      component={FoodDetailScreen}
      options={{ headerShown: false }}
    />
  </AnimalsStack.Navigator>
);

const FoodsStack = createNativeStackNavigator<RootStackParamList>();
const FoodsStackScreen = () => (
  <FoodsStack.Navigator
    screenOptions={{
      headerShadowVisible: false,
      contentStyle: { backgroundColor: colors.background },
    }}
  >
    <FoodsStack.Screen
      name="Main"
      component={FoodsScreen}
      options={{ headerShown: false }}
    />
    <FoodsStack.Screen
      name="AnimalDetail"
      component={AnimalDetailScreen}
      options={{ headerShown: false }}
    />
    <FoodsStack.Screen
      name="FoodDetail"
      component={FoodDetailScreen}
      options={{ headerShown: false }}
    />
  </FoodsStack.Navigator>
);

const FavoritesStack = createNativeStackNavigator<RootStackParamList>();
const FavoritesStackScreen = () => (
  <FavoritesStack.Navigator
    screenOptions={{
      headerShadowVisible: false,
      contentStyle: { backgroundColor: colors.background },
    }}
  >
    <FavoritesStack.Screen
      name="Main"
      component={FavoritesScreen}
      options={{ headerShown: false }}
    />
    <FavoritesStack.Screen
      name="AnimalDetail"
      component={AnimalDetailScreen}
      options={{ headerShown: false }}
    />
    <FavoritesStack.Screen
      name="FoodDetail"
      component={FoodDetailScreen}
      options={{ headerShown: false }}
    />
  </FavoritesStack.Navigator>
);

const SettingsStack = createNativeStackNavigator<RootStackParamList>();
const SettingsStackScreen = () => (
  <SettingsStack.Navigator
    screenOptions={{
      headerShadowVisible: false,
      contentStyle: { backgroundColor: colors.background },
    }}
  >
    <SettingsStack.Screen
      name="Main"
      component={SettingsScreen}
      options={{ headerShown: false }}
    />
  </SettingsStack.Navigator>
);

const TabNavigator = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  const { updateAdConfig, adConfig } = useAd();
  const insets = useSafeAreaInsets();

  const ads = React.useMemo(
    () => [
      "🐾 Unlock Premium Features - Get Detailed Nutrition Info!",
      "📊 Premium Analytics - Track Your Pet's Diet History!",
      "🔔 Get Notifications for New Food Safety Updates!",
      "💎 Remove Ads & Support AniFood Development!",
      "🎯 Personalized Pet Recommendations Available!",
      "🌟 Join 10,000+ Pet Parents Using AniFood Premium!",
      "🏆 Rated #1 Pet Nutrition App - Upgrade Today!",
      "💪 Advanced Diet Plans for Your Pet's Health!",
    ],
    []
  );

  React.useEffect(() => {
    // Rotate ads every 30 seconds
    let currentAdIndex = 0;

    const updateAd = () => {
      updateAdConfig({
        text: ads[currentAdIndex],
        showCloseButton: false, // Make ads non-closable like Google AdSense
        onPress: () => {
          console.log("Ad pressed! Navigate to premium features");
          // Example: Linking.openURL("https://apps.apple.com/app/anifood-premium");
        },
      });
      currentAdIndex = (currentAdIndex + 1) % ads.length;
    };

    updateAd();
    const adInterval = setInterval(updateAd, 30000); // Change every 30 seconds

    return () => clearInterval(adInterval);
  }, [ads]);

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.tabActive,
          tabBarInactiveTintColor: colors.tabInactive,
          tabBarLabelStyle: {
            fontSize: typography.fontSize.small,
            fontWeight: "500",
            color: colors.gray800,
            marginBottom: spacing.xs,
          },
          tabBarStyle: {
            backgroundColor: colors.gray200,
            borderTopWidth: 1,
            borderTopColor: colors.gray300,
            height: 90,
            paddingBottom: spacing.sm,
            paddingTop: spacing.sm,
            ...shadow.tab,
          },
          tabBarItemStyle: {
            paddingVertical: spacing.sm,
          },
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Animals"
          component={AnimalsStackScreen}
          options={{
            tabBarLabel: t("animals"),
            tabBarIcon: ({ color, size }) => (
              <Text style={{ color, fontSize: size }}>🐶</Text>
            ),
          }}
        />
        <Tab.Screen
          name="Foods"
          component={FoodsStackScreen}
          options={{
            tabBarLabel: t("foods"),
            tabBarIcon: ({ color, size }) => (
              <Text style={{ color, fontSize: size }}>🍎</Text>
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesStackScreen}
          options={{
            tabBarLabel: t("favorites"),
            tabBarIcon: ({ color, size }) => (
              <Text style={{ color, fontSize: size }}>⭐</Text>
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsStackScreen}
          options={{
            tabBarLabel: t("settings"),
            tabBarIcon: ({ color, size }) => (
              <Text style={{ color, fontSize: size }}>⚙️</Text>
            ),
          }}
        />
      </Tab.Navigator>

      {/* Ad Banner positioned below the tab navigator */}
      <View style={{ backgroundColor: colors.gray200 }}>
        {/* Custom Ad Banner - Currently used for development */}
        {adConfig.isVisible && (
          <AdBanner
            adText={adConfig.text}
            onPress={adConfig.onPress}
            backgroundColor={colors.primary}
            textColor={colors.white}
            height={adConfig.height}
            isVisible={adConfig.isVisible}
            showCloseButton={adConfig.showCloseButton}
          />
        )}
        
        {/* Safe area padding at the bottom to prevent system UI overlap */}
        <View
          style={{ height: insets.bottom, backgroundColor: colors.gray200 }}
        />
      </View>
    </View>
  );
};

const AppNavigator = () => {
  const { hasViewedWelcomeScreen, isLoading } = useOnboarding();

  // Show loading spinner while checking if user has seen welcome screen
  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.background,
        }}
      >
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <AdProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={hasViewedWelcomeScreen ? "Main" : "Welcome"}
        >
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Main"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AdProvider>
  );
};

export default AppNavigator;
