import styled from 'styled-components/native';

const HISTORY_HEIGHT = 30;

export const HistoryContainer = styled.View`
  height: ${HISTORY_HEIGHT}%;
`;

export const HistoryItem = styled.Text`
  font-family: PressStart2P;
  margin: 0 0 ${({theme}) => theme.spaces.s}px 0;
  color: ${({theme}) => theme.colors.historyItem};
`;

export const EmptyPlug = styled.Text`
  font-family: PressStart2P;
  color: ${({theme}) => theme.colors.historyItem};
`;
