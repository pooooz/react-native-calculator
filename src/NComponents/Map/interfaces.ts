import {NativeSyntheticEvent, ViewStyle} from 'react-native';

export interface Region {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export interface MapViewProps {
  zoomEnabled: boolean;
  region?: Region;
  style?: ViewStyle;
  onRegionChange?: (event: Region) => void;
}

export interface RNTProps {
  zoomEnabled: boolean;
  region: Region;
  style: ViewStyle;
  onRegionChange: (event: NativeSyntheticEvent<Region>) => void;
}
