import {testIds} from '@constants';

import {SettingsContainer} from './styled';

import {ThemeSwitcher} from './components/ThemeSwitcher';
import {ClearButton} from './components/ClearButton';

export const Settings = () => {
  return (
    <SettingsContainer testID={testIds.settingsContainer}>
      <ThemeSwitcher />
      <ClearButton />
    </SettingsContainer>
  );
};
