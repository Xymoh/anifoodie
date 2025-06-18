// External dependencies
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

// Internal dependencies
import { colors, spacing, typography, shadow } from "../styles";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const SearchBar = ({
  value,
  onChangeText,
  placeholder = "Search...",
}: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
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
