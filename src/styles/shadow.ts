
/**
 * App shadow styles
 */
export const shadow = {
  small: {
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  medium: {
    elevation: 4,
    shadowColor: '#121218',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },
  large: {
    elevation: 8,
    shadowColor: '#121218',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 10,
  },
  tab: {
    elevation: 10,
    shadowColor: '#121218',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },
  // Colored shadows for special elements
  primary: {
    elevation: 6,
    shadowColor: '#00A5FF',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  secondary: {
    elevation: 6,
    shadowColor: '#B36DFF',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  }
};

export default shadow;
