import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors, spacing, typography } from "../styles";
import { useLanguage } from "../hooks/useLanguage";
import { useTranslations } from "../i18n/translations";
import TranslatedText from "./TranslatedText";

interface CompatibilityIndicatorProps {
  status: string;
}

const CompatibilityIndicator = ({ status }: CompatibilityIndicatorProps) => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);

  let backgroundColor = colors.statusAllowed; // Default green for allowed
  let statusText = t("safeToEat");

  if (status.includes("not allowed")) {
    backgroundColor = colors.statusNotAllowed; // Red for not allowed
    statusText = t("notAllowedUnsafe");
  } else if (status.includes("acceptable")) {
    backgroundColor = colors.statusAcceptable; // Yellow for acceptable in small quantities
    statusText = status.includes("boiled")
      ? `${t("acceptableInSmallQuantities")} (${t("boiled")})`
      : t("acceptableInSmallQuantities");
  }

  // For boiled status, we need to conditionally render two TranslatedText components
  const isBoiledStatus = status.includes("boiled");

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {!isBoiledStatus ? (
        <Text style={styles.text}>{statusText}</Text>
      ) : (
        <View style={styles.textRow}>
          <TranslatedText
            style={styles.text}
            translationKey="acceptableInSmallQuantities"
          />
          <Text style={styles.text}> (</Text>
          <TranslatedText style={styles.text} translationKey="boiled" />
          <Text style={styles.text}>)</Text>
        </View>
      )}
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
  textRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CompatibilityIndicator;
