import {DefaultTheme} from 'styled-components';

const light = {
  text: '#000000',
  dim: '#888888',
  background: '#FFFFFF',
  keypadSeparator: '#32cd32',
  digitButton: '#32cd32',
  operationButton: '#e57e0c',
  clearButton: '#f85149',
  equal: '#F2F2F2',
  historyItem: '#626262',
};

const dark = {
  text: '#FFFFFF',
  dim: '#888888',
  background: '#242424',
  keypadSeparator: '#32cd32',
  digitButton: '#32cd32',
  operationButton: '#e57e0c',
  clearButton: '#f85149',
  equal: '#FF9500',
  historyItem: '#626262',
};

const colors = {
  light,
  dark,
};

export const fontSizes = {
  s: 16,
  m: 18,
  l: 24,
  xl: 32,
};

export const spaces = {
  s: 5,
  m: 8,
  l: 16,
  xl: 24,
};

export const getColoredTheme = (currentTheme: ThemeColors): DefaultTheme => ({
  colors: colors[currentTheme],
  fontSizes,
  spaces,
});

export type ThemeColors = keyof typeof colors;
