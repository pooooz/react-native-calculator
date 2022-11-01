import 'styled-components';

import {ThemeColors, ThemeScaleValues} from '@types';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ThemeColors;
    fontSizes: ThemeScaleValues;
    spaces: ThemeScaleValues;
  }
}
