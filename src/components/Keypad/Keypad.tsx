import {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

import {buttonValues} from './mock';
import {KeypadProps} from './interfaces';
import {KeypadContainer, List} from './styled';

import {KeypadButton} from './components/KeypadButton';

export const Keypad = ({handlePress}: KeypadProps) => {
  const translateAnim = useRef(new Animated.Value(300)).current;

  useEffect(() => {
    const translateConfig: Animated.SpringAnimationConfig = {
      toValue: 0,
      speed: 1,
      useNativeDriver: true,
    };
    Animated.spring(translateAnim, translateConfig).start();
  }, []);

  return (
    <KeypadContainer
      style={{
        transform: [
          {
            translateY: translateAnim,
          },
        ],
      }}>
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
