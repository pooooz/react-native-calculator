import {FlatList, StyleSheet, View} from 'react-native';

import {KeypadButton} from '@components/KeypadButton';

import {buttonValues} from './mock';
import {KeypadProps} from './interfaces';

export const Keypad = ({handlePress}: KeypadProps) => {
  return (
    <View style={styles.listContainer}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    borderTopWidth: 2,
    borderTopColor: '#32cd32',
  },
  list: {
    justifyContent: 'space-between',
  },
});
