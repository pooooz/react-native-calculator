import {ThemeNames} from 'types/index';

export const colors: Array<ThemeNames> = [
  'light',
  'disco',
  'dark',
  'ultraviolet',
];

export const testIds = {
  calculatorContainer: 'calculatorContainer',
  settingsContainer: 'settingsContainer',
  expressionInput: 'expressionInput',
  valueInput: 'valueInput',
  clearButton: 'clearButton',
  themeSwitcherContainer: 'themeSwitcherContainer',
  buttonAssemblingSwitcherContainer: 'buttonAssemblingSwitcherContainer',
};

export const linking = {
  prefixes: ['pozcalc://'],
  config: {
    screens: {
      Settings: 'settings',
    },
  },
};
