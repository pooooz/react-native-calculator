import {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';

import {
  getButtonsAssembleFlag,
  setButtonsAssembleFlag,
} from '@utils/asyncStorage';

import {ButtonsAssembleSwitcherContainer, List, SwitcherLabel} from './styled';
import {listData} from './constants';

import {SwitchItem} from './components/SwitchItem';

export const ButtonsAssembleSwitcher = () => {
  const [shouldAssembleButtons, setShouldAssembleButtons] =
    useState<boolean>(false);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      getButtonsAssembleFlag().then(flag => setShouldAssembleButtons(flag));
    }
  }, [isFocused]);

  const handleValueChange = (newValue: boolean) => {
    setShouldAssembleButtons(newValue);
    setButtonsAssembleFlag(newValue);
  };

  return (
    <ButtonsAssembleSwitcherContainer>
      <SwitcherLabel onPress={handleValueChange}>
        Should assemble buttons?
      </SwitcherLabel>
      <List
        data={listData}
        renderItem={({item}) => (
          <SwitchItem
            item={item}
            currentValue={shouldAssembleButtons}
            changeValue={handleValueChange}
          />
        )}
      />
    </ButtonsAssembleSwitcherContainer>
  );
};
