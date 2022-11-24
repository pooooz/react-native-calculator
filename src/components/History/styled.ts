import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

const HISTORY_HEIGHT = 30;

export const HistoryContainer = styled(Animated.View)`
  height: ${HISTORY_HEIGHT}%;
  padding: 0 ${({theme}) => theme.spaces.m}px;
`;

export const HistoryItem = styled.Text`
  font-family: PressStart2P-Regular;
  margin: 0 0 ${({theme}) => theme.spaces.s}px 0;
  color: ${({theme}) => theme.colors.historyItem};
`;

export const EmptyPlug = styled.Text`
  font-family: PressStart2P-Regular;
  color: ${({theme}) => theme.colors.historyItem};
`;
