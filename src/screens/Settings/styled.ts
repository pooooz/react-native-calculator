import styled from 'styled-components/native';

const GROUP_HEIGHT = 54;

export const SettingsContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: ${({theme}) => theme.spaces.xl}px;
  background-color: ${({theme}) => theme.colors.background};
`;

export const GroupContainer = styled.View`
  height: ${GROUP_HEIGHT}%;
  justify-content: space-between;
`;
