import {Vibration} from 'react-native';

import CalendarModule from '@modules/CalendarModule';
import {testIds} from '@constants';

import {setCalculationsHistory} from '@utils/asyncStorage';

import {Button, Value} from './styled';

export const ClearButton = () => {
  const clearHistory = async () => {
    await setCalculationsHistory([]);
    CalendarModule.createCalendarEvent('Clear History!', 'Nearby!');
  };

  const handleVibration = () => {
    Vibration.vibrate(300);
  };

  return (
    <Button
      onPressIn={handleVibration}
      onPress={clearHistory}
      testID={testIds.clearButton}>
      <Value>Clear all history</Value>
    </Button>
  );
};
