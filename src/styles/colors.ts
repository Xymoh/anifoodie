
/**
 * App color palette
 */
export const colors = {
  // Primary colors
  primary: '#0099CC',
  primaryDark: '#007799',
  primaryLight: '#33BBEE',

  // Secondary colors
  secondary: '#FF00FF',
  secondaryDark: '#CC00FF',
  secondaryLight: '#FF80FF',

  // Status colors
  success: '#00CC66',
  warning: '#E6B800',
  error: '#E63358',
  info: '#0099CC',

  // Neutral colors
  white: '#ffffff',
  black: '#000000',
  
  // Grays
  gray100: '#0A0A0A',
  gray200: '#1A1A1A',
  gray300: '#2C2C2C',
  gray400: '#444444',
  gray500: '#777777',
  gray600: '#999999',
  gray700: '#CCCCCC',
  gray800: '#E6E6E6',
  gray900: '#FAFAFA',

  // Transparent colors
  transparent: 'transparent',
  semiTransparent: 'rgba(0, 0, 0, 0.5)',
};

// Semantic color assignments
export const semanticColors = {
  // Text
  textPrimary: colors.gray900,
  textSecondary: colors.gray700,
  textMuted: colors.gray600,
  textLight: colors.white,

  // Backgrounds
  background: colors.gray100,
  card: colors.gray200,
  header: colors.gray100,

  // Status indicators
  statusAllowed: colors.success,
  statusAcceptable: colors.warning,
  statusNotAllowed: colors.error,

  // UI elements
  border: colors.gray300,
  shadow: colors.black,
  tabActive: colors.primary,
  tabInactive: colors.gray500,
  favorite: colors.secondary,
};

export default {
  ...colors,
  ...semanticColors,
};
