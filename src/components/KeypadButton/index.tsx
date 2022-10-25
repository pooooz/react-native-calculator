import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface KeypadButtonProps {
  handlePress: () => void;
  children: string;
}

export const KeypadButton = ({handlePress, children}: KeypadButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dddddd',
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  buttonText: {
    color: '#000000',
  },
});
