import styled, {css} from 'styled-components/native';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('screen').width;
const buttonSize = windowWidth / 5;

export const CustomButton = styled.TouchableHighlight`
  width: ${buttonSize}px;
  height: ${buttonSize}px;
  justify-content: center;
  align-items: center;
`;

interface ButtonValueProps {
  children: string;
}
export const ButtonValue = styled.Text<ButtonValueProps>`
  font-family: PressStart2P;
  ${({theme, children}) =>
    /\d/.test(children)
      ? css`
          color: ${theme.colors.digitButton};
          font-size: ${theme.fontSizes.l}px;
        `
      : css`
          color: ${theme.colors.operationButton};
          font-size: ${theme.fontSizes.m}px;
        `}
`;
