import styled from 'styled-components/native';

const THEME_SWITCHER_HEIGHT = 33;

export const Heading = styled.Text`
  font-family: PressStart2P;
  color: ${({theme}) => theme.colors.text};
`;

export const ThemeSwitcherContainer = styled.View`
  margin: ${({theme}) => theme.spaces.l}px 0 0 0;
  height: ${THEME_SWITCHER_HEIGHT}%;
`;
