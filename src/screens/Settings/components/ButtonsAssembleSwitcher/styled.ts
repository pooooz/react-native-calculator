import {FlatList} from 'react-native';
import styled from 'styled-components/native';

const MARGIN = 12;
const LABEL_FONT_SIZE = 12;

export const ButtonsAssembleSwitcherContainer = styled.View`
  flex: 1;
  align-items: center;
  margin: ${MARGIN}px;
`;

export const SwitcherLabel = styled.Text`
  font-family: PressStart2P-Regular;
  color: ${({theme}) => theme.colors.text};
  font-size: ${LABEL_FONT_SIZE}px;

  text-align: center;
`;

export const List = styled.FlatList.attrs(() => ({
  contentContainerStyle: {justifyContent: 'space-evenly', flex: 1},
  horizontal: true,
}))`` as unknown as typeof FlatList;
