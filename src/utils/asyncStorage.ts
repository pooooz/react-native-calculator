import AsyncStorage from '@react-native-async-storage/async-storage';

import {HistoryRecord, ThemeNames} from 'types/index';

export const getCalculationsHistory = async (): Promise<
  Array<HistoryRecord>
> => {
  const attempt = await AsyncStorage.getItem('history');
  return JSON.parse(attempt || '');
};

export const setCalculationsHistory = async (history: Array<HistoryRecord>) => {
  await AsyncStorage.setItem(
    'history',
    JSON.stringify(history, (key, value) => {
      if (Number.isNaN(value.result)) {
        return {...value, result: 'NaN'};
      }
      switch (value.result) {
        case Infinity: {
          return {...value, result: 'Infinity'};
        }
        default: {
          return value;
        }
      }
    }),
  );
};

export const getTheme = async (): Promise<ThemeNames> => {
  const attempt = await AsyncStorage.getItem('theme');
  return (attempt as ThemeNames) || 'light';
};

export const setTheme = async (currentTheme: ThemeNames) =>
  await AsyncStorage.setItem('theme', currentTheme);
