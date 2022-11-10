import {requireNativeComponent} from 'react-native';

import {ImageViewInterface} from './interfaces';

const RCTImageView = requireNativeComponent<ImageViewInterface>('RCTImageView');

export {RCTImageView};
