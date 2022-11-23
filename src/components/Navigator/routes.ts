import {Platform} from 'react-native';

import {Calculator} from '@screens/Calculator';
import {Settings} from '@screens/Settings';
import {Map} from '@screens/Map';

export const routes =
  Platform.OS === 'ios'
    ? [
        {
          name: 'Home',
          component: Calculator,
        },
        {
          name: 'Settings',
          component: Settings,
        },
        {
          name: 'Map',
          component: Map,
        },
      ]
    : [
        {
          name: 'Home',
          component: Calculator,
        },
        {
          name: 'Settings',
          component: Settings,
        },
      ];
