import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AnimalName } from '../types';

// Define the stack navigation parameter types
export type RootStackParamList = {
  Welcome: undefined;
  Main: undefined;
  AnimalDetail: { animalName: AnimalName };
  FoodDetail: { foodName: string };
};

// Define the tab navigation parameter types
export type TabParamList = {
  Animals: undefined;
  Foods: undefined;
  Favorites: undefined;
};

// Create the navigators
export const Stack = createNativeStackNavigator<RootStackParamList>();
export const Tab = createBottomTabNavigator<TabParamList>();
