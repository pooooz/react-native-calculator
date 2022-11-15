import {useEffect} from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {buttonValues} from './mock';
import {KeypadProps} from './interfaces';
import {KeypadContainer, List} from './styled';

import {KeypadButton} from './components/KeypadButton';

export const Keypad = ({handlePress}: KeypadProps) => {
  const offset = useSharedValue(300);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateY: offset.value}],
  }));

  useEffect(() => {
    offset.value = withSpring(0);
  }, []);

  return (
    <KeypadContainer style={animatedStyles}>
      <List
        data={buttonValues}
        renderItem={({item}) => (
          <KeypadButton handlePress={handlePress(item)}>{item}</KeypadButton>
        )}
        keyExtractor={item => item}
        horizontal={false}
        numColumns={5}
      />
    </KeypadContainer>
  );
};
