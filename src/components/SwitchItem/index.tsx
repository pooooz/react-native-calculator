import React from 'react';

import {ThemeColors} from '@theme';
import {capitalize} from '@utils/helpers';

import {ButtonValue, ChangeButton} from './styled';

interface ThemeSwitcherItemProps {
  item: string;
  currentTheme?: string;
  changeTheme?: React.Dispatch<React.SetStateAction<ThemeColors>>;
}

export const SwitchItem = ({
  item,
  currentTheme,
  changeTheme,
}: ThemeSwitcherItemProps) => {
  const handleOnPress = () => {
    if (changeTheme) {
      changeTheme(item as ThemeColors);
    }
  };

  return (
    <ChangeButton onPress={handleOnPress} isSelected={item === currentTheme}>
      <ButtonValue>{capitalize(item)} theme</ButtonValue>
    </ChangeButton>
  );
};
