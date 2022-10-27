import {SettingsContainer} from '@pages/Settings/styled';
import {ThemeSwitcher} from '@components/ThemeSwitcher';
import {ClearButton} from '@components/ClearButton';

export const Settings = () => {
  return (
    <SettingsContainer>
      <ThemeSwitcher />
      <ClearButton />
    </SettingsContainer>
  );
};
