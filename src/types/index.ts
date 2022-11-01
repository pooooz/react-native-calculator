export interface HistoryRecord {
  expression: string;
  result: number;
}

export interface ThemeColors {
  text: string;
  dim: string;
  background: string;
  keypadSeparator: string;
  digitButton: string;
  operationButton: string;
  clearButton: string;
  equal: string;
  historyItem: string;
  barIndicator: string;
}

export interface ThemeScaleValues {
  s: number;
  m: number;
  l: number;
  xl: number;
}

export type ThemeNames = 'light' | 'disco' | 'dark' | 'ultraviolet';
