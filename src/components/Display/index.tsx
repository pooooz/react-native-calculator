import {View} from 'react-native';

import {DisplayProps} from './interfaces';
import {ExpressionInput, ValueInput} from './styled';

export const Display = ({expression}: DisplayProps) => (
  <View>
    <ExpressionInput value={expression.value.toString()} editable={false} />
    <ValueInput value={expression.input.toString()} editable={false} />
  </View>
);
