import AsyncStorage from '@react-native-async-storage/async-storage';

import {HistoryRecord} from '@pages/Calculator/interfaces';
import {ThemeColors} from '../theme';

export const getCalculationsHistory = async (): Promise<
  Array<HistoryRecord>
> => {
  const attempt = await AsyncStorage.getItem('history');
  if (attempt) {
    return (JSON.parse(attempt) as Array<HistoryRecord>) || [];
  }
  return [];
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

export const getTheme = async (): Promise<ThemeColors> => {
  const attempt = await AsyncStorage.getItem('theme');
  return attempt as ThemeColors;
};

export const setTheme = async (currentTheme: ThemeColors) =>
  await AsyncStorage.setItem('theme', currentTheme);
