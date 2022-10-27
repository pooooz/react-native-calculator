import styled from 'styled-components/native';

export const SettingsContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: ${({theme}) => theme.spaces.xl}px;
  background-color: ${({theme}) => theme.colors.background};
`;
