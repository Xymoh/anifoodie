// External dependencies
import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  ViewStyle,
} from "react-native";

// Internal dependencies
import { colors, spacing, typography } from "../styles";

interface LoadingIndicatorProps {
  message?: string;
  containerStyle?: ViewStyle;
  size?: "small" | "large";
  color?: string;
}

const LoadingIndicator = ({
  message = "Loading...",
  containerStyle,
  size = "large",
  color = colors.primary,
}: LoadingIndicatorProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <ActivityIndicator size={size} color={color} />
      {message && <Text style={styles.message}>{message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  message: {
    marginTop: spacing.sm + 2,
    fontSize: typography.fontSize.regular,
    color: colors.textPrimary,
  },
});

export default LoadingIndicator;
