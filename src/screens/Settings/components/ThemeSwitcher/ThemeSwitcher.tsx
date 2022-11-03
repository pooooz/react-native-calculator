import {useContext} from 'react';
import {FlatList} from 'react-native';

import {colors, testIds} from '@constants';

import {ThemePreferenceContext} from '@utils/context';

import {Heading, ThemeSwitcherContainer} from './styled';

import {SwitchItem} from './components/SwitchItem';

export const ThemeSwitcher = () => {
  const context = useContext(ThemePreferenceContext);
  return (
    <ThemeSwitcherContainer testID={testIds.themeSwitcherContainer}>
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
