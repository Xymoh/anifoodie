import React from "react";
import { Text, TextProps } from "react-native";

import { useLanguage } from "../hooks/useLanguage";
import { useTranslations, TranslationKey } from "../i18n/translations";

interface TranslatedTextProps extends TextProps {
  translationKey: TranslationKey;
}

/**
 * A component that displays translated text based on the current language setting
 *
 * Example usage:
 * <TranslatedText translationKey="welcomeTitle" style={styles.title} />
 */
const TranslatedText: React.FC<TranslatedTextProps> = ({
  translationKey,
  children,
  ...props
}) => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);

  return (
    <Text {...props}>
      {t(translationKey)}
      {children}
    </Text>
  );
};

export default TranslatedText;
