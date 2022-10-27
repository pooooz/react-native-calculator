import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string;
      dim: string;
      background: string;
      keypadSeparator: string;
      digitButton: string;
      operationButton: string;
      clearButton: string;
      equal: string;
      historyItem: string;
    };
    fontSizes: {
      s: number;
      m: number;
      l: number;
      xl: number;
    };
    spaces: {
      s: number;
      m: number;
      l: number;
      xl: number;
    };
  }
}
