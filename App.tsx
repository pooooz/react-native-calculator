import React, {useEffect, useMemo, useState} from 'react';
import {Appearance} from 'react-native';
import {ThemeProvider} from 'styled-components/native';

import {Home} from '@pages/Home';

import {getTheme, setTheme} from '@utils/asyncStorage';
import {ThemePreferenceContext} from '@utils/context';

import {getColoredTheme, ThemeColors} from './src/theme';

export const App = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeColors>('light');

  const themeContextProviderValue = useMemo(
    () => ({currentTheme, setCurrentTheme}),
    [currentTheme],
  );

  useEffect(() => {
    getTheme().then(theme => {
      setCurrentTheme(theme || Appearance.getColorScheme());
    });
  }, []);

  useEffect(() => {
    setTheme(currentTheme);
  });

  const theme = getColoredTheme(currentTheme);

  return (
    <ThemePreferenceContext.Provider value={themeContextProviderValue}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </ThemePreferenceContext.Provider>
  );
};
