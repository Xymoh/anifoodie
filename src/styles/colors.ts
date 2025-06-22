
/**
 * App color palette
 */
export const colors = {
  // Primary colors
  primary: '#00B8FF',
  primaryDark: '#0096CC',
  primaryLight: '#7ADFFF',

  // Secondary colorss
  secondary: '#C67BFF',
  secondaryDark: '#A14CFF',
  secondaryLight: '#E2BDFF',

  // Animal themed accent colors
  dogBrown: '#C18955',         // Brighter brown
  catOrange: '#FF8036',        // Vibrant orange
  rabbitPink: '#FF6EB5',       // Brighter pink
  chinchillaGray: '#A5A5D3',   // More colorful gray with purple tint
  parrotGreen: '#4DEA8C',      // Brighter green
  turtleGreen: '#33D6A6',      // Vibrant turtle green
  mouseGray: '#B8B8D8',        // Playful light purple-gray
  guineaPigBrown: '#D1A76A',   // Warm sandy brown

  // Status colors
  success: '#4BF0AA',          // Brighter fun green
  warning: '#FFD84C',          // Brighter yellow
  error: '#FF5E7A',            // Playful pink-red
  info: '#5DCFFF',             // Brighter light blue

  // Neutral colors
  white: '#ffffff',
  black: '#000000',
  
  // Grays
  gray100: '#18171F',          // Slightly purple-tinted black for background
  gray200: '#252336',          // Warmer dark purple-blue
  gray300: '#383652',          // Less harsh, slightly purple mid-dark
  gray400: '#4F4C6C',          // Purplish mid-dark
  gray500: '#8A87B3',          // Purplish mid-gray
  gray600: '#B0ADC9',          // Light purple-gray
  gray700: '#D8D6EE',          // Very light purple-gray
  gray800: '#EEEDF8',          // Almost white with slight purple tint
  gray900: '#FAFAFF',          // Almost white with hint of blue

  // Transparent colors
  transparent: 'transparent',
  semiTransparent: 'rgba(24, 23, 31, 0.75)', // Slightly more purplish and transparent
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
  shadow: 'rgba(0, 0, 0, 0.35)',
  tabActive: colors.primary,
  tabInactive: colors.gray500,
  favorite: colors.rabbitPink,
  
  // Animal categories (for potential use in UI)
  dogColor: colors.dogBrown,
  catColor: colors.catOrange,
  smallPetColor: colors.chinchillaGray,
  birdColor: colors.parrotGreen,
  reptileColor: colors.turtleGreen,
  
  // Card and item variations (for list items)
  cardHighlight: `${colors.primary}33`, // Semi-transparent primary color
  cardAlt: `${colors.secondary}25`,     // Light secondary background
};

export default {
  ...colors,
  ...semanticColors,
};
