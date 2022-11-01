import React from 'react';
import {FlatList} from 'react-native';

import {HistoryProps} from './interfaces';
import {EmptyPlug, HistoryContainer, HistoryItem} from './styled';

export const History = React.memo(({history}: HistoryProps) => (
  <HistoryContainer>
    <FlatList
      data={history}
      renderItem={({item}) => (
        <HistoryItem>{`${item.expression} = ${item.result} `}</HistoryItem>
      )}
      ListEmptyComponent={() => <EmptyPlug>History is empty!</EmptyPlug>}
    />
  </HistoryContainer>
));
