import {FlatList, StyleSheet} from 'react-native';

import {KeypadButton} from '@components/KeypadButton';

import {buttonValues} from './mock';
import {KeypadProps} from './interfaces';

export const Keypad = ({handlePress}: KeypadProps) => {
  return (
    <FlatList
      data={buttonValues}
      renderItem={({item}) => (
        <KeypadButton handlePress={handlePress(item)}>{item}</KeypadButton>
      )}
      keyExtractor={item => item}
      horizontal={false}
      numColumns={5}
      columnWrapperStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    justifyContent: 'space-between',
  },
});
