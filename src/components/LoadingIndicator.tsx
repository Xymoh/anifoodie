import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  ViewStyle,
} from "react-native";

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
  color = "#3498db",
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
    backgroundColor: "#f5f5f5",
  },
  message: {
    marginTop: 10,
    fontSize: 16,
    color: "#2c3e50",
  },
});

export default LoadingIndicator;
