import {SafeAreaProvider} from 'react-native-safe-area-context';

import {routes} from './routes';
import {CustomSafeAreaView, Screen, StyledTabNavigator} from './styled';

export const Navigator = () => {
  return (
    <SafeAreaProvider>
      <CustomSafeAreaView>
        <StyledTabNavigator>
          {routes.map(({name, component}) => (
            <Screen name={name} component={component} key={name} />
          ))}
        </StyledTabNavigator>
      </CustomSafeAreaView>
    </SafeAreaProvider>
  );
};
