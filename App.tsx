import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import AppNavigator from "./src/navigation/AppNavigator";
import { LanguageProvider } from "./src/hooks/useLanguage";
import SplashScreen from "./src/components/SplashScreen";
import { useSplashScreen } from "./src/hooks/useSplashScreen";

export default function App() {
  const { isReady, showCustomSplash, hideCustomSplash } = useSplashScreen();

  if (!isReady || showCustomSplash) {
    return <SplashScreen onFinish={hideCustomSplash} />;
  }

  return (
    <LanguageProvider>
      <SafeAreaProvider>
        <AppNavigator />
        <StatusBar style="light" />
      </SafeAreaProvider>
    </LanguageProvider>
  );
}
