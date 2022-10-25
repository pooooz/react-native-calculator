import {TextInput} from 'react-native';

import {DisplayProps} from './interfaces';

export const Display = ({expression}: DisplayProps) => {
  console.log('Display rendered', expression);
  return (
    <>
      <TextInput value={expression.value.toString()} editable={false} />
      <TextInput value={expression.input.toString()} editable={false} />
    </>
  );
};
