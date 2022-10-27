import {useContext} from 'react';
import {FlatList} from 'react-native';

import {colors} from '@constants';
import {ThemePreferenceContext} from '@utils/context';
import {SwitchItem} from '@components/SwitchItem';

import {Heading, ThemeSwitcherContainer} from './styled';

export const ThemeSwitcher = () => {
  const context = useContext(ThemePreferenceContext);
  return (
    <ThemeSwitcherContainer>
      <Heading>Choose theme:</Heading>
      <FlatList
        data={colors}
        renderItem={({item}) => (
          <SwitchItem
            item={item}
            currentTheme={context?.currentTheme}
            changeTheme={context?.setCurrentTheme}
          />
        )}
        keyExtractor={item => item}
      />
    </ThemeSwitcherContainer>
  );
};
