import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  WithSpringConfig,
} from 'react-native-reanimated';

import {HistoryProps} from './interfaces';
import {EmptyPlug, HistoryContainer, HistoryItem} from './styled';

export const History = React.memo(({history}: HistoryProps) => {
  const offset = useSharedValue(-200);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateX: offset.value}],
  }));

  useEffect(() => {
    const springConfig: WithSpringConfig = {
      mass: 1.5,
    };

    offset.value = withSpring(0, springConfig);
  }, []);

  return (
    <HistoryContainer style={animatedStyles}>
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
