import {NativeSyntheticEvent, requireNativeComponent} from 'react-native';

import {MapViewProps, Region, RNTProps} from './interfaces';

const RNTMap = requireNativeComponent<RNTProps>('RNTMap');

export const MapView = (props: MapViewProps) => {
  const onRegionChange = (event: NativeSyntheticEvent<Region>) => {
    if (!props.onRegionChange) {
      return;
    }

    props.onRegionChange(event.nativeEvent);
  };

  return <RNTMap {...props} onRegionChange={onRegionChange} />;
};
