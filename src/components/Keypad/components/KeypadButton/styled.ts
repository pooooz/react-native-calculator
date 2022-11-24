import {Dimensions} from 'react-native';
import styled, {css} from 'styled-components/native';

import {ButtonProps, ButtonValueProps} from './interfaces';

const buttonSize = Dimensions.get('screen').width / 5.1;
const ROUND_BORDER = buttonSize / 2;

export const Button = styled.TouchableHighlight.attrs<ButtonProps>(
  ({theme, isEqual}) => ({
    underlayColor: isEqual ? theme.colors.digitButton : theme.colors.dim,
  }),
)<ButtonProps>`
  width: ${buttonSize}px;
  height: ${buttonSize}px;
  justify-content: center;
  align-items: center;
  ${({theme, isEqual}) => {
    if (isEqual) {
      return css`
        background-color: ${theme.colors.equal};
        border-radius: ${ROUND_BORDER}px;
      `;
    }
  }}
`;

export const Value = styled.Text<ButtonValueProps>`
  font-family: PressStart2P-Regular;
  ${({theme, children}) => {
    if (children === '=') {
      return css`
        margin-top: ${theme.spaces.m}px;
        color: ${theme.colors.text};
        font-size: ${theme.fontSizes.l}px;
      `;
    }
    return /\d/.test(children)
      ? css`
          color: ${theme.colors.digitButton};
          font-size: ${theme.fontSizes.l}px;
        `
      : css`
          color: ${theme.colors.operationButton};
          font-size: ${theme.fontSizes.m}px;
        `;
  }}}
`;
