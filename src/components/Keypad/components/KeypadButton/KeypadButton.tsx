import {Animated, Dimensions, Vibration} from 'react-native';
import {useEffect, useLayoutEffect, useRef} from 'react';

import {getRandomCoords} from '@utils/helpers';
import {getButtonsAssembleFlag} from '@utils/asyncStorage';

import {KeypadButtonProps} from './interfaces';
import {Button, Value} from './styled';

export const KeypadButton = ({handlePress, children}: KeypadButtonProps) => {
  const shouldAssemble = useRef<boolean | null>(null);

  const translateAnim = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  useEffect(() => {
    translateAnim.setValue(
      getRandomCoords(
        Dimensions.get('screen').width,
        Dimensions.get('screen').height,
      ),
    );

    getButtonsAssembleFlag().then(flag => {
      shouldAssemble.current = flag;

      if (flag) {
        const translateConfig: Animated.SpringAnimationConfig = {
          toValue: {x: 0, y: 0},
          speed: 1,
          bounciness: 2,
          useNativeDriver: true,
        };

        Animated.spring(translateAnim, translateConfig).start();
      }
    });
  }, []);

  const handleVibration = () => {
    if (children === '=') {
      Vibration.vibrate(100);
      return;
    }
    Vibration.vibrate(1);
  };

  return (
    <Animated.View
      style={
        shouldAssemble.current
          ? {
              transform: [
                {translateX: translateAnim.x},
                {translateY: translateAnim.y},
              ],
            }
          : null
      }>
      <Button
        onPressIn={handleVibration}
        onPress={handlePress}
        isEqual={children === '='}
        testID={children}>
        <Value>{children}</Value>
      </Button>
    </Animated.View>
  );
};
