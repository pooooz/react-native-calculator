import {region} from './constants';
import {StyledMapView} from './styled';

export const Map = () => {
  return <StyledMapView zoomEnabled={true} region={region} />;
};
