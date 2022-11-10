import {useEffect} from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  WithSpringConfig,
} from 'react-native-reanimated';

import {testIds} from '@constants';

import {DisplayProps} from './interfaces';
import {ExpressionInput, ValueInput} from './styled';

export const Display = ({expression}: DisplayProps) => {
  const offset = useSharedValue(-100);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: offset.value,
      },
      {
        rotateZ: `${interpolate(offset.value, [-100, 0], [300, 360])}deg`,
      },
    ],
  }));

  useEffect(() => {
    const springConfig: WithSpringConfig = {
      mass: 1.5,
    };

    offset.value = withSpring(0, springConfig);
  }, []);

  return (
    <Animated.View style={animatedStyles}>
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
