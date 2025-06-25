import React from "react";
import { View, StyleSheet } from "react-native";

import { colors } from "../styles";
import AdBanner from "../components/AdBanner";
import { useAd } from "../context/AdContext";

interface MainScreenWrapperProps {
  children?: React.ReactNode;
}

const MainScreenWrapper: React.FC<MainScreenWrapperProps> = ({ children }) => {
  const { adConfig } = useAd();

  return (
    <>
      {children && <View style={styles.content}>{children}</View>}
      {adConfig.isVisible && (
        <View style={styles.adContainer}>
          <AdBanner
            adText={adConfig.text}
            onPress={adConfig.onPress}
            backgroundColor={adConfig.backgroundColor}
            textColor={adConfig.textColor}
            height={adConfig.height}
            isVisible={adConfig.isVisible}
            showCloseButton={adConfig.showCloseButton}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
  },
  adContainer: {
    backgroundColor: colors.primary,
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.1)",
  },
});

export default MainScreenWrapper;
