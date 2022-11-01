import {routes} from './routes';
import {Screen, StyledTabNavigator} from './styled';

export const Navigator = () => {
  return (
    <StyledTabNavigator>
      {routes.map(({name, component}) => (
        <Screen name={name} component={component} key={name} />
      ))}
    </StyledTabNavigator>
  );
};
