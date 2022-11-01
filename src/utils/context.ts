import React from 'react';

import {ThemeNames} from '@types';

interface ThemePreference {
  currentTheme: ThemeNames;
  setCurrentTheme: React.Dispatch<React.SetStateAction<ThemeNames>>;
}

export const ThemePreferenceContext =
  React.createContext<ThemePreference | null>(null);
