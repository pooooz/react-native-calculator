import {KeypadButtonProps} from './interfaces';
import {Button, Value} from './styled';

export const KeypadButton = ({handlePress, children}: KeypadButtonProps) => (
  <Button onPress={handlePress} isEqual={children === '='}>
    <Value>{children}</Value>
  </Button>
);
