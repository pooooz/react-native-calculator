import {FlatList} from 'react-native';
import styled from 'styled-components/native';

export const KeypadContainer = styled.View`
  border-top-width: 2px;
  border-top-color: ${({theme}) => theme.colors.keypadSeparator};
`;

export const List = styled.FlatList.attrs(() => ({
  columnWrapperStyle: {justifyContent: 'space-between'},
}))`` as unknown as typeof FlatList;
