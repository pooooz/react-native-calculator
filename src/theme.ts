import {DefaultTheme} from 'styled-components';

import {ThemeColors, ThemeNames, ThemeScaleValues} from 'types/index';

const light: ThemeColors = {
  text: '#000000',
  dim: '#888888',
  background: '#FFFFFF',
  keypadSeparator: '#8C5888',
  digitButton: '#452842',
  operationButton: '#889100',
  clearButton: '#f85149',
  equal: '#f2ff00',
  historyItem: '#cbcbcb',
  barIndicator: '#1a64e5',
};

const dark: ThemeColors = {
  text: '#FFFFFF',
  dim: '#888888',
  background: '#242424',
  keypadSeparator: '#32cd32',
  digitButton: '#32cd32',
  operationButton: '#e57e0c',
  clearButton: '#f85149',
  equal: '#FF9500',
  historyItem: '#626262',
  barIndicator: '#888888',
};

const ultraviolet: ThemeColors = {
  text: '#FFFFFF',
  dim: '#888888',
  background: '#242424',
  keypadSeparator: '#4D38FC',
  digitButton: '#6715EB',
  operationButton: '#CD2553',
  clearButton: '#f85149',
  equal: '#651529',
  historyItem: '#626262',
  barIndicator: '#4D38FC',
};

const disco: ThemeColors = {
  text: '#FFD476',
  dim: '#888888',
  background: '#FDF6E3',
  keypadSeparator: '#6A1B1B',
  digitButton: '#461412',
  operationButton: '#D67739',
  clearButton: '#f85149',
  equal: '#6A1B1B',
  historyItem: '#4A5664',
  barIndicator: '#6A1B1B',
};

const colors = new Map<ThemeNames, ThemeColors>([
  ['light', light],
  ['disco', disco],
  ['dark', dark],
  ['ultraviolet', ultraviolet],
]);

export const fontSizes: ThemeScaleValues = {
  s: 16,
  m: 18,
  l: 24,
  xl: 32,
};

export const spaces: ThemeScaleValues = {
  s: 5,
  m: 8,
  l: 16,
  xl: 24,
};

export const getColoredTheme = (currentTheme: ThemeNames): DefaultTheme => ({
  colors: colors.get(currentTheme) || dark,
  fontSizes,
  spaces,
});
