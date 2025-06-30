import React from "react";
import { StyleSheet, View } from "react-native";

import { colors, spacing } from "../styles";

interface CompatibilityIndicatorProps {
  status: string;
}

const CompatibilityIndicator = ({ status }: CompatibilityIndicatorProps) => {
  let backgroundColor = colors.statusAllowed; // Default green for allowed

  if (status.includes("not allowed")) {
    backgroundColor = colors.statusNotAllowed; // Red for not allowed
  } else if (status.includes("acceptable")) {
    backgroundColor = colors.statusAcceptable; // Yellow for acceptable in small quantities
  }

  return <View style={[styles.container, { backgroundColor }]} />;
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 16,
    borderRadius: 8,
    marginTop: spacing.xs,
  },
});

export default CompatibilityIndicator;
