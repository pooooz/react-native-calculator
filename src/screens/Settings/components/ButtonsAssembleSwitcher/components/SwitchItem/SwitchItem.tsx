import React from 'react';

import {AssembleSwitcherItemProps} from './interfaces';
import {ChangeButton, Value} from './styled';

export const SwitchItem = ({
  item,
  currentValue,
  changeValue,
}: AssembleSwitcherItemProps) => {
  const handleOnPress = () => {
    if (changeValue) {
      changeValue(item === 'Yes');
    }
  };

  return (
    <ChangeButton
      onPress={handleOnPress}
      isSelected={
        (currentValue && item === 'Yes') || (!currentValue && item === 'No')
      }>
      <Value>{item}</Value>
    </ChangeButton>
  );
};
