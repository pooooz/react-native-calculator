import {Dimensions, Vibration} from 'react-native';
import {useEffect, useRef} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  WithSpringConfig,
} from 'react-native-reanimated';

import {getRandomCoords} from '@utils/helpers';
import {getButtonsAssembleFlag} from '@utils/asyncStorage';

import {KeypadButtonProps} from './interfaces';
import {Button, Value} from './styled';

export const KeypadButton = ({handlePress, children}: KeypadButtonProps) => {
  const shouldAssemble = useRef<boolean | null>(null);

  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateX: offsetX.value}, {translateY: offsetY.value}],
  }));

  useEffect(() => {
    const {x, y} = getRandomCoords(
      Dimensions.get('screen').width,
      Dimensions.get('screen').height,
    );

    offsetX.value = x;
    offsetY.value = y;

    getButtonsAssembleFlag().then(flag => {
      shouldAssemble.current = flag;

      const springConfig: WithSpringConfig = {
        mass: 0.8,
        stiffness: 500,
      };

      if (flag) {
        offsetX.value = withSpring(0, springConfig);
        offsetY.value = withSpring(0, springConfig);
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
    <Animated.View style={shouldAssemble.current ? animatedStyles : null}>
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
