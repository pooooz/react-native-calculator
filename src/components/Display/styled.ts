import {Platform} from 'react-native';
import styled from 'styled-components/native';

const EXPRESSION_INPUT_BORDER_WIDTH = 1;

const BORDER_STYLE = Platform.OS === 'android' ? 'dashed' : 'solid';

export const ExpressionInput = styled.TextInput`
  padding: ${({theme}) => theme.spaces.m}px;
  font-family: PressStart2P-Regular;
  font-size: ${({theme}) => theme.fontSizes.s}px;
  text-align: right;
  color: ${({theme}) => theme.colors.dim};
  border-bottom-width: ${EXPRESSION_INPUT_BORDER_WIDTH}px;
  border-bottom-color: ${({theme}) => theme.colors.dim};
  border-style: ${BORDER_STYLE};
`;

export const ValueInput = styled.TextInput`
  padding: ${({theme}) => theme.spaces.xl}px ${({theme}) => theme.spaces.xl}px 0
    0;
  font-family: PressStart2P-Regular;
  font-size: ${({theme}) => theme.fontSizes.l}px;
  text-align: right;
  color: ${({theme}) => theme.colors.text};
`;
