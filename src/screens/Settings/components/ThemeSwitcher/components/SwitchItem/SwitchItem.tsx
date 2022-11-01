import React from 'react';

import {capitalize} from '@utils/helpers';

import {ThemeSwitcherItemProps} from './interfaces';
import {ChangeButton, Value} from './styled';

export const SwitchItem = ({
  item,
  currentTheme,
  changeTheme,
}: ThemeSwitcherItemProps) => {
  const handleOnPress = () => {
    if (changeTheme) {
      changeTheme(item);
    }
  };

  return (
    <ChangeButton onPress={handleOnPress} isSelected={item === currentTheme}>
      <Value>{capitalize(item)} theme</Value>
    </ChangeButton>
  );
};
