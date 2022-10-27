import {Calculator} from '@pages/Calculator';
import {Settings} from '@pages/Settings';

import {ThemeColors} from '@theme';

export const routes = [
  {
    name: 'Home',
    component: Calculator,
  },
  {
    name: 'Settings',
    component: Settings,
  },
];

export const colors: Array<ThemeColors> = [
  'light',
  'disco',
  'dark',
  'ultraviolet',
];
