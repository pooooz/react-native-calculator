import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

import {ChangeButtonProps} from './interfaces';

const BUTTON_HEIGHT = Dimensions.get('screen').height / 15;

export const ChangeButton = styled.TouchableHighlight.attrs(({theme}) => ({
  underlayColor: theme.colors.operationButton,
}))<ChangeButtonProps>`
  height: ${BUTTON_HEIGHT}px;
  width: ${BUTTON_HEIGHT}px;
  margin: ${({theme}) => theme.spaces.m}px 0 0 0;
  background-color: ${({theme, isSelected}) =>
    isSelected ? theme.colors.digitButton : theme.colors.historyItem};
  justify-content: center;
  align-items: center;
`;

export const Value = styled.Text`
  font-family: PressStart2P;
  color: ${({theme}) => theme.colors.text};
`;
