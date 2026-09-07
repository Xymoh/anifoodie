import React from "react";
import { ActivityIndicator, View, Image } from "react-native";
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
import PrivacyPolicyScreen from "../screens/PrivacyPolicyScreen";
import PaywallScreen from "../screens/PaywallScreen";
import DeveloperMenu from "../screens/DeveloperMenu";
import { colors, shadow, spacing, typography } from "../styles";
import { useOnboarding } from "../hooks/useOnboarding";
import { useLanguage } from "../hooks/useLanguage";
import { useTranslations } from "../i18n/index";
import AdMobBanner from "../components/AdMobBanner";
import { FavoritesProvider } from "../context/FavoritesContext";
import { PurchaseProvider, usePurchases } from "../context/PurchaseContext";
import { DevFeatures } from "../utils/devFeatures";

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
  const insets = useSafeAreaInsets();
  const { isSubscribed } = usePurchases(); // Check if user has purchased ad removal

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
            marginTop: spacing.sm,
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
            tabBarIcon: ({ size }) => (
              <Image
                source={require("../../assets/icons/pets.png")}
                style={{ width: size * 2, height: size * 2 }}
                resizeMode="contain"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Foods"
          component={FoodsStackScreen}
          options={{
            tabBarLabel: t("foods"),
            tabBarIcon: ({ size }) => (
              <Image
                source={require("../../assets/icons/foods.png")}
                style={{ width: size * 2, height: size * 2 }}
                resizeMode="contain"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesStackScreen}
          options={{
            tabBarLabel: t("favorites"),
            tabBarIcon: ({ size }) => (
              <Image
                source={require("../../assets/icons/favorite.png")}
                style={{ width: size * 2, height: size * 2 }}
                resizeMode="contain"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsStackScreen}
          options={{
            tabBarLabel: t("settings"),
            tabBarIcon: ({ size }) => (
              <Image
                source={require("../../assets/icons/settings.png")}
                style={{ width: size * 2, height: size * 2 }}
                resizeMode="contain"
              />
            ),
          }}
        />
      </Tab.Navigator>

      {/* Only show AdMob Banner if user hasn't purchased ad removal */}
      {!isSubscribed && (
        <View style={{ backgroundColor: colors.gray200 }}>
          <AdMobBanner height={60} backgroundColor={colors.gray200} />

          {/* Safe area padding at the bottom to prevent system UI overlap */}
          <View
            style={{ height: insets.bottom, backgroundColor: colors.gray200 }}
          />
        </View>
      )}
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
    <PurchaseProvider>
      <FavoritesProvider>
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
            <Stack.Screen
              name="PrivacyPolicy"
              component={PrivacyPolicyScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Paywall"
              component={PaywallScreen}
              options={{
                headerShown: false,
                presentation: "modal",
              }}
            />
            {DevFeatures.SHOW_DEV_MENU && (
              <Stack.Screen
                name="DeveloperMenu"
                component={DeveloperMenu}
                options={{
                  headerShown: false,
                  presentation: "modal",
                }}
              />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesProvider>
    </PurchaseProvider>
  );
};

export default AppNavigator;
