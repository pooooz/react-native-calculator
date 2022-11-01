import 'styled-components';

import {ThemeColors, ThemeScaleValues} from 'types/index';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ThemeColors;
    fontSizes: ThemeScaleValues;
    spaces: ThemeScaleValues;
  }
}
