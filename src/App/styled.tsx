import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import styled from 'styled-components/native';

const Tab = createMaterialTopTabNavigator();

export const Navigator = styled(Tab.Navigator).attrs(({theme}) => ({
  screenOptions: {
    tabBarStyle: {
      backgroundColor: theme.colors.background,
    },
    tabBarLabelStyle: {
      fontFamily: 'PressStart2P',
      color: theme.colors.digitButton,
    },
    tabBarIndicatorStyle: {backgroundColor: theme.colors.dim},
  },
}))``;

export const Screen = Tab.Screen;
