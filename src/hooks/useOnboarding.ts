import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WELCOME_SCREEN_VIEWED_KEY = 'welcome_screen_viewed';

export const useOnboarding = () => {
  const [hasViewedWelcomeScreen, setHasViewedWelcomeScreen] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load welcome screen status from storage
  useEffect(() => {
    const loadWelcomeStatus = async () => {
      try {
        const value = await AsyncStorage.getItem(WELCOME_SCREEN_VIEWED_KEY);
        setHasViewedWelcomeScreen(value === 'true');
      } catch (error) {
        console.error('Error loading welcome screen status:', error);
        setHasViewedWelcomeScreen(false);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadWelcomeStatus();
  }, []);

  // Mark welcome screen as viewed
  const setWelcomeScreenAsViewed = async () => {
    try {
      await AsyncStorage.setItem(WELCOME_SCREEN_VIEWED_KEY, 'true');
      setHasViewedWelcomeScreen(true);
    } catch (error) {
      console.error('Error saving welcome screen status:', error);
    }
  };

  return {
    hasViewedWelcomeScreen,
    isLoading,
    setWelcomeScreenAsViewed,
  };
};
