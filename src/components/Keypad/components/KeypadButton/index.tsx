import {Vibration} from 'react-native';

import {KeypadButtonProps} from './interfaces';
import {Button, Value} from './styled';

export const KeypadButton = ({handlePress, children}: KeypadButtonProps) => {
  const handleVibration = () => {
    if (children === '=') {
      Vibration.vibrate(100);
      return;
    }
    Vibration.vibrate(1);
  };

  return (
    <Button
      onPressIn={handleVibration}
      onPress={handlePress}
      isEqual={children === '='}
      testID={children}>
      <Value>{children}</Value>
    </Button>
  );
};
