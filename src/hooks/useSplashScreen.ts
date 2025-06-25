import { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

// Keep the native splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export const useSplashScreen = () => {
  const [isReady, setIsReady] = useState(false);
  const [showCustomSplash, setShowCustomSplash] = useState(true);

  useEffect(() => {
    const prepare = async () => {
      try {
        // Simulate loading time for resources, fonts, etc.
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Hide the native splash screen
        await SplashScreen.hideAsync();
        
        setIsReady(true);
      } catch (e) {
        console.warn('Error preparing app:', e);
        setIsReady(true);
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, []);

  const hideCustomSplash = () => {
    console.log('hideCustomSplash called');
    setShowCustomSplash(false);
  };

  return {
    isReady,
    showCustomSplash,
    hideCustomSplash,
  };
};
