import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import {KeypadButtonProps} from './interfaces';

export const KeypadButton = ({handlePress, children}: KeypadButtonProps) => (
  <TouchableHighlight
    style={styles.button}
    onPress={handlePress}
    underlayColor={'#111010'}>
    <Text
      style={
        /\d/.test(children)
          ? styles.integerButtonValue
          : styles.operationButtonValue
      }>
      {children}
    </Text>
  </TouchableHighlight>
);

const windowWidth = Dimensions.get('screen').width;
const buttonSize = windowWidth / 5;

const styles = StyleSheet.create({
  button: {
    width: buttonSize,
    height: buttonSize,
    justifyContent: 'center',
    alignItems: 'center',
  },
  integerButtonValue: {
    fontFamily: 'PressStart2P',
    fontSize: 24,
    color: '#32cd32',
  },
  operationButtonValue: {
    fontFamily: 'PressStart2P',
    fontSize: 20,
    color: '#e57e0c',
  },
});
