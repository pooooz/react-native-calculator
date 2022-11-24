import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {Platform} from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const StyledTabNavigator = styled(Tab.Navigator).attrs(({theme}) => ({
  initialRouteName: 'Home',
  screenOptions: {
    tabBarStyle: {
      backgroundColor: theme.colors.background,
    },
    tabBarLabelStyle: {
      fontFamily: 'PressStart2P-Regular',
      color: theme.colors.digitButton,
      fontSize: Platform.OS === 'ios' ? theme.fontSizes.xs : null,
    },
    tabBarIndicatorStyle: {backgroundColor: theme.colors.barIndicator},
  },
}))``;

export const Screen = Tab.Screen;

export const CustomSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;
