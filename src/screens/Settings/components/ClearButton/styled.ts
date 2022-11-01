import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const BUTTON_HEIGHT = Dimensions.get('screen').width / 9;
const BORDER_RADIUS = 15;
const BORDER_WIDTH = 3;
const BORDER_COLOR = '#e1252c';

export const Button = styled.TouchableHighlight.attrs(() => ({
  underlayColor: BORDER_COLOR,
}))`
  height: ${BUTTON_HEIGHT}px;
  background-color: ${({theme}) => theme.colors.clearButton};
  justify-content: center;
  align-items: center;
  border-radius: ${BORDER_RADIUS}px;
  border: ${BORDER_WIDTH}px solid ${BORDER_COLOR};
`;

export const Value = styled.Text`
  font-family: PressStart2P;
  color: ${({theme}) => theme.colors.text};
`;
