import {ThemeSwitcher} from './components/ThemeSwitcher';
import {ClearButton} from './components/ClearButton';

import {SettingsContainer} from './styled';

export const Settings = () => {
  return (
    <SettingsContainer>
      <ThemeSwitcher />
      <ClearButton />
    </SettingsContainer>
  );
};
