import AsyncStorage from '@react-native-async-storage/async-storage';

export const getCalculationsHistory = async () => {
  const attempt = await AsyncStorage.getItem('history');
  if (attempt) {
    return JSON.parse(attempt) || [];
  }
  return [];
};

export const setCalculationsHistory = async (history: string) => {
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
