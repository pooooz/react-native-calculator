import React, {useEffect, useMemo, useState} from 'react';
import {Appearance} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';

import {getTheme, setTheme} from '@utils/asyncStorage';
import {ThemePreferenceContext} from '@utils/context';

import {getColoredTheme, ThemeColors} from '../theme';
import {AppNavigation} from './AppNavigation';

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
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </ThemeProvider>
    </ThemePreferenceContext.Provider>
  );
};
