import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

import { colors, spacing, typography, shadow } from "../styles";
import { useLanguage } from "../hooks/useLanguage";
import { useTranslations, TranslationKey } from "../i18n/index";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  placeholderTranslationKey?: TranslationKey;
}

const SearchBar = ({
  value,
  onChangeText,
  placeholder = "Search...",
  placeholderTranslationKey,
}: SearchBarProps) => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);

  // Use translation key if provided, otherwise use the placeholder string
  const displayPlaceholder = placeholderTranslationKey
    ? t(placeholderTranslationKey)
    : placeholder;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={displayPlaceholder}
        placeholderTextColor={colors.textMuted}
        clearButtonMode="while-editing"
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    borderRadius: spacing.radiusMedium,
    marginHorizontal: spacing.md,
    marginBottom: spacing.md,
    ...shadow.small,
  },
  input: {
    padding: spacing.sm + 4,
    fontSize: typography.fontSize.regular,
    color: colors.textPrimary,
  },
});

export default SearchBar;
