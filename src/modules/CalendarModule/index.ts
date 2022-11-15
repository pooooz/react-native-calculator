import {NativeModules} from 'react-native';

import {CalendarInterface} from './interfaces';

const {CalendarModule} = NativeModules;

export default CalendarModule as CalendarInterface;
