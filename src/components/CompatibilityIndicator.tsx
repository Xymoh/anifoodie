import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface CompatibilityIndicatorProps {
  status: string;
}

const CompatibilityIndicator = ({ status }: CompatibilityIndicatorProps) => {
  let backgroundColor = "#2ecc71"; // Default green for allowed
  let statusText = "Allowed";

  if (status.includes("not allowed")) {
    backgroundColor = "#e74c3c"; // Red for not allowed
    statusText = "Not Allowed";
  } else if (status.includes("acceptable")) {
    backgroundColor = "#f39c12"; // Yellow for acceptable in small quantities
    statusText = status.includes("boiled")
      ? "Acceptable (Boiled)"
      : "Acceptable in Small Quantities";
  }

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.text}>{statusText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: "flex-start",
    marginTop: 4,
  },
  text: {
    color: "white",
    fontWeight: "600",
    fontSize: 12,
  },
});

export default CompatibilityIndicator;
