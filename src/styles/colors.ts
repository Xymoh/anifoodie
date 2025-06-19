
/**
 * App color palette
 */
export const colors = {
  // Primary colors
  primary: '#3498db',
  primaryDark: '#2980b9',
  primaryLight: '#5dade2',

  // Secondary colors
  secondary: '#f1c40f',
  secondaryDark: '#f39c12',
  secondaryLight: '#f9e79f',

  // Status colors
  success: '#2ecc71',
  warning: '#f39c12',
  error: '#e74c3c',
  info: '#3498db',

  // Neutral colors
  white: '#ffffff',
  black: '#000000',
  
  // Grays
  gray100: '#f5f5f5',
  gray200: '#ecf0f1',
  gray300: '#dde4e6',
  gray400: '#bdc3c7',
  gray500: '#95a5a6',
  gray600: '#7f8c8d',
  gray700: '#34495e',
  gray800: '#2c3e50',
  gray900: '#1a2530',

  // Transparent colors
  transparent: 'transparent',
  semiTransparent: 'rgba(0, 0, 0, 0.1)',
};

// Semantic color assignments
export const semanticColors = {
  // Text
  textPrimary: colors.gray800,
  textSecondary: colors.gray600,
  textMuted: colors.gray500,
  textLight: colors.white,

  // Backgrounds
  background: colors.gray100,
  card: colors.white,
  header: colors.white,

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
