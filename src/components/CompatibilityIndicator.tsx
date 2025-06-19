// External dependencies
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Internal dependencies
import { colors, spacing, typography } from "../styles";

interface CompatibilityIndicatorProps {
  status: string;
}

const CompatibilityIndicator = ({ status }: CompatibilityIndicatorProps) => {
  let backgroundColor = colors.statusAllowed; // Default green for allowed
  let statusText = "Allowed";

  if (status.includes("not allowed")) {
    backgroundColor = colors.statusNotAllowed; // Red for not allowed
    statusText = "Not Allowed";
  } else if (status.includes("acceptable")) {
    backgroundColor = colors.statusAcceptable; // Yellow for acceptable in small quantities
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
    paddingHorizontal: spacing.sm + 4,
    paddingVertical: spacing.xs + 2,
    borderRadius: spacing.radiusRound,
    alignSelf: "flex-start",
    marginTop: spacing.xs,
  },
  text: {
    color: colors.textLight,
    fontWeight: typography.fontWeight.semiBold as "600",
    fontSize: typography.fontSize.small,
  },
});

export default CompatibilityIndicator;
