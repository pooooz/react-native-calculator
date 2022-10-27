import styled from 'styled-components/native';

export const SettingsContainer = styled.View`
  flex: 1;
  padding: ${({theme}) => theme.spaces.l}px 0 0 0;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Heading = styled.Text`
  font-family: PressStart2P;
  color: ${({theme}) => theme.colors.dim};
  text-align: center;
`;
