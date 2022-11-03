import {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

import {testIds} from '@constants';

import {DisplayProps} from './interfaces';
import {ExpressionInput, ValueInput} from './styled';

export const Display = ({expression}: DisplayProps) => {
  const translateAnim = useRef(new Animated.Value(-100)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const spin = useRef(
    rotateAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['355deg', '360deg'],
    }),
  ).current;

  useEffect(() => {
    const translateConfig: Animated.SpringAnimationConfig = {
      toValue: 0,
      speed: 1,
      useNativeDriver: true,
    };

    const rotateConfig: Animated.TimingAnimationConfig = {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    };

    Animated.spring(translateAnim, translateConfig).start();
    Animated.timing(rotateAnim, rotateConfig).start();
  }, []);

  return (
    <Animated.View
      style={{
        transform: [
          {translateY: translateAnim},
          {rotateZ: spin},
          {perspective: 1000},
        ],
      }}>
      <ExpressionInput
        value={expression.value.toString()}
        editable={false}
        testID={testIds.expressionInput}
      />
      <ValueInput
        value={expression.input.toString()}
        editable={false}
        testID={testIds.valueInput}
      />
    </Animated.View>
  );
};
