import {StyleSheet, TextInput, View} from 'react-native';

import {DisplayProps} from './interfaces';

export const Display = ({expression}: DisplayProps) => (
  <View>
    <TextInput
      value={expression.value.toString()}
      editable={false}
      style={styles.expressionInput}
    />
    <TextInput
      value={expression.input.toString()}
      editable={false}
      style={styles.valueInput}
    />
  </View>
);

const styles = StyleSheet.create({
  expressionInput: {
    padding: 10,
    fontFamily: 'PressStart2P',
    fontSize: 16,
    textAlign: 'right',
    color: '#888888',
    borderBottomWidth: 1,
    borderBottomColor: '#949393',
  },
  valueInput: {
    padding: 20,
    paddingBottom: 0,
    fontFamily: 'PressStart2P',
    fontSize: 24,
    textAlign: 'right',
    color: '#FFFFFF',
  },
});
