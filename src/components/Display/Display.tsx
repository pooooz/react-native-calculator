import {View} from 'react-native';

import {testIds} from '@constants';

import {DisplayProps} from './interfaces';
import {ExpressionInput, ValueInput} from './styled';

export const Display = ({expression}: DisplayProps) => (
  <View>
    <ExpressionInput
      value={expression.value.toString()}
      editable={false}
      testID={testIds.expressionInput}
    />
    <ValueInput
      value={expression.input.toString()}
      editable={false}
      testID={testIds.valueInput}
    />
  </View>
);
