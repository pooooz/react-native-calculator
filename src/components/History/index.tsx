import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import {HistoryItem} from '@components/HistoryItem';

import {HistoryProps} from './interfaces';

export const History = React.memo(({history}: HistoryProps) => (
  <View style={styles.container}>
    <FlatList
      data={history}
      renderItem={({item}) => <HistoryItem record={item} />}
      ListEmptyComponent={() => (
        <Text style={styles.emptyPlug}>History is empty!</Text>
      )}
    />
  </View>
));

const styles = StyleSheet.create({
  container: {
    height: '30%',
  },
  heading: {
    fontFamily: 'PressStart2P',
    color: '#838383',
    marginBottom: 20,
  },
  emptyPlug: {
    fontFamily: 'PressStart2P',
    color: '#7c7c7c',
  },
});
