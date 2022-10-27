import React from 'react';
import {ThemeColors} from '../theme';

interface ThemePreference {
  currentTheme: ThemeColors;
  setCurrentTheme: React.Dispatch<React.SetStateAction<ThemeColors>>;
}

export const ThemePreferenceContext =
  React.createContext<ThemePreference | null>(null);
