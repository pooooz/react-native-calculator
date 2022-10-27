import {KeypadButtonProps} from './interfaces';
import {ButtonValue, CustomButton} from './styled';

export const KeypadButton = ({handlePress, children}: KeypadButtonProps) => (
  <CustomButton onPress={handlePress} underlayColor={'#111010'}>
    <ButtonValue>{children}</ButtonValue>
  </CustomButton>
);
