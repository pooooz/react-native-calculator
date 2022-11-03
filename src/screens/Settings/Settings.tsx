import {testIds} from '@constants';

import {GroupContainer, SettingsContainer} from './styled';

import {ButtonsAssembleSwitcher} from './components/ButtonsAssembleSwitcher';
import {ThemeSwitcher} from './components/ThemeSwitcher';
import {ClearButton} from './components/ClearButton';

export const Settings = () => {
  return (
    <SettingsContainer testID={testIds.settingsContainer}>
      <GroupContainer>
        <ThemeSwitcher />
        <ButtonsAssembleSwitcher />
      </GroupContainer>
      <ClearButton />
    </SettingsContainer>
  );
};
