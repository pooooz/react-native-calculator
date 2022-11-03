import {Vibration} from 'react-native';

import {testIds} from '@constants';

import {setCalculationsHistory} from '@utils/asyncStorage';

import {Button, Value} from './styled';

export const ClearButton = () => {
  const clearHistory = async () => {
    await setCalculationsHistory([]);
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
