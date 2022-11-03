import React, {useEffect, useRef} from 'react';
import {Animated, FlatList} from 'react-native';

import {HistoryProps} from './interfaces';
import {EmptyPlug, HistoryContainer, HistoryItem} from './styled';

export const History = React.memo(({history}: HistoryProps) => {
  const translateAnim = useRef(new Animated.Value(-200)).current;

  useEffect(() => {
    const translateConfig: Animated.SpringAnimationConfig = {
      toValue: 0,
      speed: 1,
      useNativeDriver: true,
    };

    Animated.spring(translateAnim, translateConfig).start();
  }, []);

  return (
    <HistoryContainer
      style={{
        transform: [{translateX: translateAnim}],
      }}>
      <FlatList
        data={history}
        renderItem={({item}) => (
          <HistoryItem>{`${item.expression} = ${item.result}`}</HistoryItem>
        )}
        ListEmptyComponent={() => <EmptyPlug>History is empty!</EmptyPlug>}
      />
    </HistoryContainer>
  );
});
