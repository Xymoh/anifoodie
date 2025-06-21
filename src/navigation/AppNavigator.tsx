import React from "react";
import { Text, ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Stack, Tab, RootStackParamList } from "./types";
import AnimalsScreen from "../screens/AnimalsScreen";
import FoodsScreen from "../screens/FoodsScreen";
import AnimalDetailScreen from "../screens/AnimalDetailScreen";
import FoodDetailScreen from "../screens/FoodDetailScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { colors, shadow } from "../styles";
import { useOnboarding } from "../hooks/useOnboarding";
import { useLanguage } from "../hooks/useLanguage";
import { useTranslations } from "../i18n/translations";

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

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.tabActive,
        tabBarInactiveTintColor: colors.tabInactive,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
          color: colors.gray800,
        },
        tabBarStyle: {
          backgroundColor: colors.gray200,
          borderTopWidth: 1,
          borderTopColor: colors.gray300,
          ...shadow.tab,
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
  );
};

export default AppNavigator;
