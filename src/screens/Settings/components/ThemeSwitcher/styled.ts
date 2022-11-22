import styled from 'styled-components/native';

export const Heading = styled.Text`
  font-family: PressStart2P-Regular;
  color: ${({theme}) => theme.colors.text};
`;

export const ThemeSwitcherContainer = styled.View`
  flex: 2;
  margin: ${({theme}) => theme.spaces.l}px 0 0 0;
`;
