import {routes} from '../constants';

import {Navigator, Screen} from './styled';

export const AppNavigation = () => {
  return (
    <Navigator>
      {routes.map(({name, component}) => (
        <Screen name={name} component={component} key={name} />
      ))}
    </Navigator>
  );
};
