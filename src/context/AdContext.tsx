import React, { createContext, useContext, useState, ReactNode } from "react";

import { colors } from "../styles";

export interface AdConfig {
  isVisible: boolean;
  text: string;
  backgroundColor?: string;
  textColor?: string;
  height?: number;
  onPress?: () => void;
  showCloseButton?: boolean;
  autoHide?: boolean;
  autoHideDelay?: number;
}

interface AdContextType {
  adConfig: AdConfig;
  updateAdConfig: (config: Partial<AdConfig>) => void;
  showAd: () => void;
  hideAd: () => void;
}

const defaultAdConfig: AdConfig = {
  isVisible: true,
  text: "🐾 Unlock Premium Features - Get Detailed Nutrition Info!",
  backgroundColor: colors.primary,
  textColor: colors.white,
  height: 50,
  showCloseButton: false, // Non-closable like Google AdSense
  autoHide: false,
  autoHideDelay: 10000, // 10 seconds
};

const AdContext = createContext<AdContextType | undefined>(undefined);

export const AdProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [adConfig, setAdConfig] = useState<AdConfig>(defaultAdConfig);

  const updateAdConfig = React.useCallback((config: Partial<AdConfig>) => {
    setAdConfig((prev) => ({ ...prev, ...config }));
  }, []);

  const showAd = React.useCallback(() => {
    setAdConfig((prev) => ({ ...prev, isVisible: true }));
  }, []);

  const hideAd = React.useCallback(() => {
    setAdConfig((prev) => ({ ...prev, isVisible: false }));
  }, []);

  const value = React.useMemo(
    () => ({
      adConfig,
      updateAdConfig,
      showAd,
      hideAd,
    }),
    [adConfig, updateAdConfig, showAd, hideAd]
  );

  return <AdContext.Provider value={value}>{children}</AdContext.Provider>;
};

export const useAd = (): AdContextType => {
  const context = useContext(AdContext);
  if (!context) {
    throw new Error("useAd must be used within an AdProvider");
  }
  return context;
};
