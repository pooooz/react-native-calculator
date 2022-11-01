import React from 'react';

import {ThemeNames} from 'types/index';

export interface ChangeButtonProps {
  isSelected: boolean;
}

export interface ThemeSwitcherItemProps {
  item: ThemeNames;
  currentTheme?: string;
  changeTheme?: React.Dispatch<React.SetStateAction<ThemeNames>>;
}
