import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

interface ChangeButtonProps {
  isSelected: boolean;
}

const BUTTON_HEIGHT = Dimensions.get('screen').height / 15;

export const ChangeButton = styled.TouchableHighlight.attrs(({theme}) => ({
  underlayColor: theme.colors.operationButton,
}))<ChangeButtonProps>`
  height: ${BUTTON_HEIGHT}px;
  margin: ${({theme}) => theme.spaces.m}px 0 0 0;
  padding: 0 0 0 ${({theme}) => theme.spaces.m}px;
  background-color: ${({theme, isSelected}) =>
    isSelected ? theme.colors.digitButton : theme.colors.historyItem};
  justify-content: center;
`;

export const ButtonValue = styled.Text`
  font-family: PressStart2P;
  color: ${({theme}) => theme.colors.text};
`;
