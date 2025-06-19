import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Stack, Tab, RootStackParamList, TabParamList } from "./types";
import AnimalsScreen from "../screens/AnimalsScreen";
import FoodsScreen from "../screens/FoodsScreen";
import AnimalDetailScreen from "../screens/AnimalDetailScreen";
import FoodDetailScreen from "../screens/FoodDetailScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import { SafeAreaView } from "react-native-safe-area-context";

// Create the Animals Stack
const AnimalsStack = createNativeStackNavigator<RootStackParamList>();
const AnimalsStackScreen = () => (
  <AnimalsStack.Navigator
    screenOptions={{
      headerShadowVisible: false,
      contentStyle: { backgroundColor: "#fff" },
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

// Create the Foods Stack
const FoodsStack = createNativeStackNavigator<RootStackParamList>();
const FoodsStackScreen = () => (
  <FoodsStack.Navigator
    screenOptions={{
      headerShadowVisible: false,
      contentStyle: { backgroundColor: "#fff" },
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

// Create the Favorites Stack
const FavoritesStack = createNativeStackNavigator<RootStackParamList>();
const FavoritesStackScreen = () => (
  <FavoritesStack.Navigator
    screenOptions={{
      headerShadowVisible: false,
      contentStyle: { backgroundColor: "#fff" },
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

// Main Tab Navigator
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#3498db",
        tabBarInactiveTintColor: "#95a5a6",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopWidth: 1,
          borderTopColor: "#ecf0f1",
          elevation: 8,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Animals"
        component={AnimalsStackScreen}
        options={{
          tabBarLabel: "Animals",
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size }}>🐶</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Foods"
        component={FoodsStackScreen}
        options={{
          tabBarLabel: "Foods",
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size }}>🍎</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesStackScreen}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size }}>⭐</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Root Stack Navigator
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
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
