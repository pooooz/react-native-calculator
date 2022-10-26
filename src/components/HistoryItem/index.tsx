import {StyleSheet, Text} from 'react-native';

import {HistoryItemProps} from './interfaces';

export const HistoryItem = ({record}: HistoryItemProps) => (
  <Text
    style={styles.itemValue}>{`${record.expression} = ${record.result} `}</Text>
);

const styles = StyleSheet.create({
  itemValue: {
    fontFamily: 'PressStart2P',
    marginTop: 5,
    color: '#626262',
  },
});
