import {FlatList} from 'react-native';
import styled from 'styled-components/native';

const KEYPAD_SEPARATOR_WIDTH = 2;

export const KeypadContainer = styled.View`
  border-top-width: ${KEYPAD_SEPARATOR_WIDTH}px;
  border-top-color: ${({theme}) => theme.colors.keypadSeparator};
`;

export const List = styled.FlatList.attrs(() => ({
  columnWrapperStyle: {justifyContent: 'space-between'},
}))`` as unknown as typeof FlatList;
