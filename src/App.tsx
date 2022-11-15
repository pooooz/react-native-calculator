import React, {useEffect, useMemo, useState} from 'react';
import {Appearance, Linking} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import {Navigator} from '@components/Navigator';
import {linking} from '@constants';

import {getTheme, setTheme} from '@utils/asyncStorage';
import {ThemePreferenceContext} from '@utils/context';

import {getColoredTheme} from '@theme';

import {ThemeNames} from 'types/index';

export const App = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeNames>('light');

  const themeContextProviderValue = useMemo(
    () => ({currentTheme, setCurrentTheme}),
    [currentTheme],
  );

  useEffect(() => {
    getTheme().then(theme => {
      setCurrentTheme(theme || Appearance.getColorScheme());
    });
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    setTheme(currentTheme);
  });

  const theme = getColoredTheme(currentTheme);

  return (
    <ThemePreferenceContext.Provider value={themeContextProviderValue}>
      <ThemeProvider theme={theme}>
        <NavigationContainer linking={linking}>
          <Navigator />
        </NavigationContainer>
      </ThemeProvider>
    </ThemePreferenceContext.Provider>
  );
};
